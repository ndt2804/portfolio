<template>
    <div class="container mt-12 mx-auto px-12 py-4">
        <section class="lg:py-2">
            <div class="grid grid-cols-1 sm:grid-cols-12">
                <div class="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                    <h1 class=" text-red-400 mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
                        <span class=" text-transparent bg-clip-text  bg-gradient-to-r from-pink-600 to-violet-400">
                            Hello, I&apos;m
                        </span>
                        <br />
                        <span :style="{ letterSpacing: showCursor ? '0' : '0.5em' }">{{ currentRole }}</span>
                        <span v-if="showCursor" class="cursor">|</span>
                    </h1>
                    <h1 id="text-custom" class="leading-6 font-normal	text-2xl ">
                        I design and code beautifully simple things, and I love what I do.
                    </h1>  
                    <button href="/contact"
                        class="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-violet-500 to-pink-500 hover:bg-slate-200 text-white">
                        Hire Me
                    </button>
                    <button href="/"
                        class="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-violet-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                        <span class="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                            Download CV
                        </span>
                    </button>
                </div>
                <div class="col-span-4 place-self-center mt-4 lg:mt-0" style="opacity: 1; transform: none;">
                    <div class="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                        <img alt="hero image" width="300" height="300"
                            class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            style="color:transparent" src="~/assets/background/hero_img.png">
                    </div>
                </div>
            </div>


        </section>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            roles: ["Nguyen Duy Tan", "Web Developer", "Node Developer", "Vue Developer ", "Photographer"],
            currentRole: "",
            showCursor: true,
        };
    },
    mounted() {
        this.rotateRoles(); // Bắt đầu xoay vai trò
    },
    methods: {
        async rotateRoles() {
            while (true) {
                for (let i = 0; i < this.roles.length; i++) {
                    await this.typeRole(this.roles[i]);
                    await this.pause(2000); // Đợi 2 giây
                    await this.eraseRole();
                }
            }
        },
        async typeRole(role) {
            for (let i = 0; i <= role.length; i++) {
                this.currentRole = role.slice(0, i);
                await this.pause(100); // Thời gian chờ giữa mỗi ký tự
            }
        },
        async eraseRole() {
            for (let i = this.currentRole.length; i >= 0; i--) {
                this.currentRole = this.currentRole.slice(0, i);
                await this.pause(50); // Thời gian chờ giữa mỗi ký tự xóa
            }
        },
        pause(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
    },
};
</script>
  
<style scoped>
.cursor {
    animation: blink 0.7s infinite;
}

@keyframes blink {

    0%,
    100% {
        opacity: 1;
    }

    50% {
        opacity: 0;
    }
}
</style>
  