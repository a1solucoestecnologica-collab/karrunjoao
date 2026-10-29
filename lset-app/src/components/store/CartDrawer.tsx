import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { brl, productImage, getProduct, whatsappLink } from "@/data/store";
import { useCart } from "@/lib/cart";
export function CartDrawer() {
  const { open, setOpen, lastAdded, notices, lines, setQty, remove, total, count } = useCart();
  const mobile = useIsMobile();
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent
        side={mobile ? "bottom" : "right"}
        className={`flex w-full flex-col gap-0 p-0 sm:max-w-md ${mobile ? "max-h-[90dvh] rounded-t-2xl" : ""}`}
      >
        <SheetHeader className="border-b border-border p-5 text-left">
          <SheetTitle className="font-display text-3xl">Sua sacola</SheetTitle>
          <SheetDescription>
            {count
              ? `${count} ${count === 1 ? "item escolhido" : "itens escolhidos"} · do seu jeito, no seu ritmo.`
              : "Seu próximo cuidado pode começar com uma descoberta."}
          </SheetDescription>
        </SheetHeader>
        {lastAdded && (
          <p role="status" className="px-5 py-3 text-sm">
            Adicionado: <strong>{lastAdded}</strong>
          </p>
        )}
        {notices.map((n) => (
          <p role="status" className="px-5 py-2 text-sm" key={n}>
            {n}
          </p>
        ))}
        {lines.length ? (
          <ul className="min-h-0 flex-1 divide-y divide-border overflow-y-auto px-5">
            {lines.map((l) => {
              const p = getProduct(l.id);
              if (!p) return null;
              return (
                <li key={l.id} className="flex gap-3 py-5">
                  <Link
                    to="/produto/$id"
                    params={{ id: p.id }}
                    onClick={() => setOpen(false)}
                    className="shrink-0"
                  >
                    <img
                      src={productImage(p)}
                      alt={p.name}
                      width={72}
                      height={85}
                      className="h-24 w-20 bg-muted object-contain"
                    />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <p className="eyebrow">{p.brand}</p>
                    <p className="mt-1 text-sm font-medium leading-snug">{p.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{p.size}</p>
                    <div className="mt-3 flex flex-wrap items-center justify-between gap-2">
                      <div className="quantity-control small">
                        <button
                          onClick={() => setQty(l.id, l.qty - 1)}
                          aria-label={`Diminuir quantidade de ${p.name}`}
                        >
                          <Minus size={14} />
                        </button>
                        <span aria-live="polite">{l.qty}</span>
                        <button
                          onClick={() => setQty(l.id, l.qty + 1)}
                          aria-label={`Aumentar quantidade de ${p.name}`}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <strong className="text-sm">{brl(p.price * l.qty)}</strong>
                    </div>
                    <a
                      href={p.originalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex min-h-8 items-center gap-1 text-[10px] underline underline-offset-4"
                    >
                      Ver na loja atual <ArrowUpRight size={11} />
                    </a>
                  </div>
                  <button
                    onClick={() => remove(l.id)}
                    className="grid h-11 w-11 shrink-0 place-items-center text-muted-foreground"
                    aria-label={`Remover ${p.name}`}
                  >
                    <Trash2 size={16} />
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <div className="empty-state flex-1">
            <ShoppingBag size={35} />
            <h2>Encontre seu novo favorito.</h2>
            <p>Explore as marcas ou comece montando uma rotina.</p>
            <Link to="/catalogo" onClick={() => setOpen(false)} className="button-primary">
              Explorar produtos <ArrowRight size={16} />
            </Link>
            <Link to="/rotina" onClick={() => setOpen(false)} className="text-link">
              Monte sua rotina
            </Link>
          </div>
        )}
        {lines.length > 0 && (
          <div className="space-y-3 border-t border-border bg-secondary/30 p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm">Subtotal dos produtos</span>
              <strong className="text-2xl">{brl(total)}</strong>
            </div>
            <p className="text-[11px] leading-relaxed text-muted-foreground">
              Prévia de apresentação: esta sacola não envia pedidos e não processa pagamentos. Frete
              e condições são confirmados na loja atual.
            </p>
            <button onClick={() => setOpen(false)} className="button-dark w-full">
              Continuar escolhendo <ArrowRight size={16} />
            </button>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-11 items-center justify-center gap-2 text-xs font-semibold"
            >
              <MessageCircle size={16} /> Tirar dúvidas com a Luyse
            </a>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
