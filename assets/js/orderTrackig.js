async function trackOrder() {
    const trackingNumber = document.getElementById('trackingInput').value;
    if (!trackingNumber) {
        alert('Please enter a tracking number');
        return;
    }

    try {
        const response = await fetch(`http://localhost:5000/track/${trackingNumber}`);
        if (!response.ok) {
            throw new Error('Order not found');
        }
        const orderData = await response.json();

        // Display order details
        document.getElementById('orderDetails').innerText = `Tracking number: ${trackingNumber} \nStatus: ${orderData.status}`;
        document.getElementById('orderStatus').classList.remove('hidden');

        // Update progress bar
        document.getElementById('progressBar').style.width = `${orderData.progress}%`;
        document.getElementById('orderProgress').classList.remove('hidden');
    } catch (error) {
        alert(error.message);
    }
}
