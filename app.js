document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  // Groq SDK Configuration
  const apiKey = localStorage.getItem('groq_api_key');
  const groq = new Groq({
    apiKey: apiKey || 'YOUR_GROQ_API_KEY', // Replace with your actual API key
  });

  // Mock Data
  const mockData = {
    agents: [
      { id: 1, name: 'Email Assistant', status: 'Idle', skills: ['writing', 'editing'] },
      { id: 2, name: 'Blog Writer', status: 'In Progress', skills: ['writing', 'research'] },
      { id: 3, name: 'Code Generator', status: 'Idle', skills: ['coding', 'debugging'] },
    ],
    tasks: [
      { id: 1, agentId: 2, name: 'Draft blog post about AI', status: 'In Progress' },
      { id: 2, agentId: 1, name: 'Follow up with client', status: 'Success' },
      { id: 3, agentId: 3, name: 'Fix bug in login page', status: 'Failed' },
    ],
  };

  // API Simulation
  const api = {
    getAgents: () => new Promise(resolve => setTimeout(() => resolve(mockData.agents), 500)),
    getTasks: () => new Promise(resolve => setTimeout(() => resolve(mockData.tasks), 500)),
  };

  // App Shell
  const header = document.createElement('header');
  const title = document.createElement('h1');
  title.textContent = 'Agent Space';
  header.appendChild(title);
  const settingsButton = new Button('Settings', 'secondary');
  const settingsButtonElement = settingsButton.render();
  header.appendChild(settingsButtonElement);
  app.appendChild(header);

  const settingsPanel = document.getElementById('settings');
  settingsButtonElement.addEventListener('click', () => {
    settingsPanel.style.display = settingsPanel.style.display === 'none' ? 'block' : 'none';
  });

  const apiKeyInput = document.getElementById('api-key');
  const saveApiKeyButton = document.getElementById('save-api-key');

  saveApiKeyButton.addEventListener('click', () => {
    const apiKey = apiKeyInput.value;
    if (apiKey) {
      localStorage.setItem('groq_api_key', apiKey);
      alert('API key saved!');
      settingsPanel.style.display = 'none';
      // Re-initialize Groq with the new key
      groq.apiKey = apiKey;
    }
  });

  const main = document.createElement('main');
  app.appendChild(main);

  // AGENTA Section
  const agentaSection = document.createElement('section');
  const agentaCard = new Card('AGENTA', `
    <div id="agenta-chat-window" class="chat-window">
      <div id="agenta-messages" class="messages"></div>
      <div class="input-area">
        <input type="text" id="agenta-input" placeholder="Ask AGENTA anything...">
        <button id="agenta-send-btn" class="btn btn-primary">Send</button>
      </div>
    </div>
  `);
  const agentaCardElement = agentaCard.render();
  agentaSection.appendChild(agentaCardElement);
  main.appendChild(agentaSection);

  const agentaMessages = document.getElementById('agenta-messages');
  const agentaInput = document.getElementById('agenta-input');
  const agentaSendBtn = document.getElementById('agenta-send-btn');

  agentaSendBtn.addEventListener('click', async () => {
    const message = agentaInput.value;
    if (!message) return;

    appendMessage('User', message);
    agentaInput.value = '';

    try {
      const response = await groq.chat.completions.create({
        messages: [{ role: 'user', content: message }],
        model: 'mixtral-8x7b-32768',
      });

      const aiMessage = response.choices[0]?.message?.content;
      if (aiMessage) {
        appendMessage('AGENTA', aiMessage);
        if (aiMessage.toLowerCase().includes('create an agent')) {
          showCreateAgentForm();
        }
      }
    } catch (error) {
      console.error('Error communicating with Groq API:', error);
      appendMessage('AGENTA', 'Sorry, I am having trouble connecting to the AI. Please try again later.');
    }
  });

  function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
    agentaMessages.appendChild(messageElement);
    agentaMessages.scrollTop = agentaMessages.scrollHeight;
  }

  function showCreateAgentForm() {
    const form = document.createElement('form');
    form.innerHTML = `
      <h3>Create a New Agent</h3>
      <input type="text" id="agent-name" placeholder="Agent Name" required>
      <input type="text" id="agent-skills" placeholder="Skills (comma-separated)" required>
      <button type="submit" class="btn btn-primary">Create Agent</button>
    `;
    agentaMessages.appendChild(form);

    form.addEventListener('submit', event => {
      event.preventDefault();
      const name = document.getElementById('agent-name').value;
      const skills = document.getElementById('agent-skills').value.split(',').map(s => s.trim());

      const newAgent = {
        id: mockData.agents.length + 1,
        name,
        skills,
        status: 'Idle',
      };

      mockData.agents.push(newAgent);
      renderAgents();
      form.remove();
    });
  }

  // Worker Agents Section
  const workerAgentsSection = document.createElement('section');
  const workerAgentsTitle = document.createElement('h2');
  workerAgentsTitle.textContent = 'Worker Agents';
  workerAgentsSection.appendChild(workerAgentsTitle);
  const agentGrid = document.createElement('div');
  agentGrid.classList.add('agent-grid');
  workerAgentsSection.appendChild(agentGrid);
  main.appendChild(workerAgentsSection);

  // Task Feed Section
  const taskFeedSection = document.createElement('section');
  const taskFeedTitle = document.createElement('h2');
  taskFeedTitle.textContent = 'Task Feed';
  taskFeedSection.appendChild(taskFeedTitle);
  main.appendChild(taskFeedSection);

  // Render Agents
  function renderAgents() {
    api.getAgents().then(agents => {
      agentGrid.innerHTML = '';
      agents.forEach(agent => {
        const agentCard = new Card(agent.name, `<p>Skills: ${agent.skills.join(', ')}</p>`);
        const agentCardElement = agentCard.render();
        const statusTag = new StatusTag(agent.status, agent.status.toLowerCase().replace(' ', '-'));
        agentCardElement.appendChild(statusTag.render());
        agentGrid.appendChild(agentCardElement);
      });
    });
  }
  renderAgents();

  // Render Tasks
  api.getTasks().then(tasks => {
    taskFeedSection.innerHTML = '';
    tasks.forEach(task => {
      const taskCard = new Card(task.name, '');
      const taskCardElement = taskCard.render();
      const statusTag = new StatusTag(task.status, task.status.toLowerCase().replace(' ', '-'));
      taskCardElement.appendChild(statusTag.render());
      taskFeedSection.appendChild(taskCardElement);
    });
  });
});
