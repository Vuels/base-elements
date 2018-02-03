<template lang="html">
    <div
        class="vuels-modal">
        <div
            class="vuels-modal__backdrop">
            <div
                class="vuels-modal__content">
                <header>Heading</header>
                <section>Content</section>
                <footer>Footers</footer>    
            </div>    
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vuels-modal',
        methods: {
            close () {
                this.$emit('close');
            }
        }
    }
</script>

<style lang="css" scoped>
    .vuels-modal {
        display: block;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
    .vuels-modal__backdrop {
        position: relative;
        width: 100%;
        height: 100%;

        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .vuels-modal__content {
        background: #FFFFFF;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
        min-width: 300px;
        min-height: 200px;
    }
</style>
