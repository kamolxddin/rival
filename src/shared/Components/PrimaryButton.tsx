"use client";


interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
}

export function PrimaryButton({
  children,
  onClick,
  href,
  variant = "primary",
  className,
}: Props) {
  const base =
    "px-8 py-4 rounded-xl font-semibold transition duration-300 w-full sm:w-auto text-center";

  const styles =
    variant === "primary"
      ? "bg-[#1F6F63] text-white shadow-md hover:shadow-xl hover:scale-105"
      : "border border-[#1F6F63] text-[#1F6F63] hover:bg-[#1F6F63] hover:text-white";

  if (href) {
    return (
      <a href={href} className={`${base} ${styles} ${className}`}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  );
}
