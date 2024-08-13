document.addEventListener('DOMContentLoaded', () => {
    const template = document.getElementById('price-template');
    const container = document.querySelector('.price__list');

    function addPriceBlock(title, tag, cost, linkText, features) {
        const clone = template.content.cloneNode(true);
        clone.querySelector('.price__item-title').textContent = title;

        if (tag) {
            const tagElement = clone.querySelector('.price__item-tag');
            tagElement.textContent = tag;
            tagElement.style.display = 'block';
        }
        clone.querySelector('.price__item-cost').textContent = cost;
        clone.querySelector('.price__item-link').textContent = linkText;

        const featuresList = clone.querySelector('.price__item-features');
        features.forEach(feature => {
            const featureItem = document.createElement('li');
            featureItem.classList.add('price__feature');

            const featureIcon = document.createElement('img');
            featureIcon.src = './images/tick-black.svg';
            featureIcon.alt = 'Icon for ' + feature;
            featureIcon.classList.add('price__feature-icon');

            const featureLink = document.createElement('a');
            featureLink.href = '#';
            featureLink.textContent = feature;
            featureLink.classList.add('price__feature-link');

            featureItem.appendChild(featureIcon);
            featureItem.appendChild(featureLink);
            featuresList.appendChild(featureItem);
        });

        container.appendChild(clone);
    }

    addPriceBlock('Individual', 'New!', '$10 /monthly', 'Sign up now', [
        'Up to 10 project members',
        'Unlimited tasks and projects',
        '20GB storage',
        'Integrations',
        'Basic support'
    ]);
    addPriceBlock('Individual+', '', '$13 /monthly', 'Sign up now', [
        'Up to 15 project members',
        'Unlimited tasks and projects',
        '40GB storage',
        'Integrations',
        'Professioanl support'
    ]);
});