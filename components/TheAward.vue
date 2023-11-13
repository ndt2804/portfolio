<script setup>
const achievementsList = [
    {
        metric: "Projects",
        value: "10",
        postfix: "+",
    },
    {
        prefix: "~",
        metric: "Users",
        value: "100",
    },
    {
        metric: "Awards",
        value: "2",
    },
    {
        metric: "Years",
        value: "1",
    },
];
</script>
<template>
    <div class="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div
            class="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
            <div v-for="(project, index) in achievementsList" :key="index"
                class="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
                <h2 class=" text-4xl font-bold flex flex-row  text-pink-600 ">
                    {{ project.prefix }} {{ project.value }} {{ project.postfix }}
                </h2>
                <p class="text-violet-500 text-base">{{ project.metric }}</p>
            </div>

        </div>
    </div>
</template>