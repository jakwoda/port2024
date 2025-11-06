import React from "react";

import { twMerge } from "tailwind-merge";

export const Highlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <span className={twMerge("text-secondary  px-0.2 py-0.2 underline hover:line-through", className)}>
      {children}
    </span>
  );
};
