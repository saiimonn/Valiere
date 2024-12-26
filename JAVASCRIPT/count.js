function updateTime() {
    const startDate = new Date('December 1, 2024 00:00:00');
    const now = new Date();
    const elapsedTime = now - startDate; // Difference in milliseconds

    // Calculate time components
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);

    // Update the HTML content
    const timeElement = document.getElementById('time-elapsed');
    if (timeElement) {
        timeElement.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

// Initial call and repeat every second
updateTime();
setInterval(updateTime, 1000);
