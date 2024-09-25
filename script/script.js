document.addEventListener('DOMContentLoaded', () => {
    const template = document.getElementById('price-template');
    const container = document.querySelector('.price__list');

    function createFeatureItem(iconSrc, featureText) {
        const featureItem = document.createElement('li');
        featureItem.classList.add('price__feature');

        const featureIcon = document.createElement('img');
        featureIcon.src = iconSrc;
        featureIcon.classList.add('price__feature-icon');

        const featureLink = document.createElement('a');
        featureLink.href = '#';
        featureLink.textContent = featureText;
        featureLink.classList.add('price__feature-link');

        featureItem.appendChild(featureIcon);
        featureItem.appendChild(featureLink);

        return featureItem;
    }

    function createPriceBlock(title, tag, cost, linkText, features) {
        const clone = template.content.cloneNode(true);

        const titleElement = clone.querySelector('.price__item-title');
        const tagElement = clone.querySelector('.price__item-tag');
        const costElement = clone.querySelector('.price__item-cost');
        const linkElement = clone.querySelector('.price__item-link');
        const featuresList = clone.querySelector('.price__item-features');

        titleElement.textContent = title;
        costElement.textContent = cost;
        linkElement.textContent = linkText;

        if (tag) {
            tagElement.textContent = tag;
        } else {
            tagElement.remove();
        }

        features.forEach(feature => {
            const featureItem = createFeatureItem('./images/tick-black.svg', feature);
            featuresList.appendChild(featureItem);
        });

        container.appendChild(clone);
    }

    // createPriceBlock('Individual', 'New!', '$10 /monthly', 'Sign up now', [
    //     'Up to 10 project members',
    //     'Unlimited tasks and projects',
    //     '20GB storage',
    //     'Integrations',
    //     'Basic support'
    // ]);
    // createPriceBlock('Individual+', '', '$13 /monthly', 'Sign up now', [
    //     'Up to 15 project members',
    //     'Unlimited tasks and projects',
    //     '40GB storage',
    //     'Integrations',
    //     'Professioanl support'
    // ]);
});