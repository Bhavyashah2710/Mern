document.addEventListener('DOMContentLoaded', () => {
  // Sidebar Toggle Functionality
  const toggleBtn = document.getElementById('sidebar-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('sidebar-collapsed');
    });
  }

  // Chat Form Message Handling
  const chatForm = document.getElementById('chat-form');
  const chatInput = document.getElementById('chat-input');
  const chatBox = document.getElementById('chat-box');

  if (chatForm) {
    chatForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const messageText = chatInput.value.trim();

      if (messageText !== '') {
        const now = new Date();
        const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

        const msgHTML = `
          <div class="chat-msg">
            <div class="chat-msg-meta right">
              <span class="name">Sarah Bullock</span>
              <span class="time">${timeStr}</span>
            </div>
            <div class="chat-msg-body right">
              <img src="https://adminlte.io/themes/v4/assets/img/user3-128x128.jpg" alt="User">
              <div class="chat-bubble right">${escapeHTML(messageText)}</div>
            </div>
          </div>
        `;

        chatBox.insertAdjacentHTML('beforeend', msgHTML);
        chatInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
      }
    });
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }
});
