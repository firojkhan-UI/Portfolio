import clsx from "clsx";

function Button({ children, icon, variant = "primary", className }) {
  const baseStyle =
    "inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-xs sm:text-sm font-medium transition";

  const variants = {
    primary:
      "bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100",
    outline:
      "bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800",
  };

  return (
    <button className={clsx(baseStyle, variants[variant], className)}>
      {icon && icon}
      {children}
    </button>
  );
}

export default Button;