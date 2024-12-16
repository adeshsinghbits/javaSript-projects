import  { useState } from 'react';

const SignUp = () => {
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-orange-600 to-red-600">
      <form
        className="bg-transparent shadow-2xl shadow-black p-6 rounded w-96 space-y-4"
      >
        <h3 className='text-center text-3xl font-medium my-4 text-white'>Sign Up</h3>
        <div className="flex flex-col items-center">
          <label htmlFor="avatar" className="cursor-pointer">
            <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden shadow">
              {avatar ? (
                <img
                  src={avatar}
                  alt="Avatar Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex justify-center items-center h-full text-gray-400">
                  ProfileImage
                </div>
              )}
            </div>
          </label>
          <input
            id="avatar"
            type="file"
            accept="image/*"
            className="hidden"
            autoComplete="off"
            onChange={handleAvatarChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="username" className="text-white text-xl font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            autoComplete="off"
            placeholder="Enter Username"
            className="border outline-none border-gray-300 bg-transparent rounded-3xl p-2 mt-1"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-white text-xl font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="off"
            placeholder="Enter Email"
            className="border outline-none border-gray-300 bg-transparent rounded-3xl p-2 mt-1"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-white text-xl font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            autoComplete="off"
            placeholder="Enter Strong Password"
            className="border outline-none border-gray-300 bg-transparent rounded-3xl p-2 mt-1"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full border-gray-300 border text-gray-300 p-2 mt-5 rounded-3xl hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
