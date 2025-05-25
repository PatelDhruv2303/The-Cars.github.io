// Car data
const cars = [
    {
        id: 1,
        name: 'Tesla Model S',
        price: 89990,
        category: 'electric',
        image: 'https://images.pexels.com/photos/12861027/pexels-photo-12861027.jpeg',
        specs: {
            engine: 'Electric',
            power: '670hp',
            acceleration: '3.1s'
        }
    },
    {
        id: 2,
        name: 'BMW M5',
        price: 107900,
        category: 'sports',
        image: 'https://images.pexels.com/photos/12534494/pexels-photo-12534494.jpeg',
        specs: {
            engine: '4.4L V8',
            power: '600hp',
            acceleration: '3.2s'
        }
    },
    {
        id: 3,
        name: 'Mercedes S-Class',
        price: 114500,
        category: 'luxury',
        image: 'https://images.pexels.com/photos/10892025/pexels-photo-10892025.jpeg',
        specs: {
            engine: '3.0L I6',
            power: '429hp',
            acceleration: '4.9s'
        }
    },
    {
        id: 4,
        name: 'Toyota RAV4',
        price: 32050,
        category: 'suv',
        image: 'https://images.pexels.com/photos/11023274/pexels-photo-11023274.jpeg',
        specs: {
            engine: '2.5L I4',
            power: '203hp',
            acceleration: '8.4s'
        }
    },
    {
        id: 5,
        name: 'Porsche 911',
        price: 216100,
        category: 'sports',
        image: 'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg',
        specs: {
            engine: '3.8L Flat-6',
            power: '640hp',
            acceleration: '2.6s'
        }
    }
];

// DOM Elements
const carGrid = document.querySelector('.car-grid');
const categories = document.querySelectorAll('.category');

// Functions
function createCarCard(car) {
    return `
        <div class="car-card fade" data-category="${car.category}">
            <img src="${car.image}" alt="${car.name}">
            <div class="car-info">
                <h3>${car.name}</h3>
                <p class="price">$${car.price.toLocaleString()}</p>
                <div class="specs">
                    <span>${car.specs.engine} • ${car.specs.power}</span>
                    <span>0-60: ${car.specs.acceleration}</span>
                </div>
            </div>
        </div>
    `;
}

function filterCars(category) {
    const cards = document.querySelectorAll('.car-card');
    
    cards.forEach(card => {
        card.classList.add('fade');
        
        setTimeout(() => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                setTimeout(() => card.classList.remove('fade'), 50);
            } else {
                card.style.display = 'none';
            }
        }, 300);
    });
}

function updateActiveCategory(selectedCategory) {
    categories.forEach(category => {
        category.classList.toggle('active', category.dataset.category === selectedCategory);
    });
}

// Event Listeners
categories.forEach(category => {
    category.addEventListener('click', () => {
        const selectedCategory = category.dataset.category;
        updateActiveCategory(selectedCategory);
        filterCars(selectedCategory);
    });
});

// Initialize
function init() {
    // Render all cars
    carGrid.innerHTML = cars.map(car => createCarCard(car)).join('');
    
    // Set 'All Cars' as active category
    updateActiveCategory('all');
    
    // Remove fade class after initial render
    setTimeout(() => {
        document.querySelectorAll('.car-card').forEach(card => {
            card.classList.remove('fade');
        });
    }, 100);
}

// Start the app
init();