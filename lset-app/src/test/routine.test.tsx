import { describe, expect, it } from "vitest";
import { suggestRoutine, budgets, products } from "@/data/store";
describe("Monte sua rotina com o catálogo real", () => {
  it("mantém limpeza, hidratação e proteção na rotina inicial", () => {
    expect(suggestRoutine("primeiros-cuidados", "ate-500").map((p) => p.step)).toEqual([
      "limpeza",
      "hidratacao",
      "protecao",
    ]);
  });
  it("não remove passos essenciais para simular um orçamento inviável", () => {
    const routine = suggestRoutine("hidratacao", "ate-500");
    const minEssential = ["limpeza", "hidratacao", "protecao"].reduce(
      (sum, step) =>
        sum +
        Math.min(...products.filter((p) => p.step === step && p.available).map((p) => p.price)),
      0,
    );
    const total = routine.reduce((sum, p) => sum + p.price, 0);
    expect(total).toBeLessThanOrEqual(Math.max(budgets[0].max, minEssential));
    expect(routine.some((p) => p.step === "protecao")).toBe(true);
  });
  it("usa apenas produtos disponíveis e não repete etapas", () => {
    for (const need of ["hidratacao", "firmeza", "luminosidade", "primeiros-cuidados"] as const) {
      const routine = suggestRoutine(need, "500-800");
      expect(routine.every((p) => p.available)).toBe(true);
      expect(new Set(routine.map((p) => p.step)).size).toBe(routine.length);
    }
  });
});
