# Karrun

Site institucional em português, com cinco páginas: Início, Atuação, Como trabalhamos, A Karrun e Contato.

## Abrir no computador

Na pasta KARRUN, execute `node serve.cjs` e abra http://127.0.0.1:4173.

## Conteúdo e edição

Os arquivos publicados estão em `dist`. Cada página é um arquivo HTML. A identidade visual está em `dist/styles.css`; o menu e a preparação da mensagem de WhatsApp estão em `dist/site.js`.

Contato configurado: +55 44 98821-1479. O formulário abre uma mensagem no WhatsApp e o visitante confirma o envio lá. Nenhum dado do formulário é armazenado pelo site. Não há banco de dados, painel administrativo ou serviço de e-mail.

A imagem editorial foi gerada para esta identidade visual e está em `dist/materia.webp`. As fontes DM Sans e Manrope são carregadas pelo Google Fonts, com fontes alternativas locais caso o serviço esteja indisponível.

O conteúdo descreve a proposta e as formas de trabalho da Karrun, sem atribuir clientes, depoimentos, equipe, endereço ou resultados não informados.

## Hospedagem

O diretório `dist` pode ser servido por hospedagem estática. A configuração de Sites está em `.openai/hosting.json`. A versão inicial hospedada pelo Sites usa acesso privado para revisão.
