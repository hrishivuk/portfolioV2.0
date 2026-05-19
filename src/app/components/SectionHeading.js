"use client";

/** Shared section title pattern for home + inner pages */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  action,
}) {
  return (
    <div className={`mb-6 sm:mb-8 ${className}`}>
      {eyebrow && <p className="page-eyebrow mb-2">{eyebrow}</p>}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-4">
        <div>
          <h2 className="section-title">{title}</h2>
          {description && (
            <p className="page-lead mt-2 max-w-2xl">{description}</p>
          )}
        </div>
        {action}
      </div>
    </div>
  );
}
