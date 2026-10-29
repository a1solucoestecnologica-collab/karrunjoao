import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, Search, ShoppingBag, ArrowUpRight, X } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { Sheet, SheetContent, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart";
import { brands, categories, storeConfig } from "@/data/store";
function SearchForm({ onDone }: { onDone?: () => void }) {
  const navigate = useNavigate();
  const [q, setQ] = useState("");
  const id = useId();
  const submit = (e: FormEvent) => {
    e.preventDefault();
    navigate({ to: "/catalogo", search: { q: q.trim() || undefined } });
    onDone?.();
  };
  return (
    <form onSubmit={submit} role="search" className="search-form">
      <label htmlFor={id} className="sr-only">
        Buscar produtos ou marcas
      </label>
      <Search size={17} />
      <input
        id={id}
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Busque produtos ou marcas"
      />
      {q && (
        <button type="button" onClick={() => setQ("")} aria-label="Limpar busca">
          <X size={15} />
        </button>
      )}
      <button type="submit" aria-label="Buscar">
        <ArrowUpRight size={17} />
      </button>
    </form>
  );
}
export function Header() {
  const { count, setOpen } = useCart();
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="announcement">
        <span>Beleza coreana, mais perto de você.</span>
        <a href={storeConfig.contactUrl} target="_blank" rel="noreferrer">
          Fale com a LSET7 <ArrowUpRight size={12} />
        </a>
      </div>
      <header className="site-header">
        <div className="shell header-main">
          <button
            className="icon-button lg:hidden"
            onClick={() => setMenu(true)}
            aria-label="Abrir menu"
          >
            <Menu size={21} />
          </button>
          <Link to="/" className="brand-logo" aria-label="LSET7 — início">
            <img src={storeConfig.logo} width={1734} height={907} alt="LSET7" />
          </Link>
          <nav className="desktop-nav" aria-label="Principal">
            <Link to="/">Início</Link>
            <Link to="/catalogo">Produtos</Link>
            <Link to="/rotina">Monte sua rotina</Link>
            <Link to="/" hash="marcas">
              Marcas
            </Link>
            <Link to="/" hash="descobertas">
              Descobertas
            </Link>
          </nav>
          <div className="header-search">
            <SearchForm />
          </div>
          <button
            className="cart-button"
            onClick={() => setOpen(true)}
            aria-label={`Abrir sacola, ${count} itens`}
          >
            <ShoppingBag size={18} />
            <span className="hidden sm:inline">Sacola</span>
            <span className="cart-count" aria-live="polite">
              {count}
            </span>
          </button>
        </div>
        <div className="shell mobile-search">
          <SearchForm />
        </div>
      </header>
      <Sheet open={menu} onOpenChange={setMenu}>
        <SheetContent side="left" className="w-[min(90vw,360px)] overflow-y-auto">
          <SheetTitle className="font-display text-3xl">Explore a LSET7</SheetTitle>
          <SheetDescription>Encontre seu próximo cuidado.</SheetDescription>
          <nav aria-label="Menu" className="mt-6 space-y-5">
            <Link className="block text-lg font-semibold" to="/" onClick={() => setMenu(false)}>
              Início
            </Link>
            <Link
              className="block text-lg font-semibold"
              to="/catalogo"
              onClick={() => setMenu(false)}
            >
              Todos os produtos
            </Link>
            <Link
              className="block text-lg font-semibold text-primary"
              to="/rotina"
              onClick={() => setMenu(false)}
            >
              Monte sua rotina →
            </Link>
            <p className="eyebrow">Por categoria</p>
            {categories.map((c) => (
              <Link
                className="block"
                key={c.step}
                to="/catalogo"
                search={{ step: c.step }}
                onClick={() => setMenu(false)}
              >
                {c.label}
              </Link>
            ))}
            <p className="eyebrow pt-3">Por marca</p>
            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <Link
                  className="chip"
                  key={brand}
                  to="/catalogo"
                  search={{ brand }}
                  onClick={() => setMenu(false)}
                >
                  {brand}
                </Link>
              ))}
            </div>
            <Link
              className="block border-t pt-5"
              to="/"
              hash="atendimento"
              onClick={() => setMenu(false)}
            >
              Atendimento com a Luyse
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </>
  );
}
