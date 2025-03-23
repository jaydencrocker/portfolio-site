const API_URL = 'https://ai-business-chatbot.onrender.com/chat'; // your live Render backend

async function sendMessage() {
  const userInput = document.getElementById('userInput').value.trim();
  if (!userInput) return;

  const chat = document.getElementById('chat');
  document.getElementById('userInput').value = '';

  chat.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userInput })
    });

    if (!response.ok) throw new Error('Server error');

    const data = await response.json();
    chat.innerHTML += `<p><strong>Bot:</strong> ${data.reply}</p>`;
  } catch (err) {
    console.error(err);
    chat.innerHTML += `<p><strong>Bot:</strong> Error: Unable to connect to chatbot server.</p>`;
  }
}