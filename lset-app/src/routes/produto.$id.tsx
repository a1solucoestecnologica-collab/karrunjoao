import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Minus, Plus, ArrowUpRight, MessageCircle, ZoomIn, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ProductUsageGuide } from "@/components/store/ProductUsageGuide";
import { ProductCard } from "@/components/store/ProductCard";
import {
  brl,
  productImage,
  getProduct,
  needLabel,
  products,
  stepLabel,
  steps,
  productWhatsappLink,
} from "@/data/store";
import { useCart } from "@/lib/cart";
export const Route = createFileRoute("/produto/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — LSET7` },
          { property: "og:title", content: `${loaderData.product.name} — LSET7` },
          { property: "og:description", content: loaderData.product.description },
          ...(loaderData.product.details?.gallery[0]
            ? [{ property: "og:image", content: loaderData.product.details.gallery[0].src }]
            : []),
          { name: "description", content: loaderData.product.benefit },
        ]
      : [{ title: "Produto não encontrado — LSET7" }],
  }),
  component: ProductPage,
});
function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const [img, setImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [zoom, setZoom] = useState(false);
  const [added, setAdded] = useState(false);
  const [returnUrl, setReturnUrl] = useState("/lset/catalogo");
  const [sticky, setSticky] = useState(false);
  const { add, open } = useCart();
  useEffect(() => {
    const url = sessionStorage.getItem("lset7-catalog-return");
    if (url?.startsWith("/lset/catalogo?")) setReturnUrl(url);
    const update = () => {
      const purchase = document.querySelector(".detail-purchase")?.getBoundingClientRect();
      const guide = document.getElementById("guia-de-uso")?.getBoundingClientRect();
      setSticky(
        !!purchase &&
          purchase.bottom < 0 &&
          !(guide && guide.top < innerHeight && guide.bottom > 0),
      );
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, [p.id]);
  useEffect(() => {
    setImg(0);
    setQty(1);
    setAdded(false);
  }, [p.id]);
  const related = products
    .filter(
      (x) =>
        x.id !== p.id &&
        x.available &&
        x.step !== p.step &&
        ["limpeza", "hidratacao", "protecao"].includes(x.step),
    )
    .filter((x, i, a) => a.findIndex((y) => y.step === x.step) === i)
    .slice(0, 3);
  const gallery = [
    ...new Set([
      productImage(p),
      ...(p.details?.gallery
        .filter((_, i) => i > 0 || !productImage(p).startsWith("/lset/catalog/clean/"))
        .map((g) => g.src) || []),
      ...p.images,
    ]),
  ];
  return (
    <main id="conteudo" className="shell py-7 md:py-10">
      <nav className="mb-6 flex flex-wrap gap-2 text-xs text-muted-foreground" aria-label="Trilha">
        <Link to="/">Início</Link>
        <span>/</span>
        <a href={returnUrl} onClick={() => sessionStorage.setItem("lset7-restore-catalog", "1")}>
          Voltar aos produtos
        </a>
        <span>/</span>
        <Link to="/catalogo" search={{ brand: p.brand }}>
          {p.brand}
        </Link>
      </nav>
      <div className="product-detail">
        <div className="product-gallery">
          <button
            className="detail-photo"
            onClick={() => setZoom(true)}
            aria-label={`Ampliar imagem de ${p.name}`}
          >
            <img
              src={gallery[img]}
              alt={`${p.brand} ${p.name}`}
              width={640}
              height={640}
              fetchPriority="high"
            />
            <span>
              <ZoomIn size={16} /> Ampliar
            </span>
          </button>
          {p.usageGuide?.video && (
            <a
              href="#guia-de-uso"
              className="mt-3 flex min-h-20 items-center gap-4 rounded-xl border p-3"
            >
              <img
                src={p.usageGuide.video.poster}
                alt="Prévia do tutorial"
                width={48}
                height={70}
                className="h-16 w-12 object-cover"
              />
              <span className="text-sm">
                ▶ Assistir ao tutorial de uso
                <br />
                <small>Veja a demonstração e o guia completo</small>
              </span>
            </a>
          )}
          {gallery.length > 1 && (
            <div className="gallery-thumbnails">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setImg(i)}
                  aria-label={`Imagem ${i + 1}`}
                  aria-pressed={i === img}
                  className="h-20 w-20 border border-border"
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="product-summary">
          <Link to="/catalogo" search={{ brand: p.brand }} className="eyebrow">
            {p.brand} · K-beauty
          </Link>
          <h1>{p.name}</h1>
          <p className="mt-3 text-sm text-muted-foreground">
            {p.type}
            {p.size && ` · ${p.size}`}
          </p>
          <p className="mt-5 text-sm leading-relaxed">{p.details?.summary || p.benefit}</p>
          {p.details?.texture && <p className="mt-2 text-sm">Textura: {p.details.texture}</p>}
          <p className="mt-2 text-sm">
            {p.available ? "Disponível no catálogo consultado" : "Indisponível"}
          </p>
          {!!p.details?.skinTypes.length && (
            <p className="mt-2 text-sm">
              Para quem: {p.details.skinTypes.join(", ")}, conforme a ficha do fabricante.
            </p>
          )}
          <div className="product-secondary-actions">
            <a className="text-link" href={`/lset/rotina?product=${p.id}`}>
              Adicionar à minha rotina →
            </a>
            <a className="text-link" href={`/lset/comparar?ids=${p.id}`}>
              Comparar com outra opção →
            </a>
          </div>
          <div className="detail-price">
            <p>{brl(p.price)}</p>
            {p.installments && <span>{p.installments} na loja atual</span>}
          </div>
          <div className="flex flex-wrap gap-2">
            <Link to="/catalogo" search={{ step: p.step }} className="chip">
              {stepLabel(p.step)}
            </Link>
            {p.needs
              .filter((n) => needLabel(n) !== stepLabel(p.step))
              .map((n) => (
                <Link key={n} to="/catalogo" search={{ need: n }} className="chip">
                  {needLabel(n)}
                </Link>
              ))}
          </div>
          <div className="detail-purchase">
            <div className="quantity-control">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                disabled={qty === 1}
                aria-label="Diminuir quantidade"
              >
                <Minus size={16} />
              </button>
              <span aria-live="polite">{qty}</span>
              <button
                onClick={() => setQty(Math.min(99, qty + 1))}
                disabled={qty === 99}
                aria-label="Aumentar quantidade"
              >
                <Plus size={16} />
              </button>
            </div>
            <button
              disabled={!p.available}
              onClick={() => {
                add(p.id, qty);
                setAdded(true);
              }}
              className="button-primary flex-1"
            >
              {added ? <Check size={17} /> : <Plus size={17} />}{" "}
              {p.available ? "Adicionar à sacola" : "Indisponível"}
            </button>
          </div>
          <a className="text-link mt-3" href={p.originalUrl} target="_blank" rel="noreferrer">
            Ver condições e comprar na loja atual <ArrowUpRight size={16} />
          </a>
          <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
            Preço consultado em {p.sourceDate}. Esta prévia não registra pedidos. Confirme
            disponibilidade e pagamento na loja atual.
          </p>
          <a href="#guia-de-uso" className="text-link mt-4">
            Ver guia de uso e vídeo <ArrowUpRight size={16} />
          </a>
          <div className="detail-step">
            <span className="eyebrow">Onde entra na rotina</span>
            <h2>{stepLabel(p.step)}</h2>
            <p>{steps.find((s) => s.id === p.step)?.text}</p>
          </div>
          <Accordion type="multiple" defaultValue={["sobre"]} className="mt-5">
            <AccordionItem value="sobre">
              <AccordionTrigger>Sobre este cuidado</AccordionTrigger>
              <AccordionContent>{p.description}</AccordionContent>
            </AccordionItem>
            <AccordionItem value="uso">
              <AccordionTrigger>Como usar</AccordionTrigger>
              <AccordionContent>
                {p.howTo}
                <a href={p.originalUrl} target="_blank" rel="noreferrer" className="text-link mt-2">
                  Conferir detalhes do produto <ArrowUpRight size={14} />
                </a>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="cuidados">
              <AccordionTrigger>Indicação e cuidados</AccordionTrigger>
              <AccordionContent>
                {p.indication} Consulte os ingredientes do rótulo, especialmente se tiver
                sensibilidade.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="entrega">
              <AccordionTrigger>Entrega, pagamento e trocas</AccordionTrigger>
              <AccordionContent>
                Consulte as condições vigentes na loja atual ou fale com o atendimento.
                <a href={p.originalUrl} target="_blank" rel="noreferrer" className="text-link mt-2">
                  Ver produto na loja atual <ArrowUpRight size={14} />
                </a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <a
            href={productWhatsappLink(p)}
            target="_blank"
            rel="noreferrer"
            className="text-link mt-5"
          >
            <MessageCircle size={16} /> Ficou em dúvida? Fale com a Luyse
          </a>
        </div>
      </div>
      {p.details && (
        <section className="section-space product-facts">
          <h2 className="font-display text-3xl">Conheça a fórmula</h2>
          <div className="ingredient-grid">
            {p.details.ingredients.map((x) => (
              <div className="rounded-xl border p-4" key={x.name}>
                <h3 className="font-semibold">{x.name}</h3>
                <p className="mt-2 text-sm">{x.role}</p>
              </div>
            ))}
          </div>
          {p.details.composition && (
            <details className="mt-5 rounded-xl border p-4">
              <summary>Composição completa (INCI)</summary>
              <p className="mt-3 break-words text-sm leading-relaxed">{p.details.composition}</p>
            </details>
          )}
          <h3 className="mt-6 font-semibold">Antes de usar</h3>
          {p.details.care.map((x) => (
            <p className="mt-2 text-sm" key={x}>
              {x}
            </p>
          ))}
          {p.details.sources.map((x) => (
            <a
              className="text-link mt-3 mr-4"
              key={x.url}
              href={x.url}
              target="_blank"
              rel="noreferrer"
            >
              {x.label} ↗
            </a>
          ))}
          {p.details.faqs.length > 0 && (
            <h3 className="mt-6 font-semibold">Dúvidas sobre este produto</h3>
          )}
          {p.details.faqs.map((x) => (
            <details className="mt-3 rounded-xl border p-4" key={x.question}>
              <summary>{x.question}</summary>
              <p className="mt-3 text-sm">{x.answer}</p>
            </details>
          ))}
        </section>
      )}
      <ProductUsageGuide key={p.id} product={p} />
      <section className="section-space">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Complete sua escolha com informação</p>
            <h2>Outras etapas para conhecer</h2>
          </div>
          <Link to="/catalogo" search={{ brand: p.brand }} className="text-link">
            Ver marca <ArrowUpRight size={16} />
          </Link>
        </div>
        <p className="mb-5 text-sm text-muted-foreground">
          Seleção por etapas básicas diferentes da atual. Confira a indicação de cada produto antes
          de combinar tratamentos.
        </p>
        <div className="discovery-grid">
          {related.map((x) => (
            <ProductCard key={x.id} product={x} />
          ))}
        </div>
      </section>
      {sticky && !open && !zoom && (
        <aside className="mobile-purchase">
          <div>
            <span className="text-xs">{p.size}</span>
            <strong className="block">{brl(p.price)}</strong>
          </div>
          <button
            className="button-primary"
            disabled={!p.available}
            onClick={() => {
              add(p.id, qty);
              setAdded(true);
            }}
          >
            Adicionar à sacola
          </button>
        </aside>
      )}
      <Dialog open={zoom} onOpenChange={setZoom}>
        <DialogContent className="max-w-3xl">
          <DialogTitle>
            {p.brand} · {p.name}
          </DialogTitle>
          <DialogDescription>Imagem do produto no catálogo da LSET7.</DialogDescription>
          <img
            src={gallery[img]}
            alt={`${p.brand} ${p.name}`}
            className="max-h-[65vh] w-full object-contain"
          />
        </DialogContent>
      </Dialog>
    </main>
  );
}
