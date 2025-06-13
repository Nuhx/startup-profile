// === THEME TOGGLE ===
const toggleBtn = document.createElement('button');
toggleBtn.innerText = 'Toggle Theme';
toggleBtn.classList.add('theme-toggle-btn');
document.querySelector('.header').appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// === PRODUCT COUNTERS ===
function createCounter(productDiv) {
    const counterDiv = document.createElement('div');
    counterDiv.classList.add('counter');

    let count = 0;
    const minusBtn = document.createElement('button');
    minusBtn.innerText = '-';
    const countSpan = document.createElement('span');
    countSpan.innerText = count;
    const plusBtn = document.createElement('button');
    plusBtn.innerText = '+';

    minusBtn.addEventListener('click', () => {
        if (count > 0) count--;
        countSpan.innerText = count;
    });

    plusBtn.addEventListener('click', () => {
        count++;
        countSpan.innerText = count;
    });

    counterDiv.appendChild(minusBtn);
    counterDiv.appendChild(countSpan);
    counterDiv.appendChild(plusBtn);

    productDiv.appendChild(counterDiv);
}

['.product1', '.product2', '.product3'].forEach(selector => {
    const product = document.querySelector(selector);
    if (product) createCounter(product);
});
