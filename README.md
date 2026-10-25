# Homilette — landing page

Landing page de pré-lançamento do Homilette (Next.js, TypeScript e Tailwind CSS).

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:3000
npm run build    # build de produção
npm run start    # serve o build
npm run lint
```

## Idiomas

A página existe em três idiomas: `/pt` (português do Brasil), `/en` (inglês) e `/es` (espanhol). Quem abre `/` é
redirecionado pelo idioma do navegador (`src/proxy.ts`); sem correspondência, vai para `/pt`. Há seletor de idioma no
cabeçalho e no rodapé, `hreflang` e metadados de compartilhamento por idioma.

## O que editar

| O quê | Onde |
| --- | --- |
| Textos de cada idioma (incluindo FAQ, mensagens do formulário, metadados) | [`src/content/pt.ts`](src/content/pt.ts), [`en.ts`](src/content/en.ts), [`es.ts`](src/content/es.ts). O português define as chaves; os outros precisam ter as mesmas. |
| Data de lançamento (`AAAA-MM-DD`) | `siteConfig.launchDate` em [`src/content/site.ts`](src/content/site.ts). Enquanto for `null`, a página mostra "Em breve", sem data nem contagem regressiva. A data é formatada em cada idioma. |
| Só o período, se a data exata ainda não existe | `siteConfig.launchPeriod`, um texto por idioma (ex.: pt `"o primeiro semestre de 2027"`, en `"in the first half of 2027"`). |
| Links de Privacidade e Contato | `siteConfig.links`. Só aparecem no rodapé quando preenchidos. |
| URL pública (compartilhamento) | variável `NEXT_PUBLIC_SITE_URL`. |
| Créditos das imagens | [`src/content/credits.ts`](src/content/credits.ts). As fotos estão em `public/images`, de acervos abertos (Wikimedia Commons). |

Para adicionar um idioma: crie `src/content/<codigo>.ts`, registre-o em `src/content/index.ts` e em `src/i18n/config.ts`.

## Cadastro de e-mails (o que falta conectar)

O formulário envia para `POST /api/interesse`, que repassa o e-mail a um webhook configurado por variável de ambiente.
**Sem webhook, nenhum e-mail é salvo** e a página informa isso honestamente (“O cadastro ainda não está disponível”).

Para ativar, defina no ambiente de produção:

```
WAITLIST_WEBHOOK_URL=https://seu-servico/endpoint   # recebe POST JSON { "email": "...", "source": "landing-page" }
WAITLIST_WEBHOOK_TOKEN=...                          # opcional; enviado como Authorization: Bearer
```

Qualquer resposta 2xx do webhook conta como cadastro salvo. O webhook pode ser um serviço de e-mail marketing, Zapier/Make,
uma planilha ou um backend próprio. Para integrar direto a um provedor (Resend, Mailchimp etc.), reescreva `subscribe()` em
[`src/lib/waitlist.ts`](src/lib/waitlist.ts) mantendo o tipo de retorno.

Antes de publicar, defina também a política de privacidade e um canal de contato reais.
