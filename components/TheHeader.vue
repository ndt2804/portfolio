<template>
    <div
        class="  text-neutral-800 mx-auto px-6 sticky top-0 bg-gray-200 dark:bg-slate-800 z-10 scroll-smooth     border border-[#ffffff] left-0 right-0  bg-opacity-100">
        <div class=" container flex justify-between dark:text-white mx-auto">
            <div class=" flex items-center py-3 text-xl space-x-8 ">
                <a aria-current="page" href="/" class="router-link-active router-link-exact-active">
                    <div class="transition-all motion-reduce:transition-none duration-500 opacity-1 blur-0">
                        <div>
                            <div
                                class="flex items-center space-x-2 py-4 md:py-1 drop-shadow-lg bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent">
                                <p>&lt;</p>
                                <p class="font-semibold text-4xl md:text-5xl" id="custom-logo">Haneko</p>
                                <p>/&gt;</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div class="menu hidden md:block md:w-auto">
                <div
                    class="flex flex-row max-w-screen-xl px-6 mx-auto py-3 space-x-4 xl:space-x-8 h-20    p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                    <ul id="custom-logo"
                        class="font-semibold  gap-3 flex flex-1 justify-center space-x-4 items-center text-2xl">
                        <NuxtLink to="#project">
                            Projects
                        </NuxtLink>
                        <NuxtLink to="#about">
                            About
                        </NuxtLink>
                        <NuxtLink to="#contact">
                            Contact
                        </NuxtLink>
                    </ul>
                </div>
            </div>

            <ul class="flex items-center">
                <li class=" cursor-pointer text-2xl">
                    <button class="ml-5" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
                        <svg v-if="$colorMode.value == 'dark'" xmlns="http://www.w3.org/2000/svg"
                            class="h-6 w-6 text-gray-50" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
type Theme = 'light' | 'dark';

const setColorTheme = (newTheme: Theme) => {
    useColorMode().preference = newTheme
}

</script>
<style>
body {
    background-color: #fff;
    color: rgba(0, 0, 0, 0.8);
}

.dark-mode body {
    background-color: #091a28;
    color: #ebf4f1;
}

.sepia-mode body {
    background-color: #f1e7d0;
    color: #433422;
}
</style>