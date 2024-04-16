<script setup>
import { ref } from "vue";

const activeTab = ref(0);
const changeTab = (index) => {
  activeTab.value = index;
};
const tabs = [
  {
    name: "Skill",
    content: [
      "NodeJS",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "VueJS",
      "NuxtJS",
      "Git",
      "Docker",
    ],
  },
  {
    name: "Education",
    content: [
      "Software Developer",
      "Ho Chi Minh City University of Technology (HUTECH)",
    ],
  },
  {
    name: "Award",
    content: ["Student of 5 merits", "Representative student"],
  },
];
</script>

<template>
  <section class="text-red-400 border rounded-2xl shadow-md" id="about">
    <div
      class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
    >
      <img
        src="~/assets/background/about_me.jpg"
        width="{500}"
        height="{500}"
        alt="logo"
      />
      <div class="mt-4 md:mt-0 text-left flex flex-col h-full">
        <p
          class="mt-1 text-4xl font-extrabold text-zinc-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl"
        >
          About Me
        </p>
        <p class="mt-2 text-base lg:text-lg font-extrabold text-zinc-900">
          I'm a software developer with extensive experience in coding and
          software development.I have experience working with JavaScript,
          Typescript, NuxtJS, VueJS NodeJS (ExpressJS), HTML/CSS, Docker and
          Git. I'm passionate about creating innovative solutions, and I'm
          dedicated to my craft. With my creativity, I'm confident I can help
          you find the best software solution for your needs. I look forward to
          working with you to create great apps
        </p>

        <div class="flex flex-row justify-start mt-8">
          <button
            v-for="(tab, index) in tabs"
            :key="index"
            @click="changeTab(index)"
          >
            <p
              :class="[
                'mr-3',
                'font-extrabold',
                'text-[#ADB7BE]',
                activeTab === index
                  ? 'text-indigo-400 underline underline-offset-[.2rem]'
                  : 'hover:text-indigo-400',
              ]"
              class="mr-3 font-extrabold hover:text-indigo-400 underline-offset-[.2rem] hover:underline px-2 text-base text-indigo-600 tracking-wide uppercase"
            >
              {{ tab.name }}
            </p>
          </button>
        </div>
        <div class="mt-8">
          <ul
            v-for="(tab, index) in tabs"
            v-show="activeTab === index"
            class="list-disc pl-2 font-extrabold max-w-md space-y-1 text-zinc-900 list-inside dark:text-gray-400 sm:list-outside md:list-inside lg:list-outside xl:list-inside"
          >
            <li v-for="(tab, index) in tab.content">
              {{ tab }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.tab-content.show {
  display: block;
}
</style>
