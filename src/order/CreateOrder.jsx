/* eslint-disable react/no-unescaped-entities */
// import { useState } from "react";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
// eslint-disable-next-line no-unused-vars
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str
  );

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const cart = fakeCart;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const errorPhoneData = useActionData();

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
          <div>{errorPhoneData?.phone && errorPhoneData.phone}</div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)}></input>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          <button disabled={isSubmitting}>
            {isSubmitting ? "Creating Order..." : "Order now"}
          </button>
        </div>
      </Form>
    </div>
  );
}

export async function createNewOrder({ request }) {
  const formData = await request.formData();
  const formDataObject = Object.fromEntries(formData);

  const cartToJson = {
    ...formDataObject,
    cart: JSON.parse(formDataObject.cart),
    priority: formDataObject.priority === "on",
  };
  const errors = {};
  if (!isValidPhone(cartToJson.phone))
    errors.phone = "Please Enter the valid Number";
  if (Object.keys(errors).length > 0) return errors;
  const newOrder = await createOrder(cartToJson);

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
