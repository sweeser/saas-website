<template>
    <section class="feedback">
        <div class="tag">
            <p class="tag__text">Testimonials</p>
        </div>
        <div class="feedback__header">
            <h2 class="feedback__title typography__h2">What our users say</h2>
        </div>
        <ul class="feedback__list">
            <li class="feedback__item">
                <ul class="column__list column__list_first">
                    <li class="column__item">
                        <div class="comment">
                            <p class="comment__text typography__body_medium">As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.</p>
                            <div class="comment__person">
                                <img :src="require('@/assets/persons/person-1.jpg')" alt="Photo of Casey Jordan" class="comment__person-image">
                                <div class="comment__person-info">
                                    <p class="comment__person-name typography__body_normal">Alex Rivera</p>
                                    <a href="#" class="comment__person-handle typography__body_medium">@jamietechguru00</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="column__item">
                        <div class="comment">
                            <p class="comment__text typography__body_medium">Our team’s productivity has skyrocketed since we started using this tool.</p>
                            <div class="comment__person">
                                <img :src="require('@/assets/persons/person-2.jpg')" alt="Photo of Taylor Kim" class="comment__person-image">
                                <div class="comment__person-info">
                                    <p class="comment__person-name typography__body_normal">Josh Smith</p>
                                    <a href="#" class="comment__person-handle typography__body_medium">@jjsmith</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="column__item">
                        <div class="comment">
                            <p class="comment__text typography__body_medium">This app has completely transformed how I manage my projects and deadlines.</p>
                            <div class="comment__person">
                                <img :src="require('@/assets/persons/person-3.jpg')" alt="Photo of Riley Smith" class="comment__person-image">
                                <div class="comment__person-info">
                                    <p class="comment__person-name">Morgan Lee</p>
                                    <a href="#" class="comment__person-handle typography__body_medium">@morganleewhiz</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="feedback__item ">
                <ul class="column__list column__list_second">
                    <li class="column__item">
                        <div class="comment">
                            <p class="comment__text typography__body_medium">I was amaized at how quickly we were able to integtate this app into our workflow.</p>
                            <div class="comment__person">
                                <img :src="require('@/assets/persons/person-4.jpg')" alt="Photo of Casey Jordan" class="comment__person-image">
                                <div class="comment__person-info">
                                    <p class="comment__person-name typography__body_normal">Casey Jordan</p>
                                    <a href="#" class="comment__person-handle typography__body_medium">@caseyj</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="column__item">
                        <div class="comment">
                            <p class="comment__text typography__body_medium">Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuringnothing slips throught the cracks.</p>
                            <div class="comment__person">
                                <img :src="require('@/assets/persons/person-5.jpg')" alt="Photo of Taylor Kim" class="comment__person-image">
                                <div class="comment__person-info">
                                    <p class="comment__person-name typography__body_normal">Taylor Kim</p>
                                    <a href="#" class="comment__person-handle typography__body_medium">@taylorkimm</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="column__item">
                        <div class="comment">
                            <p class="comment__text typography__body_medium">The customizability and integration capabilities of this app are top-notch.</p>
                            <div class="comment__person">
                                <img :src="require('@/assets/persons/person-6.jpg')" alt="Photo of Riley Smith" class="comment__person-image">
                                <div class="comment__person-info">
                                    <p class="comment__person-name">Riley Smith</p>
                                    <a href="#" class="comment__person-handle typography__body_medium">@rileysmith1</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
            <li class="feedback__item">
                <ul class="column__list column__list_third">
                    <li class="column__item">
                        <div class="comment">
                            <p class="comment__text typography__body_medium">Adopting this app for our team has streamlined our project management and improved communication across the board.</p>
                            <div class="comment__person">
                                <img :src="require('@/assets/persons/person-7.jpg')" alt="Photo of Casey Jordan" class="comment__person-image">
                                <div class="comment__person-info">
                                    <p class="comment__person-name typography__body_normal">Jordan Patels</p>
                                    <a href="#" class="comment__person-handle typography__body_medium">@jpatelsdesign</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="column__item">
                        <div class="comment">
                            <p class="comment__text typography__body_medium">With this app, we can easily assign tasks, track progress, and manage documents all in one place.</p>
                            <div class="comment__person">
                                <img :src="require('@/assets/persons/person-8.jpg')" alt="Photo of Taylor Kim" class="comment__person-image">
                                <div class="comment__person-info">
                                    <p class="comment__person-name typography__body_normal">Sam Dawson</p>
                                    <a href="#" class="comment__person-handle typography__body_medium">@dawsontechtips</a>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li class="column__item">
                        <div class="comment">
                            <p class="comment__text typography__body_medium">Its user-friendly interface and robust features support our diverse needs.</p>
                            <div class="comment__person">
                                <img :src="require('@/assets/persons/person-9.jpg')" alt="Photo of Riley Smith" class="comment__person-image">
                                <div class="comment__person-info">
                                    <p class="comment__person-name">Casey Harper</p>
                                    <a href="#" class="comment__person-handle typography__body_medium">@casey09</a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'FeedbackComponent'
};
</script>

<style src="@/styles/feedback.css"></style>
<style src="@/styles/comment.css"></style>