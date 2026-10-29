import { useRef, useState } from "react";
import {
  Play,
  Share2,
  Mail,
  ArrowUpRight,
  Copy,
  Check,
  MessageCircle,
  Video,
  Clock,
  Info,
} from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { getUsageGuide, productWhatsappLink, type Product } from "@/data/store";

export function ProductUsageGuide({ product }: { product: Product }) {
  const guide = getUsageGuide(product);
  const video = guide.video;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [active, setActive] = useState(0);
  const [copied, setCopied] = useState(false);
  const [shareOpen, setShareOpen] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const [status, setStatus] = useState("");
  const [failed, setFailed] = useState(false);
  const goToStep = (index: number) => {
    setActive(index);
    const time = guide.steps[index]?.videoAt;
    const player = videoRef.current;
    if (player && time !== undefined && Number.isFinite(time) && time >= 0) {
      player.currentTime = time;
      void player
        .play()
        .catch(() => setStatus("Use os controles do vídeo para iniciar a reprodução."));
    }
  };
  const pageUrl = () =>
    new URL(`/lset/produto/${encodeURIComponent(product.id)}#guia-de-uso`, window.location.origin).href;
  const shareTitle = `Como usar ${product.name} — LSET7`;
  const shareText = `Conheça ${product.name}, da ${product.brand}, e acompanhe o guia de uso na LSET7.`;
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(pageUrl());
      setCopied(true);
      setStatus("Link copiado. Escolha uma conversa ou aplicativo para encaminhar.");
    } catch {
      setStatus("Selecione e copie o link abaixo para encaminhar.");
      setShareUrl(pageUrl());
      setShareOpen(true);
    }
  };
  const share = async () => {
    const url = pageUrl();
    setStatus("");
    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: shareText, url });
        return;
      } catch (error) {
        if (error && typeof error === "object" && "name" in error && error.name === "AbortError")
          return;
      }
    }
    setShareUrl(url);
    setShareOpen(true);
  };
  return (
    <section id="guia-de-uso" className="usage-guide" aria-labelledby="usage-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">Aprenda com a LSET7</p>
          <h2 id="usage-title">Seu cuidado, passo a passo.</h2>
          <p className="section-description">{guide.intro}</p>
        </div>
        <span className="guide-step-count">{guide.steps.length} etapas para acompanhar</span>
      </div>
      <div className="usage-guide-grid">
        <div className="guide-instructions">
          <div className="guide-product-line">
            <img src={product.images[0]} alt="" width={48} height={48} loading="lazy" />
            <div>
              <p className="eyebrow">{product.brand}</p>
              <h3>{product.name}</h3>
            </div>
          </div>
          <ol className="guide-steps">
            {guide.steps.map((step, i) => (
              <li key={`${i}-${step.title}`} data-active={active === i}>
                <button
                  className="guide-step-trigger"
                  onClick={() => goToStep(i)}
                  aria-expanded={active === i}
                  aria-controls={`guide-step-${product.id}-${i}`}
                >
                  <span className="guide-step-number">{String(i + 1).padStart(2, "0")}</span>
                  <span>{step.title}</span>
                  {video && step.videoAt !== undefined && (
                    <span className="guide-time">
                      <Play size={12} />
                      {Math.floor(step.videoAt / 60)}:
                      {String(Math.floor(step.videoAt % 60)).padStart(2, "0")}
                    </span>
                  )}
                </button>
                <div
                  id={`guide-step-${product.id}-${i}`}
                  hidden={active !== i}
                  className="guide-step-content"
                >
                  <p>{step.text}</p>
                  {i < guide.steps.length - 1 && (
                    <button className="text-link" onClick={() => goToStep(i + 1)}>
                      Próxima etapa <ArrowUpRight size={14} />
                    </button>
                  )}
                </div>
              </li>
            ))}
          </ol>
          {(guide.frequency || guide.amount) && (
            <dl className="guide-facts">
              {guide.frequency && (
                <div>
                  <dt>
                    <Clock size={15} /> Frequência
                  </dt>
                  <dd>{guide.frequency}</dd>
                </div>
              )}
              {guide.amount && (
                <div>
                  <dt>Quantidade</dt>
                  <dd>{guide.amount}</dd>
                </div>
              )}
            </dl>
          )}
          {guide.notes && (
            <p className="guide-notes">
              <Info size={16} />
              <span>{guide.notes}</span>
            </p>
          )}
          {guide.sourceUrl && (
            <a className="text-link mt-3" href={guide.sourceUrl} target="_blank" rel="noreferrer">
              {guide.sourceLabel || "Fonte das orientações"}
              <ArrowUpRight size={14} />
            </a>
          )}
          <a
            className="text-link mt-4"
            href={productWhatsappLink(product)}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={16} /> Quero ajuda com este cuidado
          </a>
        </div>
        <div className="guide-video-column">
          <div className="guide-video-heading">
            <Video size={18} />
            <div>
              <h3>Veja na prática.</h3>
              <p>{video?.description || "O uso do produto, explicado em vídeo."}</p>
            </div>
          </div>
          <div className={`guide-video-frame ${video?.aspectRatio === "16:9" ? "landscape" : ""}`}>
            {video && !failed ? (
              <video
                ref={videoRef}
                controls
                playsInline
                preload="none"
                poster={video.poster || product.images[0]}
                aria-label={`Tutorial de uso: ${product.name}`}
                onError={() => setFailed(true)}
              >
                {<source src={video.src} />}{" "}
                {video.captionsUrl && (
                  <track
                    kind="captions"
                    src={video.captionsUrl}
                    srcLang="pt-BR"
                    label="Português"
                    default
                  />
                )}
              </video>
            ) : (
              <div className="guide-video-placeholder">
                <img
                  src={video?.poster || product.images[0]}
                  alt=""
                  width={320}
                  height={320}
                  loading="lazy"
                />
                <span className="guide-video-icon">
                  <Video size={25} />
                </span>
                <strong>
                  {failed ? "Vídeo indisponível no momento" : "Tutorial em preparação"}
                </strong>
                <p>
                  {failed
                    ? "Confira as etapas ao lado ou tente abrir o arquivo original."
                    : "O vídeo de uso deste produto terá seu espaço aqui. Enquanto isso, acompanhe o guia por etapas."}
                </p>
              </div>
            )}
          </div>
          <div className="guide-social">
            <p className="eyebrow">Compartilhe esse cuidado</p>
            <p>Encaminhe o produto e seu guia de uso para quem você quiser.</p>
            <div className="guide-social-actions">
              <button className="button-dark" onClick={() => void share()}>
                <Share2 size={16} /> Compartilhar
              </button>
              <button className="text-link" onClick={() => void copyLink()}>
                {copied ? <Check size={15} /> : <Copy size={15} />}{" "}
                {copied ? "Link copiado" : "Copiar link"}
              </button>
            </div>
            <p role="status" aria-live="polite" className="guide-status">
              {status}
            </p>
          </div>
          <Dialog open={shareOpen} onOpenChange={setShareOpen}>
            <DialogContent className="max-w-md">
              <DialogTitle className="font-display text-3xl">Encaminhar esse cuidado</DialogTitle>
              <DialogDescription>
                Escolha onde compartilhar o produto e o guia de uso.
              </DialogDescription>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <a
                  className="button-dark"
                  href={`https://wa.me/?text=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={17} /> WhatsApp
                </a>
                <a
                  className="button-dark"
                  href={`https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Share2 size={17} /> Telegram
                </a>
                <a
                  className="chip"
                  href={`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(`${shareText}\n${shareUrl}`)}`}
                >
                  <Mail size={17} /> E-mail
                </a>
                <button className="chip" onClick={() => void copyLink()}>
                  {copied ? <Check size={17} /> : <Copy size={17} />}{" "}
                  {copied ? "Link copiado" : "Copiar link"}
                </button>
              </div>
              <label className="mt-3 text-xs font-semibold" htmlFor={`share-url-${product.id}`}>
                Link para encaminhar
              </label>
              <input
                id={`share-url-${product.id}`}
                readOnly
                value={shareUrl}
                onFocus={(e) => e.currentTarget.select()}
                className="min-h-11 w-full rounded border border-border bg-muted px-3 text-xs"
              />
              <p role="status" aria-live="polite" className="guide-status">
                {status}
              </p>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
}
