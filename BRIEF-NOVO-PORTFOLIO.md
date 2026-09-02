# Brief: Estante da Carol — Portfólio Pessoal

Fonte de verdade do conceito e do MVP. Novo repositório do zero (não evoluir o DevLink).

**Regras de código:** `.cursor/rules/ponytail.mdc` + `readable-variable-names.mdc` (lazy senior; solução mais simples que funciona).

---

## 1. Pessoa e posicionamento

- **Nome:** Carolina Russi Ferla (Carol)
- **Marca do site:** Estante da Carol
- **Idiomas:** PT-BR + toggle EN (hero, Sobre, 5 projetos, CTAs)
- **Papel no hero:** desenvolvedora **fullstack**
- **Situação:** bem empregada; **aberta a propostas melhores** (preferência **remoto / internacional**) e **freelas** pontuais
- **Copy:** não “procurando emprego”; não **nomear a empresa atual**
- **Tom:** informal, acolhedor, PT-BR (e EN equivalente, direto)

**GitHub (estudos, referência):** https://github.com/CarolinaRussi/ReactJs_TypeScript  
**Site antigo (Linktree):** https://devlink-gules.vercel.app — vira história, não a marca

---

## 2. Conceito travado: D + A

- **D:** home com **livro em destaque** (EntreLivros) + estante com o resto  
- **A:** estante **interativa** no desktop (lombadas, hover, clique)

A prateleira **é** navegação, não enfeite. Carol (pessoa) acima de qualquer marca de produto.

### Fluxo

1. Hero → nome + fullstack + frase + CTAs  
2. Destaque EntreLivros  
3. Estante (4 livros)  
4. Sobre (foto + 3 blocos)  
5. Contato (reforço dos links)  
6. Clique num livro → `/projeto/:id`

### Público

Os dois (rede + recrutador), **priorizando recrutador** no hero e na ordem da informação.

---

## 3. Inventário de projetos (MVP)

| Papel | Projeto | Stack / nota | Disponibilidade |
|-------|---------|--------------|-----------------|
| **Destaque** | EntreLivros | [entrelivros.com](https://entrelivros.com) | Demo sim · GitHub depois |
| Livro | Shorten URL | encurtador de URLs (tem site) | Demo + repo públicos |
| Livro | Vendas | .NET + React | Só repo público |
| Livro | Empresas e licenças | Next.js + Drizzle | Só repo público |
| Livro | Solicitações | Laravel 12 + React | Só repo público |

**Fora do MVP:** projetinhos de curso (Fuel, Frases, idade, etc.) e DevLink como livro — não diluir a estante.

### Modelo de conteúdo (`BookProject`)

```ts
type BookProject = {
  id: string;
  title: string;
  subtitle?: string;
  year?: string | number;
  spineColor: string;
  coverImage?: string;      // logo só no EntreLivros no MVP
  screenshots?: string[];   // 1–2 na página de detalhe, se existirem
  synopsis: { pt: string; en: string };
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  learnings?: { pt: string; en: string };
  kind: "featured" | "book";
};
```

Conteúdo em **JSON no repo** (fonte da verdade). Sem CMS/Firebase/admin no MVP.

### Capas

- **EntreLivros:** logo do projeto na capa/destaque  
- **Demais:** tipografia + cor na lombada/capa  
- **Detalhe:** screenshot quando houver; senão só texto

---

## 4. UX por breakpoint

| | Desktop | Mobile |
|---|---------|--------|
| Estante | Lombadas 2.5D, hover puxa + sombra | Livros “de frente” (capa tipográfica + título + 1 linha) |
| Destaque | EntreLivros em evidência | Idem, full-width no topo da seção |
| Detalhe | Rota `/projeto/:id` | Idem (sem modal no MVP) |

### Motion (só estas 3 no MVP)

1. Hover na lombada (puxa + luz/sombra)  
2. Entrada suave do destaque ao carregar  
3. Transição simples ao ir para `/projeto/:id`

Sem page-flip 3D, partículas ou parallax pesado.

### Links / CTAs

- **#1 LinkedIn** · GitHub · e-mail  
- Sem CV / WhatsApp / redes do DevLink no MVP  
- Sem seção “Links” separada: marcadores no hero + reforço no contato

### Sobre

- Foto sim  
- 3 blocos: (1) papel + abertura a conversas, (2) trajetória front → fullstack, (3) gancho leitura / por que a estante + EntreLivros  

---

## 5. Direção visual

- **Atmosfera:** papel e tinta (claro, grain leve) — não dark mode roxo, não cream+terracota clichê  
- **Accent:** azul-noite (CTAs, hover, destaque)  
- **Tipografia:** Fraunces (display/lombadas) + Source Serif 4 (corpo) + DM Sans (UI/botões)  
- **Hero:** uma composição — marca/nome forte, uma headline, uma frase, CTAs, âncora visual (destaque/estante), sem cards no hero  

---

## 6. Stack e deploy

- React + TypeScript + Vite  
- React Router (home + `/projeto/:id`)  
- Tailwind (ou CSS modules — o mais simples que cobrir o visual)  
- Framer Motion **só se** o CSS não cobrir as 3 motions com folga  
- i18n: toggle PT/EN (conteúdo no JSON; UI strings mínimas)  
- Deploy: **Vercel subdomain** no MVP; domínio próprio depois  
- Regras: Ponytail (lazy senior) + nomes legíveis  

---

## 7. Estrutura mínima de rotas / seções

1. `/` — Hero, destaque, estante, sobre, contato  
2. `/projeto/:id` — detalhe do livro  
3. 404 simples  

---

## 8. O que NÃO fazer

- Não basear o repo no código do `projeto-linktree`  
- Não fazer outro Linktree com skin nova  
- Não colocar marca de produto acima do nome da Carol  
- Não listar projetos sem sinopse / stack / links úteis  
- Não encher o primeiro viewport com stats, badges, várias seções  
- Não incluir CMS, auth, admin, analytics “por via das dúvidas” no MVP  
- Não expandir escopo sem perguntar (Ponytail)

---

## 9. Referência: o que existia (DevLink)

Hub de links em React/Vite/Tailwind/Firebase. Pontos a preservar só como ideia: tom informal, deploy simples, identidade própria. Limitações que este portfólio resolve: sem storytelling, “DevLink” competindo com a pessoa, redes pouco tech, visual de curso.

---

## 10. Plano em partes (MVP → polish)

### Parte 0 — Fundação (repo)
- Scaffold Vite + React + TS + Router + Tailwind  
- Estrutura de pastas mínima (`components/`, `data/`, `i18n/` ou strings no JSON)  
- Tokens CSS: papel, tinta, azul-noite, fontes  
- Deploy Vercel “hello”

### Parte 1 — Conteúdo
- JSON dos 5 projetos (ids, cores, tags, URLs, sinopses **PT**; EN pode ser stub e completar na Parte 4)  
- Assets: logo EntreLivros, foto Sobre, screenshots quando prontos  
- Links reais: LinkedIn, GitHub, e-mail  

### Parte 2 — Home (recrutador first)
- Hero: Estante da Carol + papel + CTAs  
- Seção destaque EntreLivros  
- Estante desktop (lombadas clicáveis → rota)  
- Sobre + Contato  
- Layout mobile da estante (livros de frente)

### Parte 3 — Detalhe + motion
- Página `/projeto/:id` (sinopse, stack, demo/código, screenshots)  
- As 3 animações do brief  
- 404  

### Parte 4 — i18n + polish
- Toggle PT/EN em todo copy do MVP  
- Ajuste tipográfico, grain, hover, acessibilidade (focus, contraste, `lang`)  
- OG/title básicos · revisão mobile  

### Parte 5 — Depois do MVP (só se pedir)
- Domínio próprio · GitHub do EntreLivros público · mais screenshots · CMS leve · one-pager extra  

**Ordem de prioridade:** 0 → 1 → 2 → 3 → 4. Não começar polish visual fino antes da home navegável com os 5 livros.

---

## 11. Resumo em uma frase

> Portfólio **Estante da Carol**: fullstack, bilíngue, papel e tinta — EntreLivros em destaque, quatro apps reais na prateleira, recrutador no hero, personalidade na metáfora; código no espírito Ponytail.

---

*Atualizado após sessão de grilling (decisões travadas) + regras Ponytail adaptadas do Entrelivros.*
