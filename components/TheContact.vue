<template>
  <div
    class="flex flex-col-2 md:flex-row md:space-x-6 md:space-y-0 max-w-5xl p-8 rounded-xl shadow-lg border-orange-200 justify-between items-center mx-auto p-12"
  >
    <div class="mx-auto">
      <div class="text-center p-4">
        <h2
          class="text-base text-indigo-600 font-semibold tracking-wide uppercase"
        >
          Contact
        </h2>
        <p
          class="mt-1 text-xl font-extrabold text-zinc-900 dark:text-white sm:text-3xl sm:tracking-tight lg:text-3xl"
        >
          Feel free contact me
        </p>
      </div>
      <img
        class="mx-auto rounded-3xl"
        width="800"
        src="~/assets/background/about_me.jpg"
        alt="Ảnh"
      />
    </div>
    <div
      class="p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 font-mono items-center mx-auto w-full text-black shadow-lg"
    >
      <form class="flex flex-col space-y-4">
        <div class="grid grid-cols-2 gap-4 py-3">
          <div>
            <label for="" class="text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Full Name"
              class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-4"
            />
          </div>
          <div>
            <label for="" class="text-sm">Phone Number</label>
            <input
              type="text"
              placeholder="Phone Number"
              class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 mt-4"
            />
          </div>
        </div>
        <label for="" class="text-sm">Email</label>
        <input
          type="text"
          placeholder="Email yourself"
          class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
        />
        <label for="" class="text-sm">Message</label>
        <textarea
          type="text"
          placeholder="What do you want to contact me for?"
          class="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
          rows="5"
        ></textarea>
        <button
          @click="sendEmail"
          href=""
          class="border-none inline-blocks self-end uppercase text-sm flex items-center text-white gap-1 px-4 py-2 cursor-pointer bg-blue-500 font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
        >
          Send
          <svg
            class="w-5 h-5"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              stroke-linejoin="round"
              stroke-linecap="round"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    sendEmail() {
      window.location.href = "mailto:nduytan.dev@gmail.com";
    },
  },
};
</script>
