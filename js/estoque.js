const btnlateral = document.getElementById('btnlateral');
const menu = document.getElementById('menu');
const toggleTheme = document.getElementById('toggleTheme');

// Ao passar o mouse sobre o botão, abre o menu
btnlateral.addEventListener('mouseenter', () => {
  menu.style.width = '250px';
});

// Garante que o menu permaneça aberto se o cursor estiver sobre ele
menu.addEventListener('mouseenter', () => {
  menu.style.width = '250px';
});

// Quando o cursor sair da área do menu, ele se fecha
menu.addEventListener('mouseleave', () => {
  menu.style.width = '0';
});


// Barra de pesquisa
const searchInput = document.getElementById('searchInput');
const resultados = document.getElementById('resultados');

// Exibir resultados quando o mouse estiver sobre o campo de busca ou a própria aba de resultados
searchInput.addEventListener('mouseenter', () => {
  resultados.style.display = 'block';
});

resultados.addEventListener('mouseenter', () => {
  resultados.style.display = 'block';
});

// Ocultar resultados quando o mouse sair do campo de busca e da aba de resultados
searchInput.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!resultados.matches(':hover')) {
      resultados.style.display = 'none';
    }
  }, 100);
});

resultados.addEventListener('mouseleave', () => {
  resultados.style.display = 'none';
});

// Função de busca
function search() {
  const input = searchInput.value.toLowerCase();
  const dados = [
    { titulo: "Inicio", link: "http://127.0.0.1:5500/html/index.html" },
    { titulo: "Helpdesk", link: "http://127.0.0.1:5500/html/chamados.html" },
    { titulo: "Tutoriais", link: "http://127.0.0.1:5500/html/tutoriais.html#inicio" },
    { titulo: "Contatos", link: "contatos.html" },
  ];

  resultados.innerHTML = ""; // Limpa os resultados anteriores

  if (input.trim() === "") {
    resultados.innerHTML = "<p>Por favor, digite algo válido.</p>";
    return;
  }

  const encontrados = dados.filter(item => item.titulo.toLowerCase().includes(input));

  if (encontrados.length > 0) {
    encontrados.forEach(item => {
      const link = document.createElement('a');
      link.href = item.link;
      link.textContent = item.titulo;
      link.style.display = 'block';
      resultados.appendChild(link);
    });
  } else {
    resultados.innerHTML = "<p>Nenhum resultado encontrado.</p>";
  }
}
// Abre o mini mapa
const localizacaoicon = document.querySelector('.localizacaoicon');
const mapa = document.querySelector('.mapa');

localizacaoicon.addEventListener('mouseover', () => {
  mapa.style.display = 'block';
});

localizacaoicon.addEventListener('mouseout', () => {
  mapa.style.display = 'none';
});

// Alterna entre Dark Mode e Light Mode
btntema.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Atualiza o ícone do botão conforme o tema atual
  if (document.body.classList.contains('dark-mode')) {
    // Em Dark Mode, mostra o ícone para mudar para Light Mode
    btntema.innerHTML = '<i class="bi bi-brightness-high-fill"></i>';
  } else {
    // Em Light Mode, mostra o ícone para mudar para Dark Mode
    btntema.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
  }
});