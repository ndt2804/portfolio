<template>
    <div>
        <div :style="{ background: `url(${imgUrl})`, backgroundSize: 'cover' }"
            class="h-52 md:h-72 rounded-t-xl relative group">
            <div
                class="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
                <div class="text-center">
                    <p class="text-[#ADB7BE] text-xl font-bold mb-4">{{ description }}</p>
                    <div class="space-x-4">
                        <!-- <NuxtLink :to="gitUrl"
                            class=" px-4 py-2 h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                            <Icon name="material-symbols-light:link"
                                class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                        </NuxtLink>
                        <NuxtLink :to="previewUrl"
                            class=" px-4 py-2 h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link">
                            <Icon name="ph:eye-thin"
                                class="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
                        </NuxtLink> -->
                    <!-- <button class="relative font-medium text-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg px-6 py-3 cursor-pointer transition-transform hover:scale-95">
                        Tôi yêu Việt Nam
                    </button> -->
                    <button class="h-[50px] w-[200px] relative bg-transparent cursor-pointer overflow-hidden text-[#333] transition-all duration-[0.5s] ease-[ease-in-out] rounded-[30px] border-2 border-solid border-[#ffffff] hover:shadow-[1px_1px_200px_#252525] hover:text-white hover:border-[none];">
                        <span class=" z-[1] font-extrabold tracking-[4px]">Visit Website</span>
                      </button>
                      
                      
                      
                    </div>
                </div>
               
            </div>

        </div>
        <!-- <div class="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
            <h5 class="text-xl font-semibold mb-2">{{ title }}</h5>
            <p class="text-[#ADB7BE]">{{ description }}</p>
        </div> -->
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
  

  