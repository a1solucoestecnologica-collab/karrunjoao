import { createFileRoute } from "@tanstack/react-router";
import { policyContent, whatsappLink } from "@/data/store";
export const Route = createFileRoute("/informacoes")({
  validateSearch: (s: Record<string, unknown>) => ({
    tema: s["tema"] === "pagamento" || s["tema"] === "trocas" ? s["tema"] : "entrega",
  }),
  component: Information,
});
function Information() {
  const { tema } = Route.useSearch();
  const data = policyContent[tema as keyof typeof policyContent];
  return (
    <main id="conteudo" className="shell py-12">
      <nav className="flex flex-wrap gap-4">
        {Object.entries(policyContent).map(([k, v]) => (
          <a className="chip" key={k} href={`/lset/informacoes?tema=${k}`}>
            {v.title}
          </a>
        ))}
      </nav>
      <h1 className="mt-8 font-display text-4xl">{data.title}</h1>
      <p className="mt-4">{data.intro}</p>
      {data.paragraphs.map((p) => (
        <p className="mt-4 max-w-2xl leading-relaxed" key={p}>
          {p}
        </p>
      ))}
      <a className="button-primary mt-6" href={whatsappLink()} target="_blank" rel="noreferrer">
        Falar com a Luyse
      </a>
    </main>
  );
}
