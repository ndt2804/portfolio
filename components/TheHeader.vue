<template>
    <div class="relative container text-neutral-800 mx-auto px-6 sticky top-0 bg-gray-50 ">
        <div class="flex justify-between dark:text-white">
            <div class=" flex items-center py-3 text-xl space-x-8 text-teal-500 ">
                <NuxtLink to="/">
                    <h1 class="font-burtons font-bold">Haneko</h1>
                </NuxtLink>
            </div>
            <div class="flex flex-row max-w-screen-xl px-6 mx-auto py-3 space-x-4 xl:space-x-8 h-20">
                <ul class=" gap-3 flex flex-1 justify-center space-x-4 items-center">
                    <NuxtLink to="/">
                        Home
                    </NuxtLink>
                    <NuxtLink to="#project">
                        Project
                    </NuxtLink>

                    <NuxtLink to="#services">
                        Services
                    </NuxtLink>
                    <NuxtLink to="#about">
                        About
                    </NuxtLink>
                    <NuxtLink to="#contact">
                        Contact
                    </NuxtLink>
                </ul>
            </div>
            <ul class="flex items-center">
                <li class=" cursor-pointer text-2xl">
                    <Switch v-model="enabled" :class="enabled ? 'bg-black' : 'bg-white'"
                        class="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <span aria-hidden="true" :class="enabled ? 'translate-x-9' : 'translate-x-0'"
                            class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out" />
                    </Switch>
                </li>
                <li>
                    <a dowload='computer'
                        class="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                        href="#">
                        Resume
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'

const enabled = ref(false)


const colorMode = useColorMode()
console.log(colorMode.preference)

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