const botaoInicio = document.querySelectorAll('.container')[0];
const botaoProdutos = document.querySelectorAll('.container')[1];
const botaoContato = document.querySelectorAll('.container')[2];

// Evento para cada botão com valores diferentes
botaoInicio.addEventListener('click', () => {
  window.scrollBy({ top: 200, behavior: 'smooth' }); // Início: 20px
});

botaoProdutos.addEventListener('click', () => {
  window.scrollBy({ top: 730, behavior: 'smooth' }); // Produtos: 40px
});

botaoContato.addEventListener('click', () => {
  window.scrollBy({ top: 1500, behavior: 'smooth' }); // Contato: 60px
});



const botoesProdutos = document.querySelectorAll('.produto-botao');
const img = document.querySelector('.produto-img');
const titulo = document.querySelector('.produto-titulo');
const preco = document.querySelector('.produto-preco');
const descricao = document.querySelector('.produto-descricao');

function atualizarVisualizacao(botao) {
  botoesProdutos.forEach(b => b.classList.remove('ativo'));
  botao.classList.add('ativo');

  const novaImg = botao.getAttribute('data-img');
  const novoTitulo = botao.getAttribute('data-titulo');
  const novoPreco = botao.getAttribute('data-preco');
  const novaDescricao = botao.getAttribute('data-descricao');

  if (novaImg) {
    img.src = novaImg;
    img.alt = novoTitulo || '';
  }
  if (novoTitulo) titulo.textContent = novoTitulo;
  if (novoPreco) preco.textContent = novoPreco;
  if (novaDescricao) descricao.textContent = novaDescricao;
}

botoesProdutos.forEach(botao => {
  botao.addEventListener('click', () => atualizarVisualizacao(botao));
});

if (botoesProdutos.length > 0) {
  atualizarVisualizacao(botoesProdutos[0]);
}
