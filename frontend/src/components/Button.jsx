import clsx from "clsx";

export default function Button({
  label,
  showIcon = false,
  iconSrc,
  bgColor = "bg-surface-container",
  textColor = "text-on-surface",
  borderColor = "border-medium",
  onClick, // Add onClick prop
}) {
  return (
    <div className="w-full max-w-md px-4">
      <button
        className={clsx(
          "mt-3 block w-[384px] h-[48px] rounded-lg",
          "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
          "flex justify-center items-center gap-1",
          "border border-[1px]",
          bgColor,
          textColor,
          borderColor
        )}
        onClick={onClick} // Attach the onClick handler
      >
        {showIcon && iconSrc && (
          <img src={iconSrc} alt="icon" className="mr-2 w-5 h-5" />
        )}
        {String(label)}
      </button>
    </div>
  );
}
