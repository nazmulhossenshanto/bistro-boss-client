import {  CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

 

const Checkout = () => {
      const stripe = useStripe();
  const elements = useElements();

  const handleSubmit  = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
    });
    if(error){
        console.log('[error]', error);
    }else{
        console.log('[paymentMethod]', paymentMethod);
    }
  
}

return (
    <form onSubmit={handleSubmit}>
        <CardElement
         options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
        />
         <button className="btn btn-outline border-none my-5 bg-blue-600 text-white" type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
  )

}

export default Checkout;