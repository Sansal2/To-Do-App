import React from 'react';

const Home = () => {
  return (
    <div className='flex flex-row h-screen'>
    <div className="w-6/10 h-full flex flex-col justify-between bg-[url('/background.png')] bg-cover bg-center text-white p-8">
      {/* Centered Welcome Box */}
      <div className="flex-grow flex flex-col items-center justify-center">
        <div className="bg-black/60 p-8 rounded-xl shadow-xl max-w-lg text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to BlazeTasks!</h1>
          <p className="text-2xl">
          BlazeTasks is your ultimate to-do app designed to help you stay organized and achieve more. Whether you're managing personal tasks or collaborating with a team, BlazeTasks makes it easy to stay on top of your goals.
          </p>
          <p className="text-sm text-center text-gray-500 relative top-6">© 2025 BlazeTasks. All rights reserved.</p>
        </div>
      </div>
    </div>

    {/* Right Side with Login Form */}
    <div className="w-4/10 h-full flex justify-center items-center bg-brand-100">
      <div className="p-8 bg-brand-200 rounded-xl shadow-lg max-w-sm w-full">
        <h2 className="text-4xl text-gray-100 font-semibold mb-4">User Login</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="username" className="block mb-1 text-sm font-medium text-gray-200">Username</label>
            <input type="text" id="username" name="username" required className="w-full border px-3 py-2 rounded text-gray-300" />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-200">Password</label>
            <input type="password" id="password" name="password" required className="w-full border px-3 py-2 rounded text-gray-300" />
          </div>
          <button type="submit" className="w-full bg-brand-500 text-white py-2 rounded hover:bg-brand-600">Login</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Home

