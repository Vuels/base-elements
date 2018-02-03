<template lang="html">
    <transition name="vuels-modal-fade">
        <div
            class="vuels-modal">
            <div
                class="vuels-modal__backdrop">
                <div
                    role="dialog"
                    aria-labelledby="modalTitle"
                    aria-describedby="modalDescription"
                    class="vuels-modal__content">
                    <header 
                        id="modalTitle"
                        class="vuels-modal__header">
                        <slot name="header">
                            This is the default tile!

                            <button
                                type="button"
                                class="btn-close"
                                aria-label="Close modal"
                                @click="close">x</button>
                        </slot>
                    </header>
                    <section
                        id="modalDescription"
                        class="vuels-modal__body">
                        <slot name="body">
                            I'm the default body.
                        </slot>
                    </section>
                    <footer class="vuels-modal__footer">
                        <slot name="footer">
                            <button
                                type="button"
                                class="btn-green"
                                aria-label="Close modal"
                                @click="close">Close Me!</button>
                        </slot>
                    </footer>    
                </div>    
            </div>
        </div>
    </transition>
</template>

<script>
    export default {
        name: 'vuels-modal',
        props: {
            themeBackground: {
                type: String,
                required: false
            },
            themeForeground: {
                type: String
            }
        },
        methods: {
            close () {
                this.$emit('close');
            }
        }
    }
</script>

<style lang="css" scoped>
    .vuels-modal-fade-enter,
    .vuels-modal-fade-leave-active {
        opacity: 0;
    }

    .vuels-modal-fade-enter-active,
    .vuels-modal-fade-leave-active {
        transition: opacity .5s ease
    }

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
    .vuels-modal__header, .vuels-modal__footer {
        padding: 15px;
        display: flex;
        align-items: center;
    }

    .vuels-modal__header {
        border-bottom: 1px solid #eeeeee;
        color: #4AAE9B;
        justify-content: space-between;
    }

    .vuels-modal__footer {
        border-top: 1px solid #eeeeee;
        justify-content: flex-end;
    }

    .vuels-modal__body {
        position: relative;
        padding: 20px 10px;
    } 

    .btn-close {
        border: none;
        font-size: 20px;
        padding: 0;
        cursor: pointer;
        font-weight: bold;
        color: #4AAE9B;
        background: transparent;
    }

    .btn-green {
        color: white;
        background: #4AAE9B;
        border: 1px solid #4AAE9B;
        border-radius: 2px;
    }
</style>
