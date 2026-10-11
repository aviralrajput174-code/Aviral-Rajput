const buttons = document.querySelectorAll('.category-btn');
const articles = document.querySelectorAll('.article');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    articles.forEach(article => {
      if (category === 'all' || article.getAttribute('data-category') === category) {
        article.style.display = 'block';
      } else {
        article.style.display = 'none';
      }
    });
  });
});

