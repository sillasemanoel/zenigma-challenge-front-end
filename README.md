# Zénigma Desafio Front-End - React

<img src="./github/ze-bg.jpeg" width="100% " height="auto" alt="zé delivery logo" />

Este repositório contém dois desafios de codificação front-end utilizando React. Esses exercícios surgiram como parte de um desafio técnico proposto pelo [Zé Delivery](https://www.ze.delivery/) em 2022. O desafio está separado em duas pastas dentro da pasta `src`: `challengeOne` e `challengeTwo`.
Esses desafios têm como objetivo testar suas habilidades em desenvolvimento com React, bem como seu conhecimento sobre as features do JavaScript.
**O tempo dado para resolução deste dois desafios foi cerca de 60 min.**

**Lembrando que não existe uma solução consolidada, cada uma delas é apenas a solução encontrada por mim!**

## Desafio 1: CardList

O desafio 1 está disponível na pasta `challengeOne` dentro da pasta `src`. Este desafio foi projetado para testar suas habilidades em manipulação de estado, componentes funcionais e lógica de renderização condicional. A seguir, estão algumas informações adicionais sobre o desafio 1:

- **📄 Descrição**:
  Este desafio consiste em passar um valor do tipo `number` para um componente chamado `CardList`, e esse componente deve renderizar o número de cartas que ele recebe como propriedade (`size`).
  Inicialmente, todas as cartas devem estar viradas para baixo, ou seja, devem conter a palavra `down`. Assim que o usuário clicar em uma dessas cartas, ela deve mudar seu conteúdo para `up`. No entanto, só podemos ter uma carta com a palavra `up` por vez. Portanto, ao clicar em outra carta, a carta que estava previamente com `up` deve voltar a ser `down`, e o novo elemento clicado deve mudar para `up`.
- **📚 Tópicos abordados**: Componentes funcionais, estados, eventos, renderização condicional, etc.

## Desafio 2: Gerenciamento de Estado

O desafio 2 está disponível na pasta `challengeTwo` dentro da pasta `src`. Este desafio tem como objetivo testar suas habilidades em gerenciamento de estado com useReducer, manipulação de eventos e interação com inputs. A seguir, estão algumas informações adicionais sobre o desafio 2:

- **📄 Descrição**:
  Este desafio envolve 2 botões e um input, chamados `add`, `subtract` e um input do tipo `number`. O aplicativo deve funcionar da seguinte maneira:
  - Caso não haja nenhum valor no `input` e o botão `add` seja clicado, deve-se adicionar **1** ao valor salvo no estado.
  - Caso não haja nenhum valor no `input` e o botão `subtract` seja clicado, deve-se subtrair **1** do valor salvo no estado.
  - Caso haja algum valor no `input` e o botão `add` e/ou `subtract` seja clicado, esse valor deve ser adicionado e/ou subtraído ao valor salvo no estado.
  - O valor salvo no estado deve ser mostrado dentro de uma `<div data-testid="results"></div>`.
    É **obrigatório** o uso do `useReducer` para gerenciar o estado deste componente.
- **📚 Tópicos abordados**: Gerenciamento de estado com useReducer, manipulação de eventos, interação com inputs, etc.


## 📌 Instruções para instalação

1. Clone o repositório
```bash
git clone https://github.com/sillasemanoel/zenigma-challenge-front-end.git
```

2. Instalar as dependencias
```bash
npm install
```

3. Executar Front-End
```bash
npm run dev
```

## 🌐 Compartilhando sua solução

Caso realize o desafio e queira compartilhar sua solução no linkedin, não esqueça de me marcar para que eu possa ver! 😄
[Linkedin]( https://www.linkedin.com/in/sillas-emanoel-656478218/)
