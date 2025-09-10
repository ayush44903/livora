function validateOrder(order) {
  if (!order.customerName || !order.address || !order.items || !order.items.length) {
    return false;
  }
  return true;
}
module.exports = validateOrder;
