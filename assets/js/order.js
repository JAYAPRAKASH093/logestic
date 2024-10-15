document.getElementById('orderForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    // Name Validation
    const name = document.getElementById('name');
    if (name.value.trim() === '') {
        document.getElementById('nameError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('nameError').classList.add('hidden');
    }

    // Email Validation
    const email = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailPattern.test(email.value)) {
        document.getElementById('emailError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('emailError').classList.add('hidden');
    }

    // Phone Validation
    const phone = document.getElementById('phone');
    if (!/^\d{10}$/.test(phone.value)) {
        document.getElementById('phoneError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('phoneError').classList.add('hidden');
    }

    // Shipment Validation
    const shipment = document.getElementById('shipment');
    if (shipment.value === '') {
        document.getElementById('shipmentError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('shipmentError').classList.add('hidden');
    }

    // Pickup Address Validation
   // Pickup Address Validation
    const pickup = document.getElementById('pickup');
    if (pickup.value.trim() === '' || pickup.value.trim().length < 30) {
        document.getElementById('pickupError').textContent = 'Pickup address must be at least 30 characters long.';
        document.getElementById('pickupError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('pickupError').classList.add('hidden');
    }

    // Delivery Address Validation
    const delivery = document.getElementById('delivery');
    if (delivery.value.trim() === '' || delivery.value.trim().length < 30) {
        document.getElementById('deliveryError').textContent = 'Delivery address must be at least 30 characters long.';
        document.getElementById('deliveryError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('deliveryError').classList.add('hidden');
    }

    // Pincode Validation (Pickup & Delivery)
    const pickupPincode = document.getElementById('pickupPincode');
    const deliveryPincode = document.getElementById('deliveryPincode');
    const pincodePattern = /^\d{6}$/;

    if (!pincodePattern.test(pickupPincode.value)) {
        document.getElementById('pickupPincodeError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('pickupPincodeError').classList.add('hidden');
    }

    if (!pincodePattern.test(deliveryPincode.value)) {
        document.getElementById('deliveryPincodeError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('deliveryPincodeError').classList.add('hidden');
    }

    // Goods Description Validation
    const goods = document.getElementById('goods');
    if (goods.value.trim() === '') {
        document.getElementById('goodsError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('goodsError').classList.add('hidden');
    }

    // Weight Validation
    const weight = document.getElementById('weight');
    if (weight.value.trim() === '') {
        document.getElementById('weightError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('weightError').classList.add('hidden');
    }

    // Package Dimensions Validation (Length, Width, Height)
    const length = document.getElementById('length');
    const width = document.getElementById('width');
    const height = document.getElementById('height');

    if (length.value.trim() === '') {
        document.getElementById('lengthError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('lengthError').classList.add('hidden');
    }

    if (width.value.trim() === '') {
        document.getElementById('widthError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('widthError').classList.add('hidden');
    }

    if (height.value.trim() === '') {
        document.getElementById('heightError').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('heightError').classList.add('hidden');
    }

    if (isValid) {
        alert('Form is valid. Proceeding with submission.');
        document.querySelector('form').reset();
        // You can now submit the form or handle data here
    }
});
