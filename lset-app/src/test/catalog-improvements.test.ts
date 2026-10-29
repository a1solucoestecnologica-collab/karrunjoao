import { describe, it, expect } from "vitest";
import { products, matchesQuery, matchesSelection, productWhatsappLink } from "@/data/store";
describe("Escolha informada", () => {
  it("encontra o creme rosa por linguagem cotidiana", () => {
    const found = products.filter((p) => matchesQuery(p, "creme rosa da Medicube"));
    expect(found.some((p) => p.id === "medicube-pdrn-pink-collagen-capsule-cream")).toBe(true);
  });
  it("respeita o limite real da seleção econômica", () => {
    const found = products.filter((p) => matchesSelection(p, "ate100"));
    expect(found.length).toBeGreaterThan(0);
    expect(found.every((p) => p.price <= 100)).toBe(true);
  });
  it("inclui nome e link no atendimento contextual", () => {
    const p = products[0]!;
    const text = decodeURIComponent(productWhatsappLink(p));
    expect(text).toContain(p.name);
    expect(text).toContain(p.originalUrl);
  });
  it("mantém fontes oficiais nos guias enriquecidos", () => {
    for (const p of products.filter((p) => p.details?.verified)) {
      expect(p.details!.sources.length).toBeGreaterThan(0);
      expect(p.usageGuide?.sourceUrl).toMatch(/^https:/);
    }
  });
});
