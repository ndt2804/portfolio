<template>
    <div class="p-st">
        <div class="container py-4">
            <div class="text-center">
                <div class="transition-all motion-reduce:transition-none duration-500 opacity-1 blur-0 text-center">
                    <div>
                        <div
                            class=" items-center space-x-2 py-4 md:py-1 drop-shadow-lg bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent">
                            <p class="text-4xl md:text-5xl" id="custom-logo">Skills</p>
                        </div>
                    </div>
                </div>

                <p class="lg:mx-auto lg:w-6/12 text-gray-600 dark:text-gray-300 font-mono font-bold">
                    Below are a few skills I have been learning, I try to improve it every day to be better
                </p>
            </div>
            <br />
            <div class="mt-12 grid grid-cols-3 gap-12  font-mono">
                <div class="transition duration-200 hover:grayscale-0 items-center justify-between text-center"
                    v-for="(skill, idx) in skills">
                    <Icon :name="skill.icon" color="d49561" class="w-10 h-10"></Icon>
                    <div class="text-xl py-2  font-bold ">{{ skill.title }}</div>
                    <hr class="w-1/2 mx-auto   pb-4" />
                    <span class="px-2">{{ skill.info.join(", ") }}</span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
const skills = [
    {
        title: "languages",
        info: [
            "Javascript",
            "TypeScript",
            "Java",
            "C",
            "C#",
            "SQL",
            "NoSQL",
        ],
        icon: "ph:code-bold"
    },

    {
        title: "web technologies",
        info: ["Vue", "Node", "NUXT", "HTML", "CSS"],
        icon: "fa6-solid:laptop-code"
    },
    {
        title: "databases",
        info: ["MongoDB", "MySQL", "SQL Server", "Firebase", "Supbase"],
        icon: "solar:database-bold"
    },
    {
        title: "operating systems & tools",
        info: [
            "Ubuntu",
            "Windows",
            "Android",
            "JIRA",
            "Vercel",
            "Firebase",
            "AWS S3"
        ],
        icon: "fa-solid:tools"
    },
    {
        title: "design",
        info: ["Illustrator", "Photoshop", "Canva"],
        icon: "fa:pencil-square-o"
    }, {
        title: "data frameworks",
        info: [
            "MongoDB",
            "MySql",
            "SQL Server",
            "Firebase",
            "Supbase",
        ],
        icon: "fa6-solid:cubes"
    },
]
</script>
  
