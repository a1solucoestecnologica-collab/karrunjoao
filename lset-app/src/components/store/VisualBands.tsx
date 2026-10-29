import { Link } from "@tanstack/react-router";
import { ArrowRight, Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { visualBands, getProduct } from "@/data/store";

export function VideoBand() {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const manuallyPaused = useRef(false);
  const [muted, setMuted] = useState(true);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) video.pause();
        else if (!reduced && !manuallyPaused.current)
          void video.play().catch(() => setPlaying(false));
      },
      { threshold: 0.25 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);
  const toggle = () => {
    const video = ref.current;
    if (!video) return;
    if (video.paused) {
      manuallyPaused.current = false;
      void video.play().catch(() => setPlaying(false));
    } else {
      manuallyPaused.current = true;
      video.pause();
    }
  };
  return (
    <section
      className="video-band relative mt-8 isolate overflow-hidden bg-secondary"
      aria-label="O universo LSET7"
    >
      <video
        ref={ref}
        poster={visualBands.video.poster}
        muted={muted}
        loop
        playsInline
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onError={() => setFailed(true)}
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        aria-label="Cena de skincare com sérum e creme"
      >
        <source src={visualBands.video.webm} type="video/webm" />
        <source src={visualBands.video.src} type="video/mp4" />
      </video>
      <div className="video-band-shade absolute inset-0 -z-10" />
      <div className="flex min-h-[380px] items-center px-6 py-16 md:min-h-[440px] md:px-12">
        <div className="max-w-sm">
          <p className="text-xs font-semibold uppercase text-primary">
            {visualBands.video.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight md:text-5xl">
            {visualBands.video.title}
          </h2>
          <p className="mt-4 max-w-64 text-sm text-foreground/80">{visualBands.video.text}</p>
          <Button asChild className="mt-6 min-h-11 rounded-full px-6">
            <Link to="/rotina">
              {visualBands.video.cta}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
      {!failed && (
        <div className="absolute bottom-4 right-4 flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full bg-background/90"
            onClick={toggle}
            aria-label={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
            title={playing ? "Pausar vídeo" : "Reproduzir vídeo"}
          >
            {playing ? <Pause /> : <Play />}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-11 w-11 rounded-full bg-background/90"
            onClick={() => setMuted((value) => !value)}
            aria-label={muted ? "Ativar som" : "Silenciar vídeo"}
            title={muted ? "Ativar som" : "Silenciar vídeo"}
          >
            {muted ? <VolumeX /> : <Volume2 />}
          </Button>
        </div>
      )}
    </section>
  );
}

export function ImageBand() {
  return (
    <section className="explore-bands" aria-label="Seleções para o seu cuidado">
      {visualBands.tiles.map((tile) => {
        const p = getProduct(tile.productId);
        return (
          <Link
            key={tile.need}
            to="/catalogo"
            search={{ need: tile.need }}
            className="explore-tile"
          >
            <div>
              <p className="eyebrow">Escolha seu foco</p>
              <h3>{tile.title}</h3>
              <p>{tile.text}</p>
              <ArrowRight size={18} />
            </div>
            {p && (
              <img
                src={p.images[0]}
                width={240}
                height={240}
                alt={`${p.brand} ${p.name}`}
                loading="lazy"
              />
            )}
          </Link>
        );
      })}
    </section>
  );
}
