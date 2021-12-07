const blogSub = document.querySelector('.blog__subscription');
const blogLink = document.querySelector('.blog__link');

blogSub.addEventListener('mouseenter', function () {
    blogLink.classList.add('blog__link_theme_white');
});

blogSub.addEventListener('mouseleave', function () {
    blogLink.classList.remove('blog__link_theme_white');
});