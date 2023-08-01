import React from "react";
import useFetch from "../hooks/useFetch";

const FetchData = () => {
  const URL = "https://reqres.in/api/users/";
  const { data: users, error, loading } = useFetch(URL);
  return (
    <div>
      <h1 className="text-4xl my-5 text-center">
        Data Fetch Using Custom useFetch Hooks
      </h1>
      {loading && <h3 className="text-2xl">Loading . . .</h3>}
      <div>
        <div className="p-8 bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="flex flex-col items-center lg:flex-row justify-evenly">
            {users.map((user) => (
              <div key={user.id} className="p-4">
                <div className="mb-4 text-center opacity-90">
                  <a href="#" className="relative block">
                    <img
                      alt="profil"
                      src={user.avatar}
                      className="mx-auto object-cover rounded-full h-40 w-40 "
                    />
                  </a>
                </div>
                <div className="text-center">
                  <p className="text-2xl text-gray-800 dark:text-white">
                    {user.first_name}
                  </p>
                  <p className="text-xl font-light text-gray-500 dark:text-gray-200">
                    Web Developer
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {error && <h3 className="text-2xl">Something Went Wrong</h3>}
    </div>
  );
};

export default FetchData;
