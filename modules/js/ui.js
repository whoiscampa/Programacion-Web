const catGalleryDiv = document.getElementById('catGallery');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentPage = 0;
const catsPerPage = 4;
let allBreeds = [];

function displayCatBreeds(breeds) {
    catGalleryDiv.innerHTML = ''; 
    const start = currentPage * catsPerPage;
    const end = start + catsPerPage;
    const breedsToDisplay = breeds.slice(start, end);

    breedsToDisplay.forEach(breed => {
        const catCard = document.createElement('div');
        catCard.classList.add('cat-card');
        catCard.innerHTML = `
            <img src="${breed.image?.url || 'https://via.placeholder.com/150'}" class="cat-image" alt="${breed.name}">
            <h2>${breed.name}</h2>
            <button onclick="showCatDetails('${breed.id}')">Ver Detalles</button>
        `;
        catGalleryDiv.appendChild(catCard);
    });

    prevButton.style.display = currentPage > 0 ? 'inline-block' : 'none';
    nextButton.style.display = end < breeds.length ? 'inline-block' : 'none';
}

document.getElementById('loadCatsButton').addEventListener('click', async () => {
    allBreeds = await getCatBreeds();
    displayCatBreeds(allBreeds);
});

nextButton.addEventListener('click', () => {
    if ((currentPage + 1) * catsPerPage < allBreeds.length) {
        currentPage++;
        displayCatBreeds(allBreeds);
    }
});

prevButton.addEventListener('click', () => {
    if (currentPage > 0) {
        currentPage--;
        displayCatBreeds(allBreeds);
    }
});

function showCatDetails(id) {
    window.location.href = `details.html?id=${id}`;
}

