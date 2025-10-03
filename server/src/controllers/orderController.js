/**
 * @desc    Process checkout/create order
 * @route   POST /api/orders/checkout
 * @access  Public
 */
export const processCheckout = async (req, res, next) => {
  try {
    const { items, total } = req.body;

    // Validation
    if (!items || !Array.isArray(items) || items.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Order must contain at least one item'
      });
    }

    if (!total || typeof total !== 'number' || total <= 0) {
      return res.status(400).json({
        success: false,
        message: 'Invalid total amount'
      });
    }

    // Create order object
    const order = {
      id: generateOrderId(),
      items,
      total: parseFloat(total.toFixed(2)),
      status: 'pending',
      createdAt: new Date().toISOString(),
      itemCount: items.reduce((sum, item) => sum + item.quantity, 0)
    };

    // Log order to console (as required by challenge)
    console.log('\n🛒 NEW ORDER RECEIVED:');
    console.log('========================');
    console.log(`Order ID: ${order.id}`);
    console.log(`Timestamp: ${order.createdAt}`);
    console.log(`Total Items: ${order.itemCount}`);
    console.log(`Total Amount: $${order.total}`);
    console.log('\nItems:');

    items.forEach((item, index) => {
      console.log(`${index + 1}. ${item.name}`);
      console.log(`   - Price: $${item.price}`);
      console.log(`   - Quantity: ${item.quantity}`);
      console.log(`   - Subtotal: $${(item.price * item.quantity).toFixed(2)}`);
    });

    console.log('========================\n');

    res.status(201).json({
      success: true,
      message: 'Order processed successfully',
      orderId: order.id,
      data: {
        orderId: order.id,
        status: order.status,
        total: order.total,
        itemCount: order.itemCount
      }
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Generate unique order ID
 */
const generateOrderId = () => {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000);
  return `ORD-${timestamp}-${randomNum}`;
};