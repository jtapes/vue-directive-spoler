function spoiler(el, value, options = {}) {
    if (value) {
        el.style.height = ${el.scrollHeight}px
    } else {
        el.style.height = options.height ? options.height + 'px' : 0
    }
}

export default {
    inserted(el, binding) {
        const arg = binding.arg.split(':')
        el.style.overflow = 'hidden'
        el.style.transition = height ${arg[0]}ms ease
        spoiler(el, binding.value, {speed: arg[0], height: arg[1]})
    },

    update(el, binding) {
        if(binding.oldValue === binding.value) return
        const arg = binding.arg.split(':')
        spoiler(el, binding.value, {speed: arg[0], height: arg[1]})
    }
};
