const headerTag = document.querySelector('header');

//when page is scrolled down 80px - toggle a class on the header

document.addEventListener('scroll', () => {
  const pixels = window.pageYOffset;

  if (pixels > 80) {
    headerTag.classList.add('scrolled');
  } else {
    headerTag.classList.remove('scrolled');
  }
});
