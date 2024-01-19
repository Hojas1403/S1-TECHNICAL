let isColored = false;

function toggleColor() {
  const resume = document.getElementById('resume');
  const textElements = document.querySelectorAll('#resume h1, #resume p, #resume ul li, #resume h2, #resume h4');
  const bgColor = '#007BFF'; 

  if (isColored) {
    
    resume.style.backgroundColor = '#fff';
    textElements.forEach(element => {
      element.style.color = '#333'; 
    });
  } else {
    resume.style.backgroundColor = bgColor;
    textElements.forEach(element => {
      element.style.color = '#fff'; 
    });
  }

  isColored = !isColored;
}