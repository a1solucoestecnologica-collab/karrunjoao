import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { getProduct } from "@/data/store";

type Line = { id: string; qty: number; priceAtAdd?: number };
type Ctx = {
  lastAdded: string;
  notices: string[];
  lines: Line[];
  count: number;
  total: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (id: string, qty?: number) => void;
  addMany: (ids: string[]) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
};

const CartContext = createContext<Ctx | null>(null);
const KEY = "lset7-sacola";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<Line[]>([]);
  const [lastAdded, setLastAdded] = useState("");
  const [notices, setNotices] = useState<string[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setNotices(
            parsed.flatMap((l) => {
              if (!l || typeof l.id !== "string") return [];
              const p = getProduct(l.id);
              if (!p) return ["Um item salvo deixou de constar no catálogo e foi removido."];
              if (!p.available) return [`${p.name}: indisponível no catálogo consultado.`];
              if (typeof l.priceAtAdd === "number" && l.priceAtAdd !== p.price)
                return [
                  `O preço de ${p.name} mudou desde sua seleção. O total usa o valor atual do catálogo.`,
                ];
              return [];
            }),
          );
          setLines(
            parsed
              .filter(
                (l): l is Line =>
                  !!l &&
                  typeof l.id === "string" &&
                  !!getProduct(l.id)?.available &&
                  Number.isInteger(l.qty) &&
                  l.qty > 0,
              )
              .map((l) => ({ ...l, qty: Math.min(l.qty, 99) })),
          );
        }
      }
    } catch {
      /* Ignore invalid saved carts and start fresh. */
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (ready) {
      try {
        localStorage.setItem(KEY, JSON.stringify(lines));
      } catch {
        /* Browsing remains usable when storage is unavailable. */
      }
    }
  }, [lines, ready]);

  const value = useMemo<Ctx>(() => {
    const add = (id: string, qty = 1) => {
      if (!getProduct(id)?.available || !Number.isInteger(qty) || qty < 1) return;
      setLines((ls) =>
        ls.some((l) => l.id === id)
          ? ls.map((l) => (l.id === id ? { ...l, qty: Math.min(99, l.qty + qty) } : l))
          : [...ls, { id, qty: Math.min(qty, 99), priceAtAdd: getProduct(id)!.price }],
      );
    };
    return {
      lastAdded,
      notices,
      lines,
      count: lines.reduce((s, l) => s + l.qty, 0),
      total: lines.reduce((s, l) => s + (getProduct(l.id)?.price ?? 0) * l.qty, 0),
      open,
      setOpen,
      add: (id, qty) => {
        add(id, qty);
        setLastAdded(getProduct(id)?.name || "");
        setOpen(true);
      },
      addMany: (ids) => {
        ids.forEach((id) => add(id));
        setLastAdded("Sua seleção de rotina");
        setOpen(true);
      },
      setQty: (id, qty) =>
        setLines((ls) =>
          qty <= 0
            ? ls.filter((l) => l.id !== id)
            : ls.map((l) =>
                l.id === id ? { ...l, qty: Math.min(99, Math.max(1, Math.floor(qty))) } : l,
              ),
        ),
      remove: (id) => setLines((ls) => ls.filter((l) => l.id !== id)),
    };
  }, [lines, open, lastAdded, notices]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const c = useContext(CartContext);
  if (!c) throw new Error("useCart fora do CartProvider");
  return c;
}
