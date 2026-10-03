# Conversor de Moedas 💵

Um conversor de moedas simples, feito em **HTML, CSS e JavaScript puro (Vanilla JS)**, como projeto de estudo focado em **integração com API** — primeira vez trabalhando com `fetch`, `async/await` e consumo de dados assíncronos.

## 🔗 Demo

[Acesse aqui](https://viniciusart.github.io/Project-vanilla2/)

## ✨ Funcionalidades

- Conversão entre moedas usando taxas de câmbio em tempo real
- Seleção dinâmica de moeda de origem e destino (carregadas diretamente da API, sem valores fixos no HTML)
- Botão de inverter moedas (troca "De:" e "Para:" com um clique)
- Resultado formatado com o símbolo da moeda convertida
- Validação de entrada: impede valores vazios e impede selecionar a mesma moeda nos dois campos

## 🛠️ Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- [Frankfurter API](https://frankfurter.dev/) — API gratuita de câmbio, sem necessidade de chave de API

## 📡 Sobre a API

O projeto consome dois endpoints da Frankfurter API:

- `GET /v1/currencies` — retorna todas as moedas suportadas (código + nome), usado para popular os seletores dinamicamente
- `GET /v1/latest?from=X&to=Y` — retorna a taxa de câmbio mais recente entre duas moedas, usado no momento da conversão

<img width="1353" height="593" alt="image" src="https://github.com/user-attachments/assets/a55519bd-f9b1-4cce-9111-599f66f24ae7" />


## 👤 Autor

ViniArt

---

<!-- Projeto feito para portfólio, como parte de um roadmap de transição de carreira para desenvolvimento web -->
