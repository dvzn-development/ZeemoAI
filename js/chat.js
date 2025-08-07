const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const newChatBtn = document.getElementById('new-chat');

const API_URL = 'https://chat.dvzn.lol/api/chat';

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});

newChatBtn.addEventListener('click', startNewChat);

async function sendMessage() {
  const message = userInput.value.trim();
  if (!message) return;

  addMessage(message, 'user');
  userInput.value = '';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        messages: [{ 
          role: 'user', 
          content: message 
        }] 
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    addMessage(data.choices[0].message.content, 'bot');
  } catch (error) {
    console.error('API Error:', error);
    addMessage("Sorry, I'm having trouble connecting to the AI service. Please try again later.", 'bot');
  }
}

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${sender}-message`;
  
  if (sender === 'bot') {
    messageDiv.innerHTML = `
      <div class="avatar">Z</div>
      <div class="message-content">
        <div class="bot-name">Zeemo</div>
        <div class="text">${text}</div>
      </div>
    `;
  } else {
    messageDiv.innerHTML = `
      <div class="message-content">
        <div class="text">${text}</div>
      </div>
    `;
  }

  chatMessages.appendChild(messageDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function startNewChat() {
  chatMessages.innerHTML = `
    <div class="message bot-message">
      <div class="avatar">Z</div>
      <div class="message-content">
        <div class="bot-name">Zeemo</div>
        <div class="text">Hello! I'm Zeemo, your AI assistant. What would you like to discuss?</div>
      </div>
    </div>
  `;
}

function showTypingIndicator() {
  const typingDiv = document.createElement('div');
  typingDiv.className = 'message bot-message';
  typingDiv.id = 'typing-indicator';
  typingDiv.innerHTML = `
    <div class="avatar">Z</div>
    <div class="message-content">
      <div class="bot-name">Zeemo</div>
      <div class="typing-indicator">
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
      </div>
    </div>
  `;
  chatMessages.appendChild(typingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

function hideTypingIndicator() {
  const typingIndicator = document.getElementById('typing-indicator');
  if (typingIndicator) typingIndicator.remove();
}
