import { c as create_ssr_component, b as add_attribute, e as each, d as escape, v as validate_component } from "../../chunks/ssr.js";
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<footer class="py-20 sm:py-32 bg-slate-950 border-t border-solid border-blue-950 flex flex-col gap-4 sm:gap-8 justify-center items-center" data-svelte-h="svelte-aij1yf"><p class="px-4 py-2 bg-white text-slate-950 font-medium">Connect with me ↓</p> <div class="flex flex-col gap-4 items-center justify-center"> <p><b class="pr-2">Email</b> ndi7@yahoo.co.uk</p> <p><b class="pr-2">GitHub</b> <a href="https://github.com/packetech?tab=repositories" target="_blank" class="text-blue-400">packetech<sup class=""><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p><b class="pr-2">LinkedIn</b> <a href="https://www.linkedin.com/in/ndifreke-okorie-6a105328/" target="_blank" class="text-blue-400">Ndifreke Okorie<sup class=""><span class="text-xs scale-75 pl-0.5"><i class="fa-solid fa-arrow-up-right-from-square text-xs scale-[75%]"></i></span></sup></a></p> <p class="px-3 py-0.5 bg-white text-slate-950 font-medium text-xs rounded">#ndibuilt web portfolio with SvelteKit &amp; TailwindCSS</p></div></footer>`;
});
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { y } = $$props;
  let { tabs = [{ name: "Projects ", link: "#projects" }, { name: "About me", link: "#about" }] } = $$props;
  if ($$props.y === void 0 && $$bindings.y && y !== void 0) $$bindings.y(y);
  if ($$props.tabs === void 0 && $$bindings.tabs && tabs !== void 0) $$bindings.tabs(tabs);
  return `<header${add_attribute(
    "class",
    "sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid" + (y > 0 ? " py-4 bg-slate-950 border-blue-950" : " py-6 bg-transparent border-transparent"),
    0
  )}><h1 class="font-medium" data-svelte-h="svelte-60anw2"><b class="font-bold poppins">Ndifreke</b> <span class="">Okorie <br><a class="grid justify-items-center bg-sky-200 text-[black] font-medium text-xs rounded" href="assets/Ndifreke-Okorie-Resume_Software_Developer.pdf" target="_blank">Resume</a></span></h1> <div class="sm:flex items-center gap-4 hidden">${each(tabs, (tab, index) => {
    return `<a${add_attribute("href", tab.link, 0)} class="duration-200 hover:text-blue-400"${add_attribute("target", index === 2 ? "_blank" : "", 0)}><p>${escape(tab.name)}</p> </a>`;
  })}  <button class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-stone-950" data-svelte-h="svelte-x4rbj4"><div class="absolute top-0 right-full w-full h-full bg-blue-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <a href="mailto:ndi7@yahoo.co.uk?subject=We are interested in hiring you" class="relative z-9">Get in touch</a></button></div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let y;
  let innerHeight = 0;
  return `<div class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"><div${add_attribute(
    "class",
    "fixed bottom-0 w-full duration-200 flex p-10 z-[10]  pointer-events-none opacity-0",
    0
  )}><button class="ml-auto rounded-full bg-slate-900 text-blue-400 px-3 sm:px-4 hover:bg-slate-800 cursor-pointer aspect-square grid place-items-center" data-svelte-h="svelte-8kyote"><i class="fa-solid fa-arrow-up"></i></button></div> ${validate_component(Header, "Header").$$render($$result, { y, innerHeight }, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div> `;
});
export {
  Layout as default
};
