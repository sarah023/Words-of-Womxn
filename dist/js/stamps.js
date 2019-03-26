let number = 0;
const stamps = [
  './images/circles.svg',
  './images/heart.svg',
  './images/moon.svg',
  './images/shooting-star.svg',
  './images/waves.svg',
  './images/rainbow.svg'
];

const stampsTag = document.querySelector('div.stamps');

const addStamp = (x, y) => {
  //basically adds <img src='....svg'> into the HTML.
  const img = document.createElement('img');
  //sets the attribute of 'src' to one of our array images.
  img.setAttribute('src', stamps[number]);

  //sets a position for the stamps
  //remove half the window width so it centers - css being difficult
  //can leave as img.style.left = x + 'px'
  img.style.left = x - window.innerWidth / 2 + 'px';
  img.style.top = y + 'px';
  //adds img tag to stampsTag
  stampsTag.appendChild(img);

  //add audio
  const audio = document.createElement('audio');
  audio.setAttribute('src', 'plop.mp3');
  audio.play();

  //adds 1 to the let number to pick the next image in the array
  number = number + 1;
  //loops back to the start
  if (number > stamps.length - 1) {
    number = 0;
  }
};

//adds stamps when the user clicks
document.addEventListener('click', event => {
  addStamp(event.pageX, event.pageY);
});
