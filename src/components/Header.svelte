
<script>
    export let y;

    export let tabs = [
        { name: "Projects ", link: "#projects" },
        { name: "About me", link: "#about" },
        { name: "Resume", link: "https://rawcdn.githack.com/packetech/Resume/f1dbd2b88cd1f19778d74fc66968509cfc872386/Ndifreke-Okorie-Resume_Software%20Developer.pdf" },
        // { name: "Contact", link: "" },
        // {name: '', link: ''},
    ];
    
</script>

<header
    class={"sticky z-[10] top-0 duration-200 px-6 flex items-center justify-between border-b border-solid " +
        (y > 0
            ? " py-4 bg-slate-950 border-blue-950"
            : " py-6 bg-transparent border-transparent")}
>
    <h1 class="font-medium">
        <b class="font-bold poppins">Ndifreke</b> <span class="">Okorie</span>
    </h1>
    <div class="sm:flex items-center gap-4 hidden">
        {#each tabs as tab, index}
            <a
                href={tab.link}
                class="duration-200 hover:text-blue-400"
                target={index === 2 ? "_blank" : ""}
            >
                <p>{tab.name}</p>
            </a>
        {/each}
        <!-- <button
            class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-violet-600 text-white"
        >
            <div
                class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            />
            <h4 class="relative z-9">Login</h4>
        </button> -->
        <button
            class="blueShadow relative overflow-hidden px-5 py-2 group rounded-full bg-white text-stone-950"
        >
            <div
                class="absolute top-0 right-full w-full h-full bg-blue-400 opacity-20 group-hover:translate-x-full z-0 duration-200"
            />
            <a href="mailto:ndi7@yahoo.co.uk?subject=We are interested in hiring you" class="relative z-9">Get in touch</a>
        </button>
    </div>
</header>
