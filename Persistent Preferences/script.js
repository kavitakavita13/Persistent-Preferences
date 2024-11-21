document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('list-container');
    const themeSelect = document.getElementById('theme');
    const listStyleSelect = document.getElementById('listStyle');
  
    // Array of items to populate the list
    const items = ['daisy', 'Azalea', 'Iris', 'Dahlia', 'Heather'];
  
    // Populate the list dynamically
    items.forEach(item => {
      const listItem = document.createElement('div');
      listItem.textContent = item;
      listContainer.appendChild(listItem);
    });
  
    // Load preferences from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedListStyle = localStorage.getItem('listStyle') || 'expanded';
    document.body.className = savedTheme; // Set the theme
    listContainer.className = savedListStyle; // Set the list style
    themeSelect.value = savedTheme;
    listStyleSelect.value = savedListStyle;
  
    // Event Listener for theme change
    themeSelect.addEventListener('change', (e) => {
      const theme = e.target.value;
      document.body.className = theme; // Update the body's class for the theme
      localStorage.setItem('theme', theme); // Save the theme to localStorage
    });
  
    // Event Listener for list style change
    listStyleSelect.addEventListener('change', (e) => {
      const style = e.target.value;
      listContainer.className = style; // Update the list container's class for style
      localStorage.setItem('listStyle', style); // Save the list style to localStorage
    });
  });