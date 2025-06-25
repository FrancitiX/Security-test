
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

export default function PayPalButton({ total = 10 }) {
  const id = import.meta.env.VITE_PAYPAL_CLIENT_ID;
  console.log("CLIENT ID:", id);
  const moneda = "MXN"

  return (
    <PayPalScriptProvider options={{ "client-id": id, currency: moneda, }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total.toString(),
                  currency_code: moneda,
                },
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            console.log("Pago realizado por:", details.payer.name.given_name);
            // Aquí puedes notificar al backend, actualizar estado, etc.
          });
        }}
      />
    </PayPalScriptProvider>
  );
}
