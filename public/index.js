//Develop by Ethan Huang 
// Fetch the JSON file
fetch('data/products.json')
  .then(response => response.json())
  .then(data => {
    const products = data;
    let currentProduct = 0;

    // Display the first product
    displayProduct(products[currentProduct]);

    // Add event listeners to the buttons
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    prevBtn.addEventListener('click', () => {
      currentProduct--;
      if (currentProduct < 0) {
        currentProduct = products.length - 1;
      }
      displayProduct(products[currentProduct]);
    });
    nextBtn.addEventListener('click', () => {
      currentProduct++;
      if (currentProduct >= products.length) {
        currentProduct = 0;
      }
      displayProduct(products[currentProduct]);
    });
  });

// Display the product on the page
function displayProduct(product) {
  const img = document.getElementById('product-img');
  const title = document.getElementById('product-title');
  const description = document.getElementById('product-description');
  const features = document.getElementById('product-features');
  const price = document.getElementById('product-price');
  const paymentLink = document.getElementById('product-payment');

  img.src = product.imageUrl;
  title.textContent = product.title;
  description.textContent = product.description;
  price.textContent = `Price: ${product.price}`;
  paymentLink.innerHTML = `<a class="has-text-white" href="${product.paymentLink}">Buy now</a>`
  
  
  
  // Clear previous features
  features.innerHTML = '';

  // Add new features
  for (let i = 0; i < product.highlighted_features.length; i++) {
    const feature = document.createElement('li');
    feature.textContent = product.highlighted_features[i];
    features.appendChild(feature);
  }
}



//   for slide show festure
const slideshow = document.getElementById("slideshow");
const images = slideshow.querySelectorAll("img");
const dots = slideshow.querySelectorAll("button");



function slideShow(index) {


  // Update active image
  images.forEach((img, i) => {
    if (i === index) {
      img.classList.add("active");
    } else {
      img.classList.remove("active");
    }
  });

  // Update active dot
  dots.forEach((dot, i) => {
    if (i === index) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Add event listeners to dots
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    slideShow(i);
  });
});

// Start slideshow
slideShow(0);
