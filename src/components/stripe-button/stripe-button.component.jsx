import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_8fVxvHYuTEzXnMlXeiFrJ1PE0062BTso1x';

    const onToken = token => {
        alert('Payment Successful!');
    };
    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Inc'
            billingAddress
            shippingAddressimage='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default  StripeCheckoutButton;