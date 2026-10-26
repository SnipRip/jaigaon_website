"use client";

import { Check, ChevronDown } from "lucide-react";
import { Select } from "radix-ui";
import { COUNTRIES } from "./optin-schema";

interface CountrySelectProps {
  id: string;
  value: string;
  onChange: (code: string) => void;
}

// Dialling-code picker. Replaces the native <select> so the open list matches
// the form instead of being drawn by the operating system.
export function CountrySelect({ id, value, onChange }: CountrySelectProps) {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        id={id}
        aria-label="Country code"
        className="group flex h-12 shrink-0 items-center gap-2 rounded-xl border border-ink/30 bg-white px-3.5 text-[15px] font-bold whitespace-nowrap text-ink hover:border-ink/50 data-[state=open]:border-brand"
      >
        <Select.Value />
        <Select.Icon>
          <ChevronDown aria-hidden="true" className="size-[18px] text-muted transition-transform group-data-[state=open]:rotate-180" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content
          position="popper"
          align="start"
          sideOffset={6}
          className="z-50 min-w-(--radix-select-trigger-width) overflow-hidden rounded-[14px] border border-line bg-white shadow-[0_16px_40px_rgb(20_40_90/0.18)]"
        >
          <Select.Viewport className="p-1.5">
            {COUNTRIES.map((country) => (
              <Select.Item
                key={country.code}
                value={country.code}
                className="flex h-11 cursor-pointer items-center justify-between gap-4 rounded-[10px] px-3 text-[15px] font-semibold whitespace-nowrap text-ink-soft outline-none select-none data-[highlighted]:bg-brand-tint data-[highlighted]:text-brand-strong data-[state=checked]:font-extrabold data-[state=checked]:text-ink"
              >
                <Select.ItemText>{country.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <Check aria-hidden="true" className="size-4 text-brand" />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
