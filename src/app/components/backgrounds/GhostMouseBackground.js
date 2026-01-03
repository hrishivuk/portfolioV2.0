"use client";
import { useEffect, useRef } from "react";

/**
 * GhostMouseBackground Component
 *
 * Interactive Three.js shader-based background that creates ghostly trails
 * following mouse movement. Features smooth color transitions and blur effects.
 *
 * Features:
 * - Mouse-following interactive trails
 * - Smooth color transitions (HSB color space)
 * - Blur and noise effects
 * - Responsive to window resize
 * - High performance WebGL rendering
 */
export default function GhostMouseBackground({ intensity = "full" }) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const uniformsRef = useRef(null);
  const animationIdRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("GhostMouseBackground: Initializing with intensity:", intensity);
    }
    let container, camera, scene, renderer;
    let uniforms;
    let rtTexture, rtTexture2;
    let texture;
    let newMouse = { x: 0, y: 0 };
    const divisor = 1 / 10;
    let cleanupEventListeners = null;

    // Shader code
    const vertexShader = `
      void main() {
        gl_Position = vec4( position, 1.0 );
      }
    `;

    const fragmentShader = `
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform float u_time;
      uniform sampler2D u_noise;
      uniform sampler2D u_buffer;
      uniform bool u_renderpass;
      uniform float u_intensity;
        
      const float blurMultiplier = 0.95;
      const float blurStrength = .98;
      const float threshold = .5;
      const float scale = 4.;
      
      #define PI 3.141592653589793
      #define TAU 6.283185307179586

      vec2 hash2(vec2 p) {
        vec2 o = texture2D( u_noise, (p+0.5)/256.0, -100.0 ).xy;
        return o;
      }
      
      vec3 hsb2rgb( in vec3 c ){
        vec3 rgb = clamp(abs(mod(c.x*6.0+vec3(0.0,4.0,2.0),
                               6.0)-3.0)-1.0,
                       0.0,
                       1.0 );
        rgb = rgb*rgb*(3.0-2.0*rgb);
        return c.z * mix( vec3(1.0), rgb, c.y);
      }
      
      vec3 domain(vec2 z){
        return vec3(hsb2rgb(vec3(atan(z.y,z.x)/TAU,1.,1.)));
      }
      vec3 colour(vec2 z) {
          return domain(z);
      }

      #define pow2(x) (x * x)

      const int samples = 8;
      const float sigma = float(samples) * 0.25;

      float gaussian(vec2 i) {
          return 1.0 / (2.0 * PI * pow2(sigma)) * exp(-((pow2(i.x) + pow2(i.y)) / (2.0 * pow2(sigma))));
      }

      vec3 hash33(vec3 p){ 
          float n = sin(dot(p, vec3(7, 157, 113)));    
          return fract(vec3(2097152, 262144, 32768)*n); 
      }

      vec3 blur(sampler2D sp, vec2 uv, vec2 scale) {
          vec3 col = vec3(0.0);
          float accum = 0.0;
          float weight;
          vec2 offset;
          
          for (int x = -samples / 2; x < samples / 2; ++x) {
              for (int y = -samples / 2; y < samples / 2; ++y) {
                  offset = vec2(x, y);
                  weight = gaussian(offset);
                  col += texture2D(sp, uv + scale * offset).rgb * weight;
                  accum += weight;
              }
          }
          
          return col / accum;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / u_resolution.y;
        uv *= scale;
        vec2 mouse = u_mouse * scale;
        
        vec2 ps = vec2(1.0) / u_resolution.xy;
        vec2 sample = gl_FragCoord.xy / u_resolution.xy;
        vec2 o = mouse*.2+vec2(.65, .5);
        float d = .98;
        sample = d * (sample - o);
        sample += o;
        sample += vec2(sin((u_time+uv.y * .5)*10.)*.001, -.00);
        
        vec3 fragcolour;
        vec4 tex;
        if(u_renderpass) {
          tex = vec4(blur(u_buffer, sample, ps*blurStrength) * blurMultiplier, 1.);
          float df = length(mouse - uv);
          float circleSize = 0.25 * u_intensity; // Adjust circle size based on intensity
          fragcolour = vec3( smoothstep( circleSize, 0., df ) * u_intensity );
        } else {
          tex = texture2D(u_buffer, sample, 2.) * .98;
          tex = vec4(
            smoothstep(0.0, threshold - fwidth(tex.x), tex.x),
            smoothstep(0.2, threshold - fwidth(tex.y) + .2, tex.y),
            smoothstep(-0.05, threshold - fwidth(tex.z) - .2, tex.z),
            1.);
          vec3 n = hash33(vec3(uv, u_time*.1));
          tex.rgb += n * .2 - .1;
        }

        gl_FragColor = vec4(fragcolour,1.0);
        gl_FragColor += tex;
      }
    `;

    // Load Three.js dynamically
    const loadThreeJS = async () => {
      if (typeof window !== "undefined" && !window.THREE) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/88/three.min.js";
        script.async = true;
        document.head.appendChild(script);

        return new Promise((resolve) => {
          script.onload = () => resolve();
        });
      }
      return Promise.resolve();
    };

    // Create noise texture
    const createNoiseTexture = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");
      const imageData = ctx.createImageData(256, 256);

      for (let i = 0; i < imageData.data.length; i += 4) {
        const noise = Math.random();
        imageData.data[i] = noise * 255; // R
        imageData.data[i + 1] = noise * 255; // G
        imageData.data[i + 2] = noise * 255; // B
        imageData.data[i + 3] = 255; // A
      }

      ctx.putImageData(imageData, 0, 0);
      return canvas.toDataURL();
    };

    const init = async () => {
      await loadThreeJS();

      if (!window.THREE) {
        if (process.env.NODE_ENV === "development") {
          console.error("Three.js failed to load");
        }
        return;
      }

      const THREE = window.THREE;

      container = containerRef.current;
      if (!container) {
        if (process.env.NODE_ENV === "development") {
          console.error("Container not found");
        }
        return;
      }

      camera = new THREE.Camera();
      camera.position.z = 1;

      scene = new THREE.Scene();

      const geometry = new THREE.PlaneGeometry(2, 2);

      rtTexture = new THREE.WebGLRenderTarget(
        window.innerWidth * 0.2,
        window.innerHeight * 0.2
      );
      rtTexture2 = new THREE.WebGLRenderTarget(
        window.innerWidth * 0.2,
        window.innerHeight * 0.2
      );

      // Create noise texture
      const noiseDataURL = createNoiseTexture();
      const loader = new THREE.TextureLoader();
      texture = loader.load(noiseDataURL);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      texture.minFilter = THREE.LinearFilter;

      // Set intensity based on prop
      const intensityValue =
        intensity === "full" ? 1.0 : intensity === "subtle" ? 0.3 : 0.1;
      
      if (process.env.NODE_ENV === "development") {
        console.log("GhostMouseBackground: Intensity value set to:", intensityValue);
      }

      uniforms = {
        u_time: { type: "f", value: 1.0 },
        u_resolution: { type: "v2", value: new THREE.Vector2() },
        u_noise: { type: "t", value: texture },
        u_buffer: { type: "t", value: rtTexture.texture },
        u_mouse: { type: "v2", value: new THREE.Vector2() },
        u_renderpass: { type: "b", value: false },
        u_intensity: { type: "f", value: intensityValue },
      };
      
      if (process.env.NODE_ENV === "development") {
        console.log("GhostMouseBackground: Renderer initialized, container:", container);
      }

      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
      });
      material.extensions.derivatives = true;

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(window.innerWidth, window.innerHeight);

      container.appendChild(renderer.domElement);

      // Store references
      sceneRef.current = scene;
      rendererRef.current = renderer;
      uniformsRef.current = uniforms;

      // Event listeners
      const handleResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        uniforms.u_resolution.value.x = renderer.domElement.width;
        uniforms.u_resolution.value.y = renderer.domElement.height;

        rtTexture = new THREE.WebGLRenderTarget(
          window.innerWidth * 0.2,
          window.innerHeight * 0.2
        );
        rtTexture2 = new THREE.WebGLRenderTarget(
          window.innerWidth * 0.2,
          window.innerHeight * 0.2
        );
      };

      const handlePointerMove = (e) => {
        const ratio = window.innerHeight / window.innerWidth;
        newMouse.x =
          (e.pageX - window.innerWidth / 2) / window.innerWidth / ratio;
        newMouse.y =
          ((e.pageY - window.innerHeight / 2) / window.innerHeight) * -1;
        mouseRef.current = newMouse;
      };

      // Animation loop
      const animate = (delta) => {
        if (!renderer || !scene || !camera) return;

        animationIdRef.current = requestAnimationFrame(animate);

        // Update mouse position smoothly
        uniforms.u_mouse.value.x +=
          (newMouse.x - uniforms.u_mouse.value.x) * divisor;
        uniforms.u_mouse.value.y +=
          (newMouse.y - uniforms.u_mouse.value.y) * divisor;

        uniforms.u_time.value = delta * 0.0005;

        // Render main scene
        renderer.render(scene, camera);

        // Render texture pass
        renderTexture();
      };

      const renderTexture = () => {
        const odims = uniforms.u_resolution.value.clone();
        uniforms.u_resolution.value.x = window.innerWidth * 0.2;
        uniforms.u_resolution.value.y = window.innerHeight * 0.2;

        uniforms.u_buffer.value = rtTexture2.texture;
        uniforms.u_renderpass.value = true;

        renderer.setRenderTarget(rtTexture);
        renderer.render(scene, camera, rtTexture, true);

        const buffer = rtTexture;
        rtTexture = rtTexture2;
        rtTexture2 = buffer;

        uniforms.u_buffer.value = rtTexture.texture;
        uniforms.u_resolution.value = odims;
        uniforms.u_renderpass.value = false;
      };

      // Add event listeners
      window.addEventListener("resize", handleResize);
      document.addEventListener("pointermove", handlePointerMove);

      // Store cleanup function
      cleanupEventListeners = () => {
        window.removeEventListener("resize", handleResize);
        document.removeEventListener("pointermove", handlePointerMove);
      };

      // Initial setup
      handleResize();

      // Start animation
      animate(0);
    };

    init();

    // Main cleanup function
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
      // Clean up event listeners
      if (
        cleanupEventListeners &&
        typeof cleanupEventListeners === "function"
      ) {
        cleanupEventListeners();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none w-full h-full"
      style={{ touchAction: "none", width: "100%", height: "100%" }}
    />
  );
}
