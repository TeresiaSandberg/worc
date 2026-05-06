export default function AdminPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        margin: 0,
        display: "grid",
        placeItems: "center",
        background: "#000",
        color: "#fff",
        fontFamily: "Arial, Helvetica, sans-serif",
        letterSpacing: "0.08em",
      }}
    >
      <div style={{ textAlign: "center", padding: "24px" }}>
        <h1 style={{ fontWeight: 300, margin: 0 }}>Admin</h1>
        <p style={{ marginTop: "16px", color: "#aaa" }}>Admin content</p>
      </div>
    </main>
  );
}
