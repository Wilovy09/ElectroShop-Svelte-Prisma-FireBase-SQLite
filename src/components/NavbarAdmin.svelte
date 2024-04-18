<script>
    import { signOut } from 'firebase/auth';
    import { auth } from '../firebase.js';
    import { goto } from '$app/navigation';

    async function LogOut() {
        try {
            await signOut(auth);
            console.log("User is logged out");
            goto("/");
        } catch (e) {
            console.error(e);
        }
    }
</script>

<nav class="lg:px-16 px-6 bg-[#fcfcfc] text-white shadow-md flex flex-wrap items-center lg:py-0 py-2" data-svelte-h="svelte-1lsm3ud">
    <div class="flex-1 flex justify-between items-center">
        <a href="/electroshop" class="flex text-lg font-semibold">
            <span class="text-black">ElectroShop</span>
        </a>
    </div>
    <label for="menu-toggle" class="cursor-pointer lg:hidden block">
        <svg class="fill-current text-black" width="20" height="20" viewBox="0 0 20 20"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path></svg>
    </label> 
    <input class="hidden svelte-1ah0gke" type="checkbox" id="menu-toggle" />
    <div class="hidden lg:flex lg:items-center lg:w-auto w-full svelte-1ah0gke" id="menu">
        <ul class="text-xl text-center items-center gap-x-5 pt-4 md:gap-x-4 lg:text-lg lg:flex lg:pt-0">
            <li class="py-2 lg:py-0">
                <button onClick='window.searchModal.showModal();' class="inline-flex flex-col items-center justify-center px-5 group">
                    <span class="font-bold text-black group-hover:text-[#888888]">Buscar</span>
                </button>
            </li>
            <li class="py-2 lg:py-0">
                <a class="inline-flex flex-col items-center justify-center px-5 group" href="/electroshop">
                    <span class="font-bold text-black group-hover:text-[#888888]">Inicio</span>
                </a>
            </li>
            <li class="py-2 lg:py-0">
                <a class="inline-flex flex-col items-center justify-center px-5 group" href="/products">
                    <span class="font-bold text-black group-hover:text-[#888888]">Agregar productos</span>
                </a>
            </li>
            <li class="py-2 lg:py-0">
                <button on:click={LogOut} class="font-bold text-black hover:text-[#888888]">Log out</button>
            </li>
        </ul>
    </div>
</nav>

<dialog id="searchModal">
    <h1>Modal de busqueda</h1>
    <button onclick="window.searchModal.close();">Cerrar</button>
</dialog>

<style>
    #menu-toggle:checked + #menu {
        display: block;
    }
</style>