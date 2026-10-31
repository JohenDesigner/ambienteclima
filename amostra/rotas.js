/* Site Cinematográfico · © 2026 Labrego IA · LBG-SC-2026-v1
   Ambiente Clima: páginas de serviço, trabalhos, filtros, menu e comparador. */
(function () {
  var ZAP = String((window.SITE && SITE.whatsapp && SITE.whatsapp.numero) || "5511985415841").replace(/\D/g, "");
  function zap(msg) { return "https://wa.me/" + ZAP + "?text=" + encodeURIComponent(msg); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }
  function ic(id, cls) { return '<svg class="' + (cls || "i") + '"><use href="#' + id + '"/></svg>'; }
  function foto(k) { return "assets/img/obras/" + k + ".webp"; }

  var SERVICOS = {
    instalacao: {
      nome: "Instalação", titulo: "Instalação de ar condicionado", ic: "i-split", img: "t05",
      alt: "Quatro condensadoras instaladas lado a lado sobre a laje",
      lead: "Instalação residencial e comercial com tubulação bem feita, suporte firme e acabamento limpo. Do split do quarto ao sistema VRF da empresa.",
      msg: "Olá! Quero orçamento de instalação de ar condicionado.",
      itens: [
        ["Split hi-wall", "O modelo de parede mais comum em casas e apartamentos."],
        ["Multi-split", "Uma condensadora para vários ambientes, ideal quando falta espaço na fachada."],
        ["Cassete", "Embutido no forro, distribui o ar para os quatro lados. Ótimo para lojas e salas."],
        ["Piso-teto", "Para ambientes amplos sem forro, como salões e escritórios."],
        ["Splitão e VRF", "Sistemas para empresas e prédios, com projeto de distribuição do ar."],
        ["Infraestrutura na obra", "Tubulação, dreno e ponto elétrico prontos antes do acabamento."],
        ["Suportes e bases", "Condensadora na parede, na laje ou no telhado, nivelada e firme."],
        ["Projeto de conforto térmico", "Cálculo da capacidade certa para cada ambiente."]
      ],
      extraEye: "Antes da visita", extraTit: "Agilize seu orçamento", extraSub: "Com essas informações o orçamento sai mais rápido e certo.",
      extra: ["Modelo e BTUs do aparelho, ou se ainda vai comprar", "Foto do ambiente e de onde vai ficar a condensadora", "Distância aproximada entre as duas unidades", "Se é obra nova ou imóvel pronto"],
      faq: [
        ["Vocês instalam o aparelho que eu comprei?", "Sim. Se ainda não comprou, ajudamos a escolher a capacidade certa para o ambiente."],
        ["Fazem a infraestrutura durante a obra?", "Sim. Deixamos tubulação, dreno e ponto elétrico prontos antes do acabamento, para instalar o aparelho depois sem quebrar parede."],
        ["Instalam em apartamento?", "Sim. Seguimos as regras do condomínio para a posição da condensadora e da tubulação."]
      ]
    },
    limpeza: {
      nome: "Limpeza e higienização", titulo: "Limpeza e higienização de ar condicionado", ic: "i-limpeza", img: "t08",
      alt: "Evaporadora Daikin desmontada com filtros e aletas removidos para limpeza",
      lead: "O aparelho é desmontado e limpo por dentro: filtros, serpentina, bandeja e turbina. O ar volta a sair limpo e o aparelho gela como novo.",
      msg: "Olá! Quero orçamento de limpeza/higienização do ar condicionado.",
      itens: [
        ["Filtros", "Lavagem e secagem dos filtros de ar."],
        ["Serpentina", "Limpeza da serpentina, onde acumulam poeira e fungos."],
        ["Bandeja e dreno", "Limpeza e desobstrução para o aparelho parar de pingar."],
        ["Turbina", "Remoção da sujeira grudada nas pás do ventilador."],
        ["Condensadora", "Limpeza da unidade externa para o aparelho trocar calor melhor."],
        ["Manutenção preventiva", "Verificação de funcionamento, conexões e pressão do sistema."],
        ["Visitas programadas", "Limpeza periódica para casas e empresas com vários aparelhos."],
        ["Teste final", "Aparelho ligado e conferido antes de encerrar o serviço."]
      ],
      extraEye: "Fique de olho", extraTit: "Sinais de que está na hora", extraSub: "Se o seu aparelho tem algum desses sinais, ele precisa de limpeza.",
      extra: ["Cheiro de mofo ao ligar", "Pingando dentro do ambiente", "Gela menos do que antes", "Mais de 6 meses sem limpeza"],
      faq: [
        ["De quanto em quanto tempo limpar?", "Em casa, a cada 6 meses. Com uso diário ou ambiente com poeira, a cada 3 meses."],
        ["Precisa tirar o aparelho da parede?", "Na maioria dos casos, a limpeza é feita no próprio local. Quando é preciso, o aparelho é desmontado com cuidado e reinstalado."],
        ["Quanto tempo demora?", "Depende do modelo e do estado do aparelho. O tempo é informado no orçamento."]
      ]
    },
    conserto: {
      nome: "Conserto e carga de gás", titulo: "Conserto e carga de gás", ic: "i-gas", img: "t10",
      alt: "Condensadoras na varanda com manômetro e cilindro de gás conectados",
      lead: "Ar que não gela, pinga, faz barulho ou não liga: diagnóstico do defeito, conserto e recarga de gás com teste de vazamento.",
      msg: "Olá! Meu ar condicionado está com problema e preciso de conserto.",
      itens: [
        ["Diagnóstico", "Identificação do defeito antes de trocar qualquer peça."],
        ["Carga de gás", "Recarga do fluido refrigerante depois de corrigir o vazamento."],
        ["Vazamentos", "Teste de pressão e reparo das conexões e da tubulação."],
        ["Placa e parte elétrica", "Aparelho que não liga, desarma ou pisca sinais de erro."],
        ["Capacitor e compressor", "Condensadora que não parte ou faz barulho ao ligar."],
        ["Dreno entupido", "Aparelho pingando dentro do ambiente."],
        ["Barulho e vibração", "Ajuste de fixação, turbina e componentes soltos."],
        ["Sensores e controle", "Aparelho que não obedece o controle ou não chega na temperatura."]
      ],
      extraEye: "Fique de olho", extraTit: "Quando chamar um técnico", extraSub: "Esses sinais indicam defeito. Quanto antes, menor o estrago.",
      extra: ["Ligado, mas não gela", "Gelo na tubulação ou no aparelho", "Pingando dentro do ambiente", "Barulho diferente ou cheiro de queimado"],
      faq: [
        ["Só colocar gás resolve?", "Não. Se o gás acabou, existe vazamento. Primeiro o vazamento é localizado e corrigido, depois é feita a carga."],
        ["Atendem urgência?", "Sim, o atendimento é 24 horas. Mande foto ou vídeo do problema pelo WhatsApp."],
        ["Vale a pena consertar ou trocar?", "Depende do defeito e da idade do aparelho. Depois do diagnóstico, explicamos as opções e o custo de cada uma."]
      ]
    },
    pmoc: {
      nome: "Empresas e PMOC", titulo: "Ar condicionado para empresas e PMOC", ic: "i-pmoc", img: "t04",
      alt: "Ar condicionado cassete instalado no forro de gesso de uma loja",
      lead: "Instalação e manutenção para lojas, escritórios, clínicas e prédios, com PMOC e contrato mensal para manter tudo funcionando e dentro da lei.",
      msg: "Olá! Sou de uma empresa e quero saber sobre PMOC e contrato de manutenção.",
      itens: [
        ["PMOC", "Plano de manutenção conforme a Lei 13.589/2018, com registro de cada serviço."],
        ["Contrato mensal", "Visitas programadas e atendimento quando aparecer problema."],
        ["Manutenção preventiva", "Limpeza e verificação periódica de todos os aparelhos."],
        ["Manutenção corretiva", "Conserto rápido para a operação não parar."],
        ["Cassete e piso-teto", "Instalação em lojas, salas comerciais e salões."],
        ["Splitão e VRF", "Sistemas para prédios e empresas com muitos ambientes."],
        ["Infraestrutura", "Projeto e execução da tubulação em obra comercial."],
        ["Histórico das visitas", "Cada manutenção registrada para consulta e fiscalização."]
      ],
      extraEye: "Lei 13.589/2018", extraTit: "O que diz a lei", extraSub: "Ambientes de uso público e coletivo com ar condicionado precisam ter um PMOC.",
      extra: ["Vale para lojas, escritórios, clínicas, academias, escolas e restaurantes", "O plano define a manutenção periódica de cada aparelho", "Mantém a qualidade do ar para clientes e funcionários", "Evita problema na fiscalização e prolonga a vida dos aparelhos"],
      faq: [
        ["Minha empresa é obrigada a ter PMOC?", "Se o ambiente é de uso público ou coletivo e tem ar condicionado, sim. Na dúvida, mande quantos aparelhos são e o tipo de estabelecimento que a gente orienta."],
        ["Como funciona o contrato mensal?", "Combinamos a frequência das visitas e cada manutenção fica registrada. Se aparecer problema entre as visitas, é só chamar no WhatsApp."],
        ["Atendem prédios e redes de lojas?", "Sim. De pequenos comércios a empresas com muitos aparelhos e sistemas VRF."]
      ]
    }
  };
  var ORDEM = ["instalacao", "limpeza", "conserto", "pmoc"];
  var CATS = {
    instalacao: { nome: "Instalação", ic: "i-split", cls: "" },
    limpeza: { nome: "Limpeza", ic: "i-limpeza", cls: "limpeza" },
    conserto: { nome: "Conserto e gás", ic: "i-gas", cls: "conserto" },
    pmoc: { nome: "Empresas e PMOC", ic: "i-pmoc", cls: "pmoc" }
  };

  /* Para adicionar um trabalho: coloque a foto em assets/img/obras/ e copie uma linha. */
  var TRABALHOS = [
    { img: "t05", cats: ["instalacao"], servico: "Instalação", aparelho: "4 splits", frase: "Quatro condensadoras alinhadas em base metálica sobre a laje.", bairro: "São Paulo" },
    { img: "t04", cats: ["instalacao", "pmoc"], servico: "Instalação comercial", aparelho: "Cassete", frase: "Cassete embutido no forro de gesso de uma loja.", bairro: "São Paulo" },
    { img: "t08", cats: ["limpeza"], servico: "Limpeza e manutenção", aparelho: "Split hi-wall", frase: "Evaporadora desmontada peça por peça para limpeza completa.", bairro: "São Paulo" },
    { img: "t10", cats: ["instalacao", "conserto"], servico: "Instalação e carga de gás", aparelho: "Multi-split", frase: "Condensadoras na varanda técnica com teste de pressão e carga de gás.", bairro: "São Paulo" },
    { img: "t02", cats: ["instalacao"], servico: "Instalação", aparelho: "Multi-split", frase: "Condensadora multi-split na varanda, com tubulação isolada e alinhada.", bairro: "São Paulo" },
    { img: "t01", cats: ["instalacao"], servico: "Instalação", aparelho: "2 splits", frase: "Duas condensadoras fixadas em suporte na fachada.", bairro: "São Paulo" },
    { img: "t06", cats: ["instalacao"], servico: "Instalação", aparelho: "Split", frase: "Condensadora na fachada do sobrado, com acabamento discreto.", bairro: "São Paulo" },
    { img: "t09", cats: ["instalacao"], servico: "Instalação", aparelho: "Split", frase: "Condensadora instalada na varanda do apartamento, nivelada e protegida.", bairro: "São Paulo" },
    { img: "t03", cats: ["instalacao"], servico: "Instalação", aparelho: "Split hi-wall", frase: "Evaporadora instalada no quarto durante o acabamento da obra.", bairro: "São Paulo" }
  ];

  /* Texto exato das avaliações do Google. */
  var AVALIACOES = [
    ["Cliente no Google", "O trabalho do Carlos foi impecável, além de verificar todos os aparelhos de casa foi muito transparente e honesto em seu trabalho. Após o trabalho continua acompanhando e sempre responde nossas dúvidas sobre os aparelhos."],
    ["Cliente no Google", "Carlos é muito atencioso. O diferencial é que ele como dono da empresa esteve na minha obra durante a instalação do ar condicionado acompanhando a mão de obra realizada. Com certeza recomendo."],
    ["Cliente no Google", "Conheço a empresa alguns anos, e posso dizer que o serviço é de excelência, já realizei serviços de manutenção e prevenção a instalação de maquinas novas. Confio e indico com toda certeza."],
    ["Cliente no Google", "Ótimo atendimento, instalação perfeita e sem necessidade de chamar outro profissional para fazer acabamento"],
    ["Cliente no Google", "Profissional altamente qualificado. Entende tecnicamente e consegue contribuir para de fato atender a necessidade de cada projeto. Recomendo!"]
  ];

  function card(slug) {
    var s = SERVICOS[slug];
    return '<a class="svc" href="#' + slug + '"><img src="' + foto(s.img) + '" alt="' + esc(s.alt) + '" loading="lazy"><span class="svc-ic">' + ic(s.ic, "") + '</span><span class="svc-txt"><strong>' + esc(s.nome) + '</strong><em>Ver detalhes ' + ic("seta") + '</em></span></a>';
  }

  function cardTrabalho(t, i) {
    var c = CATS[t.cats[0]];
    return '<figure class="trab" data-cats="' + t.cats.join(" ") + '">' +
      '<button class="foto" type="button" data-amplia="' + i + '" aria-label="Ampliar foto: ' + esc(t.frase) + '"><img src="' + foto(t.img) + '" alt="' + esc(t.frase) + '" loading="lazy"><span class="zoom">' + ic("lupa", "") + '</span></button>' +
      '<figcaption><span class="tag ' + c.cls + '">' + ic(c.ic) + esc(t.servico) + '</span><p>' + esc(t.frase) + '</p><small>' + ic("pin") + esc(t.bairro) + ' · ' + esc(t.aparelho) + '</small></figcaption></figure>';
  }

  function migalha(partes) {
    return '<nav class="migalha" aria-label="Você está em"><a href="#inicio">Início</a>' + partes + '</nav>';
  }

  function paginaTrabalhos() {
    var h = migalha('<span>›</span><strong>Serviços realizados</strong>');
    h += '<div class="d-topo"><div class="painel"><span class="rotulo">Serviços realizados</span><h1>Obras que a gente entregou</h1><p>Fotos reais de instalações, limpezas e manutenções feitas pela Ambiente Clima em casas e empresas de São Paulo. Toque na foto para ampliar.</p></div></div>';
    h += '<section class="d-sec"><div class="filtros" role="group" aria-label="Filtrar por serviço">';
    h += '<button type="button" data-filtro="todos" aria-pressed="true">Todos</button>';
    ORDEM.forEach(function (k) { h += '<button type="button" data-filtro="' + k + '" aria-pressed="false">' + esc(CATS[k].nome) + '</button>'; });
    h += '</div><div class="trab-grid trab-grid--3" id="trab-grid">';
    TRABALHOS.forEach(function (t, i) { h += cardTrabalho(t, i); });
    h += '</div><div class="painel vazio" id="trab-vazio" hidden>Ainda não temos fotos desse serviço aqui. Veja mais no <a href="https://www.instagram.com/ambienteclima/" target="_blank" rel="noopener">Instagram @ambienteclima</a>.</div>';
    h += '<div class="cta cta--centro" style="margin-top:34px"><a class="botao botao--verm" href="' + zap("Olá! Vi os serviços no site e quero um orçamento.") + '" target="_blank" rel="noopener">' + ic("zap") + 'Quero um serviço assim</a><a class="botao botao--linha" href="#inicio">Voltar para o início</a></div>';
    h += '</section>';
    return h;
  }

  function paginaServico(slug) {
    var s = SERVICOS[slug];
    var h = migalha('<span>›</span><a href="#servicos">Serviços</a><span>›</span><strong>' + esc(s.nome) + '</strong>');

    h += '<div class="d-hero"><div class="painel d-hero-txt">';
    h += '<span class="selo"><i></i>Atendimento 24h · toda São Paulo</span>';
    h += '<h1>' + esc(s.titulo) + '</h1><p class="apoio">' + esc(s.lead) + '</p>';
    h += '<div class="cta"><a class="botao botao--verm" href="' + zap(s.msg) + '" target="_blank" rel="noopener">' + ic("zap") + 'Pedir orçamento</a><a class="botao botao--linha" href="#' + slug + '-lista">Ver o que fazemos</a></div></div>';
    h += '<figure class="d-foto"><img src="' + foto(s.img) + '" alt="' + esc(s.alt) + '"><figcaption>' + ic(s.ic) + esc(s.nome) + '</figcaption></figure></div>';

    h += '<section class="d-sec" id="' + slug + '-lista"><div class="painel painel--cabecalho"><span class="rotulo">O que fazemos</span><h2>' + esc(s.nome) + '</h2><p>Atendemos residências e empresas em toda a cidade de São Paulo.</p></div><div class="d-lista">';
    s.itens.forEach(function (it) { h += '<div class="painel d-item"><b>' + ic(s.ic, "") + '</b><div><h3>' + esc(it[0]) + '</h3><p>' + esc(it[1]) + '</p></div></div>'; });
    h += '</div></section>';

    h += '<section class="d-sec"><div class="painel d-sinais"><div><span class="rotulo">' + esc(s.extraEye) + '</span><h2>' + esc(s.extraTit) + '</h2><p>' + esc(s.extraSub) + '</p><a class="botao botao--zap" href="' + zap(s.msg) + '" target="_blank" rel="noopener">' + ic("zap") + 'Falar no WhatsApp</a></div><ul>';
    s.extra.forEach(function (x, i) { h += '<li><i>' + (i + 1) + '</i><span>' + esc(x) + '</span></li>'; });
    h += '</ul></div></section>';

    var fotos = TRABALHOS.map(function (t, i) { return [t, i]; }).filter(function (p) { return p[0].cats.indexOf(slug) >= 0; }).slice(0, 4);
    if (fotos.length) {
      h += '<section class="d-sec"><div class="painel painel--cabecalho painel--linha"><div><span class="rotulo">Serviços realizados</span><h2>Trabalhos de ' + esc(s.nome.toLowerCase()) + '</h2></div><a class="botao botao--linha" href="#trabalhos">Ver todos' + ic("seta") + '</a></div><div class="trab-grid">';
      fotos.forEach(function (p) { h += cardTrabalho(p[0], p[1]); });
      h += '</div></section>';
    }

    h += '<section class="d-sec"><div class="painel painel--estreito"><span class="rotulo">Perguntas frequentes</span><h2>Dúvidas sobre ' + esc(s.nome.toLowerCase()) + '</h2><div class="faq">';
    s.faq.forEach(function (f, i) { h += '<details' + (i === 0 ? " open" : "") + '><summary>' + esc(f[0]) + '</summary><p>' + esc(f[1]) + '</p></details>'; });
    h += '<details><summary>Atendem em toda São Paulo?</summary><p>Sim. Atendemos toda a cidade de São Paulo, 24 horas por dia.</p></details>';
    h += '</div></div></section>';

    h += '<div class="chamada"><div class="chamada-in"><div><h2>Precisa de ' + esc(s.nome.toLowerCase()) + '?</h2><p>Mande uma foto pelo WhatsApp e receba o orçamento sem compromisso.</p></div><a class="botao botao--branco" href="' + zap(s.msg) + '" target="_blank" rel="noopener">' + ic("zap") + 'Pedir orçamento</a></div></div>';

    h += '<section class="d-sec"><div class="painel painel--cabecalho"><span class="rotulo">Veja também</span><h2>Outros serviços</h2></div><div class="svc-grid svc-grid--3">';
    ORDEM.forEach(function (o) { if (o !== slug) h += card(o); });
    h += '</div><a class="voltar" href="#inicio">← Voltar para o início</a></section>';
    return h;
  }

  /* monta a página inicial */
  document.getElementById("svc-grid").innerHTML = ORDEM.map(card).join("");
  document.getElementById("previa-grid").innerHTML = TRABALHOS.slice(0, 4).map(cardTrabalho).join("");
  document.getElementById("revs").innerHTML = AVALIACOES.map(function (a) {
    return '<figure class="painel depo"><span class="estrelas" aria-label="5 de 5 estrelas">★★★★★</span><blockquote>“' + esc(a[1]) + '”</blockquote><figcaption><span class="av" aria-hidden="true">G</span><span>' + esc(a[0]) + '<small>Avaliação 5 estrelas no Google</small></span></figcaption></figure>';
  }).join("");

  function ligarZap(raiz) {
    (raiz || document).querySelectorAll("[data-zap]").forEach(function (a) {
      a.href = zap(a.getAttribute("data-zap"));
      a.target = "_blank"; a.rel = "noopener";
    });
  }
  ligarZap();

  /* rotas: #instalacao, #limpeza, #conserto, #pmoc e #trabalhos abrem páginas internas */
  var home = document.getElementById("home");
  var det = document.getElementById("detalhe");
  var TITULO = document.title;

  function rota() {
    var id = decodeURIComponent((location.hash || "").slice(1));
    fecharMenu();
    var el = id ? document.getElementById(id) : null;
    if (el && !det.hidden && det.contains(el)) { el.scrollIntoView(); return; }
    if (SERVICOS[id] || id === "trabalhos") {
      det.innerHTML = id === "trabalhos" ? paginaTrabalhos() : paginaServico(id);
      home.hidden = true; det.hidden = false;
      document.body.classList.add("no-detalhe");
      document.title = (id === "trabalhos" ? "Serviços realizados" : SERVICOS[id].titulo) + " | Ambiente Clima";
      if (id === "trabalhos") ligarFiltros();
      window.scrollTo(0, 0);
    } else {
      var estavaNoDetalhe = !det.hidden;
      home.hidden = false; det.hidden = true; det.innerHTML = "";
      document.body.classList.remove("no-detalhe");
      document.title = TITULO;
      if (estavaNoDetalhe) window.dispatchEvent(new Event("resize")); // redesenha o vídeo
      var alvo = id ? document.getElementById(id) : null;
      if (alvo && id !== "inicio") alvo.scrollIntoView();
      else if (estavaNoDetalhe || id === "inicio") window.scrollTo(0, 0);
    }
  }

  function ligarFiltros() {
    var botoes = det.querySelectorAll("[data-filtro]");
    botoes.forEach(function (b) {
      b.addEventListener("click", function () {
        var f = b.getAttribute("data-filtro"), n = 0;
        botoes.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
        det.querySelectorAll(".trab").forEach(function (c) {
          var mostra = f === "todos" || c.getAttribute("data-cats").split(" ").indexOf(f) >= 0;
          c.hidden = !mostra; if (mostra) n++;
        });
        document.getElementById("trab-vazio").hidden = n > 0;
      });
    });
  }

  /* foto ampliada */
  var dlg = document.getElementById("amplia");
  document.addEventListener("click", function (e) {
    var b = e.target.closest("[data-amplia]");
    if (!b) return;
    var t = TRABALHOS[+b.getAttribute("data-amplia")];
    var img = document.getElementById("amplia-img");
    img.src = foto(t.img); img.alt = t.frase;
    document.getElementById("amplia-txt").textContent = t.servico + " · " + t.aparelho + " — " + t.frase;
    if (dlg.showModal) dlg.showModal(); else dlg.setAttribute("open", "");
  });
  dlg.querySelector(".fechar").addEventListener("click", function () { dlg.close(); });
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });

  /* menu do celular */
  var hdr = document.getElementById("topo"), btnMenu = document.getElementById("btn-menu");
  function fecharMenu() { hdr.classList.remove("aberto"); btnMenu.setAttribute("aria-expanded", "false"); btnMenu.setAttribute("aria-label", "Abrir menu"); btnMenu.innerHTML = ic("menu", ""); }
  btnMenu.addEventListener("click", function () {
    if (hdr.classList.contains("aberto")) { fecharMenu(); return; }
    hdr.classList.add("aberto"); btnMenu.setAttribute("aria-expanded", "true"); btnMenu.setAttribute("aria-label", "Fechar menu"); btnMenu.innerHTML = ic("fechar", "");
  });
  document.querySelectorAll("#menu a").forEach(function (a) { a.addEventListener("click", fecharMenu); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") fecharMenu(); });

  /* comparador antes e depois */
  var comp = document.getElementById("comp"), compR = document.getElementById("comp-range");
  compR.addEventListener("input", function () { comp.style.setProperty("--pos", compR.value + "%"); });

  /* logo volta ao início */
  document.querySelectorAll(".logo-home").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      if (location.hash && location.hash !== "#inicio") location.hash = "inicio";
      else window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  window.addEventListener("hashchange", rota);
  rota();
})();
