const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const newChatBtn = document.getElementById('new-chat');

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

newChatBtn.addEventListener('click', () => {
  chatMessages.innerHTML = `
    <div class="message bot-message">
      <div class="avatar">Z</div>
      <div class="content">
        <div class="name">Zeemo</div>
        <div class="text">Hello! What would you like to discuss?</div>
      </div>
    </div>
  `;
});

async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, 'user');
  userInput.value = '';

  const response = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages: [{ role: 'user', content: message }] })
  });

  const data = await response.json();
  addMessage(data.choices[0].message.content, 'bot');
}

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  messageDiv.innerHTML = `
    ${sender === 'bot' ? '<div class="avatar">Z</div>' : ''}
    <div class="content">
      ${sender === 'bot' ? '<div class="name">Zeemo</div>' : ''}
      <div class="text">${text}</div>
    </div>
  `;
  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}