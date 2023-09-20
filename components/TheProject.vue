<template>
    <div class="mb-12 space-y-2 text-center">
        <h2 class="text-3xl font-bold  md:text-4xl dark:text-white text-teal-400">Project</h2>
        <p class="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300 font-mono font-bold">
            Here are a few projects I've done for my personal hobby, you can check them out
        </p>
    </div>
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div
            class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div class="relative overflow-hidden rounded-xl">
                <img src="~/assets/project/animetv.png" alt="art cover" loading="lazy" width="1000" height="667"
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
                <img src="~/assets/project/portfolio.png" alt="art cover" loading="lazy" width="1000" height="667"
                    class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div class="mt-6 relative">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                    Portfolio with NUXT 3.
                </h3>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                    I built my portfolio with NUXT 3, Tailwindcss
                </p>
                <a class="inline-block" href="https://github.com/ndt2804/portfolio">
                    <span class="text-info dark:text-blue-300">Read more</span>
                </a>
            </div>

        </div>
        <div
            class="group p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
            <div class="relative overflow-hidden rounded-xl">
                <img src="~/assets/project/lili-ours.png" alt="art cover" loading="lazy" width="1000" height="667"
                    class="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105" />
            </div>
            <div class="mt-6 relative">
                <h3 class="text-2xl font-semibold text-gray-800 dark:text-white">
                    Lily-Our With NUXT
                </h3>
                <p class="mt-6 mb-8 text-gray-600 dark:text-gray-300">
                    Project i built for my hobbies with Yuri
                </p>
                <a class="inline-block" href="https://github.com/ndt2804/yuri-yuri">
                    <span class="text-info dark:text-blue-300">Read more</span>
                </a>
            </div>

        </div>
    </div>
</template>