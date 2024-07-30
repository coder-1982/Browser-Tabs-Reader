document.addEventListener('DOMContentLoaded', () => {
    chrome.tabs.query({}, (tabs) => {
        const tabList = document.getElementById('tabList');
        tabs.forEach(tab => {
            const listItem = document.createElement('li');
            listItem.className = 'tab-item';
            listItem.setAttribute('data-id', tab.id);
            listItem.innerHTML = `
          <span class="tab-title">${tab.title}</span>
          <a href="${tab.url}" target="_blank" class="tab-link">Open</a>
          <button class="close-button" data-id="${tab.id}">Close</button>
        `;
            tabList.appendChild(listItem);
        });
        addCloseButtonListeners();
    });
});

function addCloseButtonListeners() {
    const closeButtons = document.querySelectorAll('.close-button');
    closeButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const tabId = parseInt(event.target.getAttribute('data-id'), 10);
            closeTab(tabId);
        });
    });
}

function closeTab(tabId) {
    chrome.tabs.remove(tabId, () => {
        const tabItem = document.querySelector(`.tab-item[data-id='${tabId}']`);
        if (tabItem) {
            tabItem.remove();
        }
    });
}