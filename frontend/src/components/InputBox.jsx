import { Field, Input, Label } from "@headlessui/react";
import clsx from "clsx";

export default function InputBox({
  label,
  showLabel = true,
  showAsterisk = false,
  placeholder,
  value,
  onChange, // Add onChange prop
}) {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        {/* Label */}
        {showLabel && (
          <Label className="text-heading-6 font-medium text-white">
            {label}
            {showAsterisk && <span className="text-danger-500">*</span>}
          </Label>
        )}
        {/* Input */}
        <Input
          className={clsx(
            "mt-3 block w-[384px] h-[48px] rounded-lg border-medium bg-surface-container py-1.5 px-3 text-heading-6 text-on-surface",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25",
            "flex items-center gap-4 px-6 py-2"
          )}
          placeholder={placeholder}
          value={value} // Bind the value
          onChange={onChange} // Bind the onChange handler
        />
      </Field>
    </div>
  );
}
