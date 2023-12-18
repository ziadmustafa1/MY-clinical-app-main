import { Link } from "react-router-dom";
const Ra = () => {
    return (
      <div className="grid grid-cols-2 p-4">
        <div className="p-5 flex justify-end">
        <div>
          <Link to="/dashboard">
          <h1>dashboard</h1>
          </Link>
        </div>
        </div>
        
        <div>
          <Link to="/product">
          <h1>product</h1>
          </Link>
        </div>
        <div>
          <Link to="/details">
          <h1>details</h1>
          </Link>
        </div>
        <div>
          <Link to="/profile">
          <h1>profile</h1>
          </Link>
        </div>
        <div>
          <Link to="/payment">
          <h1>payment</h1>
          </Link>
        </div>
        <div>
          <Link to="/order-details">
          <h1>order-details</h1>
          </Link>
        </div>
        <div>
          <Link to="/paynow">
          <h1>paynow</h1>
          </Link>
        </div>
        <div>
          <Link to="/checkout">
          <h1>checkout</h1>
          </Link>
        </div>
        <div>
          <Link to="/location">
          <h1>location</h1>
          </Link>
        </div>
        <div>
          <Link to="/login1">
          <h1>login1</h1>
          </Link>
        </div>
        <div>
          <Link to="/login2">
          <h1>login2</h1>
          </Link>
        </div>
        <div>
          <Link to="/login3">
          <h1>login3</h1>
          </Link>
        </div>
        <div>
          <Link to="/login4">
          <h1>login4</h1>
          </Link>
        </div>
        <div>
          <Link to="/register">
          <h1>register</h1>
          </Link>
        </div>
        <div>
          <Link to="/forget-password">
          <h1>forget-password</h1>
          </Link>
        </div>
        <div>
          <Link to="/verification">
          <h1>verification</h1>
          </Link>
        </div>
        <div>
          <Link to="/new-password">
          <h1>new-password</h1>
          </Link>
        </div>
      </div>
    );
  };
  
  export default Ra;
  