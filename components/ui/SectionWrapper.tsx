interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SectionWrapper({ children, id, className = "", style }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={className}
      style={{ width: "100%", paddingTop: "7rem", paddingBottom: "7rem", ...style }}
    >
      <div style={{ maxWidth: "88rem", margin: "0 auto", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
        {children}
      </div>
    </section>
  );
}
