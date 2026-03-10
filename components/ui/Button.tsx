import Link from 'next/link';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'ghost' | 'subtle';
type Size = 'sm' | 'md' | 'lg';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
};

const variantClasses: Record<Variant, string> = {
  primary:
    'border border-copper bg-copper text-white shadow-copper transition hover:-translate-y-0.5 hover:bg-[#ca694f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper',
  ghost:
    'border border-white/20 bg-white/0 text-white transition hover:border-copper/60 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
  subtle:
    'border border-white/10 bg-white/[0.02] text-white transition hover:border-white/25 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70'
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs uppercase tracking-[0.14em]',
  md: 'px-6 py-3 text-xs uppercase tracking-[0.14em]',
  lg: 'px-8 py-4 text-sm uppercase tracking-[0.14em]'
};

function cn(...classes: Array<string | undefined | false>): string {
  return classes.filter(Boolean).join(' ');
}

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  href,
  type = 'button'
}: ButtonProps) {
  const sharedClassName = cn(
    'inline-flex items-center justify-center rounded-full font-body font-medium',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <Link className={sharedClassName} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={sharedClassName} type={type}>
      {children}
    </button>
  );
}
