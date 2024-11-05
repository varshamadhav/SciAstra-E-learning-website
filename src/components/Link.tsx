import { ReactNode } from 'react';

interface LinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export function Link({ href, children, className = '' }: LinkProps) {
  const baseClasses = 'text-gray-700 hover:text-indigo-600 transition-colors duration-200';
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <a href={href} className={combinedClasses}>
      {children}
    </a>
  );
}