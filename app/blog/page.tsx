import React from "react";

export default function Blog() {
  return (
    <main style={{ minHeight: "60vh", background: "var(--color-bg-secondary)", color: "var(--color-text-main)", borderRadius: "1rem", padding: "2rem", margin: "2rem auto", maxWidth: 600 }}>
      <h1 className="text-primary" style={{ marginBottom: 16 }}>Blog</h1>
      <p>Blog posts coming soon. (Add your blogs here!)</p>
    </main>
  );
}
