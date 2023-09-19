<template>
    <div class="container mx-auto scroll-smooth ">
        <div id="/" class=" flex items-center p-10 py-10">
            <TheIntrodue />
        </div>
        <div class="p-10 py-10 ">
            <TheSkills />
        </div>

        <div id="project" class="items-center p-10 py-10">
            <TheProject />
        </div>

        <div id="services" class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
            <TheServices />
        </div>

        <div class="items-center p-10 py-10" id="about">
            <TheAbout />
        </div>
        <div id="contact" class="items-center p-10 py-10 ">
            <TheContact />
        </div>
    </div>
</template>
<script>
export default {

    methods: {
        downloadResume() {
            var link = document.createElement('a');
            link.href = '~/assets/CV_NguyenDuyTan_BackendDev.pdf'; // Đường dẫn tới file PDF của bạn
            link.target = '_blank';
            link.download = 'CV_NguyenDuyTan.pdf'; // Tên file tải về

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        },

    }
};
</script>
<style>
.shadow-md {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.hover\:shadow-lg:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
