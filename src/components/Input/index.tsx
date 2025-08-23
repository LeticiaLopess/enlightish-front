import { InputProps } from "./types/icon";

export function Input({ mode = "dark", className = "", ...props }: InputProps) {
  const isDark = mode === "dark";
  const borderClass = isDark ? "border-[#252628]" : "border-[#F3F3F3]";
  const textClass = isDark ? "text-[#252628]" : "text-[#F3F3F3]";
  const placeholderClass = isDark ? "placeholder-[#252628]/40" : "placeholder-[#F3F3F3]/40";

  return (
    <input
      {...props}
        className={`h-11 w-full rounded-md text-sm p-3 bg-transparent border ${borderClass} ${textClass} ${placeholderClass} ${className}`}
    />
  );
}
