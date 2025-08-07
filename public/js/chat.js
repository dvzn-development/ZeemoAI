document.addEventListener('DOMContentLoaded', () => {
  const chat = {
    messages: document.getElementById('chat-messages'),
    input: document.getElementById('user-input'),
    sendBtn: document.getElementById('send-btn'),
    apiUrl: '/api/chat',
    
    init() {
      this.sendBtn.addEventListener('click', () => this.sendMessage());
      this.input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') this.sendMessage();
      });
    },

    async sendMessage() {
      const text = this.input.value.trim();
      if (!text) return;
      
      this.addMessage(text, 'user');
      this.input.value = '';
      
      try {
        const response = await fetch(this.apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: [{ role: 'user', content: text }] })
        });
        const data = await response.json();
        this.addMessage(data.choices[0].message.content, 'bot');
      } catch (error) {
        this.addMessage("Connection error", 'bot');
      }
    },

    addMessage(text, sender) {
      const msgDiv = document.createElement('div');
      msgDiv.className = `message ${sender}-message`;
      msgDiv.innerHTML = sender === 'bot' 
        ? `<div class="avatar">Z</div>
           <div class="content">
             <div class="name">Zeemo</div>
             <div class="text">${text}</div>
           </div>`
        : `<div class="content">
             <div class="text">${text}</div>
           </div>`;
      this.messages.appendChild(msgDiv);
      this.messages.scrollTop = this.messages.scrollHeight;
    }
  };
  
  chat.init();
});