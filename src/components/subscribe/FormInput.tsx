import React, { useState } from 'react'

const FormInput = ({currentTrack} :any) => {

  console.log("THe currrent track code is", currentTrack && currentTrack.code)
  
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");
  const [success, setSuccess] = useState("");
  const [id, setId] = useState(0);

  const handlePhoneNumberChange = (event: {
    target: { value: React.SetStateAction<string>};
  }) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Create the request options
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tune_code: currentTrack && currentTrack.code,
        phonenumber: phoneNumber,
      }),
    };

    // Send the request
    fetch(
      "https://skiza-app-dy3qp.ondigitalocean.app/public/skiza/subscribe",
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          // Handle successful response

          setStatus("");
          setSuccess("Enter the OTP sent .");
          return response.json();
        } else {
          // Handle error response
          throw new Error("OTP SENT!!");
        }
      })
      .then((result) => {
        console.log(result); // Log the payload to the console
        setId(result.id);
      })
      .catch((error) => {
        // Handle error by setting the status state variable to the error message
        setSuccess("");
        setStatus(error.message);
        console.log("error", error);
      });
  };


  
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-full mt-4"
      >
        <div className="relative flex flex-col sm:flex-row">
          <input
            type="text"
            id="search-input"
            placeholder="Enter your number"
            className="block w-full p-4 text-lg text-gray-800 border border-gray-400 rounded-lg outline-none sm:w-3/4 focus:ring-2 focus:ring-green-500"
            required
            value = {phoneNumber}
            onChange={handlePhoneNumberChange}
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