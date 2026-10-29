import { Link } from "@tanstack/react-router";
import { Plus, Check, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { brl, stepLabel, productImage, isMaskCollection, type Product } from "@/data/store";
import { useCompare } from "@/lib/compare";
import { useCart } from "@/lib/cart";
export function ProductCard({ product }: { product: Product; compact?: boolean }) {
  const { add } = useCart();
  const compare = useCompare();
  const [added, setAdded] = useState(false);
  return (
    <article className="product-card group">
      <Link
        to="/produto/$id"
        params={{ id: product.id }}
        className="product-photo"
        onClick={() => {
          if (location.pathname === "/lset/catalogo") {
            sessionStorage.setItem("lset7-catalog-return", location.pathname + location.search);
            sessionStorage.setItem("lset7-catalog-scroll", String(scrollY));
          }
        }}
        aria-label={`Conhecer ${product.name}`}
      >
        {isMaskCollection(product) ? (
          <div className="mask-collection-art">
            <span>MIXSOON</span>
            <div className="mask-sachets">
              {[1, 2, 3].map((n) => (
                <i key={n} />
              ))}
            </div>
            <strong>Daily Mask</strong>
            <span>7 máscaras · imagem ilustrativa</span>
          </div>
        ) : (
          <img
            src={productImage(product)}
            alt={`${product.brand} ${product.name}`}
            width={480}
            height={480}
            loading="lazy"
            decoding="async"
          />
        )}
        <span className="product-step">{stepLabel(product.step)}</span>
        <ArrowUpRight className="product-arrow" size={18} />
      </Link>
      <div className="product-info">
        <p className="eyebrow">{product.brand}</p>
        <Link to="/produto/$id" params={{ id: product.id }} className="product-name">
          {product.name}
        </Link>
        <p className="product-benefit">{product.benefit}</p>
        <p className="product-size">{product.size || product.type}</p>
        <div className="mt-auto pt-3">
          <p className="text-lg font-bold">{brl(product.price)}</p>
          {product.installments && (
            <p className="mt-0.5 text-xs text-muted-foreground">
              {product.installments} na loja atual
            </p>
          )}
          <button
            disabled={!product.available}
            className="product-add"
            aria-label={`Adicionar ${product.name} à sacola`}
            onClick={() => {
              add(product.id);
              setAdded(true);
            }}
          >
            {added ? <Check size={16} /> : <Plus size={16} />}{" "}
            {product.available ? (added ? "Adicionar mais" : "Adicionar") : "Indisponível"}
          </button>
        </div>
        <label className="product-compare">
          <input
            type="checkbox"
            checked={compare.ids.includes(product.id)}
            disabled={compare.ids.length >= 3 && !compare.ids.includes(product.id)}
            onChange={() => compare.toggle(product.id)}
          />{" "}
          Comparar
        </label>
      </div>
    </article>
  );
}
