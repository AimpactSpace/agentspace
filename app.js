document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

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
  app.appendChild(header);

  const main = document.createElement('main');
  app.appendChild(main);

  // AGENTA Section
  const agentaSection = document.createElement('section');
  const agentaCard = new Card('AGENTA', '<p>Your personal AI assistant for managing agents.</p>');
  const agentaCardElement = agentaCard.render();
  const askAIButton = new Button('Ask AGENTA', 'primary');
  agentaCardElement.appendChild(askAIButton.render());
  agentaSection.appendChild(agentaCardElement);
  main.appendChild(agentaSection);

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
