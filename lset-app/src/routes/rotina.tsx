import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Check, RefreshCw, Trash2, Info } from "lucide-react";
import { useState } from "react";
import {
  brl,
  productImage,
  products,
  budgets,
  candidatesFor,
  needs,
  stepLabel,
  steps,
  suggestRoutine,
  type BudgetId,
  type NeedId,
  type Product,
} from "@/data/store";
import { useCart } from "@/lib/cart";

export const Route = createFileRoute("/rotina")({
  validateSearch: (
    s: Record<string, unknown>,
  ): {
    need?: NeedId | undefined;
    product?: string | undefined;
    items?: string | undefined;
    have?: string | undefined;
  } => ({
    have: typeof s["have"] === "string" ? s["have"] : undefined,
    product: typeof s["product"] === "string" ? s["product"] : undefined,
    items: typeof s["items"] === "string" ? s["items"] : undefined,
    need: needs.some((n) => n.id === s["need"]) ? (s["need"] as NeedId) : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Monte sua rotina — LSET7" },
      {
        name: "description",
        content:
          "Escolha seu foco de cuidado e seu orçamento e receba uma sugestão de rotina organizada por etapas.",
      },
      { property: "og:title", content: "Monte sua rotina — LSET7" },
      {
        property: "og:description",
        content: "Uma sugestão de rotina de skincare por etapas, dentro do seu orçamento.",
      },
    ],
  }),
  component: Builder,
});

function Builder() {
  const search = Route.useSearch();
  const initial = search.need;
  const seed = products.find((p) => p.id === search.product);
  const shared = (search.items || "")
    .split(",")
    .slice(0, 12)
    .flatMap((id) => products.find((p) => p.id === id) || []);
  const [need, setNeed] = useState<NeedId | undefined>(
    initial || (shared.length ? "primeiros-cuidados" : undefined),
  );
  const [budget, setBudget] = useState<BudgetId | undefined>(
    shared.length ? "sem-limite" : undefined,
  );
  const [items, setItems] = useState<Product[]>(shared);
  const [owned, setOwned] = useState<string[]>(
    (search.have || "").split(",").filter((id) => products.some((p) => p.id === id)),
  );
  const [status, setStatus] = useState("");
  const step = !need ? 1 : !budget ? 2 : 3;
  const { addMany } = useCart();

  const total = items.reduce((s, p) => s + (owned.includes(p.id) ? 0 : p.price), 0);
  const max = budgets.find((b) => b.id === budget)?.max ?? Infinity;
  const swap = (i: number, p: Product) => setItems((xs) => xs.map((x, j) => (j === i ? p : x)));

  return (
    <main id="conteudo" className="routine-builder mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-12">
      <div className="builder-header">
        {seed && (
          <p className="rounded-xl border p-3 text-sm">
            Seu ponto de partida: <strong>{seed.name}</strong>. Ele será preservado na sugestão
            inicial.
          </p>
        )}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Orientação de compra
        </p>
        <h1 className="mt-2 font-display text-4xl md:text-5xl">Monte sua rotina</h1>
        <p className="mt-2 text-muted-foreground">
          Escolha um foco e uma faixa de investimento. Depois, personalize os produtos, confira o
          total e ajuste no seu ritmo.
        </p>
      </div>
      <ol className="routine-progress mt-6 flex gap-2" aria-label="Progresso">
        {["Foco", "Orçamento", "Sua rotina"].map((l, i) => (
          <li
            key={l}
            className={`flex-1 rounded-full py-2 text-center text-xs font-semibold ${step > i ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"}`}
            aria-current={step === i + 1 ? "step" : undefined}
          >
            {i + 1}. {l}
          </li>
        ))}
      </ol>

      {step === 1 && (
        <section className="mt-8">
          <h2 className="text-xl font-semibold">Qual a principal necessidade da sua pele?</h2>
          <div className="builder-choices mt-5">
            {needs.map((n) => (
              <button key={n.id} onClick={() => setNeed(n.id)} className="builder-choice">
                <span className="choice-symbol" aria-hidden="true">
                  {n.id === "hidratacao"
                    ? "◉"
                    : n.id === "luminosidade"
                      ? "✧"
                      : n.id === "firmeza"
                        ? "↗"
                        : "01"}
                </span>
                <h3>{n.label}</h3>
                <span className="choice-arrow" aria-hidden="true">
                  ↗
                </span>
                <p>{n.text}</p>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 2 && (
        <section className="mt-8">
          <button
            onClick={() => setNeed(undefined)}
            className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Voltar
          </button>
          <h2 className="text-xl font-semibold">Quanto você quer investir na rotina?</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {budgets.map((b) => (
              <button
                key={b.id}
                onClick={() => {
                  setBudget(b.id);
                  if (need && !items.length) {
                    const suggested = suggestRoutine(need, b.id);
                    setItems(
                      (seed
                        ? [seed, ...suggested.filter((p) => p.step !== seed.step)]
                        : suggested
                      ).sort(
                        (a, b) =>
                          steps.findIndex((s) => s.id === a.step) -
                          steps.findIndex((s) => s.id === b.step),
                      ),
                    );
                  }
                }}
                className="builder-choice"
              >
                <h3>{b.label}</h3>
                <p>Você pode comparar e ajustar os itens na próxima etapa.</p>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 3 && need && (
        <section className="mt-8">
          <div className="flex flex-wrap items-center gap-2 text-sm">
            <span className="rounded-full bg-secondary px-3 py-1">
              Foco: {needs.find((n) => n.id === need)?.label}
            </span>
            <span className="rounded-full bg-secondary px-3 py-1">
              {budgets.find((b) => b.id === budget)?.label}
            </span>
            <button
              onClick={() => {
                setNeed(undefined);
                setBudget(undefined);
              }}
              className="ml-auto text-sm font-semibold text-primary underline"
            >
              Recomeçar
            </button>
          </div>
          <div className="mt-4 flex gap-4">
            <button
              className="text-link"
              onClick={() => {
                setNeed(undefined);
                setBudget(undefined);
              }}
            >
              Alterar foco
            </button>
            <button className="text-link" onClick={() => setBudget(undefined)}>
              Alterar orçamento
            </button>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <button
              className="chip"
              onClick={() => {
                try {
                  localStorage.setItem(
                    "lset7-routine",
                    JSON.stringify({ items: items.map((p) => p.id), owned }),
                  );
                  setStatus("Rotina salva neste aparelho.");
                } catch {
                  setStatus(
                    "Não foi possível salvar neste aparelho. Use o compartilhamento por link.",
                  );
                }
              }}
            >
              Salvar rotina
            </button>
            <button
              className="chip"
              onClick={() => {
                try {
                  const saved = JSON.parse(localStorage.getItem("lset7-routine") || "{}") as {
                    items?: string[];
                    owned?: string[];
                  };
                  if (Array.isArray(saved.items)) {
                    setItems(products.filter((p) => saved.items!.includes(p.id)));
                    setOwned(products.filter((p) => saved.owned?.includes(p.id)).map((p) => p.id));
                  }
                } catch {
                  setStatus("Não foi possível recuperar a rotina salva.");
                }
              }}
            >
              Recuperar rotina salva
            </button>
            <button
              className="chip"
              onClick={async () => {
                const url = new URL("/lset/rotina", location.origin);
                url.searchParams.set("items", items.map((p) => p.id).join(","));
                url.searchParams.set("have", owned.join(","));
                const data = {
                  title: "Minha rotina LSET7",
                  text: `Minha seleção: ${items.map((p) => p.name).join(", ")}. Total ${brl(total)}.`,
                  url: url.href,
                };
                try {
                  if (navigator.share) await navigator.share(data);
                  else {
                    await navigator.clipboard.writeText(url.href);
                    setStatus("Link da rotina copiado.");
                  }
                } catch {
                  setStatus("Sua seleção foi preservada.");
                }
              }}
            >
              Compartilhar seleção
            </button>
          </div>
          <p role="status" className="mt-3 text-sm">
            {status}
          </p>
          <ul className="mt-6 space-y-4">
            {items.map((p, i) => {
              const alts = candidatesFor(p.step, need).filter((x) => x.id !== p.id);
              return (
                <li key={p.id} className="routine-item">
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Etapa {i + 1} · {stepLabel(p.step)}
                  </p>
                  <div className="mt-3 flex gap-4">
                    <img
                      src={productImage(p)}
                      alt=""
                      width={96}
                      height={96}
                      className="item-image h-24 w-24 shrink-0 bg-muted object-contain"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-muted-foreground">{p.brand}</p>
                      <Link
                        to="/produto/$id"
                        params={{ id: p.id }}
                        className="item-name font-display text-xl hover:text-primary"
                      >
                        {p.name}
                      </Link>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {steps.find((s) => s.id === p.step)?.text}
                      </p>
                      <p className="mt-2 text-xs">
                        {p.details?.periods.length
                          ? `Período informado: ${p.details.periods.map((x) => (x === "manha" ? "manhã" : "noite")).join(" e ")}`
                          : "Período: confira o rótulo."}
                      </p>
                      <p className="mt-2 font-bold">
                        {owned.includes(p.id) ? "Você já tem · fora do total" : brl(p.price)}
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <label className="chip">
                      <input
                        type="checkbox"
                        checked={owned.includes(p.id)}
                        onChange={() =>
                          setOwned((xs) =>
                            xs.includes(p.id) ? xs.filter((id) => id !== p.id) : [...xs, p.id],
                          )
                        }
                      />{" "}
                      Já tenho este produto
                    </label>
                    {alts.length > 0 && (
                      <label className="flex min-h-11 w-full min-w-0 items-center gap-2 rounded border border-border px-3 text-sm sm:w-auto sm:max-w-full">
                        <RefreshCw className="h-4 w-4" />
                        <span className="sr-only">Trocar produto da etapa {stepLabel(p.step)}</span>
                        <select
                          className="min-h-11 min-w-0 bg-transparent outline-none"
                          value=""
                          onChange={(e) => {
                            const a = alts.find((x) => x.id === e.target.value);
                            if (a) swap(i, a);
                          }}
                        >
                          <option value="" disabled>
                            Trocar por…
                          </option>
                          {alts.map((a) => (
                            <option key={a.id} value={a.id}>
                              {a.name} — {brl(a.price)} ({a.price >= p.price ? "+" : "−"}
                              {brl(Math.abs(a.price - p.price))})
                            </option>
                          ))}
                        </select>
                      </label>
                    )}
                    <button
                      onClick={() => setItems((xs) => xs.filter((_, j) => j !== i))}
                      className="inline-flex min-h-10 items-center gap-1 rounded-full border border-border px-3 text-sm"
                    >
                      <Trash2 className="h-4 w-4" /> Remover
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
          {items.length === 0 && (
            <p className="mt-6 rounded-2xl border border-dashed p-6 text-center text-muted-foreground">
              Você removeu todos os itens.{" "}
              <button
                className="font-semibold text-primary underline"
                onClick={() => need && budget && setItems(suggestRoutine(need, budget))}
              >
                Refazer sugestão
              </button>
            </p>
          )}

          {total > max && (
            <button
              className="chip mt-5"
              onClick={() => {
                setItems((xs) =>
                  xs.map((p) => {
                    if (p.id === seed?.id || owned.includes(p.id)) return p;
                    return (
                      [...candidatesFor(p.step, need)]
                        .sort((a, b) => a.price - b.price)
                        .find((x) => x.price < p.price) || p
                    );
                  }),
                );
                setStatus(
                  "Buscamos alternativas de menor preço para as mesmas etapas, preservando o produto inicial e os itens que você já tem. Confira o novo total.",
                );
              }}
            >
              Buscar alternativas mais econômicas
            </button>
          )}
          <div className="builder-summary">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs text-muted-foreground">
                  Total da rotina ({items.length} itens)
                </p>
                <p className="text-2xl font-bold">{brl(total)}</p>
                {total > max && (
                  <p role="status" className="mt-2 max-w-xs text-xs leading-relaxed text-primary">
                    A seleção completa ultrapassa o orçamento em {brl(total - max)}. Troque ou
                    remova itens, ou altere a faixa escolhida.
                  </p>
                )}
              </div>
              <button
                disabled={!items.some((p) => !owned.includes(p.id))}
                onClick={() => addMany(items.filter((p) => !owned.includes(p.id)).map((p) => p.id))}
                className="button-primary disabled:opacity-50"
              >
                <Check className="h-4 w-4" /> Adicionar rotina à sacola
              </button>
            </div>
          </div>
          <p className="mt-4 flex gap-2 text-xs text-muted-foreground">
            <Info className="h-4 w-4 shrink-0" /> Orientação de compra com associações editoriais do
            catálogo. Não é diagnóstico nem prescrição. Confira as instruções dos produtos antes de
            combinar tratamentos.
          </p>
        </section>
      )}
    </main>
  );
}
