import React, { useEffect } from "react";
import { Link } from "react-router-dom";


function Checkout() {

  // const [count, setCount] = useState("Back to shop");

  useEffect(() => {
      
      return (
      <div className="page-body">
        <div className="page-element">
          <div className="checkout-page">
            <h2>Successful!</h2>
             <Link to="/" className="Back to shop">Back to shop</Link>
          </div>
        </div>
      </div>
    );
   }
  )
}


export default Checkout;