export default function NeonText({ children, className = "" }) {
  return (
    <span
      className={`relative inline-block text-red-300
        [text-shadow:_0_0_5px_#ff0000,_0_0_10px_#ff0000,_0_0_20px_#ff0000,_0_0_40px_#ff0000]
        ${className}`}
    >
      {children}
    </span>
  );
}
