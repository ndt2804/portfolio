<script setup>
import { ref, computed } from "vue";

const projectsData = [
  {
    id: 1,
    title: "Lili-ours",
    description: "Website synthesizing comics of the yuri genre",
    image: "/images/lili-ours.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ndt2804/yuri-yuri",
    previewUrl: "https://lily-ours.com/",
  },
  {
    id: 2,
    title: "AnimeTV",
    description: "A Project built website to watch anime movies",
    image: "/images/animetv.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ndt2804/anime-nodejs-hbs",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "An e-commerce website selling books",
    image: "/images/ecommerce.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/ndt2804/e-commerce-platform",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "A Porfolio Website",
    description: "A Porfolio Website",
    image: "/images/portfolio.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Calendar Release",
    description: "A bot discord announces the story's release date",
    image: "/images/bot-discord.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Project",
    description: "Project 5 description",
    image: "/images/hero_img.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];
const tag = ref("All");

const handleTagChange = (newTag) => {
  tag.value = newTag;
  console.log(tag.value);
};

const filteredProjects = computed(() =>
  projectsData.filter(
    (project) => tag.value === "All" || project.tag.includes(tag.value)
  )
);
</script>
<template>
  <section id="projects" class="py-12">
    <p
      class="text-center mt-1 text-4xl font-extrabold text-zinc-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl"
    >
      My Projects
    </p>
    <div
      class="text-red-400 flex flex-row justify-center items-center gap-2 py-6"
    >
      <TheProjectTag
        @click="handleTagChange"
        name="All"
        :isSelected="tag === 'All'"
      />
      <TheProjectTag
        @click="handleTagChange"
        name="Web"
        :isSelected="tag === 'Web'"
      />
      <TheProjectTag
        @click="handleTagChange"
        name="Mobile"
        :isSelected="tag === 'Mobile'"
      />
    </div>
    <ul class="grid md:grid-cols-3 gap-8 md:gap-12 border-red-100">
      <li v-for="(project, index) in filteredProjects" :key="index">
        <TheProjectCard
          :title="project.title"
          :description="project.description"
          :imgUrl="project.image"
          :gitUrl="project.gitUrl"
          :previewUrl="project.previewUrl"
          :key="project.id"
        />
      </li>
    </ul>
  </section>
</template>
