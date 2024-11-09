import { getOrdersWithProducts } from "@/actions/orders";

const Orders = async () => {
  const ordersWithProducts = await getOrdersWithProducts();

  if (!ordersWithProducts)
    return (
      <div className="text-center font-bold text-2xl">No orders found</div>
    );
  console.log("data from orders", ordersWithProducts);
  return <div>Order Page</div>;
};

export default Orders;
