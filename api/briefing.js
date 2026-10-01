const MAX_BODY_SIZE = 150000;

export default async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ ok: false, message: 'Método não permitido.' });
  }
  const recipient = process.env.BRIEFING_TO_EMAIL;
  if (!recipient) return response.status(503).json({ ok: false, message: 'O recebimento por e-mail ainda não foi ativado.' });
  const raw = JSON.stringify(request.body || {});
  if (raw.length > MAX_BODY_SIZE) return response.status(413).json({ ok: false, message: 'O briefing ultrapassou o limite permitido.' });
  const { profile = {}, projectLabel = '', answers = [], website = '' } = request.body || {};
  if (website || !profile.name || !profile.company || !Array.isArray(answers)) return response.status(400).json({ ok: false, message: 'Não foi possível validar o briefing.' });
  const clean = value => String(value || '').replace(/[<>]/g, '').trim();
  const formattedAnswers = answers.slice(0, 60).map((item, index) => `${index + 1}. ${clean(item.question)}\n${clean(item.answer) || 'Não respondida'}`).join('\n\n');
  const payload = {
    _subject: `Novo briefing — ${clean(profile.company)}`,
    _template: 'table',
    _captcha: 'false',
    _replyto: clean(profile.email),
    Cliente: clean(profile.name),
    Empresa: clean(profile.company),
    'Tipo de projeto': clean(projectLabel),
    'E-mail da cliente': clean(profile.email) || 'Não informado',
    Respostas: formattedAnswers
  };
  return response.status(200).json({
    ok: true,
    deliveryUrl: `https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`,
    deliveryPayload: payload
  });
}
