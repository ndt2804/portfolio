<template>
  <section class="container mx-auto px-12 py-14">
    <div class="grid grid-cols-1 sm:grid-cols-12 lg:py-2">
      <div
        class="col-span-8 place-self-center text-center sm:text-left justify-self-start"
      >
        <h1
          class="text-red-400 mb-4 text-4xl sm:text-8xl lg:text-7xl lg:leading-normal font-extrabold"
        >
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-violet-400"
          >
            Hello, I&apos;m
          </span>
          <br />
          <span :style="{ letterSpacing: showCursor ? '0' : '0.5em' }">
            {{ currentRole }}
          </span>
          <span v-if="showCursor" class="cursor">&#10073;</span>
        </h1>
        <h1 class="text-xl mt-4 mb-8 md:mb-12 font-extrabold text-zinc-900">
          Frontend Developer & Backend Developer
        </h1>
        <button
          class="cursor-pointer flex justify-between bg-gray-800 px-3 py-2 rounded-full text-white tracking-wider shadow-xl hover:bg-gray-900 hover:scale-105 duration-500 hover:ring-1 font-mono w-[150px]"
        >
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-5 h-5 animate-bounce"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            ></path>
          </svg>
        </button>
      </div>
      <div class="col-span-4 place-self-center mt-4 lg:mt-0">
        <img alt="hero image" src="~/assets/background/hero_img.png" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      roles: [
        "Nguyen Duy Tan",
        "Web Developer",
        "Javascript Developer",
        "Photographer",
      ],
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
      return new Promise((resolve) => setTimeout(resolve, ms));
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
