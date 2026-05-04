// Visual marker for content that the client still needs to provide.
export const Placeholder = ({ children }: { children: React.ReactNode }) => (
  <span className="placeholder-mark" title="À compléter par le client">
    {children}
  </span>
);
