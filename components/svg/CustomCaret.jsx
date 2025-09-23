export default function CustomCaret({ color = "black", className = "" }) {
  return (
    <svg
      className={className}
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.36622 5.35628L0.808853 0.798909L1.5575 0.0502625L5.36622 3.85899L9.17495 0.0502625L9.9236 0.798909L5.36622 5.35628Z"
        fill={color}
      />
    </svg>
  );
}
