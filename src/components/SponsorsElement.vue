<template>
    <section class="sponsors">
            <ul class="sponsors__list">
                <li class="sponsors__item">
                    <img :src="require('@/assets/svg-elements/acme-name.svg')" alt="Sponsor Acme" class="sponsors__item-image">
                </li>
                <li class="sponsors__item">
                    <img :src="require('@/assets/svg-elements/quantum-name.svg')" alt="Sponsor Quantum" class="sponsors__item-image">
                </li>
                <li class="sponsors__item">
                    <img :src="require('@/assets/svg-elements/echo-name.svg')" alt="Sponsor Echo" class="sponsors__item-image">
                </li>
                <li class="sponsors__item">
                    <img :src="require('@/assets/svg-elements/celestia-name.svg')" alt="Sponsor Celectial" class="sponsors__item-image">
                </li>
                <li class="sponsors__item">
                    <img :src="require('@/assets/svg-elements/pulse-name.svg')" alt="Sponsor Pulse" class="sponsors__item-image">
                </li>
                <li class="sponsors__item">
                    <img :src="require('@/assets/svg-elements/apex-name.svg')" alt="Sponsor Apex" class="sponsors__item-image">
                </li>
            </ul>
    </section>
</template>

<script>
export default {
    name: 'SponsorsElement'
};
</script>

<style lang="scss" src="@/styles/SponsorsComponent.scss"></style>