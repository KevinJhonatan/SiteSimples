const botaoInicio = document.querySelector('.botaoInicio');
const botaoProdutos = document.querySelector('.botaoProdutos');
const botaoContato = document.querySelector('.botaoContato');

botaoInicio.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

botaoProdutos.addEventListener('click', () => {
  const sectionProdutos = document.querySelector('.produtos');
  sectionProdutos.scrollIntoView({ behavior: 'smooth' });
});

botaoContato.addEventListener('click', () => {
  const contato = document.querySelector('.contato');
  contato.scrollIntoView({ behavior: 'smooth' });
});

// Seleção dos produtos
const cardsProdutos = document.querySelectorAll('.produto-card');
const img = document.querySelector('.produto-img');
const titulo = document.querySelector('.produto-titulo');
const preco = document.querySelector('.produto-preco');
const descricao = document.querySelector('.produto-descricao');

function atualizarVisualizacaoCard(card) {
  cardsProdutos.forEach(c => c.classList.remove('ativo'));
  card.classList.add('ativo');

  img.src = card.getAttribute('data-img');
  titulo.textContent = card.getAttribute('data-titulo');
  preco.textContent = card.getAttribute('data-preco');
  descricao.textContent = card.getAttribute('data-descricao');
}

cardsProdutos.forEach(card => {
  card.addEventListener('click', () => atualizarVisualizacaoCard(card));
});

// Inicializa com o primeiro produto
if (cardsProdutos.length > 0) {
  atualizarVisualizacaoCard(cardsProdutos[0]);
}
