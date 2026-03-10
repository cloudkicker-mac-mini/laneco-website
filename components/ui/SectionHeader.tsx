import type { ReactNode } from 'react';

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  children?: ReactNode;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  children
}: SectionHeaderProps) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl';

  return (
    <div className={alignment}>
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="heading-lg mt-3">{title}</h2>
      {description ? <p className="mt-4 text-base text-warm-gray md:text-lg">{description}</p> : null}
      {children}
    </div>
  );
}
