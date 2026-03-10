import Link from 'next/link';
import type { ReactNode } from 'react';

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

const baseClasses =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300';

const variantClasses: Record<NonNullable<ButtonLinkProps['variant']>, string> = {
  primary:
    'bg-copper text-white shadow-copper hover:-translate-y-0.5 hover:bg-[#e2856f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper',
  secondary:
    'border border-white/25 bg-white/5 text-white hover:border-copper hover:bg-copper/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper'
};

export default function Button({
  href,
  children,
  variant = 'primary',
  className = ''
}: ButtonLinkProps) {
  return (
    <Link href={href} className={`${baseClasses} ${variantClasses[variant]} ${className}`.trim()}>
      {children}
    </Link>
  );
}
