<template>
  <div>
    <div
      :style="{ background: `url(${imgUrl})`, backgroundSize: 'cover' }"
      class="h-52 md:h-72 relative group border border-red-100 rounded-2xl shadow-xl"
    >
      <div
        class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 group-hover:rounded-2xl"
      >
        <div class="text-center">
          <p class="text-[#ADB7BE] text-xl font-bold mb-4">{{ description }}</p>
          <div class="space-x-4">
            <button
              class="h-[50px] w-[200px] relative bg-transparent cursor-pointer overflow-hidden text-[#333] transition-all duration-[0.5s] ease-[ease-in-out] rounded-[30px] border-2 border-solid border-[#ffffff] hover:shadow-[1px_1px_200px_#252525] hover:text-white hover:border-[none];"
            >
              <span class="z-[1] font-extrabold tracking-[4px]"
                >Visit Website</span
              >
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: String,
    title: String,
    description: String,
    gitUrl: String,
    previewUrl: String,
  },
};
</script>
