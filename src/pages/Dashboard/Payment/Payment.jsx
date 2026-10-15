 import {loadStripe} from '@stripe/stripe-js';
import SectionTitle from '../../../SectionTitle/SectionTitle'
import {Elements} from '@stripe/react-stripe-js'
import Checkout from './Checkout';


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Key);
 
const Payment = () => {
  return (
    <div className='max-w-5xl mx-auto p-10'>
        <SectionTitle heading={"Payment" } subHeading={"Payment for eat"}></SectionTitle>
        <div>
            <Elements stripe={stripePromise}>
                <Checkout></Checkout>
            </Elements>
        </div>
    </div>
  )
}

export default Payment