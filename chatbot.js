const API_URL = 'https://ai-business-chatbot.onrender.com/chat';

async function sendMessage() {
  const inputEl = document.getElementById('userInput');
  const message = inputEl.value.trim();
  const chat = document.getElementById('chat');

  if (!message) return;
  inputEl.value = '';

  // Display user message
  chat.innerHTML += `<p class="user"><strong>You:</strong> ${message}</p>`;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });

    if (!response.ok) throw new Error('API response not OK');

    const data = await response.json();
    chat.innerHTML += `<p class="bot"><strong>Bot:</strong> ${data.reply}</p>`;
  } catch (err) {
    console.error('Chatbot connection error:', err);
    chat.innerHTML += `<p class="bot"><strong>Bot:</strong> Error: Unable to connect to chatbot server.</p>`;
  }

  chat.scrollTop = chat.scrollHeight;
}