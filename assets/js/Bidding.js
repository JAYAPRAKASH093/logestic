const orderData = {
    name: 'XYZ Goods',
    pickup: 'New Delhi',
    drop: 'Mumbai'
  };

  // Bidding data (array of transporter bids)
  let bids = [];

  // Timer (45-minute countdown)
  const timerElement = document.getElementById('timer');
  let bidTime = 30 * 60; // 45 minutes in seconds
  function startTimer() {
    const countdown = setInterval(() => {
      const minutes = Math.floor(bidTime / 60);
      const seconds = bidTime % 60;
      timerElement.textContent = `Time left: ${minutes}m ${seconds}s`;
      if (bidTime <= 0) {
        clearInterval(countdown);
        timerElement.textContent = "Bidding time is over!";
        document.getElementById('bidForm').remove(); // Remove form when time's up
      }
      bidTime--;
    }, 1000);
  }
  startTimer();

  // Function to update the bidding list UI
  function updateBidsList() {
    const bidsList = document.getElementById('bidsList');
    bidsList.innerHTML = ''; // Clear the current list

    // Sort bids in ascending order of amount
    bids.sort((a, b) => a.amount - b.amount);

    // Populate the list with sorted bids
    bids.forEach((bid, index) => {
      const bidItem = document.createElement('li');
      bidItem.className = 'p-2 border border-gray-300 rounded-lg mb-2';
      bidItem.textContent = `${index + 1}. ${bid.name} - ₹${bid.amount}`;
      bidsList.appendChild(bidItem);
    });
  }

  // Bidding form submission handler
  document.getElementById('bidForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const transporterName = document.getElementById('transporterName').value;
    const bidAmount = parseInt(document.getElementById('bidAmount').value);

    // Check if transporter has already bid, and update the bid
    const existingBid = bids.find(bid => bid.name === transporterName);
    if (existingBid) {
      existingBid.amount = bidAmount; // Override the previous bid amount
    } else {
      bids.push({ name: transporterName, amount: bidAmount }); // Add new bid
    }

    // Clear input fields
    document.getElementById('transporterName').value = '';
    document.getElementById('bidAmount').value = '';

    // Update the bidding list UI
    updateBidsList();
  });

  // Load order data to the page
  function loadOrderDetails() {
    document.getElementById('orderName').textContent = `Order Name: ${orderData.name}`;
    document.getElementById('orderPickup').textContent = `Pickup Location: ${orderData.pickup}`;
    document.getElementById('orderDrop').textContent = `Drop Location: ${orderData.drop}`;
  }
  loadOrderDetails();