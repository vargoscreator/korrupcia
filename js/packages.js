document.querySelectorAll('.packages__content ol[start]').forEach(ol => {
  const start = parseInt(ol.getAttribute('start'), 10);
  ol.style.counterReset = `item ${start - 1}`;
});

const buttons = document.querySelectorAll('.packages__top-btn');
const titles = document.querySelectorAll('.packages__top-selected .title');
const resultsItems = document.querySelectorAll('.packages__results-item');
const contentResults = document.querySelectorAll('.packages__content-result');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedResult = button.getAttribute('data-packages');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    titles.forEach(title => {
        title.classList.remove('active');
        if (title.getAttribute('data-result') === selectedResult) {
            title.classList.add('active');
        }
    });
    resultsItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('data-result') === selectedResult) {
            item.classList.add('active');
        }
    });
    contentResults.forEach(content => {
        content.classList.remove('active');
        if (content.getAttribute('data-result') === selectedResult) {
            content.classList.add('active');
        }
    });
  });
});
