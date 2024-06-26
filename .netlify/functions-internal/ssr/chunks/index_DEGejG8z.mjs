/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, d as renderSlot, b as createAstro, s as spreadAttributes, e as renderComponent, f as renderHead } from './astro/server_CghX0iVp.mjs';

const $$Astro$5 = createAstro();
const $$LiSidebar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$LiSidebar;
  const { titulo, url } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class=""> <a${addAttribute(url, "href")} class="flex flex-col justify-center items-center w-full [aspect-ratio:1/1] bg-chill-400/50 rounded-lg gap-1 p-1"> ${renderSlot($$result, $$slots["icon"])} <span class="leading-[10px] capitalize text-xs">${titulo}</span> </a> </li>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/components/LiSidebar.astro", void 0);

const $$Astro$4 = createAstro();
const $$Home = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Home;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 512 512" fill="none" stroke="none" stroke-width="20" stroke-linecap="round"> <path d="M449.333 132.112V42.667c0-.744-.594-1.334-1.333-1.334s-1.333.59-1.333 1.334v88.098l-31.188-21.045-110.994-74.9c-.001 0-.002 0-.003-.002-29.484-19.885-67.479-19.885-96.963 0l-.004.003m241.818 97.291L207.515 34.821m241.818 97.291 8 6A86.561 86.561 0 0 1 492 207.445v197.888C492 453.104 453.104 492 405.333 492h-42.666c-.739 0-1.334-.59-1.334-1.333v-192c0-22.788-18.498-41.334-41.333-41.334H192c-22.835 0-41.333 18.546-41.333 41.334v192c0 .743-.595 1.333-1.334 1.333h-42.666C58.897 492 20 453.104 20 405.333V207.445c0-28.869 14.273-55.703 38.185-71.848l.003-.002L207.515 34.821m241.818 97.291L207.515 34.821"></path> </svg>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/icons/Home.astro", void 0);

const $$Astro$3 = createAstro();
const $$Estudios = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Estudios;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 512 512" fill="none" stroke="none" stroke-width="20" stroke-linecap="round"> <path d="M49.926 129.702c.078-.042.18-.094.32-.165l158.9-75.817.687-.328.66-.38a91.492 91.492 0 0 1 92.469.789l.806.48.847.404L461.36 129.35A60.366 60.366 0 0 1 492 181.038v245.629a1.333 1.333 0 0 1-2.667 0v-207.68l-28.623 13.677-157.866 75.434-.79.378-.753.445a86.68 86.68 0 0 1-44.668 12.029l-.087-.001h-.086a92.512 92.512 0 0 1-47.358-12.961l-.788-.468-.827-.394-156.964-74.718a58.737 58.737 0 0 1-30.516-50.754 58.74 58.74 0 0 1 29.579-51.758l.135-.078.114-.067c.011-.006.04-.023.091-.049Zm206.298 340.966-.233-.003-.232.003a311.876 311.876 0 0 1-89.614-12.025 86.82 86.82 0 0 1-60.812-82.782v-25.883l64.078 30.583a174.885 174.885 0 0 0 67.058 21.905v1.035l19.885.115a168.978 168.978 0 0 0 84.512-22.067l65.842-31.452v25.679a86.816 86.816 0 0 1-60.821 82.784 311.86 311.86 0 0 1-89.622 12.108Z"></path> </svg>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/icons/Estudios.astro", void 0);

const $$Astro$2 = createAstro();
const $$Portafolio = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Portafolio;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 512 512" fill="none" stroke="none" stroke-width="20" stroke-linecap="round"> <path d="m362.277 89.362 3.102 15.087-9.115-25.782a83.997 83.997 0 0 0-78.848-56H234.584a84 84 0 0 0-78.848 56l-9.115 25.782 3.102-15.087A86.864 86.864 0 0 1 234.68 20h42.64a86.86 86.86 0 0 1 84.957 69.362Zm3.284 15.971H405.321A86.798 86.798 0 0 1 492 192v44H20v-43.988a86.794 86.794 0 0 1 86.679-86.679h258.882ZM285.227 349.227A41.33 41.33 0 0 0 297.333 320v-1.333H492v86.666a86.798 86.798 0 0 1-25.421 61.246A86.801 86.801 0 0 1 405.321 492H106.679A86.797 86.797 0 0 1 20 405.321v-86.654h194.667V320A41.33 41.33 0 0 0 256 361.333a41.33 41.33 0 0 0 29.227-12.106Z"></path> </svg>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/icons/Portafolio.astro", void 0);

const $$Astro$1 = createAstro();
const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contacto;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} viewBox="0 0 512 512" fill="none" stroke="none" stroke-width="20" stroke-linecap="round"> <path d="m379.872 380.785.484-.485.45-.517 10.746-12.352c16.767-17.366 16.581-45.054-.556-62.192l-.924-.924-1.036-.795-26.891-20.654c-17.08-15.984-43.73-15.939-60.756.137l-12.78 10.174c-30.517-14.1-53.92-36.787-69.666-69.937l10.054-12.63c16.076-17.025 16.121-43.675.137-60.755l-20.654-26.891-.795-1.036-.924-.923c-17.138-17.138-44.826-17.324-62.192-.558l-12.352 10.747-.517.45-.485.484C115.323 147.99 108 168.741 108 188.949c0 50.575 33.414 104.202 73.812 143.807C222.151 372.303 275.715 404 323.051 404c20.208 0 40.959-7.323 56.821-23.215ZM20 256C20 125.883 125.883 20 256 20c130.117 0 236 105.883 236 236 0 130.117-105.883 236-236 236-130.117 0-236-105.883-236-236Z"></path> </svg>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/icons/Contacto.astro", void 0);

const $$Sidebar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="flex flex-col gap-2 justify-center bg-chill-50/10 p-2 rounded-xl"> ${renderComponent($$result, "LiSidebar", $$LiSidebar, { "titulo": "inicio", "url": "/" }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Home", $$Home, { "slot": "icon", "class": "w-6 h-6 fill-chill-50 stroke-chill-50" })}` })} ${renderComponent($$result, "LiSidebar", $$LiSidebar, { "titulo": "estudios", "url": "#estudios" }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Estudios", $$Estudios, { "slot": "icon", "class": "w-6 h-6 fill-chill-50 stroke-chill-50" })}` })} ${renderComponent($$result, "LiSidebar", $$LiSidebar, { "titulo": "portafolio", "url": "#portafolio" }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Portafolio", $$Portafolio, { "slot": "icon", "class": "w-6 h-6 fill-chill-50 stroke-chill-50" })}` })} ${renderComponent($$result, "LiSidebar", $$LiSidebar, { "titulo": "contacto", "url": "#contacto" }, { "icon": ($$result2) => renderTemplate`${renderComponent($$result2, "Contacto", $$Contacto, { "slot": "icon", "class": "w-6 h-6 fill-chill-50 stroke-chill-50" })}` })} </ul>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/sections/Sidebar.astro", void 0);

const $$MainContenedor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-chill-50/10 rounded-xl p-2 overflow-y-auto h-screen" data-astro-cid-f5h3xcyx> <p data-astro-cid-f5h3xcyx>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus libero perferendis doloribus vero eum tenetur esse nulla facere. Fugiat minus iste rem sed ullam corporis dolorem consequuntur cupiditate! Cumque beatae labore animi cum. Sint, natus ut cupiditate minima expedita sed dolorum blanditiis asperiores, voluptatem a velit cumque. Asperiores quae, quos iure atque omnis reprehenderit iste illum laboriosam totam amet exercitationem eius quisquam, repellendus obcaecati saepe odit eligendi libero animi numquam veniam voluptates consectetur perspiciatis aspernatur praesentium. Mollitia corrupti placeat ipsum quam. Sit, hic voluptate? Tempora officiis quae, inventore dolorem impedit fuga nobis, debitis, odit magnam aspernatur sunt veniam. Eveniet?</p> <p data-astro-cid-f5h3xcyx>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus libero perferendis doloribus vero eum tenetur esse nulla facere. Fugiat minus iste rem sed ullam corporis dolorem consequuntur cupiditate! Cumque beatae labore animi cum. Sint, natus ut cupiditate minima expedita sed dolorum blanditiis asperiores, voluptatem a velit cumque. Asperiores quae, quos iure atque omnis reprehenderit iste illum laboriosam totam amet exercitationem eius quisquam, repellendus obcaecati saepe odit eligendi libero animi numquam veniam voluptates consectetur perspiciatis aspernatur praesentium. Mollitia corrupti placeat ipsum quam. Sit, hic voluptate? Tempora officiis quae, inventore dolorem impedit fuga nobis, debitis, odit magnam aspernatur sunt veniam. Eveniet?</p> <p data-astro-cid-f5h3xcyx>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus libero perferendis doloribus vero eum tenetur esse nulla facere. Fugiat minus iste rem sed ullam corporis dolorem consequuntur cupiditate! Cumque beatae labore animi cum. Sint, natus ut cupiditate minima expedita sed dolorum blanditiis asperiores, voluptatem a velit cumque. Asperiores quae, quos iure atque omnis reprehenderit iste illum laboriosam totam amet exercitationem eius quisquam, repellendus obcaecati saepe odit eligendi libero animi numquam veniam voluptates consectetur perspiciatis aspernatur praesentium. Mollitia corrupti placeat ipsum quam. Sit, hic voluptate? Tempora officiis quae, inventore dolorem impedit fuga nobis, debitis, odit magnam aspernatur sunt veniam. Eveniet?</p> <p data-astro-cid-f5h3xcyx>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus libero perferendis doloribus vero eum tenetur esse nulla facere. Fugiat minus iste rem sed ullam corporis dolorem consequuntur cupiditate! Cumque beatae labore animi cum. Sint, natus ut cupiditate minima expedita sed dolorum blanditiis asperiores, voluptatem a velit cumque. Asperiores quae, quos iure atque omnis reprehenderit iste illum laboriosam totam amet exercitationem eius quisquam, repellendus obcaecati saepe odit eligendi libero animi numquam veniam voluptates consectetur perspiciatis aspernatur praesentium. Mollitia corrupti placeat ipsum quam. Sit, hic voluptate? Tempora officiis quae, inventore dolorem impedit fuga nobis, debitis, odit magnam aspernatur sunt veniam. Eveniet?</p> </section> `;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/sections/MainContenedor.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body class="bg-chill-950 text-xs text-chill-50 p-4"> <div class="grid grid-cols-[auto_1fr] gap-x-4 items-start fixed top-4 left-4 right-4"> ${renderComponent($$result, "Sidebar", $$Sidebar, {})} ${renderComponent($$result, "MainContenedor", $$MainContenedor, {}, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })} </div> </body></html>`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "PaulDev | Porfolio" })}`;
}, "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/pages/index.astro", void 0);

const $$file = "/mnt/c/users/laptop/desktop/MY-PROJECTS/porfolio-PaulDev/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
