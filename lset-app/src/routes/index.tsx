import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  MessageCircle,
  PackageCheck,
  Wallet,
  Sparkles,
} from "lucide-react";
import { ProductCard } from "@/components/store/ProductCard";
import { VideoBand } from "@/components/store/VisualBands";
import {
  brands,
  brl,
  catalogCategories,
  categoryPresentation,
  selections,
  essentialRoutine,
  featuredIds,
  discoveryIds,
  getProduct,
  needs,
  products,
  productImage,
  isMaskCollection,
  steps,
  storeConfig,
  whatsappLink,
} from "@/data/store";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "LSET7 — Seu próximo cuidado começa aqui" },
      {
        name: "description",
        content:
          "Explore skincare e beleza coreana da Medicube, Mixsoon e SKIN1004. Monte sua rotina e escolha com a ajuda da Luyse.",
      },
    ],
  }),
  component: Home,
});
function Home() {
  const kit = essentialRoutine.productIds.flatMap((id) => {
    const p = getProduct(id);
    return p?.available ? [p] : [];
  });
  const highlights = featuredIds.flatMap((id) => {
    const p = getProduct(id);
    return p?.available ? [p] : [];
  });
  const discoveries = discoveryIds.flatMap((id) => {
    const p = getProduct(id);
    return p?.available ? [p] : [];
  });
  const total = kit.reduce((s, p) => s + p.price, 0);
  return (
    <main id="conteudo">
      <div className="shell">
        <section className="home-hero" aria-labelledby="hero-title">
          <div className="hero-editorial">
            <div className="hero-copy">
              <p className="eyebrow">Skincare & beleza coreana</p>
              <h1 id="hero-title">
                Seu próximo
                <br />
                cuidado começa <em>aqui.</em>
              </h1>
              <p className="hero-description">
                Marcas que você quer conhecer.
                <br />
                Uma rotina que faz sentido para você.
              </p>
              <div className="hero-actions">
                <Link to="/rotina" className="button-primary">
                  Monte sua rotina <ArrowRight size={17} />
                </Link>
                <Link to="/catalogo" className="text-link">
                  Explorar produtos <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
            <div className="hero-composition hero-single" aria-label="Destaque Medicube">
              <Link to="/produto/$id" params={{ id: products[0]!.id }}>
                <img
                  src={productImage(products[0]!)}
                  alt="Medicube PDRN Pink Collagen Capsule Cream"
                  width={600}
                  height={700}
                  fetchPriority="high"
                />
                <span>MEDICUBE · Conheça a fórmula →</span>
              </Link>
            </div>
          </div>
          <aside className="routine-preview">
            <div className="flex items-center justify-between">
              <p className="eyebrow">Para começar</p>
              <span className="text-xs text-muted-foreground">01 / 02 / 03</span>
            </div>
            <h2>{essentialRoutine.title}</h2>
            <p className="text-sm text-muted-foreground">
              Limpar, hidratar e proteger. Conheça uma seleção para a manhã.
            </p>
            <ol className="routine-mini">
              {kit.map((p, i) => (
                <li key={p.id}>
                  <Link to="/produto/$id" params={{ id: p.id }}>
                    <span className="routine-number">0{i + 1}</span>
                    <img src={productImage(p)} width={48} height={48} alt="" />
                    <div>
                      <span>{steps.find((s) => s.id === p.step)?.label}</span>
                      <p>
                        {p.brand} · {p.name}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ol>
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-xs text-muted-foreground">3 itens individuais</p>
                <p className="text-xl font-bold">{brl(total)}</p>
              </div>
              <Link to="/rotina" search={{ need: "primeiros-cuidados" }} className="button-dark">
                Personalizar <ArrowRight size={15} />
              </Link>
            </div>
          </aside>
        </section>
        <section className="entry-strip" aria-label="Escolha pelo seu orçamento">
          <div>
            <p className="eyebrow">Seu primeiro cuidado</p>
            <h2 className="font-display text-2xl">
              Descobertas a partir de{" "}
              {brl(Math.min(...products.filter((p) => p.available).map((p) => p.price)))}
            </h2>
          </div>
          <Link
            to="/catalogo"
            search={{ price: "ate-100", sort: "price-asc" }}
            className="text-link"
          >
            Ver opções até R$ 100 →
          </Link>
          <Link to="/comparar" search={{ ids: "" }} className="text-link">
            Comparar antes de escolher →
          </Link>
        </section>
        <section id="marcas" className="brand-strip" aria-label="Compre por marca">
          <span className="eyebrow">
            As marcas da sua rotina <b className="edit-number">01 / CURADORIA</b>
          </span>
          <div>
            {brands.map((brand) => (
              <Link key={brand} to="/catalogo" search={{ brand }}>
                {brand}
              </Link>
            ))}
          </div>
        </section>
        <section className="focus-strip" aria-label="Explore por necessidade">
          <p>O que sua pele procura?</p>
          <div>
            {needs.map((n) => (
              <Link key={n.id} to="/catalogo" search={{ need: n.id }} className="chip">
                {n.label}
                <ArrowUpRight size={13} />
              </Link>
            ))}
          </div>
        </section>
        <section className="shopping-section" id="mais-vendidos">
          <div>
            <div className="section-heading">
              <div>
                <p className="eyebrow">Seu próximo favorito</p>
                <h2>
                  O universo K-beauty,
                  <br className="sm:hidden" /> na sua rotina.
                </h2>
              </div>
              <Link to="/catalogo" className="text-link">
                Ver todos <ArrowRight size={16} />
              </Link>
            </div>
            <div className="product-grid">
              {highlights.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
          <aside id="atendimento" className="service-card">
            <div className="flex items-center gap-3">
              <img
                src={storeConfig.founderPhoto}
                width={64}
                height={64}
                alt="Luyse"
                loading="lazy"
                className="h-16 w-16 rounded-full object-cover object-[55%_25%]"
              />
              <div>
                <p className="text-sm font-semibold">Luyse</p>
                <p className="text-xs opacity-75">À frente da LSET7</p>
              </div>
            </div>
            <h2>Sua escolha, com a Luyse.</h2>
            <p>Está começando ou ficou em dúvida? Vamos conversar sobre seus próximos cuidados.</p>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="button-light">
              <MessageCircle size={17} /> Fale com a Luyse
            </a>
            <span className="mt-4 block text-xs opacity-65">Atendimento pelo WhatsApp</span>
            <div className="service-bottom">
              <PackageCheck size={20} />
              <div>
                <strong>Entrega & pagamento</strong>
                <p>Confira frete e parcelamento na loja atual.</p>
                <a href={storeConfig.contactUrl} target="_blank" rel="noreferrer">
                  Consultar condições ↗
                </a>
              </div>
            </div>
          </aside>
        </section>
        <section className="section-space category-directory" aria-labelledby="categories-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Encontre seu caminho</p>
              <h2 id="categories-title">Encontre o seu próximo cuidado.</h2>
              <p className="category-intro">Explore por categoria, no seu ritmo.</p>
            </div>
            <Link to="/catalogo" className="text-link">
              Explorar catálogo <ArrowRight size={16} />
            </Link>
          </div>
          <div className="category-grid">
            {catalogCategories.map((c) => {
              const presentation = categoryPresentation[c.id];
              const entries = products.filter((p) => p.details?.category === c.id);
              const p =
                getProduct(presentation?.productId || "") ||
                entries.find((p) => !isMaskCollection(p));
              return (
                <Link
                  key={c.id}
                  to="/catalogo"
                  search={{ category: c.id }}
                  className="category-card"
                  data-tone={presentation?.tone}
                  aria-label={`${c.label}: ${entries.length} ${entries.length === 1 ? "produto" : "produtos"}`}
                >
                  <div className="category-image">
                    {p && (
                      <img
                        src={productImage(p)}
                        width={180}
                        height={180}
                        alt=""
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </div>
                  <div className="category-copy">
                    <span className="category-count">
                      {String(entries.length).padStart(2, "0")}{" "}
                      {entries.length === 1 ? "produto" : "produtos"}
                    </span>
                    <h3>{c.label}</h3>
                    <p>{presentation?.description}</p>
                  </div>
                  <span className="category-go" aria-hidden="true">
                    <ArrowUpRight size={17} />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>
        <VideoBand />
        <section id="descobertas" className="section-space">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Novidades para descobrir</p>
              <h2>Um novo motivo para se cuidar.</h2>
              <p className="section-description">
                Seleções que aparecem entre os lançamentos da loja atual.
              </p>
            </div>
            <Link to="/catalogo" search={{ selection: "descobertas" }} className="text-link">
              Ver seleção <ArrowRight size={16} />
            </Link>
          </div>
          <div className="discovery-grid">
            {discoveries.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
        <section className="entry-strip" aria-label="Seleções do catálogo">
          {selections.map((s) => (
            <Link key={s.id} to="/catalogo" search={{ selection: s.id }} className="chip">
              {s.label} →
            </Link>
          ))}
        </section>
        <section className="education-section">
          <div>
            <p className="eyebrow">Skincare sem complicação</p>
            <h2>
              Poucos passos.
              <br />
              <em>Mais clareza.</em>
            </h2>
            <p>
              Você não precisa começar com tudo. Entenda o papel de cada etapa e encontre o seu
              ritmo.
            </p>
            <Link to="/rotina" className="text-link">
              Construir minha rotina <ArrowRight size={16} />
            </Link>
          </div>
          <div className="education-grid">
            {steps
              .filter((s) => ["limpeza", "tratamento", "hidratacao", "protecao"].includes(s.id))
              .map((s, i) => (
                <Link key={s.id} to="/catalogo" search={{ step: s.id }}>
                  <span>0{i + 1}</span>
                  <h3>{s.label}</h3>
                  <p>{s.text}</p>
                  <ArrowUpRight size={17} />
                </Link>
              ))}
          </div>
        </section>
        <section id="conheca-luyse" className="founder-section">
          <div className="founder-photo">
            <img
              src={storeConfig.founderPhoto}
              alt="Luyse, à frente da LSET7"
              width={640}
              height={640}
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow">Por trás da LSET7</p>
            <h2>Prazer, Luyse.</h2>
            <p>Escolher um cuidado pode ser mais simples quando a gente tem com quem conversar.</p>
            <p className="text-sm text-muted-foreground">
              Uma seleção de beleza coreana para descobrir no seu ritmo, com orientação próxima em
              cada escolha.
            </p>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="button-primary">
              Vamos conversar <MessageCircle size={17} />
            </a>
          </div>
        </section>
        <div className="closing-strip">
          <span>
            <Sparkles size={17} /> Marcas para descobrir
          </span>
          <span>
            <Wallet size={17} /> Preços para comparar
          </span>
          <span>
            <MessageCircle size={17} /> Ajuda para escolher
          </span>
        </div>
      </div>
    </main>
  );
}
