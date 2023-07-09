<template>
    <div class="container mx-auto scroll-smooth">
        <div class=" flex items-center p-10 py-10">
            <div class="text-5xl py-2 font-mono  ">
                <div class="m-0 inline-flex items-baseline font-bold text-7xl "><svg stroke="currentColor"
                        fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                        class="hidden shrink-0 grow-0 self-center text-omega-500 md:block" height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48"
                            d="M184 112l144 144-144 144"></path>
                    </svg>
                    <span id="typewriter" class="animate-typewriter overflow-hidden whitespace-nowrap text-teal-400">{{
                        text }}</span>
                    <div class="ml-2 -translate-y-2 animate-blink">_</div>
                </div>
                <h3 class="text-2xl py-2 dark:text-white md:text-3xl">
                    Web Developer
                </h3>
                <p class="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
                    I'm a software developer with a solid knowledge of NodeJS, JavaScript and Typescript. I have ability to
                    learn and apply new technology quickly.
                    With my creativity, technical skills, I am looking to work in a professional environment where I can
                    learn and improve my skills.
                </p>
                <div class="code-frame">
                    <pre class="text-white p-4 rounded-lg">
                      <code>
                        <!-- Mã code của bạn -->
                      </code>
                    </pre>
                </div>
            </div>
            <div
                class="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 ">
                <!-- <img class="rotate-45 px-20  absolute inset-0 w-full h-full object-cover object-center"
                    src="~/assets/background.png" height=100%><img> -->
                <img class="rotate-45 py-20" src="~/assets/backgroung_1.png"><img>
                <a class="bg-gradient-to-r from-cyan-500 text-1xl to-teal-500 text-white px-4 py-2 border-none rounded-md"
                    href="#">
                    Resume
                </a>
            </div>

        </div>
        <div class="items-center p-10 py-10">
            <h3 class="text-3xl py-1 dark:text-white ">Tech Stacks</h3>
            <h3 class="text-teal-40">Backend Developer</h3>
            <h3 class="text-teal-40">Frontend Developer</h3>

        </div>

        <div class="items-center p-10 py-10">
            <h3 class="text-3xl py-1 dark:text-white ">About</h3>
            <div class="flex   ">
                <div
                    class="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 ">
                    <!-- <img class="rotate-45 px-20  absolute inset-0 w-full h-full object-cover object-center"
                src="~/assets/background.png" height=100%><img> -->
                    <img class="rotate-45 py-20" src="~/assets/backgroung_2.png"><img>
                </div>
                <div class="text-5xl py-2 font-mono  ">
                    <h3 class="text-3xl py-1 dark:text-white ">About Me</h3>

                    <h3 class="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
                        Hi There. I'm Nguyen Duy Tan.
                        I'm a software developer with extensive experience in coding and software development.
                        I'm passionate about creating innovative solutions, and I'm dedicated to my craft.
                        With my creativity, technical skills, and attention to detail,
                        I'm confident I can help you find the best software solution for your needs.
                    </h3>
                    <h3 class="text-3xl py-1 dark:text-white ">Hobbie</h3>
                    <h3 class="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
                        I love photography and camping, I usually take it out twice a month to take pictures and go camping.
                        In addition, I love reading books, because reading gives us a lot of knowledge outside of life that
                        we have never experienced.
                    </h3>
                    <a class="bg-gradient-to-r from-cyan-500 text-1xl to-teal-500 text-white px-4 py-2 border-none rounded-md"
                        href="#">
                        Resume
                    </a>
                </div>
            </div>

        </div>

        <div>
            <h3 class="text-3xl py-1 dark:text-white ">Services</h3>
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
        </section>
        <div>
            <Swiper :height="300" :modules="[SwiperPagination]" :slides-per-view="1" :loop="true" :effect="'creative'"
                :autoplay="{
                    delay: 8000,
                    disableOnInteraction: true,
                }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}">
                <swiper-slide>Slide 1</swiper-slide>
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                <swiper-slide>Slide 4</swiper-slide>
                <swiper-slide>Slide 5</swiper-slide>
                <swiper-slide>Slide 6</swiper-slide>
                <swiper-slide>Slide 7</swiper-slide>
                <swiper-slide>Slide 8</swiper-slide>
                <swiper-slide>Slide 9</swiper-slide>
            </Swiper>
        </div>

    </div>
</template>
<script>

// import required modules

export default {

    data() {
        return {
            text: 'Haneko',
            textDefault: '',
            delay: 200, // Thời gian delay giữa mỗi ký tự (ms)
            currentIndex: 0
        };
    },
    mounted() {
        this.startTyping();
    },
    methods: {
        startTyping() {
            const typewriter = document.getElementById('typewriter');
            typewriter.textContent = '';
            this.type(); // Chạy hiệu ứng chạy từng chữ
            setInterval(this.resetTypewriter, 10000); // Đặt thời gian chạy lại sau 10 giây (10000 ms)
        },
        type() {
            if (this.currentIndex < this.text.length) {
                const typewriter = document.getElementById('typewriter');
                typewriter.textContent += this.text.charAt(this.currentIndex);
                this.currentIndex++;
                setTimeout(this.type, this.delay);
            }
        },
        resetTypewriter() {
            const typewriter = document.getElementById('typewriter');
            typewriter.textContent = ''; // Xóa nội dung trong thẻ <span>
            this.currentIndex = 0; // Đặt lại chỉ số hiện tại
            this.type(); // Chạy lại hiệu ứng chạy từng chữ
        }
    }
};
</script>
<style>
@keyframes typing {
    from {
        width: 0;
    }
}

.animate-typewriter {
    animation: typing 2s steps(12, end);
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

.code-frame {
    background-color: #1a202c;
}

.animate-blink {
    animation: blink 1s infinite;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
