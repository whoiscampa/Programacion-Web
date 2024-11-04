const apiUrl = "https://api.thecatapi.com/v1/breeds"; 
const options = {
    headers: {
        'x-api-key': 'live_5cn0PSkXe6uDvaVpDbmotGhukogbRx8ThLlv6slAjkDCUVe0MqirN67rHMSYxO9W'
    }
};

async function getCatBreeds() {
    try {
        const response = await fetch(apiUrl, options);
        if (!response.ok) {
            throw new Error("Error " + response.status);
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

