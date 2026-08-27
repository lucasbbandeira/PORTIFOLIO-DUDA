(() => {
  "use strict";

  const T = (pt, en, es) => ({ pt, en, es });
  const getSavedLanguage = () => {
    try {
      const value = localStorage.getItem("duda-language");
      return ["pt", "en", "es"].includes(value) ? value : "pt";
    } catch (_) { return "pt"; }
  };

  let language = getSavedLanguage();
  const t = (value) => value[language];

  const nav = [
    ["index.html", T("Início", "Home", "Inicio")],
    ["viagens.html", T("Viagens", "Travel", "Viajes")],
    ["moda.html", T("Moda", "Fashion", "Moda")],
    ["ugc.html", T("UGC", "UGC", "UGC")],
    ["hospitalidade.html", T("Hospitalidade", "Hospitality", "Hospitalidad")],
    ["parcerias.html", T("Parcerias", "Partnerships", "Colaboraciones")],
    ["sobre.html", T("Sobre", "About", "Sobre mí")],
  ];

  const travel = [
    ["eurotrip", "travel/eurotrip", T("Europa · Filme de abertura", "Europe · Opening film", "Europa · Película de apertura"), T("Eurotrip: França, Itália, Espanha e Portugal", "Eurotrip: France, Italy, Spain and Portugal", "Eurotrip: Francia, Italia, España y Portugal")],
    ["chile", "travel/chile", T("Chile · Roteiro", "Chile · Itinerary", "Chile · Ruta"), T("Três dias no Chile", "Three days in Chile", "Tres días en Chile")],
    ["argentina", "travel/argentina", T("Argentina · Bariloche", "Argentina · Bariloche", "Argentina · Bariloche"), T("Bariloche no inverno", "Bariloche in winter", "Bariloche en invierno")],
    ["madri", "travel/madri", T("Espanha · Diário", "Spain · Journal", "España · Diario"), T("Um dia sozinha em Madri", "A solo day in Madrid", "Un día sola en Madrid")],
    ["porto", "travel/porto", T("Portugal · Roteiro", "Portugal · Itinerary", "Portugal · Ruta"), T("Porto em 24 horas", "Porto in 24 hours", "Oporto en 24 horas")],
    ["verona", "travel/verona", T("Itália · Verona", "Italy · Verona", "Italia · Verona"), T("Um dia na cidade do amor", "A day in the city of love", "Un día en la ciudad del amor")],
    ["toscana", "travel/toscana", T("Itália · Toscana", "Italy · Tuscany", "Italia · Toscana"), T("Quatro cidades da Toscana", "Four towns in Tuscany", "Cuatro ciudades de la Toscana")],
    ["liguria", "travel/liguria", T("Itália · Ligúria", "Italy · Liguria", "Italia · Liguria"), T("Praias da Ligúria", "The beaches of Liguria", "Las playas de Liguria")],
    ["louvre", "travel/louvre", T("França · Paris", "France · Paris", "Francia · París"), T("Museu do Louvre", "The Louvre Museum", "Museo del Louvre")],
    ["santa-maria-novella", "travel/santa-maria-novella", T("Itália · Florença", "Italy · Florence", "Italia · Florencia"), T("Santa Maria Novella", "Santa Maria Novella", "Santa Maria Novella")],
    ["suica", "travel/suica", T("Suíça · Paisagem", "Switzerland · Landscape", "Suiza · Paisaje"), T("Caminhos pela Suíça", "On the road through Switzerland", "Rutas por Suiza"), true],
    ["vaticano", "travel/vaticano", T("Vaticano · Arquitetura", "Vatican · Architecture", "Vaticano · Arquitectura"), T("Um instante no Vaticano", "A glimpse of the Vatican", "Un instante en el Vaticano"), true],
    ["santa-catarina", "travel/santa-catarina", T("Brasil · Santa Catarina", "Brazil · Santa Catarina", "Brasil · Santa Catarina"), T("Beto Carrero e Balneário Camboriú", "Beto Carrero and Balneário Camboriú", "Beto Carrero y Balneário Camboriú")],
  ];

  const fashion = [
    ["santiago", "fashion/santiago", T("Santiago · Chile", "Santiago · Chile", "Santiago · Chile"), T("Look monocromático para um dia na cidade", "A monochrome look for a day in the city", "Look monocromático para un día en la ciudad")],
    ["curitiba", "fashion/curitiba", T("Curitiba · Brasil", "Curitiba · Brazil", "Curitiba · Brasil"), T("Look para o inverno de Curitiba", "A look for Curitiba winter", "Look para el invierno de Curitiba")],
    ["portillo", "fashion/portillo", T("Portillo · Chile", "Portillo · Chile", "Portillo · Chile"), T("Camadas para o frio de Portillo", "Layering for the cold in Portillo", "Capas para el frío de Portillo")],
    ["bariloche", "fashion/bariloche", T("Bariloche · Argentina", "Bariloche · Argentina", "Bariloche · Argentina"), T("Arrume-se comigo a −1 °C", "Get ready with me at −1 °C", "Arréglate conmigo a −1 °C")],
  ];

  const foto = [
    ["foto-personalizados", "ugc/fotoregistro-personalizados", T("FotoRegistro · Produtos", "FotoRegistro · Products", "FotoRegistro · Productos"), T("Personalizados que transformam memórias", "Personalized products that turn memories tangible", "Productos personalizados que convierten recuerdos en algo tangible")],
    ["foto-recebidos", "ugc/fotoregistro-recebidos", T("FotoRegistro · Recebidos", "FotoRegistro · Unboxing", "FotoRegistro · Unboxing"), T("Abrindo os recebidos da marca", "Unboxing the brand package", "Abriendo los productos recibidos")],
    ["foto-album", "ugc/fotoregistro-album-viagem", T("FotoRegistro · Álbum", "FotoRegistro · Photo album", "FotoRegistro · Álbum"), T("Álbum de fotos da viagem", "A travel photo album", "Álbum de fotos del viaje")],
  ];

  const tour = [
    ["tour-fondue", "ugc/tour-fondue-neve", T("Tour Curitiba · Gastronomia", "Tour Curitiba · Food", "Tour Curitiba · Gastronomía"), T("Fondue com neve em Curitiba", "Fondue with snow in Curitiba", "Fondue con nieve en Curitiba")],
    ["tour-comer", "ugc/tour-comer-bem", T("Tour Curitiba · Experiência", "Tour Curitiba · Experience", "Tour Curitiba · Experiencia"), T("Comer bem em Curitiba", "Eating well in Curitiba", "Comer bien en Curitiba")],
    ["tour-curitiba", "ugc/tour-curitiba", T("Tour Curitiba · Colaboração", "Tour Curitiba · Collaboration", "Tour Curitiba · Colaboración"), T("Por que eu amo a Tour Curitiba", "Why I love Tour Curitiba", "Por qué me encanta Tour Curitiba")],
  ];

  const stays = [
    ["airbnb", "hospitality/airbnb-campos-do-jordao", T("Hospedagem · Campos do Jordão", "Stay · Campos do Jordão", "Alojamiento · Campos do Jordão"), T("Airbnb entre lareira e montanhas", "An Airbnb among fireplaces and mountains", "Un Airbnb entre chimeneas y montañas")],
    ["ostelzzz", "hospitality/ostelzzz-milao", T("Hospedagem · Milão", "Stay · Milan", "Alojamiento · Milán"), T("Ostelzzz Milano: hostel em estilo cabine", "Ostelzzz Milano: a pod-style hostel", "Ostelzzz Milano: hostel estilo cabina")],
  ];
  const food = [
    ["ventura", "hospitality/cafe-ventura-paris", T("Gastronomia · Paris", "Food · Paris", "Gastronomía · París"), T("Café Ventura", "Café Ventura", "Café Ventura")],
    ["carette", "hospitality/carette-paris", T("Cafeteria · Paris", "Café · Paris", "Cafetería · París"), T("Uma pausa na Carette", "A break at Carette", "Una pausa en Carette")],
    ["cantina", "hospitality/cantina-do-delio", T("Gastronomia · Curitiba", "Food · Curitiba", "Gastronomía · Curitiba"), T("Cantina do Délio", "Cantina do Délio", "Cantina do Délio")],
  ];
  const winery = [["undurraga", "hospitality/vinicola-undurraga", T("Experiência · Chile", "Experience · Chile", "Experiencia · Chile"), T("Vinícola Undurraga", "Undurraga Winery", "Viña Undurraga")]];

  const videoItem = (item) => {
    const [id, path, eyebrow, title, landscape] = item;
    const titleText = t(title);
    return `<button type="button" class="video-card${landscape ? " is-landscape" : ""}" data-video="assets/media/${path}.mp4" data-poster="assets/posters/${path}.jpg" data-title="${encodeURIComponent(titleText)}" aria-label="${t(T("Assistir ao vídeo", "Watch video", "Ver video"))}: ${titleText}">
      <img src="assets/posters/${path}.jpg" alt="" loading="lazy"><span class="video-card-overlay"></span><span class="video-play" aria-hidden="true"><i></i></span><span class="video-card-copy"><small>${t(eyebrow)}</small><strong>${titleText}</strong></span>
    </button>`;
  };
  const gallery = (items, extra = "") => `<div class="video-gallery ${extra}">${items.map(videoItem).join("")}</div>`;
  const heading = (eyebrow, title, description) => `<div class="section-heading"><p class="eyebrow">${t(eyebrow)}</p><h2>${t(title)}</h2>${description ? `<p class="section-description">${t(description)}</p>` : ""}</div>`;
  const pageHero = (eyebrow, title, description) => `<section class="page-hero"><p class="eyebrow">${t(eyebrow)}</p><h1>${t(title)}</h1><p>${t(description)}</p></section>`;
  const cta = (title) => `<section class="contact-cta"><p class="eyebrow">${t(T("Projetos & colaborações", "Projects & collaborations", "Proyectos y colaboraciones"))}</p><h2>${t(title)}</h2><a class="button button--light" href="mailto:dudabb2003@gmail.com">${t(T("Entrar em contato", "Get in touch", "Contactar"))} <span>↗</span></a></section>`;

  const social = () => `<div class="social-links"><a href="mailto:dudabb2003@gmail.com" aria-label="E-mail">✉</a><a href="https://www.instagram.com/diaariodaduda/" target="_blank" rel="noreferrer" aria-label="Instagram">◎</a><a href="https://www.tiktok.com/@diaariodaduda?lang=pt-BR" target="_blank" rel="noreferrer" aria-label="TikTok">♪</a></div>`;
  const header = () => `<header class="site-header"><a class="site-brand" href="index.html">DIÁRIO DA DUDA<span>.</span></a><nav class="site-nav" aria-label="Navigation">${nav.map(([href, label]) => `<a href="${href}">${t(label)}</a>`).join("")}</nav><div class="header-tools"><div class="language-switcher" aria-label="${t(T("Idioma", "Language", "Idioma"))}">${["pt", "en", "es"].map((code) => `<button type="button" data-language="${code}" class="${language === code ? "is-active" : ""}" aria-pressed="${language === code}">${code.toUpperCase()}</button>`).join("")}</div><button class="theme-toggle" type="button" aria-label="${t(T("Alternar tema", "Toggle theme", "Cambiar tema"))}">${document.documentElement.dataset.theme === "dark" ? "☀" : "☾"}</button><button class="menu-button" type="button" aria-label="${t(T("Abrir menu", "Open menu", "Abrir menú"))}"><span></span><span></span></button></div></header>`;
  const footer = () => `<footer class="site-footer"><div><p class="footer-mark">DIÁRIO DA DUDA.</p><p>${t(T("Viagens, moda, hospitalidade e conteúdo que conecta.", "Travel, fashion, hospitality and content that connects.", "Viajes, moda, hospitalidad y contenido que conecta."))}</p></div><div class="footer-contact"><span>${t(T("Contato profissional", "Professional contact", "Contacto profesional"))}</span><a href="mailto:dudabb2003@gmail.com">dudabb2003@gmail.com</a></div>${social()}<p class="footer-legal">© 2026 Diário da Duda. ${t(T("Todos os direitos reservados.", "All rights reserved.", "Todos los derechos reservados."))}</p></footer>`;

  function renderHome() {
    const universes = [
      ["viagens.html", "travel/eurotrip", "01", T("Viagens", "Travel", "Viajes"), T("Roteiros, destinos e experiências vividas pelo mundo.", "Routes, destinations and experiences lived around the world.", "Rutas, destinos y experiencias vividas alrededor del mundo.")],
      ["moda.html", "fashion/santiago", "02", T("Moda", "Fashion", "Moda"), T("Looks de inverno, arrume-se comigo e estilo em viagem.", "Winter looks, get-ready-with-me videos and travel style.", "Looks de invierno, arréglate conmigo y estilo de viaje.")],
      ["ugc.html", "ugc/fotoregistro-recebidos", "03", T("UGC", "UGC", "UGC"), T("Conteúdo autêntico criado para marcas e experiências.", "Authentic content created for brands and experiences.", "Contenido auténtico creado para marcas y experiencias.")],
      ["hospitalidade.html", "hospitality/airbnb-campos-do-jordao", "04", T("Hospitalidade", "Hospitality", "Hospitalidad"), T("Hospedagens, gastronomia e experiências que valem a viagem.", "Stays, gastronomy and experiences worth the journey.", "Alojamientos, gastronomía y experiencias que valen el viaje.")],
    ];
    return `<section class="home-hero"><img src="assets/images/duda-neve.png" alt="Duda em uma paisagem de neve"><div class="home-hero-shade"></div><div class="home-hero-copy"><p class="eyebrow">${t(T("Viagens · Moda · UGC · Hospitalidade", "Travel · Fashion · UGC · Hospitality", "Viajes · Moda · UGC · Hospitalidad"))}</p><h1>DUDA</h1><strong>${t(T("Criadora de conteúdo & narradora visual", "Content creator & visual storyteller", "Creadora de contenido y narradora visual"))}</strong><p>${t(T("Experiências vividas transformadas em histórias visuais para pessoas, destinos e marcas.", "Lived experiences transformed into visual stories for people, destinations and brands.", "Experiencias vividas transformadas en historias visuales para personas, destinos y marcas."))}</p><div class="hero-actions"><a class="button button--light" href="#portfolio">${t(T("Ver portfólio", "View portfolio", "Ver portafolio"))} ↓</a><a class="button button--ghost" href="sobre.html">${t(T("Sobre a Duda", "About Duda", "Sobre Duda"))} ↗</a></div></div></section>
      <section class="section-shell" id="portfolio">${heading(T("Explore o diário", "Explore the journal", "Explora el diario"), T("Quatro universos, uma mesma criadora", "Four worlds, one creator", "Cuatro universos, una creadora"))}<div class="universe-grid">${universes.map(([href, poster, number, title, description]) => `<a class="universe-card" href="${href}"><img src="assets/posters/${poster}.jpg" alt=""><span class="universe-shade"></span><small>${number}</small><div><h3>${t(title)}</h3><p>${t(description)}</p></div><b>↗</b></a>`).join("")}</div></section>
      <section class="section-shell section-shell--tint">${heading(T("Conteúdos selecionados", "Selected stories", "Contenidos seleccionados"), T("Histórias em movimento", "Stories in motion", "Historias en movimiento"))}${gallery([travel[0], fashion[0], foto[1], stays[0]])}</section>
      <section class="partners-band">${heading(T("Colaborações confirmadas", "Confirmed collaborations", "Colaboraciones confirmadas"), T("Marcas que já fizeram parte do diário", "Brands already featured in the journal", "Marcas que ya formaron parte del diario"))}<div class="brand-row"><img src="assets/brands/fotoregistro.png" alt="FotoRegistro"><img src="assets/brands/tour-curitiba.svg" alt="Tour Curitiba"><img src="assets/brands/real-seguro.svg" alt="Real Seguro Viagem"></div><a class="text-link" href="parcerias.html">${t(T("Conhecer parcerias", "View partnerships", "Ver colaboraciones"))} ↗</a></section>
      <section class="next-destinations-preview">${heading(T("Agenda 2026", "2026 schedule", "Agenda 2026"), T("Próximos destinos", "Upcoming destinations", "Próximos destinos"))}<div class="destination-pill-row"><span>RIO DE JANEIRO · 10–12 OUT</span><span>LONDON · 20–22 NOV</span><span>ROME · 22–25 NOV</span><span>AMSTERDAM · 27–30 NOV</span></div><a class="button button--light" href="viagens.html#agenda-2026">${t(T("Ver rota completa", "View complete route", "Ver ruta completa"))} ↗</a></section>${cta(T("A próxima história pode começar com a sua marca.", "The next story can begin with your brand.", "La próxima historia puede comenzar con tu marca."))}`;
  }

  function renderTravel() {
    const countries = [["BR",T("Brasil","Brazil","Brasil")],["IT",T("Itália","Italy","Italia")],["CH",T("Suíça","Switzerland","Suiza")],["FR",T("França","France","Francia")],["PT",T("Portugal","Portugal","Portugal")],["ES",T("Espanha","Spain","España")],["VA",T("Vaticano","Vatican City","Ciudad del Vaticano")],["AR",T("Argentina","Argentina","Argentina")],["CL",T("Chile","Chile","Chile")]];
    const schedule = [[T("Rio de Janeiro","Rio de Janeiro","Río de Janeiro"),T("Brasil","Brazil","Brasil"),T("10–12 outubro","October 10–12","10–12 de octubre")],[T("Londres","London","Londres"),T("Reino Unido","United Kingdom","Reino Unido"),T("20–22 novembro","November 20–22","20–22 de noviembre")],[T("Roma","Rome","Roma"),T("Itália","Italy","Italia"),T("22–25 novembro","November 22–25","22–25 de noviembre")],[T("Bruxelas","Brussels","Bruselas"),T("Bélgica","Belgium","Bélgica"),T("25–26 novembro","November 25–26","25–26 de noviembre")],[T("Bruges","Bruges","Brujas"),T("Bélgica","Belgium","Bélgica"),T("26–27 novembro","November 26–27","26–27 de noviembre")],[T("Amsterdã","Amsterdam","Ámsterdam"),T("Países Baixos","Netherlands","Países Bajos"),T("27–30 novembro","November 27–30","27–30 de noviembre")]];
    const chip = ["omeuchip", "affiliate/omeuchip", T("Conectividade internacional","International connectivity","Conectividad internacional"), T("O Meu Chip","O Meu Chip","O Meu Chip")];
    return `${pageHero(T("Lugares que viraram histórias","Places that became stories","Lugares que se volvieron historias"),T("Viagens","Travel","Viajes"),T("Do Brasil à Europa, um diário visual de destinos realmente vividos pela Duda.","From Brazil to Europe, a visual journal of destinations Duda has truly experienced.","De Brasil a Europa, un diario visual de destinos realmente vividos por Duda."))}<section class="section-shell travel-feature">${gallery([travel[0]],"video-gallery--feature")}</section><section class="section-shell section-shell--tint">${heading(T("Rotas já vividas","Journeys already lived","Rutas ya vividas"),T("Nove países no diário","Nine countries in the journal","Nueve países en el diario"))}<div class="country-grid">${countries.map(([code,name],i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><strong>${code}</strong><h3>${t(name)}</h3></article>`).join("")}</div></section><section class="section-shell">${heading(T("Filmes de viagem","Travel films","Películas de viaje"),T("Destinos em movimento","Destinations in motion","Destinos en movimiento"))}${gallery(travel.slice(1))}</section><section class="travel-schedule" id="agenda-2026">${heading(T("Agenda confirmada · 2026","Confirmed schedule · 2026","Agenda confirmada · 2026"),T("Próximos destinos","Upcoming destinations","Próximos destinos"),T("Uma nova rota entre Brasil e Europa, aberta a projetos com hotéis, restaurantes, experiências, turismo e marcas.","A new route across Brazil and Europe, open to projects with hotels, restaurants, experiences, tourism and brands.","Una nueva ruta entre Brasil y Europa, abierta a proyectos con hoteles, restaurantes, experiencias, turismo y marcas."))}<div class="schedule-grid">${schedule.map(([city,country,dates],i)=>`<article><span>${String(i+1).padStart(2,"0")}</span><small>${t(country)}</small><h3>${t(city)}</h3><p>${t(dates)} · 2026</p></article>`).join("")}</div><a class="button button--light" href="mailto:dudabb2003@gmail.com?subject=Projeto%20em%20um%20próximo%20destino">${t(T("Criar um projeto nessa rota","Build a project on this route","Crear un proyecto en esta ruta"))} ↗</a></section><section class="affiliate-section"><div><p class="eyebrow">O MEU CHIP · ${t(T("AFILIADA","AFFILIATE","AFILIADA"))}</p><h2>${t(T("Conexão para a próxima viagem.","Stay connected on your next journey.","Conéctate en tu próximo viaje."))}</h2><p>${t(T("Use o cupom da Duda e receba 15% de desconto em conectividade internacional.","Use Duda’s code for 15% off international connectivity.","Usa el cupón de Duda y obtén un 15% de descuento en conectividad internacional."))}</p><strong>DIAARIODADUDA</strong><a class="button" href="https://omeuchip.com/?ref=MARIAEDUARDA" target="_blank" rel="sponsored noreferrer">${t(T("Usar 15% de desconto","Use the 15% discount","Usar 15% de descuento"))} ↗</a></div>${gallery([chip])}</section>${cta(T("Seu destino pode ser o próximo capítulo.","Your destination could be the next chapter.","Tu destino puede ser el próximo capítulo."))}`;
  }

  function renderFashion() {
    return `${pageHero(T("Estilo como forma de expressão","Style as a form of expression","El estilo como forma de expresión"),T("Moda","Fashion","Moda"),T("Looks autorais, clima, destino e personalidade. Moda vivida no cotidiano e nas viagens da Duda.","Personal looks, weather, destinations and personality. Fashion lived through Duda’s daily life and journeys.","Looks personales, clima, destinos y personalidad. Moda vivida en el día a día y en los viajes de Duda."))}<section class="fashion-intro"><img src="assets/posters/fashion/santiago.jpg" alt="Duda em Santiago"><div><p class="eyebrow">${t(T("Moda em movimento","Fashion in motion","Moda en movimiento"))}</p><h2>${t(T("Roupa também conta uma história","Clothes tell a story too","La ropa también cuenta una historia"))}</h2><p>${t(T("Do frio urbano de Curitiba às paisagens de Portillo e Bariloche, cada vídeo conecta a escolha do look ao lugar onde ele foi realmente usado.","From Curitiba’s urban winter to the landscapes of Portillo and Bariloche, every video connects the look to the place where it was actually worn.","Del invierno urbano de Curitiba a los paisajes de Portillo y Bariloche, cada video conecta el look con el lugar donde realmente fue usado."))}</p><div class="fashion-tags"><span>GRWM</span><span>WINTER LOOKS</span><span>TRAVEL STYLE</span><span>LIFESTYLE</span></div></div></section><section class="section-shell section-shell--tint">${heading(T("Conteúdo autoral","Original content","Contenido personal"),T("Quatro looks, quatro destinos","Four looks, four destinations","Cuatro looks, cuatro destinos"))}${gallery(fashion)}</section><section class="editorial-quote"><span>01</span><blockquote>${t(T("O estilo muda com o clima, com a rota e com a história que queremos viver.","Style changes with the weather, the route and the story we want to live.","El estilo cambia con el clima, la ruta y la historia que queremos vivir."))}</blockquote></section>${cta(T("Sua marca pode fazer parte do próximo look.","Your brand can be part of the next look.","Tu marca puede formar parte del próximo look."))}`;
  }

  function renderUGC() {
    return `${pageHero(T("Conteúdo feito para conectar","Content made to connect","Contenido creado para conectar"),T("UGC","UGC","UGC"),T("Vídeos com linguagem próxima, contexto real e uma narrativa pensada para aproximar marcas e pessoas.","Videos with a relatable voice, real context and storytelling designed to connect brands with people.","Videos con un lenguaje cercano, contexto real y una narrativa pensada para acercar marcas y personas."))}<section class="brand-story brand-story--foto"><div class="brand-story-heading"><img src="assets/brands/fotoregistro.png" alt="FotoRegistro"><div><p class="eyebrow">${t(T("Parceria confirmada · FotoRegistro","Confirmed partnership · FotoRegistro","Colaboración confirmada · FotoRegistro"))}</p><h2>${t(T("Memórias que viram produto","Memories turned into products","Recuerdos que se convierten en productos"))}</h2></div></div>${gallery(foto)}</section><section class="brand-story brand-story--tour"><div class="brand-story-heading"><img src="assets/brands/tour-curitiba.svg" alt="Tour Curitiba"><div><p class="eyebrow">${t(T("Parceria confirmada · Tour Curitiba","Confirmed partnership · Tour Curitiba","Colaboración confirmada · Tour Curitiba"))}</p><h2>${t(T("Curitiba vivida por experiências","Experiencing Curitiba","Curitiba vivida a través de experiencias"))}</h2></div></div>${gallery(tour)}</section>${cta(T("Conteúdo real para marcas que querem ser lembradas.","Authentic content for brands that want to be remembered.","Contenido auténtico para marcas que quieren ser recordadas."))}`;
  }

  function renderHospitality() {
    return `${pageHero(T("Hospedagens, sabores e experiências","Stays, flavors and experiences","Alojamientos, sabores y experiencias"),T("Hospitalidade","Hospitality","Hospitalidad"),T("Conteúdos vividos pela Duda que apresentam a sensação de estar em um lugar — da chegada à experiência completa.","Experiences lived by Duda that capture what it feels like to be somewhere — from arrival to the complete experience.","Experiencias vividas por Duda que muestran cómo se siente estar en un lugar, desde la llegada hasta la experiencia completa."))}<section class="section-shell hospitality-group">${heading(T("Experiências pessoais · Hospedagens","Personal experiences · Stays","Experiencias personales · Alojamientos"),T("Onde ficar também faz parte da história","Where you stay is part of the story","Dónde te alojas también forma parte de la historia"))}${gallery(stays)}</section><section class="section-shell section-shell--tint hospitality-group">${heading(T("Experiências pessoais · Gastronomia","Personal experiences · Food","Experiencias personales · Gastronomía"),T("Sabores que ajudam a contar um destino","Flavors that help tell a destination","Sabores que ayudan a contar un destino"))}${gallery(food)}</section><section class="section-shell hospitality-group">${heading(T("Experiência pessoal · Enoturismo","Personal experience · Wine tourism","Experiencia personal · Enoturismo"),T("Além da hospedagem e da mesa","Beyond stays and dining","Más allá del alojamiento y la mesa"))}${gallery(winery,"video-gallery--feature")}</section>${cta(T("Sua hospedagem, restaurante ou experiência pode virar a próxima história.","Your stay, restaurant or experience can become the next story.","Tu alojamiento, restaurante o experiencia puede convertirse en la próxima historia."))}`;
  }

  function renderPartners() {
    const brands=[["FotoRegistro","assets/brands/fotoregistro.png",T("Conteúdos com produtos personalizados, recebidos e álbum de viagem.","Content featuring personalized products, an unboxing and a travel photo album.","Contenidos con productos personalizados, unboxing y álbum de viaje."),"ugc.html"],["Tour Curitiba","assets/brands/tour-curitiba.svg",T("Experiências em Curitiba apresentadas em três conteúdos reais.","Curitiba experiences presented through three real pieces of content.","Experiencias en Curitiba presentadas en tres contenidos reales."),"ugc.html"],["Real Seguro Viagem","assets/brands/real-seguro.svg",T("Marca parceira confirmada no portfólio da Duda.","A confirmed partner in Duda’s portfolio.","Marca colaboradora confirmada en el portafolio de Duda."),""]];
    return `${pageHero(T("Marcas & histórias reais","Brands & real stories","Marcas e historias reales"),T("Parcerias","Partnerships","Colaboraciones"),T("Marcas que já fizeram parte da trajetória da Duda, apresentadas com os conteúdos realmente disponíveis.","Brands that have already been part of Duda’s journey, presented with the content that is actually available.","Marcas que ya han formado parte de la trayectoria de Duda, presentadas con los contenidos realmente disponibles."))}<section class="partnership-grid-section"><div class="partnership-grid">${brands.map(([name,logo,description,href],i)=>`${href?`<a href="${href}"`:"<article"} class="partnership-card"><span>0${i+1} · ${t(T("PARCERIA CONFIRMADA","CONFIRMED PARTNERSHIP","COLABORACIÓN CONFIRMADA"))}</span><div class="partnership-logo"><img src="${logo}" alt="${name}"></div><h2>${name}</h2><p>${t(description)}</p>${href?`<strong>${t(T("Ver conteúdos","View content","Ver contenidos"))} ↗</strong></a>`:"</article>"}`).join("")}</div></section><section class="affiliate-note"><div><p class="eyebrow">O MEU CHIP</p><h2>${t(T("Benefício de afiliada para viajantes","Affiliate benefit for travelers","Beneficio de afiliada para viajeros"))}</h2></div><p>${t(T("O Meu Chip aparece separado das parcerias confirmadas. Use o cupom DIAARIODADUDA para receber 15% de desconto.","O Meu Chip appears separately from the confirmed partnerships. Use code DIAARIODADUDA for 15% off.","O Meu Chip aparece separado de las colaboraciones confirmadas. Usa el cupón DIAARIODADUDA para obtener un 15% de descuento."))}</p></section>${cta(T("A próxima parceria pode começar aqui.","The next partnership can start here.","La próxima colaboración puede empezar aquí."))}`;
  }

  function renderAbout() {
    const pillars=[["01",T("Viagens","Travel","Viajes"),T("Roteiros e experiências em nove países.","Routes and experiences across nine countries.","Rutas y experiencias en nueve países.")],["02",T("Moda","Fashion","Moda"),T("Looks autorais conectados a destinos reais.","Personal looks connected to real destinations.","Looks personales conectados con destinos reales.")],["03",T("UGC","UGC","UGC"),T("Conteúdo próximo e visual para marcas.","Relatable visual content for brands.","Contenido visual y cercano para marcas.")],["04",T("Hospitalidade","Hospitality","Hospitalidad"),T("Hospedagens, sabores e experiências vividas.","Stays, flavors and lived experiences.","Alojamientos, sabores y experiencias vividas." )]];
    return `<section class="about-layout"><div class="about-photo"><img src="assets/images/duda-neve.png" alt="Duda em uma paisagem nevada"></div><div class="about-copy"><p class="eyebrow">${t(T("Por trás do diário","Behind the journal","Detrás del diario"))}</p><h1>${t(T("Oi, eu sou a Duda.","Hi, I’m Duda.","Hola, soy Duda."))}</h1><p>${t(T("Criadora do Diário da Duda, um espaço onde viagens, moda, hospitalidade e conteúdo para marcas se encontram.","Creator of Diário da Duda, a space where travel, fashion, hospitality and brand content meet.","Creadora de Diário da Duda, un espacio donde se encuentran los viajes, la moda, la hospitalidad y el contenido para marcas."))}</p><p>${t(T("Cada conteúdo nasce de uma experiência: uma cidade descoberta sozinha, um look pensado para o frio, um produto que guarda memórias ou um lugar que merece ser vivido.","Every story begins with an experience: a city discovered solo, a look planned for the cold, a product that holds memories or a place worth experiencing.","Cada contenido nace de una experiencia: una ciudad descubierta sola, un look pensado para el frío, un producto que guarda recuerdos o un lugar que merece ser vivido."))}</p><a class="button" href="mailto:dudabb2003@gmail.com">${t(T("Vamos conversar","Let’s talk","Hablemos"))} ↗</a>${social()}</div></section><section class="about-quote"><span>DIÁRIO DA DUDA</span><blockquote>“${t(T("Transformar experiências vividas em histórias que aproximam pessoas, destinos e marcas.","Turning lived experiences into stories that connect people, destinations and brands.","Transformar experiencias vividas en historias que acercan personas, destinos y marcas."))}”</blockquote></section><section class="about-pillars">${pillars.map(([n,title,description])=>`<article><span>${n}</span><h2>${t(title)}</h2><p>${t(description)}</p></article>`).join("")}</section>${cta(T("Vamos transformar uma ideia em história?","Shall we turn an idea into a story?","¿Convertimos una idea en una historia?"))}`;
  }

  const pageRenderers = { home: renderHome, travel: renderTravel, fashion: renderFashion, ugc: renderUGC, hospitality: renderHospitality, partners: renderPartners, about: renderAbout };

  function bindEvents() {
    document.querySelectorAll("[data-language]").forEach((button) => button.addEventListener("click", () => {
      language = button.dataset.language;
      try { localStorage.setItem("duda-language", language); } catch (_) {}
      document.documentElement.lang = language === "pt" ? "pt-BR" : language;
      render();
    }));
    document.querySelector(".theme-toggle")?.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = next;
      try { localStorage.setItem("duda-theme", next); } catch (_) {}
      render();
    });
    const menu = document.querySelector(".menu-button");
    menu?.addEventListener("click", () => {
      menu.classList.toggle("is-open");
      document.querySelector(".site-nav")?.classList.toggle("is-open");
    });
    document.querySelectorAll("[data-video]").forEach((button) => button.addEventListener("click", () => openVideo(button)));
  }

  function openVideo(button) {
    const modal = document.createElement("div");
    modal.className = "video-modal-backdrop";
    modal.innerHTML = `<section class="video-modal" role="dialog" aria-modal="true"><button class="video-modal-close" type="button" aria-label="${t(T("Fechar vídeo","Close video","Cerrar video"))}">×</button><video controls autoplay playsinline preload="metadata" poster="${button.dataset.poster}"><source src="${button.dataset.video}" type="video/mp4"></video><div class="video-modal-caption"><strong>${decodeURIComponent(button.dataset.title)}</strong></div></section>`;
    const close = () => { modal.remove(); document.body.style.overflow = ""; };
    modal.addEventListener("click", (event) => { if (event.target === modal) close(); });
    modal.querySelector(".video-modal-close").addEventListener("click", close);
    const onKey = (event) => { if (event.key === "Escape") { close(); document.removeEventListener("keydown", onKey); } };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    document.body.appendChild(modal);
  }

  function render() {
    const page = document.body.dataset.page || "home";
    document.getElementById("app").innerHTML = `${header()}<main>${pageRenderers[page]()}</main>${footer()}`;
    bindEvents();
  }

  document.documentElement.lang = language === "pt" ? "pt-BR" : language;
  render();
})();
