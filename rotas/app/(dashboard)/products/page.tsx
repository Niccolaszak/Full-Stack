"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { products } from "../products/data";



export default function ProductsPage() {
  const router = useRouter();

  return (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}>Meus Produtos</h1>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "1rem" }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              marginBottom: "1rem",
              backgroundColor: "#f9f9f9",
              padding: "1rem",
              borderRadius: "8px",
            }}
          >
            <Link
              href={`/products/${product.id}`}
              style={{ textDecoration: "none", color: "#0070f3", fontWeight: "bold" }}
            >
              {product.name}
            </Link>
            <p style={{ margin: "0.5rem 0 0", color: "#555" }}>{product.description}</p>
          </li>
        ))}
      </ul>

      {/* Botão de voltar */}
      <button
        onClick={() => router.back()}
        style={{
          marginTop: "2rem",
          padding: "0.5rem 1rem",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Voltar
      </button>
    </div>
  );
}