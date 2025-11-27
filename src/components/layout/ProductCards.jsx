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