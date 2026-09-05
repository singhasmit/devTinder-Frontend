import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import UserCard from "./userCard";

const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [photoUrl, setPhotoUrl] = useState(user.photoUrl);
  const [age, setAge] = useState(user.age);
  const [gender, setGender] = useState(user.gender);
  const [about, setAbout] = useState(user.about);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch(
        BASE_URL + "/profile/edit",
        {
          firstName,
          lastName,
          photoUrl,
          age,
          gender,
          about,
        },
        { withCredentials: true },
      );
      dispatch(addUser(res?.data?.data));

      setSuccess("Your data has been updated!");

      setTimeout(() => {
        setSuccess("");
      }, 3000);
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="flex justify-center ">
      <div className="flex justify-center mx-5">
        <div className="card bg-base-300 w-96 shadow-xl">
          <div className="card-body">
            <h2 className="card-title justify-center">Edit Profile</h2>

            <div>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">First Name:</span>
                </div>

                <input
                  type="text"
                  value={firstName}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">Last Name:</span>
                </div>

                <input
                  type="text"
                  value={lastName}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </label>
              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">PhotoUrl:</span>
                </div>

                <input
                  type="text"
                  value={photoUrl}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setPhotoUrl(e.target.value)}
                />
              </label>

              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">Age:</span>
                </div>

                <select
                  value={age}
                  className="select select-bordered w-full max-w-xs"
                  onChange={(e) => setAge(e.target.value)}
                >
                  <option value="" disabled>
                    Select Age
                  </option>

                  {Array.from({ length: 121 }, (_, i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </label>

              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">Gender:</span>
                </div>

                <select
                  value={gender}
                  className="select select-bordered w-full max-w-xs"
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="" disabled>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Others">Others</option>
                </select>
              </label>

              <label className="form-control w-full max-w-xs my-2">
                <div className="label">
                  <span className="label-text">About:</span>
                </div>

                <input
                  type="text"
                  value={about}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => setAbout(e.target.value)}
                />
              </label>
            </div>

            <p className="text-red-500">{error}</p>

            <div className="card-actions justify-center m-2">
              {success && (
                <p className="text-green-500 text-center">{success}</p>
              )}

              <p className="text-red-500">{error}</p>

              <div className="card-actions justify-center m-2">
                <button className="btn btn-primary " onClick={saveProfile}>
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <UserCard user={{ firstName, lastName, photoUrl, age, gender, about }} />
    </div>
  );
};

export default EditProfile;
