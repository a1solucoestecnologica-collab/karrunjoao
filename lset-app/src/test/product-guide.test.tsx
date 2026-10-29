import { afterEach, describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ProductUsageGuide } from "@/components/store/ProductUsageGuide";
import { products, type Product } from "@/data/store";
afterEach(() => {
  cleanup();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});
const product = products.find(product => !product.usageGuide)!;
const withVideo: Product = {
  ...product,
  usageGuide: {
    intro: "Tutorial revisado para este produto.",
    steps: [
      { title: "Preparar", text: "Confira o rótulo." },
      { title: "Acompanhar o tutorial", text: "Veja a demonstração.", videoAt: 12 },
    ],
    video: {
      src: "/lset/videos/tutorial-produto.mp4",
      downloadUrl: "/lset/videos/original-produto.mp4",
      fileName: "tutorial-lset7.mp4",
      captionsUrl: "/lset/videos/tutorial.vtt",
    },
    socialCaption: "Legenda do produto correto.",
  },
};
describe("Guia do produto", () => {
  it("não usa um vídeo de outro produto nem promete um arquivo ausente", () => {
    const { container } = render(<ProductUsageGuide product={product} />);
    expect(container.querySelector("video")).toBeNull();
    expect(screen.queryByRole("button", { name: /Baixar/ })).toBeNull();
    expect(screen.getByRole("button", { name: "Compartilhar" })).toBeEnabled();
    expect(screen.getByText("Tutorial em preparação")).toBeVisible();
  });
  it("mantém o vídeo e as legendas associados ao produto e navega para o trecho correto", async () => {
    const play = vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
    const { container } = render(<ProductUsageGuide product={withVideo} />);
    const video = container.querySelector("video")!;
    expect(video.querySelector("source")).toHaveAttribute("src", "/lset/videos/tutorial-produto.mp4");
    expect(video.querySelector("track")).toHaveAttribute("src", "/lset/videos/tutorial.vtt");
    fireEvent.click(screen.getByRole("button", { name: /Acompanhar o tutorial/ }));
    await waitFor(() => expect(play).toHaveBeenCalled());
    expect(video.currentTime).toBe(12);
  });
  it("abre o compartilhamento nativo com o link do guia do produto", async () => {
    const share = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "share", { configurable: true, value: share });
    render(<ProductUsageGuide product={withVideo} />);
    fireEvent.click(screen.getByRole("button", { name: "Compartilhar" }));
    await waitFor(() =>
      expect(share).toHaveBeenCalledWith(
        expect.objectContaining({
          url: expect.stringContaining(`/produto/${product.id}#guia-de-uso`),
        }),
      ),
    );
    expect(screen.queryByRole("dialog")).toBeNull();
  });
  it("oferece destinos quando o menu nativo não existe", async () => {
    Object.defineProperty(navigator, "share", { configurable: true, value: undefined });
    render(<ProductUsageGuide product={withVideo} />);
    fireEvent.click(screen.getByRole("button", { name: "Compartilhar" }));
    expect(await screen.findByRole("dialog")).toBeVisible();
    expect(screen.getByRole("link", { name: "WhatsApp" })).toHaveAttribute(
      "href",
      expect.stringContaining("https://wa.me/?text="),
    );
    expect(screen.getByRole("link", { name: "Telegram" })).toHaveAttribute(
      "href",
      expect.stringContaining(encodeURIComponent(`#guia-de-uso`)),
    );
  });
  it("respeita o cancelamento sem abrir outro menu", async () => {
    Object.defineProperty(navigator, "share", {
      configurable: true,
      value: vi.fn().mockRejectedValue(new DOMException("cancelado", "AbortError")),
    });
    render(<ProductUsageGuide product={product} />);
    fireEvent.click(screen.getByRole("button", { name: "Compartilhar" }));
    await waitFor(() => expect(navigator.share).toHaveBeenCalled());
    expect(screen.queryByRole("dialog")).toBeNull();
  });
  it("copia o link do guia, sem baixar um arquivo", async () => {
    const writeText = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
    render(<ProductUsageGuide product={withVideo} />);
    fireEvent.click(screen.getByRole("button", { name: "Copiar link" }));
    await waitFor(() =>
      expect(writeText).toHaveBeenCalledWith(
        expect.stringContaining(`/produto/${product.id}#guia-de-uso`),
      ),
    );
    expect(screen.queryByRole("button", { name: /Baixar/ })).toBeNull();
  });
});
