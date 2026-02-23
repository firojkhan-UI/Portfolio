import { Briefcase } from "lucide-react";
import clsx from "clsx";

function StatusBadge({ text, icon, dot, className }) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-gray-300 dark:border-gray-700",
        className
      )}
    >
      {icon && <Briefcase size={16} />}
      {dot && <span className="w-2 h-2 bg-green-500 rounded-full"></span>}
      {text}
    </div>
  );
}

export default StatusBadge;