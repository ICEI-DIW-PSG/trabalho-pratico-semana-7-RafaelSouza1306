const obras = [
  {
    id: 1,
    titulo: "Transpiração Contínua Prolongada",
    ano: 1997,
    descricao: "Primeiro álbum da banda com grande sucesso.",
    imagem: "https://via.placeholder.com/300x200?text=CBJR"
  },
  {
    id: 2,
    titulo: "Preço Curto... Prazo Longo",
    ano: 1999,
    descricao: "Álbum que consolidou o sucesso da banda.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/f/fb/Charlie_Brown_Jr._Pre%C3%A7o_Curto_Prazo_Longo.jpg"
  },
  {
    id: 3,
    titulo: "Bocas Ordinárias",
    ano: 2002,
    descricao: "Um dos discos mais populares e premiados.",
    imagem: "https://upload.wikimedia.org/wikipedia/pt/0/05/BocasOrdinarias.jpg"
  }
];
const container = document.getElementById("cards-container");
if (container) {

  obras.forEach((obra) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "mb-3");

    card.innerHTML = `
      <div class="card h-100">
        <img src="${obra.imagem}" class="card-img-top" alt="${obra.titulo}">
        <div class="card-body">
          <h5 class="card-title">${obra.titulo} (${obra.ano})</h5>
          <p class="card-text">${obra.descricao}</p>
          <a href="detalhes.html?id=${obra.id}" class="btn btn-primary">Ver detalhes</a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// Verifica se está na página de detalhes
if (window.location.pathname.includes("detalhes.html")) {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const obra = obras.find((o) => o.id === id);

  const container = document.getElementById("detalhes-container");

  if (obra) {
    container.innerHTML = `
      <h2>${obra.titulo} (${obra.ano})</h2>
      <img src="${obra.imagem}" alt="${obra.titulo}" style="max-width:300px;">
      <p>${obra.descricao}</p>
    `;
  } else {
    container.innerHTML = "<p>Obra não encontrada.</p>";
  }
}
