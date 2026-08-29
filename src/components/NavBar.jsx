import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { removeUser } from "../utils/userSlice";
import axios from "axios";

const NavBar = () => {
  const user = useSelector((store) => store.user);
  const dispatch= useDispatch();
  const navigate= useNavigate();

  const handleLogout = async ()=>{
    try{
        await axios.post(BASE_URL+"/logout", {},{
          withCredentials :true
        });
        dispatch(removeUser());
        return navigate("/login");

    }catch(err){

    }
  }

  return (
    <div>
      <div className="navbar bg-base-300 shadow-sm">
        <div className="flex-1"> 
          <Link
            to="/"
            className="btn btn-ghost text-xl hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            🧑‍💻 DevTinder
          </Link>
        </div>
        <div className="flex gap-2">
          {user && (
            <div className="dropdown dropdown-end m-5 flex">
              <p className="mx-2 my-2">Welcome, {user.firstName}</p>
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img alt="User Photo" src={user.photoUrl}  className="w-full h-full object-contain rounded-full"/>
                </div>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <Link to="/profile" className="justify-between hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link to="/connections">Connections</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
