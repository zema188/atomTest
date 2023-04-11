<template>
    <input
    class="field"
    :value="modelValue"
    @input="updateInput"
    :placeholder="placeholder"
    :type="type"
    >
</template>

<script>
    export default {
        name: 'TheInput',
        props: {
            modelValue: [String, Number],
            placeholder: {
                type: String,
            },
            type: {
                type: String
            }
        },
        methods: {
            updateInput(event) {
                this.$emit('update:modelValue', event.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>
.field {
    width: 100%;
    border: 1px solid #969696;
    margin: 5px 0px;
    font-size: 13px;
    &::placeholder {
        font-size: 13px;
    }
}
</style>