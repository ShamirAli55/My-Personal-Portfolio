
export default function NeonText({ children, className = "" }) {
  return (
    <span
      className={`relative inline-block [text-shadow:_0_0_30px_currentColor] ${className}`}
    >
      {children}
    </span>
  );
}
