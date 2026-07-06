"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

function getProjectName(title) {
  return title.split("–")[0].trim();
}

function getProjectDescriptor(title) {
  return title.split("–").slice(1).join("–").trim();
}

export default function FeaturedWorkCarousel({ projects }) {
  const wrapRef = useRef(null);
  const cardRefs = useRef([]);
  const touchStartRef = useRef({ x: 0, y: 0 });
  const [current, setCurrent] = useState(0);

  const isMobile = useCallback(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(max-width: 767px)").matches,
    []
  );

  const centerCard = useCallback(
    (index) => {
      const wrap = wrapRef.current;
      const card = cardRefs.current[index];

      if (!wrap || !card) return;

      const mobile = isMobile();
      const axis = mobile ? "top" : "left";
      const size = mobile ? "clientHeight" : "clientWidth";
      const start = mobile ? card.offsetTop : card.offsetLeft;

      wrap.scrollTo({
        [axis]: start - (wrap[size] / 2 - card[size] / 2),
        behavior: "smooth",
      });
    },
    [isMobile]
  );

  const activate = useCallback(
    (index, shouldScroll = true) => {
      const nextIndex = Math.min(Math.max(index, 0), projects.length - 1);
      setCurrent(nextIndex);

      if (shouldScroll) {
        window.requestAnimationFrame(() => centerCard(nextIndex));
      }
    },
    [centerCard, projects.length]
  );

  const go = useCallback(
    (step) => {
      activate(current + step, true);
    },
    [activate, current]
  );

  useEffect(() => {
    if (!projects.length) return undefined;

    const frame = window.requestAnimationFrame(() => centerCard(current));
    return () => window.cancelAnimationFrame(frame);
  }, [centerCard, current, projects.length]);

  useEffect(() => {
    if (projects.length < 2) return undefined;

    const interval = window.setInterval(() => {
      setCurrent((active) => {
        const nextIndex = (active + 1) % projects.length;
        window.requestAnimationFrame(() => centerCard(nextIndex));
        return nextIndex;
      });
    }, 5200);

    return () => window.clearInterval(interval);
  }, [centerCard, projects.length]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (["ArrowRight", "ArrowDown"].includes(event.key)) go(1);
      if (["ArrowLeft", "ArrowUp"].includes(event.key)) go(-1);
    };

    const handleResize = () => centerCard(current);

    window.addEventListener("keydown", handleKeyDown, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [centerCard, current, go]);

  if (!projects.length) {
    return (
      <div className="rounded-[24px] p-8 text-center studio-surface">
        <p className="studio-text">No projects in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="featured-work-carousel">
      <div className="featured-work-carousel__viewport" ref={wrapRef}>
        <div
          className="featured-work-carousel__track"
          onTouchStart={(event) => {
            touchStartRef.current = {
              x: event.touches[0].clientX,
              y: event.touches[0].clientY,
            };
          }}
          onTouchEnd={(event) => {
            const dx = event.changedTouches[0].clientX - touchStartRef.current.x;
            const dy = event.changedTouches[0].clientY - touchStartRef.current.y;
            const mobile = isMobile();

            if ((mobile ? Math.abs(dy) : Math.abs(dx)) > 60) {
              go((mobile ? dy : dx) > 0 ? -1 : 1);
            }
          }}
        >
          {projects.map((project, index) => {
            const active = index === current;

            return (
              <article
                key={project.id}
                ref={(node) => {
                  cardRefs.current[index] = node;
                }}
                className="featured-work-card"
                data-active={active ? "true" : undefined}
                onClick={() => activate(index, true)}
                onMouseEnter={() => {
                  if (window.matchMedia("(hover: hover)").matches) {
                    activate(index, true);
                  }
                }}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt=""
                    fill
                    sizes={active ? "30rem" : "5rem"}
                    className="featured-work-card__bg"
                    priority={active}
                  />
                ) : (
                  <div className="featured-work-card__fallback">
                    Preview coming soon
                  </div>
                )}

                <div className="featured-work-card__content">
                  <div className="featured-work-card__copy">
                    <p className="featured-work-card__meta">
                      {project.category} · {project.year}
                    </p>
                    <h3 className="featured-work-card__title">
                      {getProjectName(project.title)}
                    </h3>
                    {getProjectDescriptor(project.title) && (
                      <p className="featured-work-card__descriptor">
                        {getProjectDescriptor(project.title)}
                      </p>
                    )}
                    <p className="featured-work-card__desc">
                      {project.summary}
                    </p>
                  </div>

                  <Link
                    href="/#projects"
                    className="featured-work-card__btn"
                    onClick={(event) => event.stopPropagation()}
                  >
                    View project
                    <FiArrowUpRight aria-hidden />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="featured-work-carousel__footer">
        <button
          type="button"
          className="featured-work-carousel__nav"
          onClick={() => go(-1)}
          disabled={current === 0}
          aria-label="Show previous project"
        >
          <FiChevronLeft aria-hidden />
        </button>

        <div className="featured-work-carousel__dots" aria-label="Carousel dots">
          {projects.map((project, index) => (
            <button
              key={project.id}
              type="button"
              className="featured-work-carousel__dot"
              data-active={index === current ? "true" : undefined}
              onClick={() => activate(index, true)}
              aria-label={`Show ${getProjectName(project.title)}`}
              aria-current={index === current ? "true" : undefined}
            />
          ))}
        </div>

        <button
          type="button"
          className="featured-work-carousel__nav"
          onClick={() => go(1)}
          disabled={current === projects.length - 1}
          aria-label="Show next project"
        >
          <FiChevronRight aria-hidden />
        </button>
      </div>
    </div>
  );
}
