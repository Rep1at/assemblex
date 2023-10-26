document.addEventListener("DOMContentLoaded", function () {
    var productDetails = {
        "0": {
            title: "LITE X",
            description: "This is the product description for LITE X.",
            image: "images/comp/r1.png",
            cpu: "AMD Ryzen 3 4100",
            gpu: "NVIDIA GTX 1660 Super",
            price: "$999"
        },
        "1": {
            title: "MEDIUM X",
            description: "This is the product description for MEDIUM X.",
            image: "images/comp/r2.png",
            cpu: "Intel Core i7",
            gpu: "NVIDIA RTX 3080",
            price: "$1299"
        },
        "2": {
            title: "LEGEND Y",
            description: "This is the product description for LEGEND Y.",
            image: "images/comp/i3.png",
            cpu: "AMD Ryzen 9 5900X",
            gpu: "NVIDIA RTX 3090",
            price: "$1699"
        }
    };

    var urlParams = new URLSearchParams(window.location.search);
    var productIndex = urlParams.get("product");

    var productTitle = document.querySelector(".product-title");
    var productImage = document.querySelector(".product-image");
    var productDescription = document.querySelector(".product-description");
    var productCPU = document.querySelector(".product-cpu");
    var productGPU = document.querySelector(".product-gpu");
    var productPrice = document.querySelector(".product-price");

    if (productIndex in productDetails) {
        productTitle.textContent = productDetails[productIndex].title;
        productDescription.textContent = productDetails[productIndex].description;
        productImage.src = productDetails[productIndex].image;
        productCPU.textContent = "" + productDetails[productIndex].cpu;
        productGPU.textContent = "" + productDetails[productIndex].gpu;
        productPrice.textContent = "" + productDetails[productIndex].price;
    }
});

var header = document.querySelector('.header');
var scrollThreshold = 300; // Выберите расстояние, при котором хедер станет фиксированным

window.addEventListener('scroll', function() {
  if (window.pageYOffset > scrollThreshold) {
    header.classList.add('fixed-header');
  } else {
    header.classList.remove('fixed-header');
  }
});
