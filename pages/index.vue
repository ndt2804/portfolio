<template>
    <div class="container mx-auto scroll-smooth ">
        <div id="/" class=" flex items-center p-10 py-10">
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
                    I'm a software developer with a solid knowledge of NodeJS, JavaScript and Typescript. I have ability
                    to
                    learn and apply new technology quickly.
                    With my creativity, technical skills, I am looking to work in a professional environment where I can
                    learn and improve my skills.
                </p>
                <div class="code-frame text-white text-2xl p-4  rounded-lg mx-auto">
                    <div>
                        <pre>
                          <code class="code-frame" v-html="highlightedCode" v-once></code>
                        </pre>
                    </div>
                </div>
            </div>
            <div class="flex flex-col items-center ml-20">
                <div class=" flex items-center justify-center px-16">
                    <div class="relative w-full max-w-lg">
                        <div
                            class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob">
                        </div>
                        <div
                            class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000">
                        </div>
                        <div
                            class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000">
                        </div>
                        <div class="m-8 relative space-y-4">
                            <img class="mx-auto rounded-3xl" src="~/assets/background_3.png" alt="Ảnh">

                            <button @click="downloadResume"
                                class="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md mx-auto  flex items-center justify-center"
                                href="#">
                                Resume
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-10 py-10 ">
            <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white text-center text-teal-400">SKILLS
            </h2>
            <div class="mt-12 grid grid-cols-4 ">
                <div class="p-4 transition duration-200 hover:grayscale-0">
                    <img src="~/assets/html-5.svg" loading="lazy" alt="client logo" width="200" height="200" />
                </div>
                <div class="p-4  transition ">
                    <img src="~/assets/css-3.svg" class="" loading="lazy" alt="client logo" width="200" height="" />
                </div>
                <div class="p-4 flex  transition duration-200 hover:grayscale-0">
                    <img src="~/assets/dot-net.svg" class="" loading="lazy" alt="client logo" width="200" height="" />
                </div>
                <div class="p-4  transition duration-200 hover:grayscale-0">
                    <img src="~/assets/nodejs.svg" class="" loading="lazy" alt="client logo" width="200" height="" />
                </div>
                <div class="p-4 flex  transition duration-200 hover:grayscale-0">
                    <img src="~/assets/javascript.svg" class="" loading="lazy" alt="client logo" width="200" height="" />
                </div>
                <div class="p-4  transition duration-200 hover:grayscale-0">
                    <img src="~/assets/vue.svg" class="" loading="lazy" alt="client logo" width="200" height="" />
                </div>

                <div class="p-4  transition duration-200 hover:grayscale-0">
                    <img src="~/assets/nuxt.svg" class="" loading="lazy" alt="client logo" width="200" height="" />
                </div>
                <div class="p-4  transition duration-200 hover:grayscale-0">
                    <img src="~/assets/github.svg" class="" loading="lazy" alt="client logo" width="200" height="" />
                </div>
            </div>
        </div>

        <div id="project" class="items-center p-10 py-10">
            <div class="mb-12 space-y-2 text-center">
                <h2 class="text-3xl font-bold text-gray-800 md:text-4xl dark:text-white text-teal-400">Project</h2>
                <p class="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300 font-mono font-bold">
                    Here are a few projects I've done for my personal hobby, you can check them out
                </p>
            </div>
            <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div
                    class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                    <div class="relative overflow-hidden rounded-xl">
                        <img src="~/assets/animetv.png" alt="art cover" loading="lazy" width="1000" height="667"
                            class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                    </div>
                    <div class="mt-6 relative">
                        <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                            AnimuTV With Handlebars
                        </h3>
                        <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                            A Project i built for project in my school
                        </p>
                        <a class="inline-block" href="https://github.com/ndt2804/anime-nodejs-hbs">
                            <span class="text-info dark:text-blue-300">Read more</span>
                        </a>
                    </div>

                </div>
                <div
                    class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                    <div class="relative overflow-hidden rounded-xl">
                        <img src="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
                            alt="art cover" loading="lazy" width="1000" height="667"
                            class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                    </div>
                    <div class="mt-6 relative">
                        <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                            De fuga fugiat lorem ispum laboriosam expedita.
                        </h3>
                        <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                            Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
                        </p>
                        <a class="inline-block" href="#">
                            <span class="text-info dark:text-blue-300">Read more</span>
                        </a>
                    </div>

                </div>
                <div
                    class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
                    <div class="relative overflow-hidden rounded-xl">
                        <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                            alt="art cover" loading="lazy" width="1000" height="667"
                            class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
                    </div>
                    <div class="mt-6 relative">
                        <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                            De fuga fugiat lorem ispum laboriosam expedita.
                        </h3>
                        <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                            Voluptates harum aliquam totam, doloribus eum impedit atque! Temporibus...
                        </p>
                        <a class="inline-block" href="#">
                            <span class="text-info dark:text-blue-300">Read more</span>
                        </a>
                    </div>

                </div>
            </div>
        </div>

        <div>
            <div id="services" class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                <div class="">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                        class="w-6 h-6 text-secondary text-rose-400 items-center">
                        <path fill-rule="evenodd"
                            d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                            clip-rule="evenodd" />
                    </svg>
                    <h2 class="text-2xl font-bold dark:text-white md:text-4xl text-teal-400 text-center">
                        Services
                    </h2>

                    <h3 class="text-gray-600 dark:text-gray-300 font-mono py-3 font-bold text-center">What can I do? I
                        may
                        not be
                        professional but
                        I
                        will try to
                        do everything in my power.</h3>
                </div>
                <div
                    class="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
                    <div
                        class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div class="relative space-y-8 py-12 p-8">
                            <img src="https://cdn-icons-png.flaticon.com/512/4341/4341139.png" class="w-12" width="512"
                                height="512" alt="burger illustration" />

                            <div class="space-y-2">
                                <h5
                                    class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                                    Backend Developer
                                </h5>
                                <p class="text-gray-600 dark:text-gray-300">
                                    Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
                                </p>
                            </div>
                            <a href="#" class="flex items-center justify-between group-hover:text-secondary">
                                <span class="text-sm">Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                    <path fill-rule="evenodd"
                                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div class="relative space-y-8 py-12 p-8">
                            <img src="https://cdn-icons-png.flaticon.com/512/4341/4341134.png" class="w-12" width="512"
                                height="512" alt="burger illustration" />

                            <div class="space-y-2">
                                <h5
                                    class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                                    Frotned Developer
                                </h5>
                                <p class="text-gray-600 dark:text-gray-300">
                                    Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
                                </p>
                            </div>
                            <a href="#" class="flex items-center justify-between group-hover:text-secondary">
                                <span class="text-sm">Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                    <path fill-rule="evenodd"
                                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        class="group relative bg-white dark:bg-gray-800 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div class="relative space-y-8 py-12 p-8">
                            <img src="https://cdn-icons-png.flaticon.com/512/4341/4341160.png" class="w-12" width="512"
                                height="512" alt="burger illustration" />

                            <div class="space-y-2">
                                <h5
                                    class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                                    Mobile Developer
                                </h5>
                                <p class="text-gray-600 dark:text-gray-300">
                                    Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
                                </p>
                            </div>
                            <a href="#" class="flex items-center justify-between group-hover:text-secondary">
                                <span class="text-sm">Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                    <path fill-rule="evenodd"
                                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div
                        class="group relative bg-gray-50 dark:bg-gray-900 transition hover:z-[1] hover:shadow-2xl hover:shadow-gray-600/10">
                        <div
                            class="relative space-y-8 py-12 p-8 transition duration-300 group-hover:bg-white dark:group-hover:bg-gray-800">
                            <img src="https://cdn-icons-png.flaticon.com/512/4341/4341025.png" class="w-12" width="512"
                                height="512" alt="burger illustration" />

                            <div class="space-y-2">
                                <h5
                                    class="text-xl font-semibold text-gray-700 dark:text-white transition group-hover:text-secondary">
                                    UI/UX Design
                                </h5>
                                <p class="text-gray-600 dark:text-gray-300">
                                    Neque Dolor, fugiat non cum doloribus aperiam voluptates nostrum.
                                </p>
                            </div>
                            <a href="#" class="flex items-center justify-between group-hover:text-secondary">
                                <span class="text-sm">Read more</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-5 h-5 -translate-x-4 text-2xl opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                                    <path fill-rule="evenodd"
                                        d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="items-center p-10 py-10">

            <div class="flex  mt-10 ">
                <!-- <div
                    class="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96 ">
                    <img class="rotate-45 py-20" src="~/assets/backgroung_2.png"><img>
                </div> -->
                <div class="flex flex-col items-center ml-20">
                    <div class=" flex items-center justify-center px-16">
                        <div class="relative w-full max-w-lg">
                            <div
                                class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob">
                            </div>
                            <div
                                class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000">
                            </div>
                            <div
                                class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000">
                            </div>
                            <div class="m-8 relative space-y-4">
                                <img class="mx-auto rounded-3xl		" src="~/assets/backgroung_2.png" alt="Ảnh">


                            </div>
                        </div>
                    </div>
                </div>
                <div id="about" class="text-5xl py-2 font-mono  ">
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
                        I love photography and camping, I usually take it out twice a month to take pictures and go
                        camping.
                        In addition, I love reading books, because reading gives us a lot of knowledge outside of life
                        that
                        we have never experienced.
                    </h3>
                    <a class="bg-gradient-to-r from-cyan-500 text-1xl to-teal-500 text-white px-4 py-2 border-none rounded-md"
                        href="#">
                        Resume
                    </a>
                </div>
            </div>

        </div>

        <div id="contact" class="items-center p-10 py-10 ">
            <h2 class="text-2xl font-bold dark:text-white md:text-4xl text-teal-400 text-center">
                Contact
            </h2>

            <h3 class="text-gray-600 dark:text-gray-300 font-mono py-3 font-bold text-center">Feel free contact me.</h3>
            <div class="p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 font-mono w-1/3 items-center mx-auto">
                <form class="flex flex-col space-y-4">
                    <div class="grid grid-cols-2 gap-4 py-3 ">
                        <div>
                            <label for="" class="text-sm ">Full Name</label>
                            <input type="text" placeholder="Full Name"
                                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-4">
                        </div>
                        <div>
                            <label for="" class="text-sm">Phone Number</label>
                            <input type="text" placeholder="Phone Number"
                                class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-4">
                        </div>
                    </div>
                    <label for="" class="text-sm">Email</label>
                    <input type="text" placeholder="Email yourself"
                        class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300">
                    <label for="" class="text-sm">Message</label>
                    <textarea type="text" placeholder="What do you want to contact me for?"
                        class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
                        rows="5"></textarea>
                    <button
                        class="bg-teal-400 to-teal-500 text-white px-4 border-none rounded-md inline-blocks self-end rounded-lg px-6 py-2 uppercase text-sm"
                        href="#">
                        Submit
                    </button>

                </form>

            </div>
        </div>
    </div>
</template>
<script>

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/default.css';
import highlightjs from 'highlight.js';

hljs.registerLanguage('javascript', javascript);

export default {
    components: {
        highlightjs,
    },
    computed: {
        highlightedCode() {
            const code = `
1  const services = [ 
2     'web development'
3  ] 
4     if (you need) navigate('/contact')  
5         else 
6           'thanks to visit'` ; // Thay thế đoạn mã của bạn ở đây với định dạng Markdown

            return hljs.highlightAuto(code, ['javascript']).value;
        },
    },
    head() {
        return {
            script: [
                {
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js',
                },
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css',
                },
            ],
        };
    },
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
        downloadResume() {
            var link = document.createElement('a');
            link.href = '~/assets/CV_NguyenDuyTan_BackendDev.pdf'; // Đường dẫn tới file PDF của bạn
            link.target = '_blank';
            link.download = 'CV_NguyenDuyTan.pdf'; // Tên file tải về

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },

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

.shadow-md {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.hover\:shadow-lg:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

@keyframes shimmer {
    0% {
        background-position: -200px 0;
    }

    100% {
        background-position: 200px 0;
    }
}

.shimmer-effect {
    animation: shimmer 1s infinite linear;
    background: linear-gradient(to right, #f5f7fb 0%, #e8edf1 50%, #f5f7fb 100%);
    background-size: 400px 100%;
}

.hljs-number {
    color: #475569;
}

.hljs-keyword {
    color: #a5b4fc
}

.hljs-string {
    color: #a3e635
}
</style>
