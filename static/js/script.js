let currentImages = [];

async function fetchBabies() {
    const response = await fetch('/get_babies');
    const data = await response.json();
    document.getElementById('baby1').src = data.baby1;
    document.getElementById('baby2').src = data.baby2;
    currentImages = [data.baby1, data.baby2];
}

async function fetchNewBaby(exclude) {
    const response = await fetch('/get_babies');
    const data = await response.json();
    const newImage = [data.baby1, data.baby2].find(img => !currentImages.includes(img));
    return newImage;
}

async function selectBaby(selectedId, changeId) {
    const newImage = await fetchNewBaby(currentImages);
    document.getElementById(changeId).src = newImage;
    currentImages = currentImages.map(img => img === document.getElementById(changeId).src ? newImage : img);
    console.log('Selected:', document.getElementById(selectedId).src, 'Changed:', newImage);
}

// Initial load
fetchBabies();
