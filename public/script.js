const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const suggestionButtons = document.querySelectorAll('.suggestion-btn');

// Auto-resize textarea
userInput.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
});

// Send message function
async function sendMessage() {
    const message = userInput.value.trim();
    if (!message) return;

    // Add user message to chat
    addMessage(message, 'user');
    userInput.value = '';
    userInput.style.height = 'auto';

    // Show typing indicator
    const typingIndicator = showTypingIndicator();

    // Send to backend
    try {
        const response = await fetch('/api/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message })
        });

        const data = await response.json();
        
        // Remove typing indicator
        typingIndicator.remove();
        
        // Add bot response
        addMessage(data.response, 'bot');
        
    } catch (error) {
        typingIndicator.remove();
        addMessage('Sorry, I encountered an error. Please try again.', 'bot');
    }
}

// Add message to chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = `avatar ${sender}-avatar`;
    avatar.textContent = sender === 'user' ? '👤' : '🤖';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const header = document.createElement('div');
    header.className = 'message-header';
    header.innerHTML = `
        <strong>${sender === 'user' ? 'You' : 'AssistBot'}</strong>
        <span class="timestamp">${new Date().toLocaleTimeString()}</span>
    `;
    
    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.textContent = text;
    
    contentDiv.appendChild(header);
    contentDiv.appendChild(textDiv);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);
    
    chatMessages.appendChild(messageDiv);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Show typing indicator
function showTypingIndicator() {
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message typing-indicator';
    messageDiv.id = 'typing-indicator';
    
    const avatar = document.createElement('div');
    avatar.className = 'avatar bot-avatar';
    avatar.textContent = '🤖';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    
    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.innerHTML = '<span class="typing-dots"><span>.</span><span>.</span><span>.</span></span>';
    
    contentDiv.appendChild(textDiv);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(contentDiv);
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    return messageDiv;
}

// Event listeners
sendBtn.addEventListener('click', sendMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Suggestion button clicks
suggestionButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const suggestion = btn.textContent;
        userInput.value = suggestion;
        userInput.focus();
        sendMessage();
    });
});

// Initial health check
fetch('/api/health')
    .then(res => res.json())
    .then(data => {
        console.log('AssistBot is online:', data);
    })
    .catch(err => {
        console.error('Could not connect to server:', err);
    });
