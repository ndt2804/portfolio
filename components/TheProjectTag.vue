<template>
    <button :class="[buttonStyles, 'rounded-full border-2 px-6 py-3 text-xl cursor-pointer']" @click="handleClick">
        {{ name }}
    </button>
</template>
  
<script>
export default {
    props: {
        name: String,
        onClick: Function,
        isSelected: Boolean
    },
    computed: {
        buttonStyles() {
            return this.isSelected
                ? 'border-violet-500'
                : 'text-[#ADB7BE] border-slate-600 hover:border-pink-400';
        }
    },
    methods: {
        handleClick() {
            this.onClick(this.name);
        }
    }
};
</script>
  