import { CiLocationOn } from "react-icons/ci";
import Avatar from "../../assets/Avatar.svg";
import notif from "../../assets/notif.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="grid grid-cols-2 p-4">
      <div className="flex justify-start">
        <img src={Avatar} alt="logo" />
        <div className="p-4 text-start">
          <h1> welcome ,asmaa. </h1>
          <div className="flex justify-start items-center text-gray-400">
            <div className="text-xl pr-1">
          <CiLocationOn />
          </div>
            <p>Mansoura</p>
          </div>
        </div>
      </div>
      <div className="p-5 flex justify-end">
      <Link to="/notifications">
        <img src={notif} alt="logo" />
        </Link>
      </div>
      <div>
        <Link to="/Router">
        <h1>Router</h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
