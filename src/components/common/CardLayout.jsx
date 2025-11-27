import React from 'react';

// Utility function to merge classes
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

// Card Component
export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg shadow-md overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Card Header
export function CardHeader({ className, children, ...props }) {
  return (
    <div
      className={cn('px-6 py-4 border-b border-gray-200', className)}
      {...props}
    >
      {children}
    </div>
  );
}

// Card Title
export function CardTitle({ className, children, ...props }) {
  return (
    <h3
      className={cn('text-xl font-semibold text-gray-900', className)}
      {...props}
    >
      {children}
    </h3>
  );
}

// Card Description
export function CardDescription({ className, children, ...props }) {
  return (
    <p
      className={cn('text-sm text-gray-600 mt-1', className)}
      {...props}
    >
      {children}
    </p>
  );
}

// Card Content
export function CardContent({ className, children, ...props }) {
  return (
    <div className={cn('px-6 py-4', className)} {...props}>
      {children}
    </div>
  );
}

// Card Footer
export function CardFooter({ className, children, ...props }) {
  return (
    <div
      className={cn('px-6 py-4 bg-gray-50 border-t border-gray-200', className)}
      {...props}
    >
      {children}
    </div>
  );
}


