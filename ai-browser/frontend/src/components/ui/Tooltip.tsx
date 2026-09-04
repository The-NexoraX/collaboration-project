import type { ReactNode } from "react";
export function Tooltip({ children, text }: { children: ReactNode; text: string }) {
  return <span title={text}>{children}</span>;
}
