import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

const profileSize = {
  xxs: 32,
  xs: 44,
  sm: 52,
  md: 64,
  lg: 72,
  xl: 88,
};

export interface ProfileProps
  extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, "width" | "height"> {
  alt: string;
  src: string;
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl";
}

const Profile = React.forwardRef<HTMLImageElement, ProfileProps>(
  ({ src, alt, className, size = "md", ...props }, ref) => {
    const sizeValue: number = profileSize[size];
    return (
      <Image
        ref={ref}
        className={cn("aspect-square rounded-full", className)}
        alt={alt}
        src={src}
        width={sizeValue}
        height={sizeValue}
        {...props}
      />
    );
  }
);
Profile.displayName = "Profile";

export { Profile };
