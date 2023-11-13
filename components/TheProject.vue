<script setup>
import { ref, computed } from 'vue';

const projectsData = [
    {
        id: 1,
        title: "Lili-ours",
        description: "Website synthesizing comics of the yuri genre",
        image: "/assets/project/lili-ours.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ndt2804/yuri-yuri",
        previewUrl: "https://lily-ours.com/",
    },
    {
        id: 2,
        title: "AnimeTV",
        description: "A Project built website to watch anime movies",
        image: "/assets/project/animetv.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ndt2804/anime-nodejs-hbs",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "E-commerce Application",
        description: "An e-commerce website selling books",
        image: "/assets/project/ecommerce.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/ndt2804/e-commerce-platform",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "A Porfolio Website",
        description: "A Porfolio Website",
        image: "/assets/project/portfolio.png",
        tag: ["All", "Mobile"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 5,
        title: "Calendar Release",
        description: "A bot discord announces the story's release date",
        image: "/assets/project/bot-discord.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 6,
        title: "Full-stack Project",
        description: "Project 5 description",
        image: "/assets/background/hero_img.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/",
    },
];
const tag = ref('All');

const handleTagChange = (newTag) => {
    tag.value = newTag;
    console.log(tag.value);
};

const filteredProjects = computed(() =>
    projectsData.filter((project) => tag.value === 'All' || project.tag.includes(tag.value))
);

</script>
<template>
    <section id="projects">
        <h2 class="text-center text-4xl font-bold text-red-400 mt-4 mb-8 md:mb-12">
            My Projects
        </h2>
        <div class="text-red-400  flex flex-row justify-center items-center gap-2 py-6">
            <TheProjectTag @click="handleTagChange" name="All" :isSelected="tag === 'All'" />
            <TheProjectTag @click="handleTagChange" name="Web" :isSelected="tag === 'Web'" />
            <TheProjectTag @click="handleTagChange" name="Mobile" :isSelected="tag === 'Mobile'" />

        </div>
        <ul class="grid md:grid-cols-3 gap-8 md:gap-12">
            <li v-for="(project, index) in filteredProjects" :key="index">
                <TheProjectCard :title="project.title" :description="project.description" :imgUrl="project.image"
                    :gitUrl="project.gitUrl" :previewUrl="project.previewUrl" :key="project.id" />
            </li>
        </ul>
    </section>
</template>