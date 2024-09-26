<template>
    <section class="product">
        <div class="tag">
            <p class="tag__text">Boost your productivity</p>
        </div>
        <div class="product__header">
            <h2 class="product__title typography__h2">A more effective way to track progress</h2>
        <p class="product__description typography__body_large">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website in just minutes with the set of free components for Framer.</p>
        </div>
        <img :src="require('@/assets/png-elements/product-image-mobile.png')" alt="Picture of product with functional" class="product__image product__image_mobile">
        <img :src="require('@/assets/png-elements/product-image-tablet.png')" alt="Picture of product with functional" class="product__image product__image_tablet">
        <img :src="require('@/assets/png-elements/product-image-torus.png')" alt="Picture of product with functional" class="product__image product__image_torus">
        <img :src="require('@/assets/png-elements/product-image-pyramid.png')" alt="Picture of product with functional" class="product__image product__image_pyramid">
        <ul class="product__list">
            <li class="product__item">
                <div class="feature">
                    <img :src="require('@/assets/svg-elements/ecosystem-picture.svg')" alt="" class="feature__image">
                    <h3 class="feature__title typography__h3_small">Integration ecosystem</h3>
                    <p class="feature__description typography__body_medium">Track your progress and motivate your efforts everyday.</p>
                    <a href="#" class="feature__link typography__body_medium">Learn more<img :src="require('@/assets/svg-elements/arrow-black.svg')" alt=""></a>
                </div>
            </li>
            <li class="product__item">
                <div class="feature">
                    <img :src="require('@/assets/svg-elements/target-picture.svg')" alt="" class="feature__image">
                    <h3 class="feature__title typography__h3_small">Goal setting and tracking</h3>
                    <p class="feature__description typography__body_medium">Set and track goals with manageable task breakdowns.</p>
                    <a href="#" class="feature__link typography__body_medium">Learn more<img :src="require('@/assets/svg-elements/arrow-black.svg')" alt=""></a>
                </div>
            </li>
            <li class="product__item">
                <div class="feature">
                    <img :src="require('@/assets/svg-elements/lock-picture.svg')" alt="" class="feature__image">
                    <h3 class="feature__title typography__h3_small">Secure data encryption</h3>
                    <p class="feature__description typography__body_medium">Ensure your data’s safety with top-tier encryption.</p>
                    <a href="#" class="feature__link typography__body_medium">Learn more<img :src="require('@/assets/svg-elements/arrow-black.svg')" alt=""></a>
                </div>
            </li>
            <li class="product__item">
                <div class="feature">
                    <img :src="require('@/assets/svg-elements/notifications-picture.svg')" alt="" class="feature__image">
                    <h3 class="feature__title typography__h3_small">Customizable notifications</h3>
                    <p class="feature__description typography__body_medium">Get alerts on tasks and deadlines that matter most.</p>
                    <a href="#" class="feature__link typography__body_medium">Learn more<img :src="require('@/assets/svg-elements/arrow-black.svg')" alt=""></a>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'ProductComponent'
};
</script>

<style src="@/styles/product.css"></style>
<style src="@/styles/feature.css"></style>