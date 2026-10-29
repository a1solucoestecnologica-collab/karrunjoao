import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { brands, storeConfig, whatsappLink } from "@/data/store";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <img
            src={storeConfig.logo}
            width={200}
            height={105}
            alt="LSET7"
            className="footer-brand-logo"
            loading="lazy"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed opacity-75">
            Seu próximo cuidado começa aqui. Skincare, beleza coreana e ajuda para escolher no seu
            ritmo.
          </p>
          <Link to="/rotina" className="mt-5 inline-flex items-center gap-2 text-sm">
            Encontre sua rotina <ArrowUpRight size={16} />
          </Link>
        </div>
        <div>
          <p className="footer-title">Explore</p>
          <Link to="/catalogo">Todos os produtos</Link>
          <Link to="/rotina">Monte sua rotina</Link>
          <Link to="/" hash="descobertas">
            Descobertas
          </Link>
          <Link to="/" hash="conheca-luyse">
            Conheça a Luyse
          </Link>
        </div>
        <div>
          <p className="footer-title">Marcas</p>
          {brands.map((brand) => (
            <Link key={brand} to="/catalogo" search={{ brand }}>
              {brand}
            </Link>
          ))}
        </div>
        <div>
          <p className="footer-title">Vamos conversar?</p>
          <a href={whatsappLink()} target="_blank" rel="noreferrer">
            <MessageCircle size={15} /> (45) 99158-8887
          </a>
          <a className="break-all" href={`mailto:${storeConfig.email}`}>
            <Mail size={15} /> {storeConfig.email}
          </a>
          <a href={storeConfig.contactUrl} target="_blank" rel="noreferrer">
            Entrega, pagamento e trocas <ArrowUpRight size={15} />
          </a>
          <p className="mt-4 text-xs leading-relaxed opacity-65">
            O atendimento da loja ajuda você a conferir condições e detalhes antes de comprar.
          </p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>
          © {new Date().getFullYear()} LSET7 · CNPJ {storeConfig.cnpj}
        </span>
        <span>Prévia de apresentação · Sem processamento de pedidos</span>
      </div>
      <nav className="shell flex flex-wrap gap-5 py-6 text-sm" aria-label="Informações de compra">
        <a href="/lset/informacoes?tema=entrega">Entrega</a>
        <a href="/lset/informacoes?tema=pagamento">Pagamento</a>
        <a href="/lset/informacoes?tema=trocas">Trocas e devoluções</a>
        <a href="/lset/comparar">Comparar produtos</a>
      </nav>
    </footer>
  );
}
