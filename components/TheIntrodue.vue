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
        <div class="m-0 inline-flex items-baseline font-bold text-7xl "><svg stroke="currentColor" fill="currentColor"
                stroke-width="0" viewBox="0 0 512 512" class="hidden shrink-0 grow-0 self-center text-omega-500 md:block"
                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fill="none" stroke-linecap="square" stroke-miterlimit="10" stroke-width="48"
                    d="M184 112l144 144-144 144">
                </path>
            </svg>
            <span id="typewriter" class="animate-typewriter overflow-hidden whitespace-nowrap text-teal-400">{{
                text }}</span>
            <div class="ml-2 -translate-y-2 animate-blink">_</div>
        </div>
        <h3 class="text-2xl py-2 dark:text-white md:text-3xl">
            Web Developer
        </h3>
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
                    <img class="" src="~/assets//background/developer_gifs.gif" alt="Ảnh">
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