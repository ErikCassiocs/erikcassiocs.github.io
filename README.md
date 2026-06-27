# Portfólio — Economista Quantitativo

Site-portfólio com painel de admin para publicação de artigos.
HTML + CSS + JS puro. Zero dependências. Zero build step.

---

## Estrutura

```
/
├── index.html          → site público (SPA)
├── css/style.css       → todos os estilos
├── js/main.js          → dados, render, navegação
├── admin/
│   └── index.html      → painel de admin (protegido por senha)
├── CNAME               → domínio personalizado (GitHub Pages)
└── README.md
```

---

## Painel de admin

Acesse em: `https://seunome.github.io/admin`

A senha padrão é **`economia2025`**

Para trocar a senha, abra `admin/index.html` e edite esta linha:

```js
const ADMIN_PASSWORD = 'economia2025';
```

**Como funciona:**
- O painel é protegido por senha via sessionStorage (só dura enquanto o navegador estiver aberto)
- Os artigos são salvos no localStorage do navegador
- O site público lê do mesmo localStorage e exibe os artigos
- A URL `/admin` não tem nenhum link visível no site público

**Para escrever um artigo:**
1. Acesse `/admin`, entre com a senha
2. Clique em "Novo artigo"
3. Escreva o título, descrição e conteúdo
4. Preencha categoria, filtro e tags
5. Clique em "Publicar" (ou "Salvar rascunho")
6. O artigo aparece imediatamente no site público

---

## Como publicar no GitHub Pages

### 1. Criar repositório

- Acesse https://github.com → New repository
- Nome: `seunome.github.io` (substitua pelo seu usuário real)
- Visibilidade: **Public**
- Criar

### 2. Upload dos arquivos

**Pelo site do GitHub:**
1. Na página do repo → "uploading an existing file"
2. Arraste toda a pasta descompactada
3. Commit changes

**Pelo terminal:**
```bash
git init
git add .
git commit -m "primeiro commit"
git branch -M main
git remote add origin https://github.com/seunome/seunome.github.io.git
git push -u origin main
```

### 3. Ativar GitHub Pages

- Settings → Pages
- Source: Deploy from branch → `main` → `/ (root)`
- Save

Site disponível em: `https://seunome.github.io`
Admin em: `https://seunome.github.io/admin`

---

## Como personalizar

Abra `js/main.js` e edite o objeto `CONFIG` no topo:
- `nome`, `iniciais`, `cargo`, `slogan`, `tagline`
- `redes` (LinkedIn, GitHub, Twitter, etc.)
- `stats`, `bio`, `skills`, `atuacao`, `projetos`
- `artigosExemplo` (exibidos antes de você publicar pelo admin)

Para o SEO, edite as meta tags no `<head>` de `index.html`.

---

## ⚠️ Importante sobre o localStorage

Os artigos ficam salvos **no navegador** onde você os publicou.
Isso significa:

✅ Funciona perfeitamente se você sempre acessa o admin do mesmo computador/navegador
✅ Sem servidor, sem banco de dados, sem custos
⚠️ Se trocar de navegador ou computador, os artigos não aparecem

**Solução para múltiplos dispositivos:**
Use a função de exportar/importar no admin (em desenvolvimento) ou 
migre para uma solução com backend (Supabase free tier, por exemplo).

---

## Alternativas de hospedagem gratuita

| Serviço          | URL gratuita              | Domínio próprio |
|------------------|---------------------------|-----------------|
| GitHub Pages     | seunome.github.io         | ✅              |
| Vercel           | seunome.vercel.app        | ✅              |
| Netlify          | seunome.netlify.app       | ✅              |
| Cloudflare Pages | seunome.pages.dev         | ✅              |
