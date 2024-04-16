<template>
  <div class="container mx-auto scroll-smooth">
    <div class="flex justify-between px-6">
      <div class="flex items-center py-4">
        <a
          aria-current="page"
          href="/"
          class="router-link-active router-link-exact-active"
        >
          <img src="~/assets/background/logo.png" width="80" height="45"
          alt="Logo"
        </a>
      </div>
      <div class="py-6">
        <div class="flex">
          <button
            class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
          >
            <span
              class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0"
            >
              Contact Me
            </span>
          </button>
          <button
            type="button"
            class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Donate &#10084;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
