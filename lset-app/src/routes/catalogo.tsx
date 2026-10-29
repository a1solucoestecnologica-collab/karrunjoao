import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SlidersHorizontal, X, Search, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { ProductCard } from "@/components/store/ProductCard";
import {
  brands,
  needs,
  productTypes,
  products,
  matchesQuery,
  matchesSelection,
  catalogCategories,
  selections,
} from "@/data/store";
type SearchState = {
  category?: string | undefined;
  skin?: string | undefined;
  texture?: string | undefined;
  size?: string | undefined;
  q?: string | undefined;
  need?: string | undefined;
  step?: string | undefined;
  brand?: string | undefined;
  type?: string | undefined;
  price?: string | undefined;
  sort?: string | undefined;
  selection?: string | undefined;
};
const prices = [
  { id: "ate-100", label: "Até R$ 100", min: 0, max: 100 },
  { id: "100-200", label: "R$ 100 a R$ 200", min: 100.01, max: 200 },
  { id: "200-mais", label: "Acima de R$ 200", min: 200.01, max: Infinity },
];
const str = (v: unknown) => (typeof v === "string" && v ? v : undefined);
export const Route = createFileRoute("/catalogo")({
  validateSearch: (s: Record<string, unknown>): SearchState => ({
    category: str(s["category"]),
    skin: str(s["skin"]),
    texture: str(s["texture"]),
    size: str(s["size"]),
    q: str(s["q"]),
    need: str(s["need"]),
    step: str(s["step"]),
    brand: str(s["brand"]),
    type: str(s["type"]),
    price: str(s["price"]),
    sort: str(s["sort"]),
    selection: str(s["selection"]),
  }),
  head: () => ({
    meta: [
      { title: "Produtos — LSET7" },
      {
        name: "description",
        content: "Explore as marcas e encontre skincare por categoria, necessidade e preço.",
      },
    ],
  }),
  component: Catalog,
});
function Catalog() {
  const s = Route.useSearch();
  useEffect(() => {
    if (sessionStorage.getItem("lset7-restore-catalog")) {
      sessionStorage.removeItem("lset7-restore-catalog");
      const y = Number(sessionStorage.getItem("lset7-catalog-scroll"));
      requestAnimationFrame(() => scrollTo(0, Number.isFinite(y) ? y : 0));
    }
  }, []);
  const navigate = useNavigate({ from: "/catalogo" });
  const [open, setOpen] = useState(false);
  const set = (k: keyof SearchState, v?: string) =>
    navigate({
      search: (p: SearchState) => ({ ...p, [k]: p[k] === v ? undefined : v }),
      replace: true,
    });
  const pr = prices.find((p) => p.id === s.price);
  const q = s.q || "";
  let list = products.filter(
    (p) =>
      (!q || matchesQuery(p, q)) &&
      (!s.need || p.needs.includes(s.need as never)) &&
      (!s.step || p.step === s.step) &&
      (!s.brand || p.brand === s.brand) &&
      (!s.type || p.type === s.type) &&
      (!pr || (p.price >= pr.min && p.price <= pr.max)) &&
      matchesSelection(p, s.selection) &&
      (!s.category || p.details?.category === s.category) &&
      (!s.skin || p.details?.skinTypes.includes(s.skin)) &&
      (!s.texture || p.details?.texture === s.texture) &&
      (!s.size || p.size === s.size),
  );
  if (s.sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
  if (s.sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
  if (s.sort === "name") list = [...list].sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
  const groups: { key: keyof SearchState; title: string; opts: { id: string; label: string }[] }[] =
    [
      { key: "category", title: "Categoria", opts: catalogCategories },
      { key: "selection", title: "Seleções", opts: selections },
      {
        key: "skin",
        title: "Tipo de pele informado",
        opts: [...new Set(products.flatMap((p) => p.details?.skinTypes || []))].map((v) => ({
          id: v,
          label: v,
        })),
      },
      {
        key: "texture",
        title: "Textura informada",
        opts: [
          ...new Set(products.map((p) => p.details?.texture).filter((v): v is string => !!v)),
        ].map((v) => ({ id: v, label: v })),
      },
      {
        key: "size",
        title: "Apresentação",
        opts: [...new Set(products.map((p) => p.size).filter((v): v is string => !!v))].map(
          (v) => ({ id: v, label: v }),
        ),
      },
      { key: "need", title: "Seu foco", opts: needs.map((v) => ({ id: v.id, label: v.label })) },
      { key: "brand", title: "Marca", opts: brands.map((v) => ({ id: v, label: v })) },
      {
        key: "type",
        title: "Tipo de produto",
        opts: productTypes.map((v) => ({ id: v, label: v })),
      },
      { key: "price", title: "Investimento", opts: prices },
    ];
  const selectionDescription = selections.find((x) => x.id === s.selection)?.description;
  const active = Object.entries(s).filter(([k, v]) => v && k !== "sort");
  const filters = (
    <div className="space-y-7">
      {selectionDescription && <p className="text-sm">{selectionDescription}</p>}
      {[...groups]
        .sort(
          (a, b) =>
            (["category", "brand", "price"].includes(a.key)
              ? ["category", "brand", "price"].indexOf(a.key)
              : 3) -
            (["category", "brand", "price"].includes(b.key)
              ? ["category", "brand", "price"].indexOf(b.key)
              : 3),
        )
        .map((g) => (
          <details
            className="filter-group"
            key={g.key}
            open={["category", "brand", "price"].includes(g.key) || !!s[g.key]}
          >
            <summary className="text-xs font-semibold uppercase tracking-widest">
              {g.title}
              <span aria-hidden="true">+</span>
            </summary>
            <div className="flex flex-wrap gap-2">
              {g.opts.map((o) => (
                <button
                  key={o.id}
                  className="chip"
                  data-active={s[g.key] === o.id}
                  aria-pressed={s[g.key] === o.id}
                  onClick={() => set(g.key, o.id)}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </details>
        ))}
      {active.length > 0 && (
        <Link to="/catalogo" className="text-link">
          Limpar filtros
        </Link>
      )}
    </div>
  );
  const label = (k: string, v: string) =>
    k === "q"
      ? `Busca: ${v}`
      : k === "selection"
        ? selections.find((x) => x.id === v)?.label || "Descobertas"
        : groups.find((g) => g.key === k)?.opts.find((o) => o.id === v)?.label || v;
  return (
    <main id="conteudo" className="shell py-8 md:py-12">
      <nav className="mb-5 text-xs text-muted-foreground">
        <Link to="/">Início</Link> / Produtos
      </nav>
      <div className="catalog-intro">
        <div>
          <p className="eyebrow">Explore a LSET7</p>
          <h1 className="mt-3 font-display text-4xl md:text-5xl">
            {s.brand ||
              (s.selection
                ? selections.find((x) => x.id === s.selection)?.label || "Novas descobertas"
                : "Um cuidado para cada momento.")}
          </h1>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Encontre suas marcas favoritas, compare texturas e escolha os próximos passos da sua
            rotina.
          </p>
        </div>
        <span className="catalog-count">
          {products.length}
          <small>produtos para explorar</small>
        </span>
      </div>
      <div className="catalog-toolbar">
        <button className="chip lg:hidden" onClick={() => setOpen(true)}>
          <SlidersHorizontal size={16} /> Filtros {active.length > 0 && `(${active.length})`}
        </button>
        <p className="text-xs text-muted-foreground" aria-live="polite">
          {list.length} {list.length === 1 ? "produto encontrado" : "produtos encontrados"}
        </p>
        <label className="ml-auto flex items-center gap-2 text-xs">
          <span className="hidden sm:inline">Ordenar por</span>
          <select
            aria-label="Ordenar produtos"
            value={s.sort || "relevance"}
            onChange={(e) => set("sort", e.target.value)}
            className="min-h-11 max-w-[165px] rounded border border-border bg-background px-3"
          >
            <option value="relevance">Seleção da loja</option>
            <option value="price-asc">Menor preço</option>
            <option value="price-desc">Maior preço</option>
            <option value="name">Nome A–Z</option>
          </select>
        </label>
      </div>
      {active.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {active.map(([k, v]) => (
            <button
              key={k}
              className="chip"
              onClick={() => set(k as keyof SearchState, undefined)}
              aria-label={`Remover filtro ${label(k, v!)}`}
            >
              {label(k, v!)}
              <X size={13} />
            </button>
          ))}
        </div>
      )}
      <div className="catalog-layout">
        <aside className="hidden lg:block">{filters}</aside>
        <div>
          {list.length ? (
            <div className="catalog-products">
              {list.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <Search size={32} />
              <h2>Nenhum produto por aqui ainda.</h2>
              <p>Experimente retirar um filtro ou explorar outra categoria.</p>
              <Link to="/catalogo" className="button-primary">
                Ver todos os produtos <ArrowRight size={16} />
              </Link>
              <Link to="/rotina" className="text-link">
                Precisa de ajuda para escolher?
              </Link>
            </div>
          )}
        </div>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-[min(92vw,390px)] overflow-y-auto">
          <SheetTitle>Encontre seu cuidado</SheetTitle>
          <SheetDescription className="mb-6">
            Combine os filtros e veja os produtos.
          </SheetDescription>
          {filters}
          <button
            onClick={() => setOpen(false)}
            className="button-primary sticky bottom-0 mt-6 w-full"
          >
            Ver {list.length} produtos
          </button>
        </SheetContent>
      </Sheet>
    </main>
  );
}
