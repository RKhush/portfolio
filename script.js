const details = document.querySelectorAll(".details");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.3 });

details.forEach(detail => {
  observer.observe(detail);
});

// Skills carousel
const track = document.querySelector('.carousel-track');
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(d => d.classList.remove('active'));
    dot.classList.add('active');
  });
});

//const form = document.querySelector('form');
//const statusMessage = document.getElementById('form-status');

// form.addEventListener('submit', function(event) {
//   event.preventDefault();
//   statusMessage.textContent = 'Submitting...';
//   // Handle form submission here
//   // On success:
//   statusMessage.textContent = 'Thank you for your submission!';
//   form.reset();
//   // On error:
//   statusMessage.textContent = 'There was an error. Please try again.';
// });
function submitForm(event) {
  event.preventDefault(); // Stop page reload

  const form = document.getElementById('contactForm');
  const statusMessage = document.getElementById('statusMessage');

  statusMessage.textContent = 'Submitting...'; // Show submitting status

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      statusMessage.textContent = 'Thank you for your submission!';
      form.reset(); // Clear form fields
    } else {
      response.json().then(data => {
        if (data.errors) {
          statusMessage.textContent = data.errors.map(error => error.message).join(", ");
        } else {
          statusMessage.textContent = 'There was an error. Please try again.';
        }
      });
    }
  })
  .catch(error => {
    statusMessage.textContent = 'There was an error. Please try again.';
    console.error(error);
  });
}


