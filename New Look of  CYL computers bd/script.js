document.getElementById('menuToggle').addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  });
  
  document.getElementById('closeSidebar').addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active');
  });
  
  document.getElementById('searchToggle').addEventListener('click', () => {
    const searchBar = document.getElementById('searchBar');
    searchBar.style.display = searchBar.style.display === 'flex' ? 'none' : 'flex';
  });
  
  function searchResults() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('results');
  
    const presetResults = [
      { name: "Gaming PC", link: "messenger.com", img: "images/53k.png" },
      { name: "Desktop", link: "#", img: "https://via.placeholder.com/50" },
      { name: "Accessories", link: "#", img: "https://via.placeholder.com/50" },
    ];
  
    results.innerHTML = '';
  
    presetResults
      .filter(item => item.name.toLowerCase().includes(query))
      .forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'result-item';
        resultItem.innerHTML = `
          <img src="${result.img}" alt="${result.name}">
          <p>${result.name}</p>
        `;
        resultItem.onclick = () => window.location.href = result.link; // Navigate on click
        results.appendChild(resultItem);
      });
  }

const text = [
    "Welcome to CYL COMPUTERS BD",
    "Your trusted tech partner",
    "Best deals on computers",
    "Visit us today!",
    "Always here for you – 24/7 customer support, anytime, every time."
];

const scrollTextElement = document.querySelector('.scroll-text');
let textIndex = 0;

function updateText() {
    scrollTextElement.textContent = text[textIndex];
    textIndex = (textIndex + 1) % text.length;
}

setInterval(updateText, 4000);

updateText();

// Image slider
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;
const links = [
    "welcome_page.html",
    "discount.html",
    "contact.html"
];

let index = 0;

function changeSlide() {
    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function openLink() {
    if (links[index]) {
        window.open(links[index], '_blank');
    }
}

slides.addEventListener('click', openLink);

setInterval(changeSlide, 5000);
