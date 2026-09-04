export function Badge({ children }: { children: string }) {
  return <span style={{ padding: "3px 8px", borderRadius: 999, background: "var(--surface-2)", fontSize: 12 }}>{children}</span>;
}
