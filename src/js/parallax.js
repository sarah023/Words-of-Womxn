const sections = document.querySelectorAll('section');
const bodyTag = document.querySelector('body');

const addMovement = () => {
  //find the top of where we're scrolling.
  const topViewport = window.pageYOffset;
  //finds the middle of what we can currently see.
  //window.innerHeight - finds the height of the browser window,
  //divide it by 2 to find the middle.
  const midViewport = topViewport + window.innerHeight / 2;

  //find the middle of each section
  sections.forEach((section, index) => {
    //find the top of each section
    const topSection = section.offsetTop;
    //find the middle of each section.
    //section.offsetHeight - finds the height of the section,
    //divide it by 2 to find the middle.
    const midSection = topSection + section.offsetHeight / 2;
    //find how far away is the section from the visible area of the stage
    const distanceToSection = midViewport - midSection;
    //pick the tags to parallax
    const image = section.querySelector('img');
    const contentTag = section.querySelector('div');
    //weight down the distance to make the parallax effect more subtle
    let rotation = distanceToSection / 100;
    let contentDistance = (-1 * distanceToSection) / 2;
    //weight down the distance depending on the index (odd or even),
    //for even sections, rotate the opposite way.
    //use modolu operator to find the remainder.
    if (index % 2 == 1) {
      rotation = rotation * -1;
    }

    //apply parallax effects
    image.style.transform = `rotate(${rotation}deg)`;
    contentTag.style.top = `${contentDistance}px`;
    contentTag.style.transform = `rotate(${-1 * rotation}deg)`;

    //change the background if we've passed the middle of certain sections
    if (distanceToSection > 0) {
      //grab the attribute tag from the HTML
      const dataBackground = section.getAttribute('data-background');
      //apply the new background color
      bodyTag.style.backgroundColor = dataBackground;
    }
  });
};

//run on page load
addMovement();

//run on scroll
document.addEventListener('scroll', () => {
  addMovement();
});

//run on browser resize
window.addEventListener('resize', () => {
  addMovement();
});
