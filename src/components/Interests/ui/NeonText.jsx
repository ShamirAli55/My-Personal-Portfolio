export default function NeonText({ children, className = "" }) {
  return (
    <span
      className={`relative inline-block 
        text-[hsl(var(--opposite))] 
        [text-shadow:_0_0_5px_hsl(var(--shadow)),_0_0_10px_hsl(var(--shadow)),_0_0_20px_hsl(var(--shadow)),_0_0_40px_hsl(var(--shadow))]
        ${className}`}
    >
      {children}
    </span>
  );
}
