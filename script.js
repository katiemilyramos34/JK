// Corações
const coracoesContainer = document.getElementById('coracoes');
function criarCoracao() {
  const coracao = document.createElement('div');
  coracao.classList.add('coração');
  coracao.style.left = Math.random() * 100 + 'vw';
  coracao.style.animationDuration = (Math.random() * 3 + 3) + 's';
  coracoesContainer.appendChild(coracao);
  setTimeout(() => coracoesContainer.removeChild(coracao), 6000);
}
setInterval(criarCoracao, 300);

// Temporizador
function atualizarContador() {
    const inicio = new Date('2018-06-13T00:00:00');
    const agora = new Date();
  
    const diffMs = agora - inicio;
    const segundos = Math.floor(diffMs / 1000) % 60;
    const minutos = Math.floor(diffMs / (1000 * 60)) % 60;
    const horas = Math.floor(diffMs / (1000 * 60 * 60)) % 24;
  
    // Calcular anos completos
    const dataAtual = new Date(inicio.getTime());
    let anos = 0;
    while (true) {
      const proximo = new Date(dataAtual.getFullYear() + 1, dataAtual.getMonth(), dataAtual.getDate());
      if (proximo <= agora) {
        anos++;
        dataAtual.setFullYear(dataAtual.getFullYear() + 1);
      } else {
        break;
      }
    }
  
    // Dias desde o último "aniversário de namoro"
    const diffDias = Math.floor((agora - dataAtual) / (1000 * 60 * 60 * 24));
  
    const texto = `${anos} anos, ${diffDias} dias, ${horas}h, ${minutos}min, ${segundos}s`;
    document.getElementById('tempo').textContent = texto;
  }
  
setInterval(atualizarContador, 1000);
atualizarContador();

// Carrossel automático
const imagens = document.querySelectorAll('.carousel img');
let index = 0;

function mostrarProximaImagem() {
  imagens.forEach((img, i) => {
    img.classList.remove('active');
  });
  imagens[index].classList.add('active');
  index = (index + 1) % imagens.length;
}

mostrarProximaImagem();
setInterval(mostrarProximaImagem, 3000);
