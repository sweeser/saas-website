<template>
    <section class="productivity">
            <div class="tag">
                <p class="tag__text">Version 2.0 is here</p>
            </div>
            <h1 class="productivity__title typography__h1">Pathway to productivity</h1>
            <p class="productivity__description typography__body_large">Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>
            <div class="productivity__buttons">
                <ul class="productivity__list">
                    <li class="productivity__list-item">
                        <div class="button">
                            <a href="#" class="button__link button__link_theme_dark typography__body_normal">Get for free</a>
                        </div>
                    </li>
                    <li class="productivity__list-item">
                        <div class="button">
                            <a href="#" class="button__link button__link_theme_light typography__body_normal">Learn more<img :src="require('@/assets/svg-elements/arrow-black.svg')" alt=""></a>
                        </div>
                    </li>
                </ul>
            </div>
            <img :src="require('@/assets/png-elements/productivity-image-mobile.png')" alt="" class="productivity__image productivity__image_device_mobile">
            <img :src="require('@/assets/png-elements/productivity-image-tablet.png')" alt="" class="productivity__image productivity__image_device_tablet">
            <img :src="require('@/assets/png-elements/productivity-image-desktop.png')" alt="" class="productivity__image productivity__image_device_desktop">
            <img :src="require('@/assets/png-elements/productivity-cylinder.png')" alt="" class="productivity__image productivity__image——cylinder">
            <img :src="require('@/assets/png-elements/productivity-torus.png')" alt="" class="productivity__image productivity__image——torus">
    </section>
</template>

<script>
export default {
    name: 'ProductivityComponent'
};
</script>

<style lang="scss" src="@/styles/ProductivityComponent.scss"></style>