const LoadingSpinner = () => {
  return (
    <svg className="loading-spinner w-12 h-12" viewBox="0 0 50 50">
      <circle
        className="stroke-primary stroke-2 fill-none"
        cx="25"
        cy="25"
        r="20"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default LoadingSpinner;