// Define the shoe data
const shoes = [
    { name: 'Classic Leather Sneakers', price: 'Ksh 2,350', image: '/shoe/IMG-20240413-WA0065.jpg' },
    { name: 'Sporty Running Shoes', price: 'Ksh 1,500', image: '/shoe/IMG-20240430-WA0002.jpg' },
    { name: 'Elegant High Heels', price: 'Ksh 1,000', image: '/shoe/Airforce c.jpg' }
];

// Select the shoe list container
const shoeList = document.getElementById('shoe-list');
const shoeGrid = document.getElementById('shoeGrid');

// Function to create and display shoe cards
const displayShoes = (shoesArray) => {
    shoesArray.forEach(shoe => {
        const shoeCard = document.createElement('div');
        shoeCard.classList.add('shoe-card');
        
        shoeCard.innerHTML = `
            <img src="${shoe.image}" alt="${shoe.name}" />
            <h3>${shoe.name}</h3>
            <p>Price: ${shoe.price}</p>
        `;
        
        shoeList.appendChild(shoeCard);
    });
};

// Function to fetch shoes from the backend and display them
const fetchShoesFromBackend = () => {
    fetch('backend.php')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            data.forEach(shoe => {
                const shoeCard = `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="${shoe.image}" class="card-img-top" alt="${shoe.name}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${shoe.name}</h5>
                            <p class="card-text">${shoe.price}</p>
                            <a href="#" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>`;
                shoeGrid.innerHTML += shoeCard;
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
};

// Smooth scroll for anchor links
const setupSmoothScroll = () => {
    document.querySelectorAll('a[href^="#collection"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};

// On window load, display initial shoes and fetch from backend
window.onload = function() {
    displayShoes(shoes);
    fetchShoesFromBackend();
    setupSmoothScroll();
};
