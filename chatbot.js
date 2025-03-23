function sendMessage() {
  const input = document.getElementById('userInput');
  const chat = document.getElementById('chat');
  const userMessage = input.value.trim();
  if (!userMessage) return;

  // Display user message
  const userBubble = document.createElement('p');
  userBubble.innerHTML = `<strong>You:</strong> ${userMessage}`;
  chat.appendChild(userBubble);
  input.value = '';

  // Simulate bot typing delay
  setTimeout(() => {
    const botReply = generateSimulatedResponse(userMessage);
    const botBubble = document.createElement('p');
    botBubble.innerHTML = `<strong>Bot:</strong> ${botReply}`;
    chat.appendChild(botBubble);
    chat.scrollTop = chat.scrollHeight;
  }, 700);
}

// Optional: Simulate simple dynamic replies
function generateSimulatedResponse(message) {
  message = message.toLowerCase();
  if (message.includes('hello') || message.includes('hi')) {
    return "Hi there! How can I assist you today?";
  } else if (message.includes('price')) {
    return "Our pricing depends on your needs. Let me know what you're interested in!";
  } else if (message.includes('support')) {
    return "You can reach our support team at support@example.com.";
  } else {
    return "That's interesting! Tell me more.";
  }
}