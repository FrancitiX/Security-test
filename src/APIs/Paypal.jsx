
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalButton({ total = 10 }) {
  return (
    <PayPalScriptProvider options={{ "client-id": "AcRX_qxgd5n2oPtSaJdeuXccG8Wl-AaivKMuDmq60ul2zBYuhghmmflVq7PyG_-UTFxS_lMA-_4llAIH" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: total.toString(),
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
