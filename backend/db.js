const mongoose = require('mongoose');

mongoose.connect(
	'mongodb://test:test123@cluster0.ijsdz.mongodb.net/blockchain-ecommerce?retryWrites=true&w=majority',
	{ useNewUrlParser: true,
        useUnifiedTopology: true}
);

const paymentSchema = new mongoose.Schema({
	id: String,
	itemId: String,
	paid: Boolean
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
	Payment
}