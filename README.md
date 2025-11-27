# Estrutura de testes com Cypress

Passos rápidos (PowerShell):

1. Instalar dependências

```powershell
cd "c:\Users\Yago\Downloads\cypress estrutura"
npm install
```

2. Abrir a interface do Cypress (modo interativo)

```powershell
npm run cypress:open
```

3. Rodar os testes em linha de comando

```powershell
npm test
```

O projeto contém:
- `cypress.config.js`: configuração do Cypress (baseUrl, specPattern, supportFile)
- `cypress/e2e/example.cy.js`: teste de exemplo
- `cypress/support/*`: arquivos de suporte e comandos personalizados

Observações:
- Se preferir instalar só o Cypress: `npm install --save-dev cypress`.
- Ajuste `baseUrl` em `cypress.config.js` caso queira testar uma aplicação local.
## Adicionado CI

Este repositório inclui um workflow de GitHub Actions em `.github/workflows/cypress.yml` que roda os testes Cypress no Ubuntu usando a ação oficial `cypress-io/github-action@v4`.

Para rodar localmente, use os comandos já descritos anteriormente:

```powershell
cd "c:\Users\Yago\Downloads\cypress estrutura"
npm install
npm run cypress:open
# ou
npm test
```

Para verificar a instalação do Cypress localmente (útil se houver problemas com binários):

```powershell
npx cypress verify
```
