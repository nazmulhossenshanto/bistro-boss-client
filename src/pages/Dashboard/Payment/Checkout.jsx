import {  CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

 import useAxiosSecure from '../../../hooks/useAxiosSecure'
import useCart from '../../../hooks/useCart'
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
const Checkout = () => {
  const [error , setError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [transactionId, setTransactionId] = useState('');
  
      const stripe = useStripe();
  const elements = useElements();
  const {user} = useAuth();
  const axiosSecure = useAxiosSecure(); 
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item)=> total + item.price, 0)

  useEffect(()=>{
    if(totalPrice > 0){
      axiosSecure.post('/create-payment-intent', {price : totalPrice})
    .then(res =>{
      console.log('from checkout', res.data.clientSecret);
      setClientSecret(res.data.clientSecret)
    })
    }
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
  setTransactionId(paymentIntent.id);
  // get payment info if succeded
  if(paymentIntent.status === 'succeeded'){
    const paymentInfo = {
transactionId: paymentIntent.id,
     email : user.email, 
  price: totalPrice,
  date : new Date(), //utc date convert. use moment js 
  cartIds : cart.map(item => item._id),
  menuItemIds: cart.map(item => item.menuId),
   statue: 'pending'
    }
    // send to database
    const res = await axiosSecure.post('/payments', paymentInfo);
    refetch()
    if(res.data?.paymentResult?.insertedId){
      Swal.fire({
                title: "Successfull!",
                text: "Payment Successfull !",
                icon: "success"
              })
    }
  }
} 

}

return (
  <div className="mx-auto w-full max-w-xl px-4 py-8 sm:py-12">
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60">

      {/* Header */}
      <div className="bg-linear-to-br from-slate-900 via-slate-800 to-blue-950 px-6 py-7 text-white sm:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <span className="text-2xl">🍽️</span>
            </div>

            <div>
              <h2 className="text-xl font-bold tracking-wide">
                Bistro Boss
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Secure checkout
              </p>
            </div>
          </div>

          <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
            🔒 Secure
          </div>
        </div>

        <div className="mt-7 border-t border-white/10 pt-5">
          <p className="text-sm text-slate-300">
            Total payable amount
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            ${totalPrice.toFixed(2)}
          </h1>

          <p className="mt-2 text-sm text-slate-400">
            Complete your payment to enjoy your meal.
          </p>
        </div>
      </div>

      {/* Payment Form */}
      <form onSubmit={handleSubmit} className="space-y-6 p-6 sm:p-8">

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-800">
            Card details
          </label>

          <p className="mb-4 text-sm text-slate-500">
            Enter your debit or credit card information.
          </p>

          <div className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-5 transition focus-within:border-blue-500 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-500/10">
            <CardElement
              options={{
                hidePostalCode: true,
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#0f172a",
                    fontFamily: "system-ui, sans-serif",
                    "::placeholder": {
                      color: "#94a3b8",
                    },
                  },
                  invalid: {
                    color: "#dc2626",
                    iconColor: "#dc2626",
                  },
                },
              }}
            />
          </div>
        </div>

        {error && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {transactionId && (
          <div className="break-all rounded-xl border border-emerald-200 bg-emerald-50 p-4">
            <p className="text-sm font-semibold text-emerald-800">
              Transaction ID
            </p>
            <p className="mt-1 text-xs text-emerald-700">
              {transactionId}
            </p>
          </div>
        )}

        <button
          type="submit"
          disabled={!stripe || !clientSecret || totalPrice <= 0}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:bg-blue-700 hover:shadow-blue-700/25 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:shadow-none"
        >
          <span>🔒</span>
          Pay ${totalPrice.toFixed(2)}
        </button>

        <div className="flex items-center justify-center gap-2 text-center text-xs text-slate-500">
          <span>🛡️</span>
          <span>Secure payment powered by Stripe</span>
        </div>
      </form>
    </div>
  </div>
);

}

export default Checkout;