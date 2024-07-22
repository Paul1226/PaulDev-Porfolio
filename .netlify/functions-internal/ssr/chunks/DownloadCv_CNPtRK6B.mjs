/* empty css                              */
import { c as createComponent, r as renderTemplate, a as addAttribute, d as renderHead, e as renderSlot, b as createAstro, m as maybeRenderHead, f as renderComponent, F as Fragment } from './astro/server_Bp6uqful.mjs';
/* empty css                              */

const $$Astro$2 = createAstro();
const $$LayoutCv = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$LayoutCv;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/layouts/LayoutCv.astro", void 0);

const curriculum = {
  principal: {
    nombre: "paúl",
    apellido: "guachichullca",
    profesion: "desarrollador Web | Full-Stack",
    direccion: "Coronel C. Monsalve",
    cuidad: "cuenca",
    pais: "ecuador",
    postal: "010107",
    celular: "+593 98 0958291",
    email: "paulguachichullca023@gmail.com"
  },
  educacion: {
    titulo: "Desarrollor Full-Stack",
    institucion: "academía conquer Blocks",
    fecha: "2023",
    detalle: "Me especializo en el desarrollo frontend utilizando tecnologías como React y Astro para crear interfaces de usuario dinámicas y receptivas, y en el desarrollo backend con Node.js y Django, asegurando la eficiencia y seguridad en la manipulación de datos y la comunicación con el frontend."
  },
  about: {
    resume: "Mi pasión por la tecnología comenzó con la maquinaria CNC y el diseño digital, llevándome a estudiar Desarrollo Full-Stack en ConquerBlocks. Aspiro unirme a una empresa socialmente responsable para aplicar mis habilidades y generar un impacto positivo."
  },
  experiencia: [
    {
      cargo: "Sitios Web de Películas",
      empresa: "Autonomo",
      inicio: "feb. 2024",
      fin: "abr. 2024",
      lugar: "cuenca",
      descrip: "Creé un sitio web de películas que permite a los usuarios buscar y ver información sobre diferentes películas. Se integrará posteriormente una API de películas para el almacenamiento y gestión de datos de películas, mejorando la funcionalidad y la experiencia del usuario."
    },
    {
      cargo: "Sitio Web de Shopping",
      empresa: "Conquer Blocks",
      inicio: "jun. 2024",
      fin: "Actual",
      lugar: "cuenca",
      descrip: "Desarrollo de un sitio web de comercio en línea para una tienda de cursos online. El sitio por el momento no cuenta con registros para compra si no más bien en una página para reforzar conocimientos."
    }
  ],
  personales: {
    nacimiento: "Dec. 26, 2000",
    nacionalidad: "Ecuatoriana",
    visado: "Aprobado",
    civil: "Soltero"
  },
  habilidades: [
    "HTML5",
    "CSS3",
    "React",
    "NodeJS",
    "MySQL",
    "Git",
    "Github",
    "Javascript",
    "Tailwind",
    "TypeScript"
  ],
  links: {
    github: "https://github.com/Paul1226",
    linkedin: "https://www.linkedin.com/in/paul-guachichullca-2287602b1/"
  },
  referencias: [
    {
      nombre: "verónica giomara morocho jerez",
      empresa: "bucle",
      celular: "0987442514",
      email: "giomaramjerez22@gmail.com"
    },
    {
      nombre: "john abraham orellana sanchez",
      empresa: "prolínea",
      celular: "0992880832",
      email: "john94ore@outlook.es"
    }
  ],
  proyectos: [
    {
      nombre: "MisPeliculas",
      inicio: "jun. 2024",
      fin: "abr. 2024",
      descrip: "Creé un sitio web de películas que permite a los usuarios buscar y ver información sobre diferentes películas. Se integrará posteriormente una API de películas para el almacenamiento y gestión de datos de películas, mejorando la funcionalidad y la experiencia del usuario.",
      url: "https://mispeliculas-1226.netlify.app/",
      skills: ["HTML", "CSS", "JavaScript", "API de pelis"]
    },
    {
      nombre: "Shopp.PD",
      inicio: ". 2024",
      fin: "Actual",
      descrip: "Desarrollo de un sitio web de comercio en línea para una tienda de cursos online. El sitio por el momento no cuenta con registros para mostrar, en una página para reforzar conocimientos.",
      skills: ["HTML", "CSS", "JavaScript"]
    },
    {
      nombre: "+ 10 páginas web",
      inicio: "oct. 2023",
      fin: "dec. 2023",
      descrip: "He desarrollado más de 10 páginas web con HTML, CSS y JavaScript. Esto me ha dado una sólida comprensión de la estructura y diseño web, permitiéndome crear interfaces de usuario responsivas y atractivas, así como implementar buenas prácticas de codificación.",
      skills: ["HTML", "CSS", "JavaScript"]
    }
  ]
};

const $$Icono = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="bg-black rounded-full w-7 h-7 flex items-center justify-center absolute left-0"> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/components/Icono.astro", void 0);

const $$HeaderCv = createComponent(($$result, $$props, $$slots) => {
  const cv = curriculum;
  return renderTemplate`${maybeRenderHead()}<header class="flex justify-between w-full"> ${cv.principal && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <div class="flex flex-col"> <h1 class="text-4xl uppercase"> ${cv.principal.nombre} <br> <span class="font-bold">${cv.principal.apellido}</span> </h1> <p class="text-xs uppercase pt-3 tracking-[.15rem] font-medium text-gray-500"> ${cv.principal.profesion} </p> </div> <div class="info text-gray-500 flex flex-col gap-y-3 justify-center font-medium text-[10px]"> <div class="tracking-widest relative pl-9 flex items-center justify-center"> ${renderComponent($$result2, "Icono", $$Icono, {}, { "default": ($$result3) => renderTemplate` <svg viewBox="0 0 10 14" class="w-3"> <path fill="#fff" fill-rule="evenodd" d="M5.206.824C2.479.824.26 2.892.26 5.434c0 1.024.701 2.693 2.144 5.103 1.021 1.704 2.025 3.125 2.067 3.185l.735 1.039.735-1.039a54.65 54.65 0 0 0 2.067-3.185c1.443-2.41 2.145-4.079 2.145-5.103 0-2.542-2.219-4.61-4.947-4.61zm0 6.969c-1.416 0-2.564-1.07-2.564-2.39S3.79 3.014 5.206 3.014c1.416 0 2.564 1.069 2.564 2.389 0 1.32-1.148 2.39-2.564 2.39z"></path> </svg> ` })} <p class="flex flex-wrap gap-x-1  w-[200px]"> <span class="">${cv.principal.direccion},</span> <span class="">${cv.principal.postal}, </span> <span class="capitalize "> ${cv.principal.cuidad},
</span> <span class="capitalize">${cv.principal.pais}</span> </p> </div> <div class="text-xs tracking-widest relative pl-9 flex items-center justify-center"> ${renderComponent($$result2, "Icono", $$Icono, {}, { "default": ($$result3) => renderTemplate` <svg viewBox="0 0 12 12" class="w-4"> <path fill="#fff" fill-rule="evenodd" d="M11.994 8.485a.494.494 0 0 1-.167.447l-1.582 1.472a.89.89 0 0 1-.279.19 1.217 1.217 0 0 1-.565.111c-.151 0-.395-.024-.732-.072-.337-.049-.749-.168-1.237-.357-.487-.19-1.04-.474-1.659-.853-.618-.38-1.276-.9-1.974-1.562a12.483 12.483 0 0 1-1.38-1.473 10.34 10.34 0 0 1-.88-1.299 6.71 6.71 0 0 1-.499-1.082 5.391 5.391 0 0 1-.227-.837 2.623 2.623 0 0 1-.035-.775 1.03 1.03 0 0 1 .309-.58L2.669.331A.542.542 0 0 1 3.05.175a.46.46 0 0 1 .273.084.792.792 0 0 1 .202.206L4.798 2.73a.513.513 0 0 1 .059.39.68.68 0 0 1-.202.357l-.583.547a.198.198 0 0 0-.041.072.264.264 0 0 0-.018.084c.032.156.103.334.214.535.095.179.242.396.44.653.198.256.48.552.845.887.356.342.674.607.951.797.278.19.51.329.696.418.186.09.329.144.428.162l.149.028a.269.269 0 0 0 .077-.017.196.196 0 0 0 .077-.039l.678-.647a.756.756 0 0 1 .5-.178.65.65 0 0 1 .321.067h.012l2.295 1.271c.167.097.266.22.298.368z"></path> </svg> ` })} <p class="flex flex-wrap gap-x-1  w-[200px]"> <span class="">${cv.principal.celular},</span> </p> </div> <div class="tracking-widest relative pl-9 flex items-center justify-center pt-2"> ${renderComponent($$result2, "Icono", $$Icono, {}, { "default": ($$result3) => renderTemplate` <svg viewBox="0 0 12.50 11.78" class="w-4 pt-1"> <path fill="#fff" fill-rule="evenodd" d="M8.005 4.376l4.013-3.358v6.638l-4.013-3.28zM.659.537a.849.849 0 0 1 .572-.218h9.951c.223 0 .424.082.573.217L6.206 5.112.659.537zM.395 7.656V1.02l4.012 3.356-4.012 3.28zm5.811-1.745L7.644 4.7l4.109 3.39a.852.852 0 0 1-.571.217H1.231a.858.858 0 0 1-.574-.217L4.768 4.7l1.438 1.211z"></path> </svg> ` })} <p class="flex flex-wrap gap-x-1  w-[200px]"> <span class="truncate">${cv.principal.email},</span> </p> </div> </div> ` })}`} </header>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/sections/HeaderCv.astro", void 0);

const $$Astro$1 = createAstro();
const $$Modulo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Modulo;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article> <h2 class="border-b-2 border-solid border-black pb-1 uppercase font-bold tracking-[.2rem]">${title}</h2> <main class="pt-6 flex flex-col gap-y-5"> ${renderSlot($$result, $$slots["default"])} </main> </article>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/components/Modulo.astro", void 0);

const $$Astro = createAstro();
const $$Pdeco = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pdeco;
  const { title, details, subtitulo, fecha, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="relative"> <div class="absolute w-[1px] h-full bg-black top-0 left-2 before:content-[''] before:absolute before:bg-white before:w-4 before:h-4 before:top-[2px] before:-left-2 before:rounded-full before:border-[1px] before:border-black after:content-[''] after:absolute after:w-1 after:h-1 after:bg-black after:rounded-full after:top-2 after:left-[-2px]"></div> <div class="content pl-7 flex flex-col gap-y-2"> ${title && renderTemplate`<h3 class="font-extrabold uppercase text-xs tracking-widest text-balance">${title}</h3>`} ${subtitulo && renderTemplate`<p class="uppercase text-xs tracking-[.15rem]">${subtitulo}</p>`} ${fecha && renderTemplate`<p class="font-bold pb-2">${fecha}</p>`} <p class="text-xs text-pretty"> ${details} </p> ${link && renderTemplate`<a class="underline text-xs"${addAttribute(link, "href")} target="_blank">${link}</a>`} </div> </div>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/components/Pdeco.astro", void 0);

const $$PrimeraSecCv = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="first pt-10" data-astro-cid-jcqs6fvo> <div class="w-[200px]" data-astro-cid-jcqs6fvo> ${renderComponent($$result, "Modulo", $$Modulo, { "title": "Educaci\xF3n", "data-astro-cid-jcqs6fvo": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Pdeco", $$Pdeco, { "title": curriculum.educacion.titulo, "subtitulo": curriculum.educacion.institucion, "fecha": curriculum.educacion.fecha, "details": curriculum.educacion.detalle, "data-astro-cid-jcqs6fvo": true })} ` })}</div> <div class="flex flex-col gap-y-10" data-astro-cid-jcqs6fvo> ${renderComponent($$result, "Modulo", $$Modulo, { "title": "Sobre M\xED", "data-astro-cid-jcqs6fvo": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Pdeco", $$Pdeco, { "details": curriculum.about.resume, "data-astro-cid-jcqs6fvo": true })} ` })} ${renderComponent($$result, "Modulo", $$Modulo, { "title": "Experiencia Laboral", "data-astro-cid-jcqs6fvo": true }, { "default": ($$result2) => renderTemplate`${curriculum.experiencia.map(({ cargo, empresa, inicio, fin, descrip, lugar }) => renderTemplate`${renderComponent($$result2, "Pdeco", $$Pdeco, { "title": `${cargo} | ${inicio} - ${fin}`, "subtitulo": `${empresa} - ${lugar}`, "details": descrip, "data-astro-cid-jcqs6fvo": true })}`)}` })} </div> </section> `;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/components/PrimeraSecCv.astro", void 0);

const $$SegundaSecCv = createComponent(($$result, $$props, $$slots) => {
  const cv = curriculum;
  const dataPerson = cv.personales;
  const dataHabil = cv.habilidades;
  const dataLinks = cv.links;
  return renderTemplate`${maybeRenderHead()}<section class="second pt-8" data-astro-cid-axeispu3> <div class="w-[200px]" data-astro-cid-axeispu3> ${renderComponent($$result, "Modulo", $$Modulo, { "title": "datos personales", "data-astro-cid-axeispu3": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Pdeco", $$Pdeco, { "subtitulo": "fecha de nacimiento", "details": dataPerson.nacimiento, "data-astro-cid-axeispu3": true })} ${renderComponent($$result2, "Pdeco", $$Pdeco, { "subtitulo": "nacionalidad", "details": dataPerson.nacionalidad, "data-astro-cid-axeispu3": true })} ${renderComponent($$result2, "Pdeco", $$Pdeco, { "subtitulo": "visado", "details": dataPerson.visado, "data-astro-cid-axeispu3": true })} ${renderComponent($$result2, "Pdeco", $$Pdeco, { "subtitulo": "estado civil", "details": dataPerson.civil, "data-astro-cid-axeispu3": true })} ` })} </div> <div class="flex flex-col" data-astro-cid-axeispu3> <span class="block text-xs pb-2" data-astro-cid-axeispu3>.</span> ${renderComponent($$result, "Modulo", $$Modulo, { "title": "habilidades", "data-astro-cid-axeispu3": true }, { "default": ($$result2) => renderTemplate` <ul class="grid [grid-template-columns:repeat(auto-fit,minmax(80px,1fr))] gap-y-2 text-sm" data-astro-cid-axeispu3> ${dataHabil.map((habilidad) => {
    if (habilidad === "HTML5") return renderTemplate`<li class="flex items-center gap-x-1" data-astro-cid-axeispu3> <svg class="w-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-axeispu3><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-axeispu3></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" data-astro-cid-axeispu3></path><path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" data-astro-cid-axeispu3></path></svg> <span data-astro-cid-axeispu3>${habilidad}</span> </li>`;
    if (habilidad === "CSS3") return renderTemplate`<li class="flex items-center gap-x-1" data-astro-cid-axeispu3> <svg class="w-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-axeispu3><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-axeispu3></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" data-astro-cid-axeispu3></path><path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" data-astro-cid-axeispu3></path></svg> <span data-astro-cid-axeispu3>${habilidad}</span> </li>`;
    if (habilidad === "Javascript") return renderTemplate`<li class="flex items-center gap-x-1" data-astro-cid-axeispu3> <svg class="w-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-axeispu3><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-axeispu3></path><path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" data-astro-cid-axeispu3></path><path d="M7.5 8h3v8l-2 -1" data-astro-cid-axeispu3></path><path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" data-astro-cid-axeispu3></path></svg> <span class="truncate" data-astro-cid-axeispu3>${habilidad}</span> </li>`;
    if (habilidad === "Tailwind") return renderTemplate`<li class="flex items-center gap-x-1" data-astro-cid-axeispu3> <svg class="w-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-axeispu3><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-axeispu3></path><path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" data-astro-cid-axeispu3></path></svg> <span data-astro-cid-axeispu3>${habilidad}</span> </li>`;
    if (habilidad === "React") return renderTemplate`<li class="flex items-center gap-x-1" data-astro-cid-axeispu3> <svg class="w-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-axeispu3><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-axeispu3></path><path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" data-astro-cid-axeispu3></path><path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" data-astro-cid-axeispu3></path><path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" data-astro-cid-axeispu3></path><path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" data-astro-cid-axeispu3></path><path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" data-astro-cid-axeispu3></path><path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" data-astro-cid-axeispu3></path><path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" data-astro-cid-axeispu3></path></svg> <span data-astro-cid-axeispu3>${habilidad}</span> </li>`;
    if (habilidad === "NodeJS") return renderTemplate`<li class="flex items-center gap-x-1" data-astro-cid-axeispu3> <svg class="w-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-axeispu3><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-axeispu3></path><path d="M9 9v8.044a2 2 0 0 1 -2.996 1.734l-1.568 -.9a3 3 0 0 1 -1.436 -2.561v-6.635a3 3 0 0 1 1.436 -2.56l6 -3.667a3 3 0 0 1 3.128 0l6 3.667a3 3 0 0 1 1.436 2.561v6.634a3 3 0 0 1 -1.436 2.56l-6 3.667a3 3 0 0 1 -3.128 0" data-astro-cid-axeispu3></path><path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3.5" data-astro-cid-axeispu3></path></svg> <span data-astro-cid-axeispu3>${habilidad}</span> </li>`;
    if (habilidad === "TypeScript") return renderTemplate`<li class="flex items-center gap-x-1" data-astro-cid-axeispu3> <svg class="w-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-axeispu3><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-axeispu3></path><path d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5" data-astro-cid-axeispu3></path><path d="M9 12h4" data-astro-cid-axeispu3></path><path d="M11 12v6" data-astro-cid-axeispu3></path><path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z" data-astro-cid-axeispu3></path></svg> <span class="truncate" data-astro-cid-axeispu3>${habilidad}</span> </li>`;
    if (habilidad === "MySQL") return renderTemplate`<li class="flex items-center gap-x-1" data-astro-cid-axeispu3> <svg class="w-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-axeispu3><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-axeispu3></path><path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3" data-astro-cid-axeispu3></path><path d="M9 7h.01" data-astro-cid-axeispu3></path></svg> <span data-astro-cid-axeispu3>${habilidad}</span> </li>`;
    if (habilidad === "Git") return renderTemplate`<li class="flex items-center gap-x-1" data-astro-cid-axeispu3> <svg class="w-6" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-axeispu3><path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-axeispu3></path><path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" data-astro-cid-axeispu3></path><path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" data-astro-cid-axeispu3></path><path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" data-astro-cid-axeispu3></path><path d="M12 15v-6" data-astro-cid-axeispu3></path><path d="M15 11l-2 -2" data-astro-cid-axeispu3></path><path d="M11 7l-1.9 -1.9" data-astro-cid-axeispu3></path><path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z" data-astro-cid-axeispu3></path></svg> <span data-astro-cid-axeispu3>${habilidad}</span> </li>`;
    if (habilidad === "Github") return renderTemplate`<li class="flex items-center gap-x-1" data-astro-cid-axeispu3> <svg class="w-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-axeispu3><title>GitHub</title><path fill="currentColor" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" data-astro-cid-axeispu3></path></svg> <span data-astro-cid-axeispu3>${habilidad}</span> </li>`;
  })} </ul> ` })} <div class="pt-10" data-astro-cid-axeispu3> ${renderComponent($$result, "Modulo", $$Modulo, { "title": "enlaces", "data-astro-cid-axeispu3": true }, { "default": ($$result2) => renderTemplate` <div class="flex justify-between text-xs gap-x-4" data-astro-cid-axeispu3> <div class="flex flex-col" data-astro-cid-axeispu3> <p class="flex items-center gap-x-2" data-astro-cid-axeispu3> <img class="w-6 aspect-[1/1] object-cover" src="../../public/iconosCv/lkd.png" alt="Icono de linkedin" data-astro-cid-axeispu3> <span class="capitalize" data-astro-cid-axeispu3>linkedin:</span> </p> <a class="underline pt-2 text-wrap"${addAttribute(dataLinks.linkedin, "href")} data-astro-cid-axeispu3>${dataLinks.linkedin}</a> </div> <div class="flex flex-col" data-astro-cid-axeispu3> <p class="flex items-center gap-x-2" data-astro-cid-axeispu3> <img class="w-6 aspect-[1/1] object-cover" src="../../public/iconosCv/github.png" alt="Icono de linkedin" data-astro-cid-axeispu3> <span class="capitalize" data-astro-cid-axeispu3>github:</span> </p> <a class="underline pt-2 text-wrap"${addAttribute(dataLinks.github, "href")} data-astro-cid-axeispu3>${dataLinks.github}</a> </div> </div> ` })} </div> </div> </section> `;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/components/SegundaSecCv.astro", void 0);

const $$TerceraSecCv = createComponent(($$result, $$props, $$slots) => {
  const cv = curriculum;
  return renderTemplate`${maybeRenderHead()}<section class="third pt-14 pt-add-print pb-12" data-astro-cid-tw2s4icy> <div class="w-[200px]" data-astro-cid-tw2s4icy> ${renderComponent($$result, "Modulo", $$Modulo, { "title": "referencias", "data-astro-cid-tw2s4icy": true }, { "default": ($$result2) => renderTemplate`${cv.referencias.map((ref) => renderTemplate`${renderComponent($$result2, "Pdeco", $$Pdeco, { "title": ref.nombre, "subtitulo": ref.empresa, "details": `${ref.celular} ${ref.email}`, "data-astro-cid-tw2s4icy": true })}`)}` })} </div> <div class="flex flex-col gap-y-10" data-astro-cid-tw2s4icy> ${renderComponent($$result, "Modulo", $$Modulo, { "title": "proyectos", "data-astro-cid-tw2s4icy": true }, { "default": ($$result2) => renderTemplate`${cv.proyectos.map(({ nombre, inicio, fin, descrip, url, skills }) => {
    if (url) {
      return renderTemplate`${renderComponent($$result2, "Pdeco", $$Pdeco, { "title": `${nombre} | ${inicio} - ${fin}`, "subtitulo": skills.map((skill) => `${skill}`).join("-"), "details": descrip, "link": url, "data-astro-cid-tw2s4icy": true })}`;
    } else {
      return renderTemplate`${renderComponent($$result2, "Pdeco", $$Pdeco, { "title": `${nombre} | ${inicio} - ${fin}`, "subtitulo": skills.map((skill) => `${skill}`).join("-"), "details": descrip, "data-astro-cid-tw2s4icy": true })}`;
    }
  })}` })} </div> </section> `;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/components/TerceraSecCv.astro", void 0);

const $$DownloadCv = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "LayoutCv", $$LayoutCv, { "title": "Download | Cv", "data-astro-cid-dbljl6zy": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-[786px] h-[842px] mx-auto bg-slate-10 p-20 pt-12" data-astro-cid-dbljl6zy> <div class="fixed top-0 left-0 w-full bg-sky-200 text-center z-10 no-print" data-astro-cid-dbljl6zy>
presiona <kbd data-astro-cid-dbljl6zy>Ctrl + P</kbd> para imprimir el curriculum.
</div> ${renderComponent($$result2, "HeaderCv", $$HeaderCv, { "data-astro-cid-dbljl6zy": true })} ${renderComponent($$result2, "PrimeraSecCv", $$PrimeraSecCv, { "data-astro-cid-dbljl6zy": true })} ${renderComponent($$result2, "SegundaSecCv", $$SegundaSecCv, { "data-astro-cid-dbljl6zy": true })} ${renderComponent($$result2, "TerceraSecCv", $$TerceraSecCv, { "data-astro-cid-dbljl6zy": true })} </section> ` })} `;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/pages/DownloadCv.astro", void 0);

const $$file = "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/pages/DownloadCv.astro";
const $$url = "/DownloadCv";

export { $$DownloadCv as default, $$file as file, $$url as url };
