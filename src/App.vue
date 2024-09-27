<template>
  <div id="App">
    <HeaderComponent />
    <MainComponent>
      <ProductivityComponent />
      <SponsorsElement />
      <ProductComponent />
      <BenefitsComponent />
      <PriceComponent />
      <FeedbackComponent />
      <SignComponent />
    </MainComponent>
    <FooterComponent />
  </div>
</template>

<script>
import BenefitsComponent from './components/BenefitsComponent.vue';
import FeedbackComponent from './components/FeedbackComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import PriceComponent from './components/PriceComponent.vue';
import ProductComponent from './components/ProductComponent.vue';
import ProductivityComponent from './components/ProductivityComponent.vue';
import SignComponent from './components/SignComponent.vue';
import SponsorsElement from './components/SponsorsElement.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent,
    ProductivityComponent,
    SponsorsElement,
    ProductComponent,
    BenefitsComponent,
    PriceComponent,
    FeedbackComponent,
    SignComponent,
    FooterComponent
  }
}
</script>

<style lang="scss" src="@/styles/typography.scss"></style>
<style lang="scss" src="@/styles/Reset.scss"></style>
<style src="@/styles/button.css"></style>
<style lang="scss" src="@/styles/tag.scss"></style>