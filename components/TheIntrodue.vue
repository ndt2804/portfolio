<script>
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import 'highlight.js/styles/default.css';
import highlightjs from 'highlight.js';
hljs.registerLanguage('javascript', javascript);

export default {
    components: {
        highlightjs,
    },
    computed: {
        highlightedCode() {
            const code = `
1  const services = [ 
2     'web development'
3  ] 
4     if (you need) navigate('/contact')  
5         else 
6           'thanks to visit'` ; // Thay thế đoạn mã của bạn ở đây với định dạng Markdown

            return hljs.highlightAuto(code, ['javascript']).value;
        },
    },
    head() {
        return {
            script: [
                {
                    src: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/highlight.min.js',
                },
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/default.min.css',
                },
            ],
        };
    },
    data() {
        return {
            text: 'Haneko',
            textDefault: '',
            delay: 200, // Thời gian delay giữa mỗi ký tự (ms)
            currentIndex: 0
        };
    },
    mounted() {
        this.startTyping();
    },
    methods: {
        startTyping() {
            const typewriter = document.getElementById('typewriter');
            typewriter.textContent = '';
            this.type(); // Chạy hiệu ứng chạy từng chữ
            setInterval(this.resetTypewriter, 10000); // Đặt thời gian chạy lại sau 10 giây (10000 ms)
        },
        type() {
            if (this.currentIndex < this.text.length) {
                const typewriter = document.getElementById('typewriter');
                typewriter.textContent += this.text.charAt(this.currentIndex);
                this.currentIndex++;
                setTimeout(this.type, this.delay);
            }
        },
        resetTypewriter() {
            const typewriter = document.getElementById('typewriter');
            typewriter.textContent = ''; // Xóa nội dung trong thẻ <span>
            this.currentIndex = 0; // Đặt lại chỉ số hiện tại
            this.type(); // Chạy lại hiệu ứng chạy từng chữ
        }
    }
}
</script>
<template>
    <div class="text-5xl py-2 font-mono  ">
        <div
            class="m-0 inline-flex items-baseline font-bold text-7xl bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent ">
            <p>&gt;</p>
            <span id="typewriter"
                class=" items-center space-x-2 py-4 md:py-1 drop-shadow-lg bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent">
                <p class="py-2 text-4xl md:text-5xl"> {{
                    text }}</p>
            </span>
            <div
                class="ml-2 -translate-y-2 animate-blink bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent">
                _</div>
        </div>
        <div class="transition-all motion-reduce:transition-none duration-500 opacity-1 blur-0">
            <div
                class=" items-center space-x-2 py-4 md:py-1 drop-shadow-lg bg-gradient-to-r from-[#fa3205] to-[#5301c5] bg-clip-text text-transparent">
                <p class="py-2 text-4xl md:text-5xl" id="custom-logo"> Web Developer</p>
            </div>
        </div>
        <p class="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl md:text-xl">
            Hello, I'm Nguyen Duy Tan. I'm a software developer with a solid knowledge of NodeJS, JavaScript and Typescript.
            I
            have ability
            to
            learn and apply new technology quickly.
            With my creativity, technical skills, I am looking to work in a professional environment where I can
            learn and improve my skills.
        </p>
        <div class="code-frame text-white text-2xl p-4  rounded-lg mx-auto">
            <div>
                <pre>
          <code class="code-frame" v-html="highlightedCode" v-once></code>
        </pre>
            </div>
        </div>
    </div>

    <div class="flex flex-col items-center ml-20">
        <div class=" flex items-center justify-center ">
            <div class="">
                <div class="mt-8 relative space-y-4">
                    <img class="" src="~/assets/background/front-end-development.gif" alt="Ảnh">
                </div>

            </div>
        </div>
    </div>
</template>
<style >
@keyframes typing {
    from {
        width: 0;
    }
}

.animate-typewriter {
    animation: typing 2s steps(12, end);
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

.hljs-number {
    color: #475569;
}

.hljs-keyword {
    color: #a5b4fc
}

.hljs-string {
    color: #a3e635
}

.code-frame {
    background-color: #1a202c;
}

.animate-blink {
    animation: blink 1s infinite;
}
</style>