export default function FuturisticContact() {
  return (
    <section style={{
      padding: "var(--t-section-pad) 5rem",
      borderTop: "1px solid var(--t-border)",
      display: "grid", gridTemplateColumns: "1fr 1fr", gap: "var(--t-gap)",
      alignItems: "start",
    }}>
      {/* Left */}
      <div>
        <p style={labelStyle}>Get In Touch</p>
        <h2 style={h2Style}>
          Let's build<br />
          <span style={{ color: "var(--t-accent)" }}>something great.</span>
        </h2>
        <p style={bodyStyle}>
          Ready to start your project? Fill in the form and we'll get back to you
          within 24 hours with a clear plan and honest pricing.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "2.5rem" }}>
          {[
            { icon: "✉", label: "Email", value: "hello@yourbusiness.com" },
            { icon: "◎", label: "Location", value: "Bristol, UK" },
            { icon: "◷", label: "Response time", value: "Within 24 hours" },
          ].map(({ icon, label, value }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{
                width: "40px", height: "40px", borderRadius: "0.5rem",
                background: "var(--t-surface)", border: "1px solid var(--t-border)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1rem", color: "var(--t-accent)", flexShrink: 0,
              }}>
                {icon}
              </div>
              <div>
                <div style={{ fontSize: "0.7rem", color: "var(--t-muted)", fontFamily: "var(--t-font-body)", marginBottom: "0.1rem" }}>{label}</div>
                <div style={{ fontSize: "0.875rem", color: "var(--t-text)", fontFamily: "var(--t-font-body)" }}>{value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — form */}
      <div style={{
        background: "var(--t-surface)", border: "1px solid var(--t-border)",
        borderRadius: "1rem", padding: "var(--t-card-pad)",
        display: "flex", flexDirection: "column", gap: "1.25rem",
      }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <Field label="First name" placeholder="Jane" />
          <Field label="Last name" placeholder="Smith" />
        </div>
        <Field label="Email" placeholder="jane@example.com" />
        <Field label="Business name" placeholder="Your Business Ltd" />
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <label style={fieldLabelStyle}>Message</label>
          <div style={{
            ...fieldStyle,
            height: "100px", alignItems: "flex-start", paddingTop: "0.75rem",
          }}>
            <span style={{ color: "var(--t-muted)", fontSize: "0.85rem", fontFamily: "var(--t-font-body)" }}>
              Tell us about your project...
            </span>
          </div>
        </div>
        <button style={{
          padding: "0.875rem", borderRadius: "0.5rem", fontWeight: 600,
          fontSize: "0.9rem", border: "none", cursor: "pointer",
          color: "var(--t-bg)", background: "var(--t-accent)",
          fontFamily: "var(--t-font-body)", width: "100%",
        }}>
          Send Message
        </button>
      </div>
    </section>
  )
}

function Field({ label, placeholder }: { label: string; placeholder: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
      <label style={fieldLabelStyle}>{label}</label>
      <div style={fieldStyle}>
        <span style={{ color: "var(--t-muted)", fontSize: "0.85rem", fontFamily: "var(--t-font-body)" }}>
          {placeholder}
        </span>
      </div>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.12em",
  textTransform: "uppercase", color: "var(--t-accent)",
  marginBottom: "0.75rem", fontFamily: "var(--t-font-body)",
}

const h2Style: React.CSSProperties = {
  fontFamily: "var(--t-font-heading)", fontWeight: 700,
  fontSize: "clamp(2rem,3.5vw,3rem)", lineHeight: 1.1,
  letterSpacing: "-0.02em", color: "var(--t-text)",
  marginBottom: "1.25rem",
}

const bodyStyle: React.CSSProperties = {
  fontSize: "0.95rem", color: "var(--t-muted)",
  lineHeight: "var(--t-line-height)", fontFamily: "var(--t-font-body)",
}

const fieldLabelStyle: React.CSSProperties = {
  fontSize: "0.75rem", fontWeight: 600, color: "var(--t-muted)",
  fontFamily: "var(--t-font-body)", letterSpacing: "0.04em",
}

const fieldStyle: React.CSSProperties = {
  padding: "0.75rem 1rem", borderRadius: "0.5rem",
  background: "var(--t-bg)", border: "1px solid var(--t-border)",
  display: "flex", alignItems: "center",
}
