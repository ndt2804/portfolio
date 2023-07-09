<template>
    <div class="container mx-auto ">


        <div class=" flex items-center text-center p-10 py-10">
            <div>
                <h2 class="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                    Nguyen Duy Tan
                </h2>
                <h3 class="text-2xl py-2 dark:text-white md:text-3xl">
                    Web Developer and designer.
                </h3>
                <p class="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
                    I'm a software developer with
                    a solid knowledge of NodeJS,
                    JavaScript and Typescript. I have ability to learn and apply
                    new technology quickly.
                    With my creativity, technical skills, I
                    am looking to work in a professional
                    environment where I can learn and
                    improve my skills.

                </p>
            </div>
            <div
                class="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                <!-- <Image src={deved} layout="fill" objectFit="cover" /> -->
            </div>
        </div>
        <section>
            <div>
                <h3 class="text-3xl py-1 dark:text-white ">Services I offer</h3>
                <p class="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    Since the beginning of my journey as a freelance designer and
                    developer, I've done remote work for
                    <span class="text-teal-500"> agencies </span>
                    consulted for <span class="text-teal-500">startups </span>
                    and collaborated with talanted people to create digital products
                    for both business and consumer use.
                </p>
                <p class="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    I offer from a wide range of services, including brand design,
                    programming and teaching.
                </p>
            </div>
            <div class="lg:flex gap-10">
                <div class="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
                    <!-- <Image src={design} width={100} height={100} /> -->
                    <h3 class="text-lg font-medium pt-8 pb-2  ">
                        Beautiful Designs
                    </h3>
                    <p class="py-2">
                        Creating elegant designs suited for your needs following core
                        design theory.
                    </p>
                    <h4 class="py-4 text-teal-600">Design Tools I Use</h4>
                    <p class="text-gray-800 py-1">Photoshop</p>
                    <p class="text-gray-800 py-1">Illustrator</p>
                    <p class="text-gray-800 py-1">Figma</p>
                    <p class="text-gray-800 py-1">Indesign</p>
                </div>
                <div class="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <!-- <Image src={code} width={100} height={100} /> -->
                    <h3 class="text-lg font-medium pt-8 pb-2 ">
                        Code your dream project
                    </h3>
                    <p class="py-2">
                        Do you have an idea for your next great website? Let's make it a
                        reality.
                    </p>
                    <h4 class="py-4 text-teal-600">Design Tools I Use</h4>
                    <p class="text-gray-800 py-1">Photoshop</p>
                    <p class="text-gray-800 py-1">Illustrator</p>
                    <p class="text-gray-800 py-1">Figma</p>
                    <p class="text-gray-800 py-1">Indesign</p>
                </div>
                <div class="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
                    <!-- <Image src={consulting} width={100} height={100} /> -->
                    <h3 class="text-lg font-medium pt-8 pb-2 ">Consulting</h3>
                    <p class="py-2">
                        Are you interested in feedback for your current project? I can
                        give you tips and tricks to level it up.
                    </p>
                    <h4 class="py-4 text-teal-600">Design Tools I Use</h4>
                    <p class="text-gray-800 py-1">Photoshop</p>
                    <p class="text-gray-800 py-1">Illustrator</p>
                    <p class="text-gray-800 py-1">Figma</p>
                    <p class="text-gray-800 py-1">Indesign</p>
                </div>
            </div>
        </section>
        <section class="py-10">
            <div>
                <h3 class="text-3xl py-1 dark:text-white ">Portofolio</h3>
                <p class="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    Since the beginning of my journey as a freelance designer and
                    developer, I've done remote work for
                    <span class="text-teal-500"> agencies </span>
                    consulted for <span class="text-teal-500">startups </span>
                    and collaborated with talanted people to create digital products
                    for both business and consumer use.
                </p>
                <p class="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    I offer from a wide range of services, including brand design,
                    programming and teaching.
                </p>
            </div>
            <!-- <div class="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div class="basis-1/3 flex-1 ">
                <Image class="rounded-lg object-cover" layout="responsive" src={web1} />
            </div>
            <div class="basis-1/3 flex-1">
                <Image class="rounded-lg object-cover" layout="responsive" />
            </div>
            <div class="basis-1/3 flex-1">
                <Image class="rounded-lg object-cover" layout="responsive" />
            </div>
            <div class="basis-1/3 flex-1">
                <Image class="rounded-lg object-cover" layout="responsive" />
            </div>
            <div class="basis-1/3 flex-1">
                <Image class="rounded-lg object-cover" layout="responsive" />
            </div>
            <div class="basis-1/3 flex-1">
                <Image class="rounded-lg object-cover" layout="responsive" />
            </div>
        </div> -->
        </section>
        <!-- <Swiper :height="300" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true"
        :effect="'creative'" :autoplay="{
            delay: 8000,
            disableOnInteraction: true
        }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1]
    },
    next: {
        translate: ['100%', 0, 0]
    }
}">
        <SwiperSlide v-for="(slide, idx) in slides" :key="idx"
            :style="`background-color: ${slide.bg}; color: ${slide.color}`">
            {{ idx }}
        </SwiperSlide>

         useSwiper() within a swiper instance -->
        <!-- <SwiperControls />
    </Swiper> -->
    </div>
</template>
<script>
const slides = ref(Array.from({ length: 10 }, () => {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    // Figure out contrast color for font
    const contrast = r * 0.299 + g * 0.587 + b * 0.114 > 186 ? 'black' : 'white'

    return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast }
}))
</script>
<style>
.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    height: 20vh;
    font-size: 4rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
}

.swiper-wrapper {
    min-width: 100vh;
    width: 100vh;
}

.swiper-cards {
    width: 240px;
    height: 240px;
}

.swiper-cards .swiper-slide {
    border-radius: 6px;
    border: 1px solid black;
}
</style>
