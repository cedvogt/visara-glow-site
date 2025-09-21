// src/components/core/SectionContainer.tsx
import { ReactNode } from 'react';

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

const SectionContainer = ({ id, className = '', children }: SectionContainerProps) => {
  return (
    <section
      id={id}
      className={`py-12 ${className}`}
      style={{ scrollMarginTop: 'calc(5rem)' }}
    >
      <div className="container mx-auto px-6">
        <div className="glass-panel p-12 md:p-16">{children}</div>
      </div>
    </section>
  );
};

export default SectionContainer;
