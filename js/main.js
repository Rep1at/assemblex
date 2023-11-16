document.addEventListener("DOMContentLoaded", function () {
    var productDetails = {
        "0": {
            title: "LITE X",
            description: "An excellent entry-level computer, perfect for everyday tasks and light gaming. Powered by a reliable AMD Ryzen 5 or Intel Core i5 processor, it ensures smooth performance. With 8GB of DDR4 RAM and a 256GB SSD, it offers quick responsiveness for a budget-friendly price.",
            image: "images/comp/r1.png",
            cpu: "AMD Ryzen 3 4100",
            gpu: "NVIDIA GTX 1660 Super",
            ram: "8GB DDR4", // Добавлен RAM
            nvme: "256GB SSD", // Добавлен NVMe
            price: "$999"
        },
        "1": {
            title: "MEDIUM X",
            description: "This is the product description for MEDIUM X.",
            image: "images/comp/r2.png",
            cpu: "Intel Core i7",
            gpu: "NVIDIA RTX 3080",
            ram: "", // Добавлен RAM
            nvme: "", // Добавлен NVMe
            price: "$1299"
        },
        "2": {
            title: "LEGEND Y",
            description: "This is the product description for LEGEND Y.",
            image: "images/comp/i3.png",
            cpu: "AMD Ryzen 9 5900X",
            gpu: "NVIDIA RTX 3090",
            ram: "", // Добавлен RAM
            nvme: "", // Добавлен NVMe
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
    var productRAM = document.querySelector(".product-ram"); // Добавлено
    var productNVMe = document.querySelector(".product-nvme"); // Добавлено
    var productPrice = document.querySelector(".product-price");

    if (productIndex in productDetails) {
        productTitle.textContent = productDetails[productIndex].title;
        productDescription.textContent = productDetails[productIndex].description;
        productImage.src = productDetails[productIndex].image;
        productCPU.textContent = "" + productDetails[productIndex].cpu;
        productGPU.textContent = "" + productDetails[productIndex].gpu;
        productRAM.textContent = "" + productDetails[productIndex].ram; // Добавлено
        productNVMe.textContent = "" + productDetails[productIndex].nvme; // Добавлено
        productPrice.textContent = "" + productDetails[productIndex].price;
    }
});

var header = document.querySelector('.header');
var scrollThreshold = 100; // Выберите расстояние, при котором хедер станет фиксированным

window.addEventListener('scroll', function() {
  if (window.pageYOffset > scrollThreshold) {
    header.classList.add('fixed-header');
  } else {
    header.classList.remove('fixed-header');
  }
});



$(document).ready(function () {
    const minPriceInput = document.getElementById('minPrice');
    const maxPriceInput = document.getElementById('maxPrice');
    const priceRange = document.getElementById('priceRange');
    const productCards = document.querySelectorAll('.products');
    const applyFilterBtn = document.getElementById('applyFilterBtn');

    const priceSlider = noUiSlider.create(priceRange, {
        start: [0, 2000],
        connect: true,
        range: {
            'min': 0,
            'max': 2000
        }
    });

    priceSlider.on('update', function (values, handle) {
        if (handle === 0) {
            minPriceInput.value = Math.round(values[0]);
        } else {
            maxPriceInput.value = Math.round(values[1]);
        }
    });

    applyFilterBtn.addEventListener('click', function () {
        updatePriceFilter();
    });

    function updatePriceFilter() {
        const minPrice = parseInt(minPriceInput.value) || 0;
        const maxPrice = parseInt(maxPriceInput.value) || parseInt(priceSlider.options.range.max);

        productCards.forEach(function (card) {
            const productPrice = parseInt(card.dataset.price);

            if (productPrice >= minPrice && productPrice <= maxPrice) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
});



document.querySelectorAll('.truck-button').forEach(button => {
    button.addEventListener('click', e => {

        e.preventDefault();
        
        let box = button.querySelector('.box'),
            truck = button.querySelector('.truck');
        
        if(!button.classList.contains('done')) {
            
            if(!button.classList.contains('animation')) {

                button.classList.add('animation');

                gsap.to(button, {
                    '--box-s': 1,
                    '--box-o': 1,
                    duration: .3,
                    delay: .5
                });

                gsap.to(box, {
                    x: 0,
                    duration: .4,
                    delay: .7
                });

                gsap.to(button, {
                    '--hx': -5,
                    '--bx': 50,
                    duration: .18,
                    delay: .92
                });

                gsap.to(box, {
                    y: 0,
                    duration: .1,
                    delay: 1.15
                });

                gsap.set(button, {
                    '--truck-y': 0,
                    '--truck-y-n': -26
                });

                gsap.to(button, {
                    '--truck-y': 1,
                    '--truck-y-n': -25,
                    duration: .2,
                    delay: 1.25,
                    onComplete() {
                        gsap.timeline({
                            onComplete() {
                                button.classList.add('done');
                            }
                        }).to(truck, {
                            x: 0,
                            duration: .4
                        }).to(truck, {
                            x: 40,
                            duration: 1
                        }).to(truck, {
                            x: 20,
                            duration: .6
                        }).to(truck, {
                            x: 96,
                            duration: .4
                        });
                        gsap.to(button, {
                            '--progress': 1,
                            duration: 2.4,
                            ease: "power2.in"
                        });
                    }
                });
                
            }
            
        } else {
            button.classList.remove('animation', 'done');
            gsap.set(truck, {
                x: 4
            });
            gsap.set(button, {
                '--progress': 0,
                '--hx': 0,
                '--bx': 0,
                '--box-s': .5,
                '--box-o': 0,
                '--truck-y': 0,
                '--truck-y-n': -26
            });
            gsap.set(box, {
                x: -24,
                y: -6
            });
        }

    });
});


