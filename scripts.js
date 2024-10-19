/*const shoes = [
    {name: 'Classic Leather Sneakers', price: 'Ksh 2,350', image: '/shoe/'},
    {name: 'Sporty Running Shoes', price: 'Ksh 1,500', image: 'shoe2.jpg'},
    {name: 'Elegant High Heels', price: 'Ksh 1,000', image: 'shoe3.jpg'}
];*/

const shoeList = document.getElementById('shoe-list');

shoes.forEach(shoe => {
    const shoeCard = document.createElement('div');
    shoeCard.classList.add('shoe-card');
    
    shoeCard.innerHTML = `
        <img src="${shoe.image}" alt="${shoe.name}" />
        <h3>${shoe.name}</h3>
        <p>Price: ${shoe.price}</p>
    `;
    
    shoeList.appendChild(shoeCard);
});
window.onload = function() {
    const shoeGrid = document.getElementById('shoeGrid');
    fetch('backend.php')
        .then(response => response.json())
        .then(data => {
            data.forEach(shoe => {
                const shoeCard = `
                <div class="col-md-4">
                    <div class="card mb-4">
                        <img src="${shoe.image}" class="card-img-top" alt="${shoe.name}">
                        <div class="card-body text-center">
                            <h5 class="card-title">${shoe.name}</h5>
                            <p class="card-text">$${shoe.price}</p>
                            <a href="#" class="btn btn-primary">View Details</a>
                        </div>
                    </div>
                </div>`;
                shoeGrid.innerHTML += shoeCard;
            });
        });
};

document.querySelectorAll('a[href^="#collection"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
