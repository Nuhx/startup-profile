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


/*chatbot*/


const systemPrompt = `
You are a friendly assistant for Utopia Hair Lab, a hair salon based in Summit, Addis Ababa.
Your job is to answer questions about services, products, hours, and team members.
Founder: Nuhamin Wendwossen
Popular services: hair treatment, bridal styling, workshops.
We sell products like hair brushes and dryers.
Open Mon–Sat 8AM–9PM, Sun 9AM–6PM.
Phone: +251-91-234-5678
`;


async function sendMessageToBot(message) {
  const chatBox = document.getElementById('chat-messages');
  if (!message.trim()) {
    chatBox.innerHTML += `<div class="bot-msg">Please enter a question.</div>`;
    return;
  }

  chatBox.innerHTML += `<div class="user-msg">${message}</div>`;

  try {
    const res = await puter.ai.chat({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message }
      ]
    });

    const reply = res.choices[0].message.content;
    chatBox.innerHTML += `<div class="bot-msg">${reply}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  } catch (err) {
    chatBox.innerHTML += `<div class="bot-msg">Something went wrong. Try again later.</div>`;
  }
}


document.getElementById('send-btn').addEventListener('click', () => {
  const input = document.getElementById('chat-input');
  sendMessageToBot(input.value);
  input.value = '';
});


document.querySelectorAll('.sample-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    sendMessageToBot(btn.textContent);
  });
});
