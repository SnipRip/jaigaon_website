import { Check } from "lucide-react";
import type { ComponentProps } from "react";

// The consent tick box, drawn in the site's own style. It is still a real
// checkbox underneath, so `register("consent")` spreads straight onto it.
export function ConsentCheckbox(props: Omit<ComponentProps<"input">, "type" | "className">) {
  return (
    <span className="relative mt-0.5 flex size-6 shrink-0">
      <input
        type="checkbox"
        className="peer size-6 cursor-pointer appearance-none rounded-[7px] border-2 border-ink/40 bg-white transition-colors checked:border-success checked:bg-success hover:border-success"
        {...props}
      />
      <Check
        aria-hidden="true"
        strokeWidth={3.5}
        className="pointer-events-none absolute inset-0 m-auto size-4 text-white opacity-0 peer-checked:opacity-100"
      />
    </span>
  );
}
