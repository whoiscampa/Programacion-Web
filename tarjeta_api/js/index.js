const apiUrl = "https://api.thecatapi.com/v1/breeds"; 
const catInfoDiv = document.getElementById('catInfo');
const options = {
    headers: {
        'x-api-key': 'live_5cn0PSkXe6uDvaVpDbmotGhukogbRx8ThLlv6slAjkDCUVe0MqirN67rHMSYxO9W'
    }
};

async function getCatBreedInfo() {
    try {
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
            throw new Error("Error " + response.status);
        }
        const breeds = await response.json();

        if (breeds.length > 0) { 
            const breed = breeds[16]; 
            catInfoDiv.innerHTML = `
                <div class="cat-container">
                    <img src="${breed.image?.url || 'https://via.placeholder.com/150'}" class="cat-image">
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
            catInfoDiv.textContent = "No se encontró información sobre la raza.";
        }
    } catch (error) {
        console.error(error);
        catInfoDiv.textContent = "Error al cargar la información de la raza.";
    }
}

window.addEventListener('DOMContentLoaded', getCatBreedInfo);
