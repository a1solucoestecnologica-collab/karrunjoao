import { createContext, useContext, useState, type ReactNode } from "react";
import { products } from "@/data/store";
const Context = createContext<{ ids: string[]; toggle: (id: string) => void }>({
  ids: [],
  toggle: () => {},
});
export function CompareProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  return (
    <Context.Provider
      value={{
        ids,
        toggle: (id) =>
          setIds((xs) =>
            xs.includes(id)
              ? xs.filter((x) => x !== id)
              : xs.length < 3 && products.some((p) => p.id === id)
                ? [...xs, id]
                : xs,
          ),
      }}
    >
      {children}
      {ids.length > 0 && (
        <aside className="compare-tray" aria-label="Produtos para comparar">
          <span>{ids.length}/3 selecionados</span>
          <a className="button-dark" href={`/lset/comparar?ids=${ids.join(",")}`}>
            Comparar agora
          </a>
          <button aria-label="Limpar comparação" onClick={() => setIds([])}>
            Limpar
          </button>
        </aside>
      )}
    </Context.Provider>
  );
}
export const useCompare = () => useContext(Context);
