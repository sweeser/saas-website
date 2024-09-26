<template>
    <header class="header">
        <div class="bar">
            <p class="bar__text typography__body_small_tag">This page is included in a free SaaS Website Kit.</p>
            <a href="#" class="bar__link typography__body_small_tag">View the complete Kit<img :src="require('@/assets/svg-elements/arrow-white.svg')" alt="" class="bar__link-image"></a>
        </div>
        <div class="header__container">
            <div class="logo">
                <img :src="require('@/assets/svg-elements/logosaas.svg')" alt="SaaS Website logotype" class="logo__image">
                <p class="logo__text typography__body_s">made by</p>
                <img :src="require('@/assets/svg-elements/framer-logo.svg')" alt="Framer company logotype" class="logo__name">
            </div>
            <nav class="navigation">
                <ul class="header_navblock">
                    <li class="header_navblock__item"><a href="#" class="header_navblock__item-link typography__body_medium">About</a></li>
                    <li class="header_navblock__item"><a href="#" class="header_navblock__item-link typography__body_medium">Features</a></li>
                    <li class="header_navblock__item"><a href="#" class="header_navblock__item-link typography__body_medium">Customers</a></li>
                    <li class="header_navblock__item"><a href="#" class="header_navblock__item-link typography__body_medium">Updates</a></li>
                    <li class="header_navblock__item"><a href="#" class="header_navblock__item-link typography__body_medium">Help</a></li>
                </ul>
            </nav>
            <div class="button header__button">
                <a href="#" class="button__link button__link_theme_dark typography__body_normal">Get for free</a>
            </div>
            <button class="header__menu" aria-label="Open menu">
                <img :src="require('@/assets/svg-elements/burger.svg')" alt="" class="header__burger-icon">
            </button>
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    };
</script>

<style src="@/styles/header.css"></style>
<style src="@/styles/logo.css"></style>