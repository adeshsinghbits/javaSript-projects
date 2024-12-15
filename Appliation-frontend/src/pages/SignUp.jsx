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
                  Upload
                </div>
              )}
            </div>
          </label>
          <input
            id="avatar"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAvatarChange}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="username" className="text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            className="border border-gray-300 rounded p-2 mt-1"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="border border-gray-300 rounded p-2 mt-1"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="border border-gray-300 rounded p-2 mt-1"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
