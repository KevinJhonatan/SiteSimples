const cardsProdutos = document.querySelectorAll('.produto-card');
const img = document.querySelector('.produto-img');
const titulo = document.querySelector('.produto-titulo');
const preco = document.querySelector('.produto-preco');
const descricao = document.querySelector('.produto-descricao');

function atualizarVisualizacaoCard(card) {
  cardsProdutos.forEach(c => c.classList.remove('ativo'));
  card.classList.add('ativo');

  const novaImg = card.getAttribute('data-img');
  const novoTitulo = card.getAttribute('data-titulo');
  const novoPreco = card.getAttribute('data-preco');
  const novaDescricao = card.getAttribute('data-descricao');

  if (novaImg) img.src = novaImg;
  if (novoTitulo) titulo.textContent = novoTitulo;
  if (novoPreco) preco.textContent = novoPreco;
  if (novaDescricao) descricao.textContent = novaDescricao;
}

// Evento click para cada card
cardsProdutos.forEach(card => {
  card.addEventListener('click', () => atualizarVisualizacaoCard(card));
});

// Inicializa com primeiro produto
if (cardsProdutos.length > 0) {
  atualizarVisualizacaoCard(cardsProdutos[0]);
}
