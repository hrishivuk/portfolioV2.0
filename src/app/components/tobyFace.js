"use client";
import { useEffect } from "react";

const TobyFace = ({ className = "" }) => {
  useEffect(() => {
    const balls = document.getElementsByClassName("ball");

    document.onmousemove = (event) => {
      const x = (event.clientX * 100) / window.innerWidth + "%";
      const y = (event.clientY * 100) / window.innerHeight + "%";

      for (let i = 0; i < balls.length; i++) {
        balls[i].style.left = x;
        balls[i].style.top = y;
        balls[i].style.transform = "translate(-50%, -50%)";
      }
    };
  }, []);

  return (
    <div className={`relative ${className}`}>
      {/* Eyes */}
      <div id="eyes" className="absolute flex space-x-8">
        {/* Left Eye */}
        <div className="eye w-16 h-16 bg-[#1D1E1C] rounded-full flex items-center justify-center relative">
          <div className="ball w-6 h-6 bg-[#FFF4E8] rounded-full absolute"></div>
        </div>
        {/* Right Eye */}
        <div className="eye w-16 h-16 bg-[#1D1E1C] rounded-full flex items-center justify-center relative">
          <div className="ball w-6 h-6 bg-[#FFF4E8] rounded-full absolute"></div>
        </div>
      </div>

      {/* SVG Face */}
      <svg
        id="Calque_1"
        data-name="Calque 1"
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        className="visage"
      >
        {/* SVG Face */}
        <svg
          id="Calque_1"
          data-name="Calque 1"
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className="visage"
        >
          <title>toby</title>
          <rect className="cls-1" width="300" height="300" rx="40" />
          <path
            className="cls-2"
            d="M267.18,152h0a66.36,66.36,0,0,0-66.36-66.36H182.89c-6,0-9.46,4.81-15.29,6.42A37.16,37.16,0,0,0,157,82.75a32.48,32.48,0,0,1-12.5,12.81c-3.78-4.67-10-9.91-16.35-9.91H98.72A66.36,66.36,0,0,0,32.35,152h0c-3.75,5.31-7.61,13.47-7,18.19,2.82-2.84,8.64-5.74,12.89-5.52-3.58,5.37-5.85,16-3.81,23.48a6,6,0,0,1,6.33-3.73A66.6,66.6,0,0,0,78.6,215.28a13.19,13.19,0,0,0-.3,2.76h0A12.76,12.76,0,0,0,91.06,230.8H208.48A12.76,12.76,0,0,0,221.24,218h0a12.64,12.64,0,0,0-.31-2.77A66.48,66.48,0,0,0,258.42,185c-1.39-1-4.6-1.14-6.37-.35a16.52,16.52,0,0,1,21.4-3.38C275.66,174.9,275.66,161.09,267.18,152Z"
          />
          <rect
            className="cls-3"
            x="78.3"
            y="194.62"
            width="142.94"
            height="25.53"
            rx="12.76"
          />
          <path
            className="cls-4"
            d="M273.45,167.7c2.21-6.35,2.21-20.16-6.27-29.24h0a66.37,66.37,0,0,0-66.36-66.37H182.89c-6,0-9.46,4.81-15.29,6.43A37.16,37.16,0,0,0,157,69.2,32.54,32.54,0,0,1,144.53,82c-3.78-4.67-10-9.92-16.35-9.92H98.72a66.37,66.37,0,0,0-66.37,66.37h0c-3.75,5.31-7.61,13.47-7,18.19,2.82-2.84,8.64-5.75,12.89-5.52-3.58,5.36-5.85,16-3.81,23.48a6,6,0,0,1,6.33-3.73,66.36,66.36,0,0,0,57.93,34h102.1a66.31,66.31,0,0,0,57.6-33.4c-1.39-1-4.6-1.13-6.37-.34A16.53,16.53,0,0,1,273.45,167.7Z"
          />
          <ellipse
            className="cls-5"
            cx="66.78"
            cy="132.14"
            rx="6.36"
            ry="3.97"
            transform="translate(-77.75 164.28) rotate(-75.72)"
          />
          <ellipse
            className="cls-5"
            cx="53.07"
            cy="148.28"
            rx="9"
            ry="6.36"
            transform="translate(-102.86 170.4) rotate(-78.38)"
          />
          <path
            className="cls-6"
            d="M220.83,184a35.86,35.86,0,0,0,11.34-16.4A8.59,8.59,0,0,0,224,156.33H122.2v12.76a5.11,5.11,0,0,1-5.11,5.11H106.88a5.1,5.1,0,0,1-5.1-5.11V156.33H75.52a8.6,8.6,0,0,0-8.16,11.31A35.81,35.81,0,0,0,78.71,184c10.71-4.85,38.48-8.3,71.06-8.3S210.11,179.19,220.83,184Z"
          />
          <path
            className="cls-5"
            d="M122.2,156.33v12.76a5.11,5.11,0,0,1-5.11,5.11H106.88a5.1,5.1,0,0,1-5.1-5.11V156.33Z"
          />
          <path
            className="cls-2"
            d="M198.27,192.06a35.64,35.64,0,0,0,22.56-8c-10.72-4.85-38.49-8.3-71.06-8.3s-60.35,3.45-71.06,8.3a35.59,35.59,0,0,0,22.56,8Z"
          />
          <ellipse
            className="cls-7"
            cx="239.07"
            cy="36.04"
            rx="8.37"
            ry="11.77"
            transform="translate(134.25 253.91) rotate(-72.88)"
          />
          <ellipse className="cls-7" cx="257.4" cy="55.5" rx="3.85" ry="4.75" />
          <ellipse
            className="cls-7"
            cx="90.54"
            cy="256.69"
            rx="7.4"
            ry="16.95"
            transform="translate(-180.66 279.92) rotate(-75.47)"
          />
          <ellipse
            className="cls-7"
            cx="60.59"
            cy="267.71"
            rx="4.62"
            ry="7.4"
            transform="translate(-203.18 191.8) rotate(-61.19)"
          />
          <ellipse
            className="cls-7"
            cx="44.38"
            cy="244.1"
            rx="7.4"
            ry="10.48"
            transform="translate(-194.29 176.35) rotate(-63.85)"
          />
          <path
            className="cls-8"
            d="M111.59,114a3.38,3.38,0,0,1-3.38-3.38,10.68,10.68,0,1,0-21.35,0,3.38,3.38,0,1,1-6.76,0,17.44,17.44,0,0,1,34.87,0A3.38,3.38,0,0,1,111.59,114Z"
          />
          <path
            className="cls-8"
            d="M215.73,114a3.38,3.38,0,0,1-3.38-3.38,10.68,10.68,0,1,0-21.35,0,3.38,3.38,0,0,1-6.76,0,17.44,17.44,0,0,1,34.87,0A3.38,3.38,0,0,1,215.73,114Z"
          />
        </svg>
      </svg>
    </div>
  );
};

export default TobyFace;
