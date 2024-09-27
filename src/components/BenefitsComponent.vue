<template>
    <section class="benefits">
        <div class="tag">
            <p class="tag__text">Everything you need</p>
        </div>
        <div class="benefits__header">
            <h2 class="benefits__title typography__h2">Streamlined for easy management</h2>
            <p class="benefits__description typography__body_large">Enjoy customizable lists, team work tools, and smart tracking all in one place. Set tasks, get reminders, and see your progress simply and quickly.</p>
        </div>
        <ul class="benefits__list">
            <li class="benefits__item">
                <div class="card">
                    <img :src="require('@/assets/png-elements/figure-1.png')" alt="" class="card__image">
                    <h3 class="card__title typography__h3_medium">Integration ecosystem</h3>
                    <p class="card__text typography__body_medium">Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.</p>
                </div>
            </li>
            <li class="benefits__item">
                <div class="card">
                    <img :src="require('@/assets/png-elements/figure-2.png')" alt="" class="card__image">
                    <h3 class="card__title typography__h3_medium">Goal setting and tracking</h3>
                    <p class="card__text typography__body_medium">Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.</p>
                </div>
            </li>   
        </ul>
    </section>
</template>

<script>
export default {
    name: 'BenefitsComponent'
}
</script>

<style lang="scss" src="@/styles/BenefitsComponent.scss"></style>
<style lang="scss" src="@/styles/card.scss"></style>