<template>
    <div class="bg-stone-800 min-h-screen">
        <div class="relative isolate px-6 pt-14 lg:px-8">
            <div class="xs:mx-auto py-32 sm:py-48 lg:py-56">
                <div class="hidden lg:flex lg:justify-around">
                    <div class="text-center text-stone-400">
                        <h2 class="text-2xl">
                            I'M
                            <span class="text-2xl tracking-tight text-amber-300 opacity-60 sm:text-6xl">
                                Nguyễn Duy Tân
                            </span>
                        </h2>
                        <h2 class="text-2xl mt-4">
                            NodeJs Developer
                        </h2>
                        <div class="mt-10 text-left">
                            <button class="rounded border-2 border-amber-400 text-amber-300 p-2.5 ">
                                Contact Me
                            </button>
                        </div>
                    </div>
                    <div class="text-center text-stone-400">
                        <div class="relative">
                        </div>
                        <div class=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script setup>


const navigation = [
    { name: 'About', href: '#' },
    { name: 'Portfolio', href: '#' },
    { name: 'Contact', href: '#' }
]

const mobileMenuOpen = ref(false)
</script>
  
<style>
.image-header {
    position: absolute;
    transform: translate(-60%, -40%);
    max-width: 40vw;
    height: 100vh;
    -o-object-fit: contain;
    object-fit: contain;
    z-index: -999;
    opacity: 0.4;
    filter: grayscale(80%);
}
</style>