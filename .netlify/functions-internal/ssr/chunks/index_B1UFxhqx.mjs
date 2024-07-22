/* empty css                              */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, e as renderSlot, b as createAstro, s as spreadAttributes, f as renderComponent, d as renderHead } from './astro/server_Bp6uqful.mjs';
/* empty css                         */

const $$Astro$a = createAstro();
const $$LiSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$LiSidebar;
  const { titulo, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="" data-astro-cid-zgfsezs2> <a${addAttribute(url, "href")} class="flex flex-col justify-center items-center w-full [aspect-ratio:1/1] rounded-lg gap-1 p-1 hover:bg-chill-400/10 transition-colors duration-300 link" data-astro-cid-zgfsezs2> ${renderSlot($$result, $$slots["icon"])} <span class="leading-[10px] capitalize text-[10px]" data-astro-cid-zgfsezs2>${titulo}</span> </a> </li>  `;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/components/LiSidebar.astro", void 0);

const $$Astro$9 = createAstro();
const $$Svg = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$Svg;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 512 512" fill="none" stroke="none" stroke-linecap="round"> ${renderSlot($$result, $$slots["default"])} </svg>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/components/Svg.astro", void 0);

const $$Astro$8 = createAstro();
const $$Home = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${renderComponent($$result, "Svg", $$Svg, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M449.333 132.112V42.667c0-.744-.594-1.334-1.333-1.334s-1.333.59-1.333 1.334v88.098l-31.188-21.045-110.994-74.9c-.001 0-.002 0-.003-.002-29.484-19.885-67.479-19.885-96.963 0l-.004.003m241.818 97.291L207.515 34.821m241.818 97.291 8 6A86.561 86.561 0 0 1 492 207.445v197.888C492 453.104 453.104 492 405.333 492h-42.666c-.739 0-1.334-.59-1.334-1.333v-192c0-22.788-18.498-41.334-41.333-41.334H192c-22.835 0-41.333 18.546-41.333 41.334v192c0 .743-.595 1.333-1.334 1.333h-42.666C58.897 492 20 453.104 20 405.333V207.445c0-28.869 14.273-55.703 38.185-71.848l.003-.002L207.515 34.821m241.818 97.291L207.515 34.821"></path> ` })}`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/icons/Home.astro", void 0);

const $$Astro$7 = createAstro();
const $$Estudios$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Estudios$1;
  return renderTemplate`${renderComponent($$result, "Svg", $$Svg, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="M49.926 129.702c.078-.042.18-.094.32-.165l158.9-75.817.687-.328.66-.38a91.492 91.492 0 0 1 92.469.789l.806.48.847.404L461.36 129.35A60.366 60.366 0 0 1 492 181.038v245.629a1.333 1.333 0 0 1-2.667 0v-207.68l-28.623 13.677-157.866 75.434-.79.378-.753.445a86.68 86.68 0 0 1-44.668 12.029l-.087-.001h-.086a92.512 92.512 0 0 1-47.358-12.961l-.788-.468-.827-.394-156.964-74.718a58.737 58.737 0 0 1-30.516-50.754 58.74 58.74 0 0 1 29.579-51.758l.135-.078.114-.067c.011-.006.04-.023.091-.049Zm206.298 340.966-.233-.003-.232.003a311.876 311.876 0 0 1-89.614-12.025 86.82 86.82 0 0 1-60.812-82.782v-25.883l64.078 30.583a174.885 174.885 0 0 0 67.058 21.905v1.035l19.885.115a168.978 168.978 0 0 0 84.512-22.067l65.842-31.452v25.679a86.816 86.816 0 0 1-60.821 82.784 311.86 311.86 0 0 1-89.622 12.108Z"></path> ` })}`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/icons/Estudios.astro", void 0);

const $$Astro$6 = createAstro();
const $$Portafolio$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Portafolio$1;
  return renderTemplate`${renderComponent($$result, "Svg", $$Svg, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m362.277 89.362 3.102 15.087-9.115-25.782a83.997 83.997 0 0 0-78.848-56H234.584a84 84 0 0 0-78.848 56l-9.115 25.782 3.102-15.087A86.864 86.864 0 0 1 234.68 20h42.64a86.86 86.86 0 0 1 84.957 69.362Zm3.284 15.971H405.321A86.798 86.798 0 0 1 492 192v44H20v-43.988a86.794 86.794 0 0 1 86.679-86.679h258.882ZM285.227 349.227A41.33 41.33 0 0 0 297.333 320v-1.333H492v86.666a86.798 86.798 0 0 1-25.421 61.246A86.801 86.801 0 0 1 405.321 492H106.679A86.797 86.797 0 0 1 20 405.321v-86.654h194.667V320A41.33 41.33 0 0 0 256 361.333a41.33 41.33 0 0 0 29.227-12.106Z"></path> ` })}`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/icons/Portafolio.astro", void 0);

const $$Astro$5 = createAstro();
const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`${renderComponent($$result, "Svg", $$Svg, { ...Astro2.props }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<path d="m379.872 380.785.484-.485.45-.517 10.746-12.352c16.767-17.366 16.581-45.054-.556-62.192l-.924-.924-1.036-.795-26.891-20.654c-17.08-15.984-43.73-15.939-60.756.137l-12.78 10.174c-30.517-14.1-53.92-36.787-69.666-69.937l10.054-12.63c16.076-17.025 16.121-43.675.137-60.755l-20.654-26.891-.795-1.036-.924-.923c-17.138-17.138-44.826-17.324-62.192-.558l-12.352 10.747-.517.45-.485.484C115.323 147.99 108 168.741 108 188.949c0 50.575 33.414 104.202 73.812 143.807C222.151 372.303 275.715 404 323.051 404c20.208 0 40.959-7.323 56.821-23.215ZM20 256C20 125.883 125.883 20 256 20c130.117 0 236 105.883 236 236 0 130.117-105.883 236-236 236-130.117 0-236-105.883-236-236Z"></path> ` })}`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/icons/Contacto.astro", void 0);

const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="flex flex-col gap-2 justify-center bg-chill-800/10 p-2 rounded-xl [grid-area:sidebar]"> ${renderComponent($$result, "LiSidebar", $$LiSidebar, { "titulo": "inicio", "url": "#inicio" }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Home", $$Home, { "slot": "icon", "class": "w-6 h-6 stroke-chill-50", "stroke-width": "30" })}` })} ${renderComponent($$result, "LiSidebar", $$LiSidebar, { "titulo": "estudios", "url": "#estudios" }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Estudios", $$Estudios$1, { "slot": "icon", "class": "w-6 h-6 stroke-chill-50", "stroke-width": "30" })}` })} ${renderComponent($$result, "LiSidebar", $$LiSidebar, { "titulo": "portafolio", "url": "#portafolio" }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Portafolio", $$Portafolio$1, { "slot": "icon", "class": "w-6 h-6 stroke-chill-50", "stroke-width": "30" })}` })} ${renderComponent($$result, "LiSidebar", $$LiSidebar, { "titulo": "contacto", "url": "#contacto" }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Contacto", $$Contacto, { "slot": "icon", "class": "w-6 h-6 stroke-chill-50", "stroke-width": "30" })}` })} </ul>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/sections/Sidebar.astro", void 0);

const $$Background = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="background-container absolute w-full h-full top-0 left-0 -z-10 overflow-hidden " data-astro-cid-y3soregm> <div class="background relative w-full h-full" data-astro-cid-y3soregm> <div class="circle bg-chill-500/40 blur-3xl" data-astro-cid-y3soregm></div> <div class="circle bg-chill-600/40 blur-3xl" data-astro-cid-y3soregm></div> <div class="circle bg-chill-700/40 blur-3xl" data-astro-cid-y3soregm></div> <div class="circle bg-chill-800/40 blur-3xl" data-astro-cid-y3soregm></div> <div class="circle bg-chill-900/40 blur-3xl" data-astro-cid-y3soregm></div> </div> </div>  `;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/components/Background.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BackgroundStar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div id="particles-js" class="fixed w-full h-screen bg-transparent top-0 left-0 -z-20"></div>  <script type="module">\n  particlesJS()\n<\/script>'])), maybeRenderHead());
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/components/BackgroundStar.astro", void 0);

const $$Astro$4 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-slate-950 text-xs text-chill-50 p-4 relative"> ${renderComponent($$result, "BackgroundStar", $$BackgroundStar, {})} <main class="main-container fixed top-2 left-2 right-2 bottom-2 max-w-[1366px] mx-auto"> ${renderComponent($$result, "Background", $$Background, {})} ${renderComponent($$result, "Sidebar", $$Sidebar, {})} <section class="section-container bg-chill-800/10 rounded-xl p-4 overflow-y-auto h-full scroll-smooth [grid-area:section]"> ${renderSlot($$result, $$slots["default"])} </section> </main> </body></html>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/layouts/Layout.astro", void 0);

const $$Astro$3 = createAstro();
const $$LiHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$LiHeader;
  const { url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li> <a class="group p-1 w-full rounded-lg bg-chill-400/10 block "${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer"> ${renderSlot($$result, $$slots["default"])} </a> </li>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/components/LiHeader.astro", void 0);

const $$Astro$2 = createAstro();
const $$ArticleHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ArticleHeader;
  const { title, resumen } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article class="flex items-center [align-self:stretch] gap-2 p-2 border-solid border-b-2 border-transparent group" data-astro-cid-e5itrpi2> <figure data-astro-cid-e5itrpi2> ${renderSlot($$result, $$slots["icon"])} </figure> <div class="text" data-astro-cid-e5itrpi2> <span class="text-chill-50/60 capitalize pb-1 block" data-astro-cid-e5itrpi2>${title}</span> <p data-astro-cid-e5itrpi2>${resumen}</p> </div> </article> `;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/components/ArticleHeader.astro", void 0);

const personal = {
	nombre: "Paul",
	apellido: "Dev",
	titulo: "Desarrollador Web",
	resumen: "Soy Paúl Esteban, conocido como PaulDev. Mi pasión por la tecnología comenzó con el CNC y diseño digital, llevándome a estudiar Desarrollo Full-Stack en ConquerBlocks para dominar el frontend y backend.",
	email: "paulguachichullca@gmail.com",
	celular: "+593 98 0958291",
	"cumpleaños": "2000-12-26",
	"ubicación": "Cuenca, Ecuador",
	githubUrl: "https://github.com/Paul1226",
	linkedinUrl: "https://www.linkedin.com/in/paul-guachichullca-2287602b1/",
	emailUrl: "mailto:paulguachichullca023@gmail.com"
};
const experiencia = [
	{
		subtitulo: "Aplicación de Películas",
		proyecto: "Página de Películas",
		descripcion: "Creé una página web de películas que permite a los usuarios buscar y ver información sobre diferentes películas. Se integrará posteriormente una base de datos para el almacenamiento y gestión de datos de películas, mejorando la funcionalidad y la experiencia del usuario.",
		tecnologias: [
			"HTML",
			"CSS",
			"JavaScript",
			"API de películas"
		],
		link: "https://mispeliculas-1226.netlify.app/",
		inicio: "Marzo-2024",
		fin: "Actual"
	},
	{
		subtitulo: "Desarrollo de Sitios Completos",
		proyecto: "Sitios Web Completos",
		descripcion: "Desarrollé dos sitios web que incluyen funcionalidades avanzadas como sistemas de autenticación, manejo de formularios, y conexión a bases de datos. Utilicé tecnologías como React y Node.js para construir aplicaciones web robustas y escalables, proporcionando una experiencia de usuario eficiente y segura.",
		tecnologias: [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"Node.js"
		],
		inicio: "Enero-2024",
		fin: "Feb-2024"
	},
	{
		subtitulo: "Desarrollo Web Básico",
		proyecto: "Páginas Web en HTML, CSS y JavaScript",
		descripcion: "He creado más de 10 páginas web utilizando HTML, CSS y JavaScript, enfocándome en el diseño responsivo, la implementación de animaciones y la lógica de programación en JavaScript. Estos proyectos me han permitido profundizar mis conocimientos en el desarrollo frontend.",
		tecnologias: [
			"HTML",
			"CSS",
			"JavaScript"
		],
		inicio: "Sep-2023",
		fin: "Dic-2023"
	}
];
const educacion = [
	{
		institucion: "Academia Conquer Blocks",
		titulo: "Desarrollador Frontend",
		inicio: "2023",
		fin: "Actual",
		descripcion: "Me especializo en el desarrollo frontend utilizando tecnologías como React y Astro para crear interfaces de usuario dinámicas y receptivas, proporcionando una experiencia de usuario de alta calidad."
	},
	{
		institucion: "Academia Conquer Blocks",
		titulo: "Desarrollador Backend",
		inicio: "2023",
		fin: "Actual",
		descripcion: "Desarrollo la lógica del servidor y la gestión de bases de datos con Node.js y Django, asegurando la eficiencia y seguridad en la manipulación de datos y en la comunicación con el frontend."
	}
];
const habilidades = [
	"HTML",
	"CSS",
	"JavaScript",
	"Astro",
	"Git",
	"Github",
	"MySQL",
	"Tailwind",
	"SASS"
];
const proyectos = [
	{
		nombre: "Mis Películas",
		descripcion: "Una plataforma web que permite a los usuarios explorar una amplia variedad de películas, ver detalles como sinopsis, reparto y calificaciones. Utiliza tecnologías modernas para ofrecer una experiencia de usuario fluida y atractiva.",
		tecnologias: [
			"astro",
			"tailwind",
			"MongoDB"
		],
		url: "https://mispeliculas-1226.netlify.app/",
		repositorio: "https://github.com/Paul1226/MisPeliculas",
		imagen: "https://raw.githubusercontent.com/Paul1226/PaulDev-Porfolio/main/public/proyecto-pelis.webp"
	},
	{
		nombre: "Coworking Space",
		descripcion: "Este proyecto es una landing page diseñada para un espacio de coworking, creada para profundizar mis conocimientos en CSS. La página destaca las características del coworking, las tarifas de membresía y una galería de imágenes.",
		tecnologias: [
			"astro",
			"tailwind",
			"javaScript"
		],
		repositorio: "https://github.com/Paul1226/Coworking-Space",
		imagen: "https://raw.githubusercontent.com/Paul1226/PaulDev-Porfolio/main/public/microsite01.webp"
	}
];
const infoPorfolio = {
	personal: personal,
	experiencia: experiencia,
	educacion: educacion,
	habilidades: habilidades,
	proyectos: proyectos
};

const $$HeaderInfo = createComponent(($$result, $$props, $$slots) => {
  const personal = infoPorfolio.personal;
  const celular = Object.keys(personal)[5];
  Object.keys(personal)[4];
  const ubicacion = Object.keys(personal)[7];
  const cumpleanios = Object.keys(personal)[6];
  return renderTemplate`${maybeRenderHead()}<header class="md:order-2" id="inicio" data-astro-cid-iqw6zqhb> <fieldset class="rounded-xl border-solid border-2 border-chill-900 w-full max-w-[280px] mx-auto md:min-w-[280px]" data-astro-cid-iqw6zqhb> <legend class="w-3/4 max-w-[150px] [aspect-ratio:1/1] mx-auto bg-chillinear rounded-lg overflow-hidden [box-shadow:0px_0px_10px_#00000020]" data-astro-cid-iqw6zqhb> <img class="object-cover rounded-xl mx-auto" src="https://raw.githubusercontent.com/Paul1226/PaulDev-Porfolio/main/public/perfil.webp" alt="Foto de perfil de PaulDev" loading="lazy" data-astro-cid-iqw6zqhb> </legend> <header class="flex flex-col gap-1 py-4 items-center" data-astro-cid-iqw6zqhb> <h2 class="text-3xl font-bold text-chill-50 font-cinzel" data-astro-cid-iqw6zqhb> ${infoPorfolio.personal.nombre}<span class="bg-textlinear text-transparent bg-clip-text" data-astro-cid-iqw6zqhb>${infoPorfolio.personal.apellido}</span> </h2> <p class="p-2 rounded-lg bg-chill-700/10 w-max" data-astro-cid-iqw6zqhb> ${infoPorfolio.personal.titulo} </p> <article class="pt-3" data-astro-cid-iqw6zqhb> <ul class="flex items-center gap-2" data-astro-cid-iqw6zqhb> ${renderComponent($$result, "LiHeader", $$LiHeader, { "url": infoPorfolio.personal.githubUrl, "data-astro-cid-iqw6zqhb": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Svg", $$Svg, { "class": "w-7 h-7 transtion-all duration-300 fill-chill-50/50 group-hover:fill-chill-50 group-hover:scale-110", "stroke-width": "30", "data-astro-cid-iqw6zqhb": true }, { "default": ($$result3) => renderTemplate` <path d="M502.021 262.337C502.021 370.722 431.963 462.726 334.601 495.503C332.771 495.799 331.641 495.687 331.043 495.554C330.438 495.419 330.237 495.238 330.183 495.188C330.001 495.022 329.509 494.315 329.509 492.928C329.509 490.168 329.542 485.33 329.585 478.817C329.608 475.483 329.633 471.71 329.659 467.552C329.733 455.315 329.808 439.836 329.808 422.677C329.808 406.398 326.311 393.028 320.811 382.789C344.711 378.638 369.044 370.719 388.68 354.281C413.578 333.44 429.328 300.311 429.328 248.96C429.328 220.732 419.981 197.039 404.331 178.063C408.035 165.771 412.309 140.572 399.765 108.817L398.026 104.414L393.518 102.969L390.464 112.491C393.518 102.969 393.509 102.965 393.499 102.962L393.479 102.956L393.438 102.943C393.409 102.934 393.38 102.925 393.348 102.916C393.286 102.897 393.219 102.877 393.145 102.856C392.999 102.814 392.83 102.769 392.64 102.721C392.258 102.625 391.788 102.521 391.228 102.419C390.108 102.217 388.637 102.027 386.806 101.942C383.137 101.773 378.077 102.027 371.554 103.402C359.191 106.007 341.655 112.617 318.338 127.905C298.262 122.77 277.059 120.215 256.049 120.112H256H255.951C234.943 120.215 213.759 122.77 193.719 127.905C170.37 112.625 152.815 106.017 140.443 103.41C133.916 102.034 128.854 101.778 125.184 101.945C123.352 102.028 121.881 102.217 120.761 102.419C120.201 102.519 119.731 102.623 119.35 102.718C119.159 102.766 118.991 102.811 118.844 102.853C118.811 102.862 118.779 102.871 118.748 102.88C118.711 102.891 118.675 102.902 118.641 102.912C118.61 102.922 118.581 102.931 118.552 102.939L118.511 102.952L118.491 102.959C118.481 102.962 118.472 102.965 121.515 112.491L118.472 102.965L113.953 104.408L112.212 108.821C99.6898 140.569 103.961 165.767 107.685 178.075C92.0593 197.036 82.6507 220.722 82.6507 248.96C82.6507 300.196 98.3747 333.327 123.206 354.224C142.826 370.736 167.145 378.74 191.028 382.952C188.042 388.558 185.658 395.098 184.119 402.533C177.558 404.921 168.778 407.046 159.746 406.24C148.966 405.277 136.941 400.109 127.208 383.471C127.202 383.46 127.196 383.449 127.189 383.437C127.142 383.354 127.081 383.248 127.006 383.119C126.856 382.863 126.65 382.518 126.389 382.097C125.867 381.257 125.118 380.108 124.144 378.748C122.206 376.04 119.325 372.425 115.5 368.731C107.919 361.407 96.0157 353.203 79.9997 352.073L79.7165 352.053L79.4326 352.049L79.296 362.048C79.4326 352.049 79.4295 352.049 79.4262 352.049H79.4193H79.4035L79.3648 352.048C79.3359 352.048 79.3007 352.048 79.2596 352.048C79.1774 352.047 79.0712 352.047 78.9433 352.048C78.688 352.05 78.343 352.056 77.9277 352.07C77.1062 352.098 75.9642 352.161 74.669 352.302C72.4771 352.542 68.326 353.146 64.7636 355.173C62.8749 356.247 60.2298 358.242 58.723 361.701C57.081 365.47 57.5145 369.278 58.7988 372.336C60.9511 377.462 66.0083 381.823 71.9004 385.853L72.5665 386.309L73.1841 386.599C73.2179 386.617 73.2754 386.648 73.3553 386.694C73.6027 386.834 74.0647 387.109 74.7011 387.545C75.9725 388.415 77.9466 389.929 80.304 392.294C84.9723 396.978 91.2814 405.137 96.5867 418.544C96.5867 418.544 96.5874 418.546 96.5878 418.548C96.6463 418.712 96.7226 418.92 96.8181 419.167C97.0089 419.662 97.2769 420.319 97.6335 421.109C98.3456 422.686 99.4174 424.811 100.942 427.254C103.989 432.136 108.888 438.356 116.387 443.976C130.046 454.211 151.064 461.532 182.285 457.199C182.336 464.6 182.395 471.494 182.445 477.306C182.507 484.587 182.555 490.171 182.555 492.928C182.555 494.218 182.087 494.92 181.871 495.116C181.795 495.186 181.571 495.377 180.955 495.518C180.358 495.655 179.259 495.772 177.498 495.508C80.1189 462.758 10 370.723 10 262.315C10 126.441 120.146 16.3147 256 16.3147C391.852 16.3147 502 126.46 502.021 262.336" data-astro-cid-iqw6zqhb></path> <path d="M96.96 373.888C96.4053 375.168 94.4 375.552 92.5653 374.677C90.7093 373.845 89.664 372.096 90.2613 370.837C90.816 369.536 92.8213 369.173 94.6773 370.048C96.5333 370.859 97.6 372.608 96.96 373.888Z" data-astro-cid-iqw6zqhb></path> <path d="M107.328 385.451C106.112 386.581 103.723 386.048 102.101 384.277C100.416 382.485 100.117 380.096 101.355 378.965C102.613 377.835 104.917 378.368 106.603 380.16C108.288 381.931 108.608 384.299 107.328 385.451Z" data-astro-cid-iqw6zqhb></path> <path d="M117.419 400.192C115.84 401.28 113.28 400.256 111.701 397.995C110.123 395.712 110.123 392.981 111.744 391.893C113.323 390.805 115.861 391.787 117.461 394.048C119.019 396.352 119.019 399.083 117.419 400.192Z" data-astro-cid-iqw6zqhb></path> <path d="M131.243 414.443C129.835 416 126.848 415.573 124.672 413.461C122.432 411.392 121.813 408.469 123.221 406.912C124.651 405.355 127.659 405.803 129.856 407.893C132.075 409.963 132.736 412.907 131.243 414.443Z" data-astro-cid-iqw6zqhb></path> <path d="M150.336 422.699C149.717 424.704 146.837 425.621 143.936 424.768C141.035 423.893 139.136 421.547 139.733 419.52C140.331 417.493 143.232 416.555 146.155 417.472C149.035 418.325 150.933 420.672 150.336 422.699Z" data-astro-cid-iqw6zqhb></path> <path d="M171.285 424.235C171.349 426.347 168.896 428.096 165.845 428.139C162.795 428.203 160.299 426.496 160.277 424.427C160.277 422.293 162.688 420.565 165.739 420.501C168.789 420.437 171.285 422.144 171.285 424.235Z" data-astro-cid-iqw6zqhb></path> <path d="M190.784 420.928C191.147 422.976 189.035 425.109 186.005 425.664C183.04 426.219 180.288 424.939 179.904 422.891C179.541 420.779 181.696 418.667 184.661 418.112C187.669 417.579 190.4 418.816 190.784 420.928Z" data-astro-cid-iqw6zqhb></path> ` })} ` })} ${renderComponent($$result, "LiHeader", $$LiHeader, { "url": infoPorfolio.personal.linkedinUrl, "data-astro-cid-iqw6zqhb": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Svg", $$Svg, { "class": "w-7 h-7 transtion-all duration-300 fill-chill-50/50 group-hover:fill-chill-50 group-hover:scale-110", "stroke-width": "30", "viewBox": "0 0 24 24", "data-astro-cid-iqw6zqhb": true }, { "default": ($$result3) => renderTemplate` <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" data-astro-cid-iqw6zqhb></path> ` })} ` })} ${renderComponent($$result, "LiHeader", $$LiHeader, { "url": infoPorfolio.personal.emailUrl, "data-astro-cid-iqw6zqhb": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Svg", $$Svg, { "class": "w-7 h-7 transtion-all duration-300 fill-chill-50/50 group-hover:fill-chill-50 group-hover:scale-110", "stroke-width": "30", "data-astro-cid-iqw6zqhb": true }, { "default": ($$result3) => renderTemplate` <path d="M497 153.461 342.041 308.42l-.006.007-.007.006a121.814 121.814 0 0 1-172.056 0l-.007-.006-.006-.007L15 153.461v230.53a91.795 91.795 0 0 0 91.685 91.676h298.63A91.794 91.794 0 0 0 497 384v-.018m0-230.521v230.521m0-230.521v230.521m0-230.521v230.521" data-astro-cid-iqw6zqhb></path><path d="M476.686 70.997 290.684 257.02a49.149 49.149 0 0 1-69.36.008l-.008-.008L35.314 70.997a91.368 91.368 0 0 1 71.374-34.664h298.624a91.368 91.368 0 0 1 71.374 34.664Z" data-astro-cid-iqw6zqhb></path> ` })} ` })} </ul> </article> </header> <main class="px-4 pb-4" data-astro-cid-iqw6zqhb> <section class="flex flex-col gap-1 items-center [align-self:stretch] bg-red-90 rounded-lg" data-astro-cid-iqw6zqhb> ${renderComponent($$result, "ArticleHeader", $$ArticleHeader, { "title": celular, "resumen": infoPorfolio.personal.celular, "data-astro-cid-iqw6zqhb": true }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Svg", $$Svg, { "class": "w-7 h-7 stroke-chill-50/50 fill-transparent transition-colors duration-300 group-hover:fill-chill-50/50", "slot": "icon", "stroke-width": "30", "data-astro-cid-iqw6zqhb": true }, { "default": ($$result3) => renderTemplate` <path d="M192 15h128c50.532 0 91.667 41.135 91.667 91.667v298.666C411.667 455.865 370.532 497 320 497H192c-50.532 0-91.667-41.135-91.667-91.667V106.667C100.333 56.135 141.468 15 192 15Zm42.667 448h42.666c20.061 0 36.334-16.273 36.334-36.333 0-20.061-16.273-36.334-36.334-36.334h-42.666c-20.061 0-36.334 16.273-36.334 36.334 0 20.06 16.273 36.333 36.334 36.333Z" data-astro-cid-iqw6zqhb></path> ` })}` })} ${renderComponent($$result, "ArticleHeader", $$ArticleHeader, { "title": ubicacion, "resumen": infoPorfolio.personal.ubicaci\u00F3n, "data-astro-cid-iqw6zqhb": true }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Svg", $$Svg, { "class": "w-7 h-7 stroke-chill-50/50 fill-transparent transition-colors duration-300 group-hover:fill-chill-50/50", "slot": "icon", "stroke-width": "30", "data-astro-cid-iqw6zqhb": true }, { "default": ($$result3) => renderTemplate` <path d="m493.942 363.134-.006.004-210.368 126.229a53.5 53.5 0 0 1-27.546 7.654 53.444 53.444 0 0 1-27.536-7.647l-.012-.008L18.071 363.141l-.007-.004A6.325 6.325 0 0 1 15 357.674a6.305 6.305 0 0 1 3.121-5.412l.009-.005.008-.005 93.382-54.664 51.941 50.775c24.76 24.23 57.699 37.581 92.539 37.581 34.844 0 67.758-13.353 92.534-37.576l.003-.002 51.932-50.798 93.379 54.654.007.004a6.394 6.394 0 0 1 3.146 5.448 6.326 6.326 0 0 1-3.059 5.46ZM256 15c35.918 0 69.604 13.952 94.968 39.336 25.401 25.42 39.366 59.07 39.366 94.976 0 35.885-13.949 69.551-39.305 94.937l-53.313 52.162-.003.003c-11.445 11.189-26.514 16.842-41.713 16.842-15.199 0-30.27-5.654-41.715-16.844l-.001-.001-53.164-51.992c-52.485-52.547-52.444-137.748-.113-190.08C186.396 28.952 220.084 15 256 15Zm-79 134.12c0 43.634 35.367 79 79 79 43.634 0 79-35.366 79-79s-35.366-79-79-79c-43.633 0-79 35.366-79 79Z" data-astro-cid-iqw6zqhb></path> ` })}` })} ${renderComponent($$result, "ArticleHeader", $$ArticleHeader, { "title": cumpleanios, "resumen": infoPorfolio.personal.cumplea\u00F1os, "data-astro-cid-iqw6zqhb": true }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Svg", $$Svg, { "class": "w-7 h-7 stroke-chill-50/50 fill-transparent transition-colors duration-300 group-hover:fill-chill-50/50", "slot": "icon", "stroke-width": "30", "data-astro-cid-iqw6zqhb": true }, { "default": ($$result3) => renderTemplate` <path d="m17.665 451.281-.002.004c-5.224 12.401-2.468 26.485 7.033 35.995v.001m-7.03-36L66.56 508.16c-6.059 2.539-12.395 3.797-18.667 3.797-12.416 0-24.597-4.885-33.792-14.058l10.607-10.607-.011-.011m-7.032-36L89.82 279.865l142.315 142.316-171.372 72.144-.003.002m-43.095-43.046 43.095 43.046m-36.063-7.046c6.363 6.348 14.726 9.676 23.196 9.676 4.258 0 8.624-.853 12.867-2.63m-36.063-7.046 36.063 7.046m136.177-317.478.008.008 138.219 138.219.021.021c10.054 10.054 14.427 24.387 11.694 38.374a42.551 42.551 0 0 1-25.299 31.105l-17.112 7.202-184.182-184.182 7.204-17.116v-.002c5.524-13.131 17.136-22.563 31.112-25.316 13.947-2.731 28.291 1.628 38.335 11.687Zm150.717-80.438c-1.237 19.201-8.568 38.234-22.605 56.739l-.007-.004a6.29 6.29 0 0 1-5.042 2.499 6.264 6.264 0 0 1-3.823-1.283 6.328 6.328 0 0 1-1.211-8.866l.005-.006.005-.007c11.755-15.521 18.913-32.326 20.036-49.891v-.003c2.714-42.557-27.818-67.818-29.522-69.215l-.012-.01-.013-.01c-2.747-2.243-3.121-6.269-.995-8.914 2.216-2.752 6.079-3.161 8.758-1.109 2.335 1.903 37.539 31.267 34.426 80.08Zm148.187 177.283a6.319 6.319 0 0 1-.993 8.411l-.519.364c-1.159.815-2.423 1.176-3.641 1.176-2.055 0-3.937-.926-5.141-2.593l-.133-.183-.138-.18c-1.08-1.404-14.194-18.377-37.276-18.377-10.335 0-20.045 3.012-28.294 9.23l-.007.005-.006.006a6.33 6.33 0 0 1-8.876-1.234c-2.099-2.789-1.528-6.762 1.234-8.842l.007-.005.006-.005c10.181-7.682 22.539-11.8 35.936-11.8 24.258 0 41.777 15.428 47.837 24.022l.004.005ZM480 49.021c-9.38 0-17-7.62-17-17 0-9.38 7.62-17 17-17 9.38 0 17 7.62 17 17 0 9.38-7.62 17-17 17Zm-42.667 106.667c-9.379 0-17-7.62-17-17 0-9.38 7.621-17 17-17 9.38 0 17 7.62 17 17 0 9.38-7.62 17-17 17ZM202.667 70.333c-9.38 0-17-7.62-17-17 0-9.38 7.62-17 17-17 9.379 0 17 7.62 17 17 0 9.38-7.621 17-17 17Zm256 341.334c-9.38 0-17-7.621-17-17 0-9.38 7.62-17 17-17 9.379 0 17 7.62 17 17 0 9.379-7.621 17-17 17Zm-405.334-320c-9.38 0-17-7.62-17-17 0-9.38 7.62-17 17-17 9.38 0 17 7.62 17 17 0 9.38-7.62 17-17 17ZM352 497c-9.38 0-17-7.62-17-17 0-9.38 7.62-17 17-17 9.38 0 17 7.62 17 17 0 9.38-7.62 17-17 17Z" data-astro-cid-iqw6zqhb></path> ` })}` })} <!-- <ArticleHeader title={email} resumen={infoPorfolio.personal.email}>
                    <Svg class="w-7 h-7 stroke-chill-50/50" slot="icon" stroke-width="30">
                        <path d="M497 153.461 342.041 308.42l-.006.007-.007.006a121.814 121.814 0 0 1-172.056 0l-.007-.006-.006-.007L15 153.461v230.53a91.795 91.795 0 0 0 91.685 91.676h298.63A91.794 91.794 0 0 0 497 384v-.018m0-230.521v230.521m0-230.521v230.521m0-230.521v230.521"/><path d="M476.686 70.997 290.684 257.02a49.149 49.149 0 0 1-69.36.008l-.008-.008L35.314 70.997a91.368 91.368 0 0 1 71.374-34.664h298.624a91.368 91.368 0 0 1 71.374 34.664Z"/>
                    </Svg>
                </ArticleHeader> --> </section> <a class="mt-4 border-2 border-solid border-chill-900 py-2 px-3 rounded-full text-chill-50/50 block w-max mx-auto hover:text-chill-50 transition-all duration-300 link-cv" href="/DownloadCv" rel="noopener noreferrer" target="_blank" data-astro-cid-iqw6zqhb>
Descargar CV
</a> </main> </fieldset> </header> `;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/sections/HeaderInfo.astro", void 0);

const $$Presentacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="max-w-xl md:order-1"> <div class="flex gap-4 mb-4"> <img class="rounded-full shadow-lg size-14" src="https://raw.githubusercontent.com/Paul1226/PaulDev-Porfolio/main/public/img-cv.jpg" alt="Paúl Guachichullca"> <div class="flex items-center md:justify-center"> <div class="flex items-center"> <span class="relative inline-flex overflow-hidden rounded-full p-[1px]"> <span class="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span> <div class="inline-flex items-center justify-center w-full px-3 py-1 text-xs text-chill-50 bg-chill-950/90 rounded-full cursor-pointer backdrop-blur-3xl whitespace-nowrap">
Disponible para trabajar
</div> </span> </div> </div> </div> <h1 class="text-4xl font-bold tracking-tight text-chill-50 sm:text-4xl font-cinzel mt-6">
Hey, soy PaulDev
</h1> <p class="mt-6 text-base text-chill-50">
Soy Paúl Esteban, conocido como PaulDev. Mi pasión por la tecnología comenzó con el <strong class="font-bold text-chill-400">manejo de Máquinas CNC y diseño digital</strong>, llevándome a estudiar Desarrollo Full-Stack en ConquerBlocks para dominar el frontend y backend.
</p> <nav class="flex flex-wrap gap-4 mt-8"> <a${addAttribute(infoPorfolio.personal.emailUrl, "href")} target="_blank" rel="noopener noreferrer" role="link" class="inline-flex items-center justify-center gap-2 px-4 py-1 text-chill-50 transition duration-300 border rounded-full bg-gray-800 border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5"></path><path d="M3 6l9 6l9 -6"></path><path d="M15 18h6"></path><path d="M18 15l3 3l-3 3"></path></svg>
Contáctame
</a> <a${addAttribute(infoPorfolio.personal.linkedinUrl, "href")} target="_blank" rel="noopener noreferrer" role="link" class="inline-flex items-center justify-center gap-2 px-4 py-1 text-chill-50 transition duration-300 border rounded-full bg-gray-800 border-gray-600 focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black"> <svg class="size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M8 11l0 5"></path><path d="M8 8l0 .01"></path><path d="M12 16l0 -5"></path><path d="M16 16v-3a2 2 0 0 0 -4 0"></path></svg>
LinkedIn
</a> </nav> </div>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/sections/Presentacion.astro", void 0);

const $$Astro$1 = createAstro();
const $$LiEstudios = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LiEstudios;
  const { titulo, subtitulo, fecha, contenido, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class=""> <div class="relative mx-12 pb-6 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-chill-900 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"> <div class="relative pb-6 md:col-span-2"> <div class="sticky top-0"> <span class="text-chill-400 -left-[42px] absolute rounded-full text-5xl">•</span> <h3 class="text-xl font-bold text-chill-400">${titulo}</h3> <h4 class="font-semibold text-lg text-chill-50">${subtitulo}</h4> <time class="p-0 m-0 text-sm text-chill-50/30">${fecha}</time> </div> </div> <div class="relative flex flex-col gap-2 pb-4 text-chill-50/60 md:col-span-3 text-sm md:text-base">${contenido} ${link && renderTemplate`<a${addAttribute(link, "href")} target="_blank" role="link" class="inline-flex w-max items-center text-sm font-medium text-chill-500 transition-colors duration-300 hover:text-chill-700">
Saber más
<svg xmlns="http://www.w3.org/2000/svg" class="w-5 icon icon-tabler icon-tabler-chevron-right" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M9 6l6 6l-6 6"></path> </svg> </a>`} </div> </div> </li>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/components/LiEstudios.astro", void 0);

const $$Estudios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<article class="[grid-area:estudios] flex flex-col gap-8 lg:flex-row" id="estudios"> <div class="first-content"> <div class="lg:sticky lg:top-0"> <h2 class="text-2xl font-bold text-chill-50 font-cinzel">Estudios</h2> <ol class="relative mt-6 w-full max-w-[800px] mx-auto"> ${infoPorfolio.educacion.map(({ institucion, titulo, inicio, fin, descripcion }) => {
    return renderTemplate`${renderComponent($$result, "LiEstudios", $$LiEstudios, { "titulo": institucion, "subtitulo": titulo, "fecha": `${fin} - ${inicio}`, "contenido": descripcion })}`;
  })} </ol> </div> </div> <div class="second-content"> <h2 class="text-2xl font-bold text-chill-50 font-cinzel">Experiencia</h2> <ol class="relative mt-6 w-full max-w-[800px] mx-auto"> ${infoPorfolio.experiencia.map(({ proyecto, descripcion, subtitulo, link, fin, inicio }) => {
    return renderTemplate`${renderComponent($$result, "LiEstudios", $$LiEstudios, { "titulo": proyecto, "subtitulo": subtitulo, "fecha": `${fin} - ${inicio}`, "contenido": descripcion, "link": link })}`;
  })} </ol> </div> </article>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/sections/Estudios.astro", void 0);

const $$Astro = createAstro();
const $$CardProyectos = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardProyectos;
  const {
    isEven,
    urlImagen,
    urlSitio,
    urlRepositorio,
    nombre,
    descripcion,
    tecnologias
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(`w-full flex flex-col gap-5 mt-6 md:flex-row bg-chill-950/30 max-w-[800px] p-4 rounded-lg group ${isEven}`, "class")} data-astro-cid-yk6nnqp5> <figure class="w-full max-w-[400px] md:min-w-[300px] overflow-hidden rounded-lg bg-transparent transition-all duration-300 relative" data-astro-cid-yk6nnqp5> <img class="w-full h-full object-cover group-hover:scale-95 transition-all duration-300 rounded-lg opacity-100 group-hover:opacity-50 group-hover:brightness-50"${addAttribute(urlImagen, "src")}${addAttribute(`Imagen de ${nombre}`, "alt")} data-astro-cid-yk6nnqp5> ${(urlSitio || urlRepositorio) && renderTemplate`<div class="links absolute inset-0 hidden flex-col gap-y-4 justify-center items-center group-hover:inline-flex" data-astro-cid-yk6nnqp5> ${urlSitio && renderTemplate`<a class="flex gap-x-2 items-center bg-slate-500 py-1 px-2 rounded-lg duration-300 hover:bg-slate-700 active:bg-slate-900"${addAttribute(urlSitio, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-yk6nnqp5> <svg class="w-4 fill-chill-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-yk6nnqp5> <path d="M7.896 16.104a1.5 1.5 0 1 1 2.121-2.121c1.326 1.326 3.64 1.327 4.966 0l4.989-4.989c1.369-1.369 1.369-3.597 0-4.966s-3.597-1.369-4.966 0a1.5 1.5 0 1 1-2.121-2.121 6.518 6.518 0 0 1 9.208 0 6.518 6.518 0 0 1 0 9.208l-4.989 4.989c-1.27 1.27-2.937 1.904-4.604 1.904s-3.335-.635-4.604-1.904Zm-1.384 7.893a6.494 6.494 0 0 0 4.604-1.904 1.5 1.5 0 1 0-2.121-2.121 3.515 3.515 0 0 1-4.966 0 3.516 3.516 0 0 1 0-4.966l4.961-4.961a3.514 3.514 0 0 1 4.966 0 1.5 1.5 0 1 0 2.121-2.121 6.518 6.518 0 0 0-9.208 0l-4.962 4.961a6.518 6.518 0 0 0 0 9.208 6.49 6.49 0 0 0 4.604 1.904Z" data-astro-cid-yk6nnqp5></path> </svg> <span data-astro-cid-yk6nnqp5>Sitio</span> </a>`} ${urlRepositorio && renderTemplate`<a class="flex gap-x-2 items-center bg-slate-700 border-2 p-1 rounded-lg duration-300 hover:bg-slate-900 active:bg-black"${addAttribute(urlRepositorio, "href")} target="_blank" rel="noopener noreferrer" data-astro-cid-yk6nnqp5> <svg class="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-yk6nnqp5> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-yk6nnqp5></path> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" data-astro-cid-yk6nnqp5></path> </svg> <span data-astro-cid-yk6nnqp5>Repositorio</span> </a>`} </div>`} </figure> <div class="flex flex-col gap-y-4" data-astro-cid-yk6nnqp5> <h2 class="font-semibold text-xl text-chill-50" data-astro-cid-yk6nnqp5>${nombre}</h2> <p class="p-0 m-0 text-sm text-chill-50/60 md:text-base text-pretty" data-astro-cid-yk6nnqp5> ${descripcion} </p> ${tecnologias && renderTemplate`<div class="flex gap-4 items-center flex-wrap font-bold tecn" data-astro-cid-yk6nnqp5> ${tecnologias.map((tecn) => {
    if (tecn === "astro") {
      return renderTemplate`<span class="before:content-['Astro']" data-astro-cid-yk6nnqp5> <svg class="w-4" viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" data-astro-cid-yk6nnqp5> <path d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z" fill="#fff" data-astro-cid-yk6nnqp5></path> <path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.883 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.742-22.735c0-5.06-.786-9.938-2.243-14.516Z" data-astro-cid-yk6nnqp5></path> </svg> </span>`;
    } else if (tecn === "tailwind") {
      return renderTemplate`<span class="before:content-['Tailwind'] py-1" data-astro-cid-yk6nnqp5> <svg class="w-7" viewBox="0 0 256 154" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" data-astro-cid-yk6nnqp5> <defs data-astro-cid-yk6nnqp5> <linearGradient x1="-2.778%" y1="32%" x2="100%" y2="67.556%" id="gradient" data-astro-cid-yk6nnqp5> <stop stop-color="#2298BD" offset="0%" data-astro-cid-yk6nnqp5></stop> <stop stop-color="#0ED7B5" offset="100%" data-astro-cid-yk6nnqp5></stop> </linearGradient> </defs> <path d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z" fill="url(#gradient)" data-astro-cid-yk6nnqp5></path> </svg> </span>`;
    } else if (tecn === "MongoDB") {
      return renderTemplate`<span class="before:content-['MongoDB']" data-astro-cid-yk6nnqp5> <svg class="w-3" viewBox="0 0 256 549" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" data-astro-cid-yk6nnqp5> <path fill="#01EC64" d="M175.622 61.108C152.612 33.807 132.797 6.078 128.749.32a1.03 1.03 0 0 0-1.492 0c-4.048 5.759-23.863 33.487-46.874 60.788-197.507 251.896 31.108 421.89 31.108 421.89l1.917 1.28c1.704 26.234 5.966 63.988 5.966 63.988h17.045s4.26-37.54 5.965-63.987l1.918-1.494c.213.214 228.828-169.78 31.32-421.677Zm-47.726 418.05s-10.227-8.744-12.997-13.222v-.428l12.358-274.292c0-.853 1.279-.853 1.279 0l12.357 274.292v.428c-2.77 4.478-12.997 13.223-12.997 13.223Z" data-astro-cid-yk6nnqp5></path> </svg> </span>`;
    } else if (tecn === "HTML") {
      return renderTemplate`<span class="text-xs p-1 rounded-md bg-[#E96228] uppercase" data-astro-cid-yk6nnqp5>
html
</span>`;
    } else if (tecn === "CSS") {
      return renderTemplate`<span class="text-xs p-1 rounded-md bg-[#2862E9] uppercase" data-astro-cid-yk6nnqp5>
css
</span>`;
    } else if (tecn === "javaScript") {
      return renderTemplate`<span class="w-5 before:content-['JavaScript']" data-astro-cid-yk6nnqp5> <svg class="box-border w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1052 1052" data-astro-cid-yk6nnqp5> <path fill="#f0db4f" d="M0 0h1052v1052H0z" data-astro-cid-yk6nnqp5></path> <path d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z" fill="#323330" data-astro-cid-yk6nnqp5></path> </svg> </span>`;
    }
  })} </div>`} </div> </article> `;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/components/CardProyectos.astro", void 0);

const $$Portafolio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="portafolio"> <h2 class="text-2xl font-bold text-chill-50 font-cinzel">Portafolio</h2> <section class="flex flex-col gap-4"> ${infoPorfolio.proyectos.map(
    (proyecto, index) => {
      const isEven = index % 2 === 0 ? "derecha" : "izquierda";
      return renderTemplate`${renderComponent($$result, "CardProyectos", $$CardProyectos, { "isEven": isEven, "urlImagen": proyecto.imagen, "urlSitio": proyecto.url, "urlRepositorio": proyecto.repositorio, "nombre": proyecto.nombre, "descripcion": proyecto.descripcion, "tecnologias": proyecto.tecnologias })}`;
    }
  )} </section> <h2 class="text-2xl font-bold text-chill-50 font-cinzel my-6">Skills</h2> <section></section> </section>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/sections/Portafolio.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "PaulDev | Porfolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="inicio flex flex-col gap-8 [grid-area:info] md:flex-row md:justify-around md:items-center"> ${renderComponent($$result2, "HeaderInfo", $$HeaderInfo, {})} ${renderComponent($$result2, "Presentacion", $$Presentacion, {})} </div> ${renderComponent($$result2, "Estudios", $$Estudios, {})} ${renderComponent($$result2, "Portafolio", $$Portafolio, {})} ` })}`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/pages/index.astro", void 0);

const $$file = "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
