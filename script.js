/* script.js */

// *** CRITICAL UPDATE: Version v7 forces a clean load with broken items removed ***
const STORAGE_KEY = 'recipe_pro_v7'; 

const initialRecipes = [
    // --- ITALY ---
    { 
        id: 1, 
        title: "Creamy Garlic Shrimp", 
        country: "Italy", 
        time: "20 mins", 
        difficulty: "Easy", 
        img: "https://www.themealdb.com/images/media/meals/1525873040.jpg", 
        desc: "Garlic butter shrimp served over al dente linguine.", 
        ingredients: ["500g Shrimp", "Linguine Pasta", "Garlic Cloves", "Heavy Cream", "Parsley", "Butter"] 
    },
    { 
        id: 2, 
        title: "Classic Pizza", 
        country: "Italy", 
        time: "45 mins", 
        difficulty: "Medium", 
        img: "https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg", 
        desc: "Neapolitan pizza with fresh basil, mozzarella, and tomato sauce.", 
        ingredients: ["Pizza Dough", "San Marzano Tomatoes", "Fresh Mozzarella", "Basil Leaves", "Olive Oil"] 
    },
    { 
        id: 3, 
        title: "Homemade Lasagna", 
        country: "Italy", 
        time: "1.5 hrs", 
        difficulty: "Hard", 
        img: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg", 
        desc: "Layers of pasta, rich meat sauce, and creamy bechamel.", 
        ingredients: ["Lasagna Sheets", "Ground Beef", "Tomato Sauce", "Ricotta Cheese", "Mozzarella", "Parmesan"] 
    },
    { 
        id: 4, 
        title: "Mushroom Risotto", 
        country: "Italy", 
        time: "40 mins", 
        difficulty: "Medium", 
        img: "https://www.themealdb.com/images/media/meals/xxrxux1503070723.jpg", 
        desc: "Creamy rice dish cooked with broth and wild mushrooms.", 
        ingredients: ["Arborio Rice", "Mushrooms", "Vegetable Broth", "White Wine", "Butter", "Onion"] 
    },
    { 
        id: 5, 
        title: "Tiramisu", 
        country: "Italy", 
        time: "30 mins", 
        difficulty: "Medium", 
        img: "https://www.themealdb.com/images/media/meals/wxyvqq1511723401.jpg", 
        desc: "Coffee-flavoured Italian dessert.", 
        ingredients: ["Ladyfingers", "Mascarpone", "Espresso", "Cocoa Powder", "Eggs", "Sugar"] 
    },

    // --- MEXICO ---
    { 
        id: 6, 
        title: "Spicy Beef Tacos", 
        country: "Mexico", 
        time: "30 mins", 
        difficulty: "Easy", 
        img: "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg", 
        desc: "Street-style tacos with seasoned beef and lime.", 
        ingredients: ["Corn Tortillas", "Ground Beef", "Taco Seasoning", "Lime", "Cilantro", "Onion"] 
    },
    { 
        id: 7, 
        title: "Chicken Enchiladas", 
        country: "Mexico", 
        time: "50 mins", 
        difficulty: "Medium", 
        img: "https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg", 
        desc: "Tortillas rolled around chicken and covered in chili sauce.", 
        ingredients: ["Tortillas", "Shredded Chicken", "Enchilada Sauce", "Cheese", "Black Beans"] 
    },
    { 
        id: 8, 
        title: "Fajitas", 
        country: "Mexico", 
        time: "10 mins", 
        difficulty: "Easy", 
        img: "https://www.themealdb.com/images/media/meals/vussxq1511882648.jpg", 
        desc: "Sizzling chicken strips with peppers and onions.", 
        ingredients: ["Chicken", "Bell Peppers", "Onion", "Lime Juice", "Tortillas", "Spices"] 
    },
    { 
        id: 9, 
        title: "Chiles Rellenos", 
        country: "Mexico", 
        time: "1 hr", 
        difficulty: "Hard", 
        img: "https://www.themealdb.com/images/media/meals/tvtxpq1511464705.jpg", 
        desc: "Stuffed chili peppers battered and fried.", 
        ingredients: ["Poblano Peppers", "Cheese", "Eggs", "Flour", "Tomato Sauce"] 
    },

    // --- JAPAN ---
    { 
        id: 10, 
        title: "Tonkotsu Ramen", 
        country: "Japan", 
        time: "3 hrs", 
        difficulty: "Hard", 
        img: "https://www.themealdb.com/images/media/meals/naqyel1608588563.jpg", 
        desc: "Rich pork broth with noodles and soft-boiled egg.", 
        ingredients: ["Ramen Noodles", "Pork Belly", "Bone Broth", "Soy Sauce", "Eggs", "Green Onions"] 
    },
    { 
        id: 11, 
        title: "Sushi", 
        country: "Japan", 
        time: "45 mins", 
        difficulty: "Medium", 
        img: "https://www.themealdb.com/images/media/meals/g046bb1663960946.jpg", 
        desc: "Fresh fish rolled in vinegared rice and seaweed.", 
        ingredients: ["Sushi Rice", "Nori Sheets", "Fresh Fish", "Cucumber", "Soy Sauce", "Wasabi"] 
    },
    { 
        id: 12, 
        title: "Chicken Katsu Curry", 
        country: "Japan", 
        time: "50 mins", 
        difficulty: "Medium", 
        img: "https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg", 
        desc: "Fried chicken cutlet with savory Japanese curry.", 
        ingredients: ["Chicken Breast", "Panko Breadcrumbs", "Curry Roux", "Potatoes", "Carrots", "Rice"] 
    },
    { 
        id: 13, 
        title: "Teriyaki Chicken", 
        country: "Japan", 
        time: "15 mins", 
        difficulty: "Easy", 
        img: "https://www.themealdb.com/images/media/meals/xquakq1619787532.jpg", 
        desc: "Chicken glazed in a sweet and savory soy sauce.", 
        ingredients: ["Chicken", "Soy Sauce", "Mirin", "Sugar", "Ginger"] 
    },

    // --- INDIA (Removed Butter Chicken, Dal Fry, Lamb Rogan Josh) ---
    { 
        id: 15, 
        title: "Vegetable Biryani", 
        country: "India", 
        time: "1 hr", 
        difficulty: "Medium", 
        img: "https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg", 
        desc: "Aromatic rice dish with spices and mixed veggies.", 
        ingredients: ["Basmati Rice", "Mixed Vegetables", "Biryani Spices", "Saffron", "Yogurt", "Fried Onions"] 
    },

    // --- USA (Removed Cheeseburger, Key Lime Pie) ---
    { 
        id: 19, 
        title: "BBQ Ribs", 
        country: "USA", 
        time: "4 hrs", 
        difficulty: "Medium", 
        img: "https://www.themealdb.com/images/media/meals/1529446352.jpg", 
        desc: "Slow-cooked pork ribs with barbecue sauce.", 
        ingredients: ["Pork Ribs", "BBQ Sauce", "Brown Sugar", "Paprika", "Garlic Powder"] 
    },
    { 
        id: 20, 
        title: "Pancakes", 
        country: "USA", 
        time: "15 mins", 
        difficulty: "Easy", 
        img: "https://www.themealdb.com/images/media/meals/rwuyqx1511383174.jpg", 
        desc: "Fluffy breakfast cakes with syrup.", 
        ingredients: ["Flour", "Milk", "Eggs", "Baking Powder", "Maple Syrup", "Butter"] 
    },

    // --- FRANCE ---
    { 
        id: 22, 
        title: "Croissants", 
        country: "France", 
        time: "6 hrs", 
        difficulty: "Pro Chef", 
        img: "https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg", 
        desc: "Buttery, flaky, pastry named for its crescent shape.", 
        ingredients: ["Bread Flour", "Butter", "Yeast", "Sugar", "Milk", "Egg Wash"] 
    },
    { 
        id: 23, 
        title: "Ratatouille", 
        country: "France", 
        time: "1 hr", 
        difficulty: "Medium", 
        img: "https://www.themealdb.com/images/media/meals/wrpwuu1511786491.jpg", 
        desc: "Stewed vegetable dish from Nice.", 
        ingredients: ["Eggplant", "Zucchini", "Bell Peppers", "Tomatoes", "Herbs de Provence", "Garlic"] 
    },

    // --- CHINA ---
    { 
        id: 24, 
        title: "Kung Pao Chicken", 
        country: "China", 
        time: "30 mins", 
        difficulty: "Medium", 
        img: "https://www.themealdb.com/images/media/meals/1525872624.jpg", 
        desc: "Spicy stir-fry with chicken, peanuts, and vegetables.", 
        ingredients: ["Chicken", "Peanuts", "Dried Chilies", "Soy Sauce", "Sichuan Peppercorns", "Green Onions"] 
    },
    { 
        id: 25, 
        title: "Wontons", 
        country: "China", 
        time: "40 mins", 
        difficulty: "Medium", 
        img: "https://www.themealdb.com/images/media/meals/1525876468.jpg", 
        desc: "Crispy fried rolls with veggie filling.", 
        ingredients: ["Spring Roll Wrappers", "Cabbage", "Carrots", "Mushrooms", "Soy Sauce", "Oil"] 
    },
    { 
        id: 26, 
        title: "Sweet and Sour Pork", 
        country: "China", 
        time: "1 hr", 
        difficulty: "Medium", 
        img: "https://www.themealdb.com/images/media/meals/1529442316.jpg", 
        desc: "Pork in a sticky sweet and sour sauce.", 
        ingredients: ["Pork", "Pineapple", "Peppers", "Vinegar", "Sugar", "Ketchup"] 
    },

    // --- THAILAND (Removed Pad Thai, Thai Green Curry) ---
    // (All removed based on request)

    // --- SPAIN (Removed Paella) ---
    { 
        id: 30, 
        title: "Spanish Tortilla", 
        country: "Spain", 
        time: "30 mins", 
        difficulty: "Medium", 
        img: "https://www.themealdb.com/images/media/meals/quuxsx1511476154.jpg", 
        desc: "Traditional potato and egg omelette.", 
        ingredients: ["Potatoes", "Eggs", "Onion", "Olive Oil", "Salt"] 
    }
];

// --- LOGIC ---

function getRecipes() {
    // Check local storage. If version mismatch, Force Reload.
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
    
    // If no data found for this version, load initial recipes
    const processed = initialRecipes.map(r => ({ ...r, reviews: r.reviews || [] }));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(processed));
    return processed;
}

function saveRecipe(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const desc = document.getElementById('desc').value;
    const time = document.getElementById('time').value;
    const difficulty = document.getElementById('difficulty').value;
    const country = document.getElementById('country').value;
    
    const ingredientsRaw = document.getElementById('ingredients').value;
    const ingredients = ingredientsRaw.split(',').map(i => i.trim()).filter(i => i !== "");

    // Using Placehold.co for reliable user-generated recipe images
    const safeTitle = encodeURIComponent(title);
    const img = `https://placehold.co/800x600/ff6b6b/white?text=${safeTitle}`;

    const newRecipe = {
        id: Date.now(),
        title, desc, img, time, difficulty, country, ingredients,
        reviews: []
    };

    const recipes = getRecipes();
    recipes.unshift(newRecipe);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
    window.location.href = 'feed.html';
}

function renderFeed(filterCountry = 'All') {
    const grid = document.querySelector('.grid');
    if (!grid) return;

    let recipes = getRecipes();
    if (filterCountry !== 'All') {
        recipes = recipes.filter(r => r.country === filterCountry);
    }

    if (recipes.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column:1/-1;">No recipes found for this category.</p>';
        return;
    }

    grid.innerHTML = recipes.map(recipe => `
        <div class="card" onclick="viewRecipe(${recipe.id})">
            <img src="${recipe.img}" alt="${recipe.title}" loading="lazy" onerror="this.src='https://placehold.co/800x600?text=Image+Not+Found'">
            <div class="card-content">
                <div style="display:flex; justify-content:space-between; margin-bottom:0.5rem;">
                    <span class="tag" style="background:var(--primary)">${recipe.country}</span>
                </div>
                <h3>${recipe.title}</h3>
                <p class="desc-preview" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${recipe.desc}</p>
                <div class="card-meta">
                    <span class="tag">⏱ ${recipe.time}</span>
                    <span class="tag" style="color:var(--secondary)">${recipe.difficulty}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function viewRecipe(id) {
    localStorage.setItem('currentRecipeId', id);
    window.location.href = 'recipe.html';
}

function loadRecipeDetails() {
    const id = localStorage.getItem('currentRecipeId');
    if (!id) return;
    const recipes = getRecipes();
    const recipe = recipes.find(r => r.id == id);

    if (recipe) {
        const imgEl = document.getElementById('detail-img');
        imgEl.src = recipe.img;
        imgEl.onerror = function() { this.src = 'https://placehold.co/800x600?text=Image+Not+Found'; };

        document.getElementById('detail-title').innerText = recipe.title;
        document.getElementById('detail-desc').innerText = recipe.desc;
        document.getElementById('detail-meta').innerHTML = `
            <span class="tag" style="background:var(--primary)">${recipe.country}</span>
            <span class="tag">⏱ ${recipe.time}</span>
            <span class="tag">${recipe.difficulty}</span>
        `;

        const ingList = document.getElementById('detail-ingredients');
        if (recipe.ingredients && recipe.ingredients.length > 0) {
            ingList.innerHTML = recipe.ingredients.map(ing => `<li>${ing}</li>`).join('');
        } else {
            ingList.innerHTML = '<li>No ingredients listed.</li>';
        }

        renderReviews(recipe.reviews);
    }
}

function addReview(event) {
    event.preventDefault();
    const text = document.getElementById('review-text').value;
    const id = localStorage.getItem('currentRecipeId');
    const recipes = getRecipes();
    const index = recipes.findIndex(r => r.id == id);

    if (index !== -1) {
        recipes[index].reviews.push({ text, date: new Date().toLocaleDateString() });
        localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
        renderReviews(recipes[index].reviews);
        document.getElementById('review-form').reset();
    }
}

function renderReviews(reviews) {
    const container = document.getElementById('reviews-container');
    if (!reviews || reviews.length === 0) {
        container.innerHTML = '<p style="opacity:0.6;">No reviews yet.</p>';
        return;
    }
    container.innerHTML = reviews.map(r => `
        <div style="background:rgba(255,255,255,0.05); padding:1rem; border-radius:10px; margin-bottom:1rem;">
            <p>"${r.text}"</p>
            <small style="opacity:0.5;">Posted on ${r.date}</small>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.grid')) renderFeed();
    if (document.getElementById('detail-title')) loadRecipeDetails();
    
    const reviewForm = document.getElementById('review-form');
    if (reviewForm) reviewForm.addEventListener('submit', addReview);

    const filterSelect = document.getElementById('country-filter');
    if (filterSelect) {
        filterSelect.addEventListener('change', (e) => renderFeed(e.target.value));
    }
    
    const createForm = document.getElementById('createForm');
    if(createForm) createForm.addEventListener('submit', saveRecipe);
});