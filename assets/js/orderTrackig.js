// orderTracking.js

// Function to generate a random order status and progress
function getRandomOrderStatus() {
    const statuses = [
        { status: "Dispatched", progress: 25, details: "Your order has been dispatched." },
        { status: "In Transit", progress: 50, details: "Your order is currently in transit." },
        { status: "Out for Delivery", progress: 75, details: "Your order is out for delivery." },
        { status: "Delivered", progress: 100, details: "Your order has been delivered." }
    ];

    // Randomly select an order status
    return statuses[Math.floor(Math.random() * statuses.length)];
}

// Function to track order
function trackOrder() {
    const trackingInput = document.getElementById("trackingInput").value.trim();
    const orderStatusDiv = document.getElementById("orderStatus");
    const orderDetails = document.getElementById("orderDetails");
    const orderProgressDiv = document.getElementById("orderProgress");
    const progressBar = document.getElementById("progressBar");

    if (trackingInput !== "") {
        // Get random status and progress for any tracking number
        const trackingInfo = getRandomOrderStatus();

        // Show order status and details
        orderStatusDiv.classList.remove("hidden");
        orderDetails.innerText = trackingInfo.details;

        // Update the progress bar and show order progress
        orderProgressDiv.classList.remove("hidden");
        progressBar.style.width = `${trackingInfo.progress}%`;

        // Adjust the color of the progress bar according to the progress
        if (trackingInfo.progress === 100) {
            progressBar.classList.add("bg-green-500");
        } else {
            progressBar.classList.remove("bg-green-500");
        }
    } else {
        // Hide order status and progress if no tracking ID is entered
        orderStatusDiv.classList.add("hidden");
        orderProgressDiv.classList.add("hidden");
        alert("Please enter a tracking number.");
    }
}
