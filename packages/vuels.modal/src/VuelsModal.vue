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
                        v-if="title !== null"
                        id="modalTitle"
                        :style="{ color: theme }"
                        class="vuels-modal__header">
                        <slot name="header">
                            <h4
                                class="vuels-modal__header-title"
                                v-html="title"></h4>
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
                                class="btn-filled-in"
                                aria-label="Close modal"
                                :style="style"
                                @mouseover="buttonMouseToggle"
                                @mouseout="buttonMouseToggle"
                                @click="close">Close</button>
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
            theme: {
                type: String,
                default: '#4AAE9B'
            }, 
            title: {
                type: String,
                default: null
            }
        },
        data () {
            return {
                hovering: false,
                defWhite: '#ffffff'
            }
        },
        computed: {
            style () {
                return `
                    border: 1px solid ${this.theme}; 
                    background-color: ${this.hovering ? this.defWhite : this.theme}; 
                    color: ${this.hovering ? this.theme : this.defWhite}`;
            }
        },
        methods: {
            buttonMouseToggle () {
                this.hovering = !this.hovering
            },
            close () {
                this.$emit('close');
            }
        }
    }
</script>

<style lang="scss" scoped>
    $default-font: 16px/1.2 BlinkMacSystemFont, -apple-system, “Segoe UI”, Roboto, Helvetica, Arial, sans-serif;
    $backdrop-color: rgba(0, 0, 0, 0.3);
    $box-shadow: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);
    $border-color: #eeeeee;
    $background-color: #FFFFFF;

    .vuels-modal {
        display: block;
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        font: $default-font;
        z-index: 99999;

        .vuels-modal__backdrop {
            position: relative;
            width: 100%;
            height: 100%;

            background-color: $backdrop-color;
            display: flex;
            justify-content: center;
            align-items: center;

            .vuels-modal__content {
                background: $background-color;
                box-shadow: $box-shadow;
                overflow-x: auto;
                display: flex;
                flex-direction: column;
                min-width: 300px;

                .vuels-modal__header, .vuels-modal__footer {
                    padding: 15px;
                    display: flex;
                    align-items: center;
                }

                .vuels-modal__header {
                    border-bottom: 1px solid $border-color;
                    justify-content: space-between;

                    .vuels-modal__header-title {
                        font-size: 1rem;
                        margin: 5px 0;
                    }
                }

                .vuels-modal__footer {
                    border-top: 1px solid $border-color;
                    justify-content: flex-end;
                }

                .vuels-modal__body {
                    position: relative;
                    padding: 20px 15px;
                } 
            }
        }
    }

    .btn-filled-in {
        border-radius: 3.5px;
        font-size: 1rem;
        padding: 6px 24px;
        text-decoration: none;
        outline: 0;

        border-radius: 3.5px;
        cursor: pointer;
    }

    // Transitions
    .vuels-modal-fade-enter,
    .vuels-modal-fade-leave-active {
        opacity: 0;
    }

    .vuels-modal-fade-enter-active,
    .vuels-modal-fade-leave-active {
        transition: opacity .5s ease
    }
</style>
