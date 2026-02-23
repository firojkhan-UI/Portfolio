import clsx from "clsx";

function Button({ children, icon, variant = "primary", className }) {
  const baseStyle =
    "inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition";

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700",
    outline:
      "border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800",
  };

  return (
    <button className={clsx(baseStyle, variants[variant], className)}>
      {icon && icon}
      {children}
    </button>
  );
}

export default Button;