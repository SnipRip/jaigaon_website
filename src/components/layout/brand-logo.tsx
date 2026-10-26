import Image from "next/image";
import { company } from "@/content/company";

// Intrinsic size of public/images/jqe-logo.png.
const LOGO_WIDTH = 359;
const LOGO_HEIGHT = 201;

export function BrandLogo({ height }: { height: number }) {
  return (
    <Image
      src="/images/jqe-logo.png"
      alt={company.name}
      width={Math.round((height * LOGO_WIDTH) / LOGO_HEIGHT)}
      height={height}
      priority
    />
  );
}
