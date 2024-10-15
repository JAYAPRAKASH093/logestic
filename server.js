const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/orderTracking', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Order Model
const OrderSchema = new mongoose.Schema({
    trackingNumber: String,
    status: String,
    progress: Number
});

const Order = mongoose.model('Order', OrderSchema);

// API endpoint to track order
app.get('/track/:trackingNumber', async (req, res) => {
    const trackingNumber = req.params.trackingNumber;
    try {
        const order = await Order.findOne({ trackingNumber });
        if (order) {
            res.json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
