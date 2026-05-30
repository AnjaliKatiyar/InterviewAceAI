import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

import API from "../services/api";

function Profile() {

  const [profile, setProfile] = useState({});

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    try {

      const response = await API.get("/profile");

      setProfile(response.data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div className="flex bg-gray-900 min-h-screen text-white">

      <Sidebar />

      <div className="ml-64 flex-1 p-10">

        <Navbar />

        <div className="bg-gray-800 p-10 rounded-2xl">

          <div className="flex items-center gap-6 mb-10">

            <img
              src={
                profile.profileImage ||
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              }
              alt="profile"
              className="w-32 h-32 rounded-full"
            />

            <div>

              <h1 className="text-4xl font-bold">
                {profile.name}
              </h1>

              <p className="text-gray-400 mt-2">
                {profile.role}
              </p>

            </div>

          </div>

          <div className="grid grid-cols-2 gap-6">

            <div className="bg-gray-900 p-6 rounded-xl">

              <h2 className="text-xl mb-2">
                Email
              </h2>

              <p>{profile.email}</p>

            </div>

            <div className="bg-gray-900 p-6 rounded-xl">

              <h2 className="text-xl mb-2">
                College
              </h2>

              <p>{profile.college}</p>

            </div>

            <div className="bg-gray-900 p-6 rounded-xl">

              <h2 className="text-xl mb-2">
                Skills
              </h2>

              <p>{profile.skills}</p>

            </div>

            <div className="bg-gray-900 p-6 rounded-xl">

              <h2 className="text-xl mb-2">
                Bio
              </h2>

              <p>{profile.bio}</p>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;