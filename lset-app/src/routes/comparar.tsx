import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { products, productImage, brl } from "@/data/store";
export const Route = createFileRoute("/comparar")({
  validateSearch: (s: Record<string, unknown>) => ({
    ids: typeof s["ids"] === "string" ? s["ids"] : "",
  }),
  component: Compare,
});
function Compare() {
  const search = Route.useSearch();
  const [ids, setIds] = useState<string[]>(
    [...new Set(search.ids.split(",").filter((id) => products.some((p) => p.id === id)))].slice(
      0,
      3,
    ),
  );
  const selected = ids.flatMap((id) => products.find((p) => p.id === id) || []);
  return (
    <main id="conteudo" className="shell py-10">
      <p className="eyebrow">Escolha com clareza</p>
      <h1 className="font-display text-4xl">Compare até três produtos</h1>
      <p className="mt-3 text-sm">
        Compare apresentação e preço. Indicações dependem da fórmula e não equivalem a uma
        recomendação de uso conjunto.
      </p>
      <label className="mt-6 block">
        Adicionar produto
        <select
          className="mt-2 block min-h-11 w-full rounded border p-3"
          value=""
          disabled={ids.length >= 3}
          onChange={(e) => setIds((x) => [...x, e.target.value])}
        >
          <option value="">Escolher uma opção</option>
          {products
            .filter((p) => !ids.includes(p.id))
            .map((p) => (
              <option key={p.id} value={p.id}>
                {p.brand} · {p.name} — {brl(p.price)}
              </option>
            ))}
        </select>
      </label>
      <div className="comparison-grid mt-8">
        {selected.map((p) => (
          <article className="min-w-0 rounded-xl border p-4" key={p.id}>
            <img
              src={productImage(p)}
              alt={p.name}
              width={240}
              height={240}
              className="aspect-square w-full object-contain"
            />
            <h2 className="mt-3 font-display text-xl">{p.name}</h2>
            <dl className="comparison-facts">
              <dt>Preço</dt>
              <dd>{brl(p.price)}</dd>
              <dt>Apresentação</dt>
              <dd>{p.size || "A confirmar no rótulo"}</dd>
              <dt>Textura</dt>
              <dd>{p.details?.texture || "Não informada"}</dd>
              <dt>Pele</dt>
              <dd>{p.details?.skinTypes.join(", ") || "Confira a indicação do fabricante"}</dd>
              <dt>Disponibilidade consultada</dt>
              <dd>{p.available ? "Disponível" : "Indisponível"}</dd>
            </dl>
            <Link className="text-link mt-4" to="/produto/$id" params={{ id: p.id }}>
              Conhecer produto →
            </Link>
            <button
              className="mt-4 block min-h-11 underline"
              onClick={() => setIds((x) => x.filter((id) => id !== p.id))}
            >
              Remover da comparação
            </button>
          </article>
        ))}
      </div>
      {!ids.length && <p className="mt-8">Escolha duas ou três opções acima para começar.</p>}
    </main>
  );
}
