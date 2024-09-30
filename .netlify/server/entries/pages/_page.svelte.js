import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component, e as each } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0) $$bindings.step(step);
  return `<a${add_attribute("href", step.href, 0)} target="_blank" class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-blue-700 text-center cursor-pointer group hover:border-blue-400 duration-200"><div class="bg-black grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(step.name)}</h3> ${slots.default ? slots.default({}) : ``} <div class="flex-1 flex justify-betweeen gap-4 items-end" data-svelte-h="svelte-xabb08"><div class="ml-auto cursor-pointer hover:text-blue-400 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:bg-stone-950 after:w-full after:h-full after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="z-4">Go to →</p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      href: "https://ndibuilt-full-stack-ecommerce.netlify.app",
      name: "Fruit Shop",
      icon: "fa-solid fa-cart-shopping",
      description: "Fruit Store is a Modern Full-Stack E-commerce App created with Next.js, TailwindCSS, Stripe & Zustand!"
    },
    {
      href: "https://ndibuilt-todo.netlify.app",
      name: "Todo App",
      icon: "fa-solid fa-list-check",
      description: "A todo app built with html, css & javascript"
    },
    {
      href: "https://ndibuilt-fitness.netlify.app/",
      name: "Hulknormous",
      icon: "fa-solid fa-dumbbell",
      description: "A challenging gym fitness app built with React & TailwindCSS"
    }
  ];
  let benefits = [
    {
      metric: "10x",
      name: "a self taught developer",
      description: "With a pending univerisity masters degree in computer science (software engineering conc.) I taught myself to code using free & paid online resources and absolutely fell in love with the creativity and problem solving abilities that comes with it. I Started with Cloud services, Python & Machine learning/ Data Analytics (M.Engr degree). Then responsive web design with JavaScript, HTML & CSS which evolved into JavaScript frameworks, UI/UX design, backend programming and much more."
    },
    {
      name: "a product design & UI/UX fanatic",
      description: "Crafting and designing amazing user experiences allows me to express and experiment with every creative skillset I have. I love learning new design concepts and helping users have amazing online experiences."
    },
    {
      name: "an excellent communicator",
      description: "Communication is key and it's my core value. I believe in transparent and constructive communication. This helps me develop deep relationships and ensures my effectiveness and productivity in any work space with any team."
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14" data-svelte-h="svelte-1r4fgne"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl"><p>Hi, <br>
                    I&#39;m <span class="poppins text-blue-400">Ndifreke</span> Okorie
                    <br>Full Stack
                    <span class="poppins text-blue-400">Developer</span></p></h2> <p class="text-base sm:text-lg md:text-xl">My <span class="text-blue-400">tech stack</span> includes JavaScript
                (React, NEXT.JS, SvelteKit or Qwik), TailwindCSS, Node.js + Express.js &amp; PostgreSQL
                or Firebase/Firestore!</p> <button class="blueShadow mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950"><div class="absolute top-0 right-full w-full h-full bg-blue-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div> <a href="mailto:ndi7@yahoo.co.uk?subject=We are interested in hiring you" class="relative z-9">Get in touch →</a> </button></div> <div class="relative shadow-2xl grid place-items-center"><img${add_attribute("src", "images/profile.png", 0)} alt="Zetane Engine" class="object-cover z-[2] max-h-[70vh] rounded-full"></div> </section> <section class="py-20 lg:py-32 flex flex-col gap-24" id="projects"><div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-1or7elc"><h6 class="text-large sm:text-xl md:text-2xl">A few of my creative endeavors.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-blue-400">see</span> my work?</h3></div>  <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0] }, {}, {
    default: () => {
      return `<p class="text-left" data-svelte-h="svelte-1bu1xg1">Fruit Store is a Modern Full-Stack E-commerce App created with <strong class="text-blue-400">Next.js, TailwindCSS, Stripe &amp; Zustand!</strong> Zustand does global state management, Stripe API for all our product and transaction handling, and TailwindCSS to design and style our web app. <br> <br>
                   
                    You can test checkout using dummy card info: <br> 
                    Visa-card#: 4000056655665556  <br>
                    Expiry: Any future date  <br>
                    CVC: Any 3 digits</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1] }, {}, {
    default: () => {
      return `<p class="text-left" data-svelte-h="svelte-ggzple">Todo app is an easily to use self organizer <strong class="text-blue-400">HTML</strong>,
                    <strong class="text-blue-400">CSS</strong>
                    &amp; <strong class="text-blue-400">JavaScript</strong> CRUD application
                    that allows a user manage a tidy and effective todo
                    list and persist this information in your device browser for some time.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2] }, {}, {
    default: () => {
      return `<p class="text-left" data-svelte-h="svelte-163b78q">Hulknormous is a <strong class="text-blue-400">React &amp; TailwindCSS</strong>
                    web application, hosted on
                    <strong class="text-blue-400">Netlify</strong>, to act as a
                    <strong class="text-blue-400">challenging fitness app</strong>
                    used to train various parts of the body.</p>`;
    }
  })}</div></section> <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative"> <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-blue-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-blue-700 py-4" data-svelte-h="svelte-m2n648"><h6 class="text-large sm:text-xl md:text-2xl">Want to know more?</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-blue-400">about</span> me.</h3></div> <p class="mx-auto poppins font-semibold text-lg sm:text-xl md:text-2xl" data-svelte-h="svelte-1q8im4p">I am . . .</p> <div class="flex flex-col gap-20 w-full mx-auto max-w-[800px]">${each(benefits, (benefit, index) => {
    return ` <div class="flex gap-6 sm:gap-8"><p class="poppins text-4xl sm:text-5xl md:text-6xl text-slate-500 font-semibold">0${escape(index + 1)}</p> <div class="flex flex-col gap-6 sm:gap-8"><h3 class="text-2xl sm:text-3xl md:text-5xl">${escape(benefit.name)}</h3> <p>${escape(benefit.description)}</p></div> </div>`;
  })}</div> <h5${add_attribute("class", " text-2xl sm:text-3xl font-semibold text-center poppins", 0)} data-svelte-h="svelte-bt6qsq">The <span class="text-blue-400">Complete</span> Package</h5> <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full text-sm" data-svelte-h="svelte-1lfq4wk"><p><span class="text-blue-400 text-lg"><b>Mini Bio</b></span></p> <p>I am a prolific software developer, ICT Infrastructure engineer and data Analyst. <br><br>
                With about two and a half  decades professional core ICT Infrastructure /service deployments. Plus big data analytics and full stack software development. Having a bachelors in physics, post grad in AI &amp; machine learning and M&#39;Engr in big data analytics, I am an ardent learner. <br><br>
                I easily transition, have a steep learning curve for new tech stacks and a pro-active and unyielding spirit in the face of challenges. Yet a very selfless team player and communication addict.</p></div> <div class="flex flex-col overflow-x-scroll gap-10 max-w-[800px] mx-auto w-full" data-svelte-h="svelte-7d58bc"><table class="bg-white text-slate-950 rounded text-center"><thead${add_attribute("class", "border-b border-solid border-slate-200 ", 0)}><tr class=""><th></th> <th class="whitespace-nowrap p-2 px-4">Candidate #1</th> <th class="whitespace-nowrap p-2 px-4">Candidate #2</th> <th class="whitespace-nowrap p-2 px-4">Candidate #3</th> <th class="border rounded border-solid border-white bg-blue-950 text-white whitespace-nowrap p-4 px-8">Me</th></tr></thead> <tbody><tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Dedication</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-b border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Critical/Analytic Thinking</td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Interpersonal Skills</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr> <tr class="border-t border-solid border-slate-200"><td class="border-r border-solid border-white pl-4 pr-8 py-4 font-semibold text-sm">Progamming Abilities</td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-xmark text-slate-500"></i></td> <td><i class="fa-solid fa-check text-slate-500"></i></td> <td><i class="fa-solid fa-check text-green-500"></i></td></tr></tbody></table></div> <div class="mx-auto -mt-12 italic sm:hidden opacity-50" data-svelte-h="svelte-zp0ubu"><p>Scroll to see more →</p></div> <p class="mx-auto" data-svelte-h="svelte-xgr7la">So why not invest in me?</p></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
