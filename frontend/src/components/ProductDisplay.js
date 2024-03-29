import React from 'react'

const ProductDisplay = () => {
    return (
    <section>
      <div className="product">
        {/* <Logo /> */}
        <div className="description">
          <h3>KAOS plan</h3>
          <h5>$20.00 / month</h5>
        </div>
      </div>
      <form action="api/stripe/create-checkout-session" method="POST">
        {/* Add a hidden field with the lookup_key of your Price */}
        <input type="hidden" name="lookup_key" value="price_1KgiDFALEmriZRQAZ7S8siHy" />
        <button id="checkout-and-portal-button" type="submit">
          Checkout
        </button>
      </form>
    </section>
    )
    };

export default ProductDisplay
