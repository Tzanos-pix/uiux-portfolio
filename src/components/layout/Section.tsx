import React from 'react';

type Spacing = 'none' | 'small' | 'medium' | 'large';
type MaxWidth = 'sm' | 'md' | 'lg' | 'xl' | '7xl' | 'full';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  spacing?: Spacing;
  maxWidth?: MaxWidth;
  className?: string; // Outer section classes (bg colors, custom borders)
  containerClassName?: string; // Inner container classes (flex, grid, text alignment)
}

/**
 * A standard layout section component to maintain visual consistency across the app.
 * Follows the "Frontend Design" guidelines for intentional spacing and clear hierarchy.
 */
export default function Section({ 
  children, 
  id,
  spacing = 'medium', 
  maxWidth = '7xl',
  className = '',
  containerClassName = ''
}: SectionProps) {
  
  // Vertical spacing variants
  const paddings: Record<Spacing, string> = {
    none: 'py-0',
    small: 'py-12 md:py-16',
    medium: 'py-20 md:py-24',
    large: 'py-32 md:py-40',
  };

  // Max width variants
  const maxWidths: Record<MaxWidth, string> = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-5xl',
    xl: 'max-w-6xl',
    '7xl': 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <section 
      id={id}
      className={`w-full ${paddings[spacing]} ${className}`}
    >
      <div className={`${maxWidths[maxWidth]} mx-auto px-6 md:px-12 w-full ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
