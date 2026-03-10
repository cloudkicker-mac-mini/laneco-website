import type { ReactNode } from 'react';

type GlassPanelProps = {
  children: ReactNode;
  className?: string;
};

function cn(...classes: Array<string | undefined | false>): string {
  return classes.filter(Boolean).join(' ');
}

export function GlassPanel({ children, className }: GlassPanelProps) {
  return (
    <div
      className={cn(
        'glass-panel rounded-3xl border border-white/10 bg-white/[0.03] p-6 lg:p-8',
        className
      )}
    >
      {children}
    </div>
  );
}
