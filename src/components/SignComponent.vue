<template>
    <section class="sign">
        <div class="sign__header">
            <h2 class="sign__title typography__h2">Sign up for free today</h2>
            <p class="sign__description typography__body_medium">Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
        </div>
        <div class="sign__buttons">
            <ul class="sign__list">
                <li class="sign__list-item">
                    <div class="button">
                        <a href="#" class="button__link button__link_theme_dark typography__body_normal">Get for free</a>
                    </div>
                </li>
                <li class="sign__list-item">
                    <div class="button">
                        <a href="#" class="button__link button__link_theme_light typography__body_normal">Learn more<img :src="require('@/assets/svg-elements/arrow-black.svg')" alt=""></a>
                    </div>
                </li>
            </ul>
            <img :src="require('@/assets/png-elements/sign-image-emojistar.png')" alt="" class="sign__image sign__image——emojistar">
            <img :src="require('@/assets/png-elements/sign-image-helix.png')" alt="" class="sign__image sign__image——helix">
        </div>
    </section>
</template>

<script>
export default {
    name: 'SignComponent'
};
</script>

<style lang="scss" src="@/styles/SignComponent.scss"></style>