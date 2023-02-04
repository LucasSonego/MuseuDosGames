$(function () {
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  page = params.page;
  console.log(page);
  carregarPagina(page);
});

function carregarPagina(pagina) {
  switch (pagina) {
    case "anos70":
      carregarHtmlPagina("anos70", "Anos 70");
      break;
    case "anos80":
      carregarHtmlPagina("anos80", "Anos 80");
      break;
    case "anos90":
      carregarHtmlPagina("anos90", "Anos 90");
      break;
    case "anos00":
      carregarHtmlPagina("anos00", "Anos 2000");
      break;
    case "anos10":
      carregarHtmlPagina("anos10", "Anos 2010");
      break;
    case "anos20":
      carregarHtmlPagina("anos20", "Anos 2020");
      break;
    default:
      carregarHtmlPagina("home", "Home");
      break;
  }
}

function carregarHtmlPagina(caminho, title) {
  $("#conteudo").load(caminho);
  let newUrl =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname;
  if (caminho != "home") {
    newUrl += `?page=${caminho}`;
  }
  window.history.pushState({ path: newUrl }, "", newUrl);
  $(".timeline").children().removeClass("era-selecionada");
  $(`.timeline > .botao-timeline.${caminho}`).addClass("era-selecionada");

  if (title) {
    document.title = `${title} | ${document.title.split("|")[1]}`;
  }
}
