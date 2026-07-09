import { MessageCircle } from "lucide-react";

export default function Header() {
  const nav = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: "blur(10px)",
        background: "rgba(255,255,255,.88)",
        borderBottom: "1px solid rgba(0,0,0,.08)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 32px",
          height: "82px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
          }}
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              style={{
                fontSize: "15px",
                color: "#333",
                textDecoration: "none",
                fontWeight: 400,
              }}
            >
              {item.label}
            </a>
          ))}

          <a
            href="https://wa.me/5527981795469"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "999px",
              background: "#1f4d3a",
              color: "#fff",
              textDecoration: "none",
              fontSize: "14px",
            }}
          >
            <MessageCircle size={16} />
            Fale comigo
          </a>
        </nav>
      </div>
    </header>
  );
}