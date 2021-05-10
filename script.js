const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

const steps = document.querySelectorAll('.step');
const blueBar = document.querySelector('.bar--blue');
let progress = 1;
// Click next button to next 1 step
function changeProgressBar(modify) {
  let totalBar = document.querySelector('.bar').style.width;
  blueBar.style.width = `${modify * 150}px`;
}

function addActive() {
  steps.forEach((step) => {
    // Add active state to number
    if (step.id == progress) {
      step.classList.add('active');
    }
  });
}

function removeActive() {
  steps.forEach((step) => {
    if (step.id == progress) {
      step.classList.remove('active');
    }
  });
}

nextButton.addEventListener('click', () => {
  progress++;
  // Second progress paint blue

  // Check if progress == 2 => pre will available
  if (progress == 2) {
    prevButton.disabled = false;
  }

  // If progress == 4 => next will be disabled
  if (progress == 4) {
    nextButton.disabled = true;
  }
  changeProgressBar(progress - 1);
  addActive();
  console.log(progress);
});

prevButton.addEventListener('click', () => {
  if (progress == 2) {
    prevButton.disabled = true;
    nextButton.disabled = false;
  }

  removeActive();

  progress--;
  changeProgressBar(progress - 1);
  console.log(progress);
});
