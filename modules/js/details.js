async function displayCatDetails() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    const breeds = await getCatBreeds();
    const breed = breeds.find(b => b.id === id);

    const catInfoDiv = document.getElementById('catInfo');
    if (breed) {
        catInfoDiv.innerHTML = `
            <div class="cat-container">
                <img src="${breed.image?.url || 'https://via.placeholder.com/150'}" class="cat-image" alt="${breed.name}">
                <div class="cat-details">
                    <h2>${breed.name}</h2>
                    <p><strong>Temperamento:</strong> ${breed.temperament}</p>
                    <p><strong>Origen:</strong> ${breed.origin}</p>
                    <p><strong>Esperanza de vida:</strong> ${breed.life_span} años</p>
                    <p><strong>Descripción:</strong> ${breed.description}</p>
                </div>
            </div>
        `;
    } else {
        catInfoDiv.innerHTML = "<p>No se encontró información sobre la raza.</p>";
    }
}

function goBack() {
    window.location.href = 'index.html';
}

displayCatDetails();
