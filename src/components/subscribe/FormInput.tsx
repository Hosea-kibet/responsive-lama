import React from 'react'

const FormInput = () => {
  return (
    <div>
      <form className="w-full mt-4">
        <div className="relative flex flex-col sm:flex-row">
          <input
            type="text"
            id="search-input"
            placeholder="Enter your number"
            className="block w-full p-4 text-lg text-gray-800 border border-gray-400 rounded-lg outline-none sm:w-3/4 focus:ring-2 focus:ring-green-500"
            required
          />
          <button
            type="submit"
            className="mt-3 sm:mt-0 ml-0 sm:ml-3 bg-[#89C545] hover:bg-[#bbdd92] focus:ring-4 focus:outline-none focus:ring-[#bbdd92] font-medium rounded-lg text-lg text-white px-6 py-2"
          >
            Get OTP
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormInput