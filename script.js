const categories = [ {
    nom: "Bagues",
    image: "bague.jpg",
    produits: [
      { nom: "Bague 1", prix: 25, desc: "Jolie bague en argent.", image: "bague1.jpg", images: ["bague1.jpg", "bague2.jpg"] },
      { nom: "Bague 2", prix: 30, desc: "Bague élégante dorée.", image: "bague2.jpg", images: ["bague3.jpg"] },
      { nom: "Bague 3", prix: 25, desc: "Bague artisanale.", image: "bague3.jpg", images: ["bague1.jpg", "bague2.jpg"] },
      { nom: "Bague 4", prix: 30, desc: "Bague élégante dorée.", image: "bague4.jpg", images: ["bague3.jpg"] }
    ]
  },
  {
    nom: "Boucles d'oreilles",
    image: "boucle d'oreille.jpg",
    produits: [
      { nom: "Boucles d'oreilles 1", prix: 25, desc: "Élégantes boucles dorées.", image: "boucles d'oreilles1.jpg", images: ["img/bague1.jpg", "img/bague2.jpg"] },
      { nom: "Boucles d'oreilles 2", prix: 30, desc: "En forme de cœur.", image: "img/Boucles d'oreilles 2.jpg", images: ["img/bague3.jpg"] },
      { nom: "Boucles d'oreilles 3", prix: 25, desc: "Créoles argentées.", image: "img/Boucles d'oreilles 3.jpg", images: ["img/bague1.jpg", "img/bague2.jpg"] },
      { nom: "Boucles d'oreilles 4", prix: 30, desc: "Design moderne.", image: "img/Boucles d'oreilles 4.jpg", images: ["img/bague3.jpg"] }
    ]
  },
  {
    nom: "Colliers",
    image: "collier.jpg",
    produits: [
      { nom: "Collier 1", prix: 25, desc: "Collier simple en or.", image: "collier1.jpg", images: ["img/bague1.jpg", "img/bague2.jpg"] },
      { nom: "Collier 2", prix: 30, desc: "Collier perlé.", image: "img/Collier 2.jpg", images: ["img/bague3.jpg"] },
      { nom: "Collier 3", prix: 25, desc: "Collier fin.", image: "img/Collier 3.jpg", images: ["img/bague1.jpg", "img/bague2.jpg"] },
      { nom: "Collier 4", prix: 30, desc: "Collier chic.", image: "img/Collier 4.jpg", images: ["img/bague3.jpg"] }
    ]
  },
  {
    nom: "Bracelets",
    image: "bracelet.jpg",
    produits: [
      { nom: "Bracelet 1", prix: 25, desc: "Bracelet argenté.", image: "bracelet1.jpg", images: ["img/bague1.jpg", "img/bague2.jpg"] },
      { nom: "Bracelet 2", prix: 30, desc: "Bracelet perlé.", image: "img/Bracelet 2.jpg", images: ["img/bague3.jpg"] },
      { nom: "Bracelet 3", prix: 25, desc: "Bracelet tressé.", image: "img/Bracelet 3.jpg", images: ["img/bague1.jpg", "img/bague2.jpg"] },
      { nom: "Bracelet 4", prix: 30, desc: "Bracelet élégant.", image: "img/Bracelet 4.jpg", images: ["img/bague3.jpg"] }
    ]
  },
  {
    nom: "Bracelets à jambe",
    image: "bracelet jambe.jpg",
    produits: [
      { nom: "Bracelet Jambe 1", prix: 25, desc: "Pour la cheville.", image: "img/bague1.jpg", images: ["img/bague1.jpg", "img/bague2.jpg"] },
      { nom: "Bracelet Jambe 2", prix: 30, desc: "Doré élégant.", image: "img/bague3.jpg", images: ["img/bague3.jpg"] },
      { nom: "Bracelet Jambe 3", prix: 25, desc: "Chaîne discrète.", image: "img/bague1.jpg", images: ["img/bague1.jpg", "img/bague2.jpg"] },
      { nom: "Bracelet Jambe 4", prix: 30, desc: "Design tribal.", image: "img/bague3.jpg", images: ["img/bague3.jpg"] }
    ]
  },
  {
    nom: "Couronnes",
    image: "couronne.jpg",
    produits: [
      { nom: "Couronne 1", prix: 25, desc: "Couronne florale.", image: "img/bague1.jpg", images: ["img/bague1.jpg", "img/bague2.jpg"] },
      { nom: "Couronne 2", prix: 30, desc: "Royale dorée.", image: "img/bague3.jpg", images: ["img/bague3.jpg"] },
      { nom: "Couronne 3", prix: 25, desc: "Style bohème.", image: "img/bague1.jpg", images: ["img/bague1.jpg", "img/bague2.jpg"] },
      { nom: "Couronne 4", prix: 30, desc: "Diadème élégant.", image: "img/bague3.jpg", images: ["img/bague3.jpg"] }
    ]
  }];

const sidebar = document.getElementById('liste-categories');
const mainContent = document.getElementById('main-content');
const slideshow = document.getElementById('slideshow');
let slideshowInterval;
let currentSlide = 0;

function loadCategories() {
  sidebar.innerHTML = '';
  categories.forEach((cat) => {
    const div = document.createElement('div');
    div.className = 'categorie';
    div.textContent = cat.nom;
    div.onclick = () => {
      showCategoryProducts(cat.produits);
      stopSlideshow(); // Stop slideshow when a category is clicked
    };
    sidebar.appendChild(div);
  });
}

function ajouterPanier(produit) {
  let panier = JSON.parse(localStorage.getItem('panier')) || [];
  panier.push(produit);
  localStorage.setItem('panier', JSON.stringify(panier));
  alert(`${produit.nom} ajouté au panier !`);
}


function showCategoryProducts(products) {
  const contentZone = document.getElementById('dynamic-content');
  const slideshow = document.getElementById('slideshow');
  slideshow.style.display = 'none';
  contentZone.innerHTML = ''; // Clear previous products

  // Create a grid for products
  const grid = document.createElement('div');
  grid.className = 'produits';

  products.forEach((p) => {
    const productDiv = document.createElement('div');
    productDiv.className = 'produit';
    productDiv.innerHTML = `
      <img src="${p.image}" alt="${p.nom}">
      <h4>${p.nom}</h4>
      <p>${p.desc}</p>
      <button onclick='ajouterPanier(${JSON.stringify(p)})'>Ajouter au panier</button>
    `;
    grid.appendChild(productDiv);
  });

  contentZone.appendChild(grid);
}


function startSlideshow() {
  const slides = document.querySelectorAll('.slide');
  if (slides.length === 0) return;

  showSlide(0);

  slideshowInterval = setInterval(() => {
    showSlide(currentSlide + 1);
  }, 7000);
}

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  slides.forEach(slide => slide.classList.remove('active'));
  currentSlide = index % slides.length;
  slides[currentSlide].classList.add('active');
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
  slideshow.style.display = 'none';
}

// Call functions on load
loadCategories();
startSlideshow();
