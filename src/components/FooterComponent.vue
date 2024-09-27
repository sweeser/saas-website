<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="logo">
                <img :src="require('@/assets/svg-elements/logosaas.svg')" alt="SaaS Website logotype" class="logo__image">
            </div>
            <p class="footer__description typography__body_s">Effortlessly turn your ideas into a fully functional, responsive, no-code SaaS website.</p>
            <ul class="footer__social">
                <li class="footer__social-item">
                    <a href="#" class="footer__social-link footer__social-link_type_x"><img :src="require('@/assets/svg-elements/x-logo.svg')" alt=""></a>
                </li>
                <li class="footer__social-item">
                    <a href="#" class="footer__social-link footer__social-link_type_inst"><img :src="require('@/assets/svg-elements/inst-logo.svg')" alt=""></a>
                </li>
                <li class="footer__social-item">
                    <a href="#" class="footer__social-link footer__social-link_type_pinterest"><img :src="require('@/assets/svg-elements/pinterest-logo.svg')" alt=""></a>
                </li>
                <li class="footer__social-item">
                    <a href="#" class="footer__social-link footer__social-link_type_linkedin"><img :src="require('@/assets/svg-elements/linkedin-logo.svg')" alt=""></a>
                </li>
                <li class="footer__social-item">
                    <a href="#" class="footer__social-link footer__social-link_type_tiktok"><img :src="require('@/assets/svg-elements/tiktok-logo.svg')" alt=""></a>
                </li>
                <li class="footer__social-item">
                    <a href="#" class="footer__social-link footer__social-link_type_youtube"><img :src="require('@/assets/svg-elements/youtube-logo.svg')" alt=""></a>
                </li>
            </ul>
        </div>
        <nav class="footer__nav">
            <div class="footer__item-links">
                <p class="footer__item-title typography__body_normal typography__body_s">Product</p>
                <ul class="footer__link-list">
                    <li class="footer__link-item"><a class="footer__link typography__body_s" href="#">Features</a></li>
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">Integrations</a></li>
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">Updates</a></li>
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">FAQ</a></li>
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">Pricing</a></li>
                </ul>
            </div>
            <div class="footer__item-links">
                <p class="footer__item-title typography__body_normal typography__body_s">Company</p>
                <ul class="footer__link-list">
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">About</a></li>
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">Blog</a></li>
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">Careers</a></li>
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">Manifesto</a></li>
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">Press</a></li>
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">Contact</a></li>
                </ul>
            </div>
            <div class="footer__item-links">
                <p class="footer__item-title typography__body_normal typography__body_s">Resources</p>
                <ul class="footer__link-list">
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">Examples</a></li>
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">Community</a></li>
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">Guides</a></li>
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">Docs</a></li>
                </ul>
            </div>
            <div class="footer__item-links">
                <p class="footer__item-title typography__body_normal typography__body_s">Legal</p>
                <ul class="footer__link-list">
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">Privacy</a></li>
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">Terms</a></li>
                    <li class="footer__link-item"><a href="#" class="footer__link typography__body_s">Security</a></li>
                </ul>
            </div>
        </nav>
    </footer>
</template>

<script>
export default {
    name: 'FooterComponent'
};
</script>

<style lang="scss" src="@/styles/FooterComponent.scss"></style>