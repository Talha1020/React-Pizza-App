import Button from '../ui/Button';
import { useFetcher } from 'react-router-dom';
import { updateOrder } from '../services/apiRestaurant';

function UpdateOrderButton() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make a Priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrderButton;
export async function action({ params }) {
  const priority = { priority: true };
  await updateOrder(params.orderId, priority);

  return null;
}
