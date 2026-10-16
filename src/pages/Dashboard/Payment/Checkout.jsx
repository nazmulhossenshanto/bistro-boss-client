import {  CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

 import useAxiosSecure from '../../../hooks/useAxiosSecure'
import useCart from '../../../hooks/useCart'
import useAuth from "../../../hooks/useAuth";
const Checkout = () => {
  const [error , setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  
      const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure();
  const [cart] = useCart();
  const totalPrice = cart.reduce((total, item)=> total + item.price, 0)

  useEffect(()=>{
    axiosSecure.post('/create-payment-intent', {price : totalPrice})
    .then(res =>{
      console.log('from checkout', res.data.clientSecret);
      setClientSecret(res.data.clientSecret)
    })
  }, [axiosSecure, totalPrice])
  

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
      setError(error.message)
        console.log('[error]', error);
    }else{
        console.log('[paymentMethod]', paymentMethod);
        setError('')
    };
    // confirm payment
  const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
    card: card,
      billing_details: {
        email: user?.email || 'anonymous',
        name: user?.displayName || 'anonymous'
      }
  }

  }
);

if(confirmError){
  console.log('confirm error');
}
else{
  console.log('payment intent', paymentIntent);
} 

}

return (
    <form onSubmit={handleSubmit}>
        {
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
        }
         <button className="btn btn-outline border-none my-5 bg-blue-600 text-white" type="submit" >
        Pay
      </button>
      <p className="text-red-500">{error}</p>
    </form>
  )

}

export default Checkout;