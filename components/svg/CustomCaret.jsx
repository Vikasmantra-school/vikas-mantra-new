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
        d="M5.00052 5.77399L0.289062 1.06253L1.06302 0.288574L5.00052 4.22607L8.93802 0.288574L9.71198 1.06253L5.00052 5.77399Z"
        fill={color}
      />
    </svg>
  );
}
