import React, { useState } from 'react';
import { toast } from 'react-toastify';
const FormInput = ({ currentTrack,showOtpForm,setShowOtpForm }: any) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [response, setResponse] = useState({
    id:0
  });
  const responseId = response.id
  const [errorMessage, setErrorMessage] = useState('Server Error');
  
  const [otp ,setOTP] = useState('');

  const handlePhoneNumberChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPhoneNumber(event.target.value);
  };
  const handleOtp = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setOTP(event.target.value);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  
    // Create the request options
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tune_code: currentTrack && currentTrack.code,
        phonenumber: phoneNumber,
      }),
    };
  
    // Send the request
    fetch(
      //MAMBO YANANAFANYIKA
      'https://skiza-app-dy3qp.ondigitalocean.app/public/skiza/subscribesss',
      // 'https://skiza-app-dy3qp.ondigitalocean.app/public/skiza/subscribe',
      requestOptions
    )
      .then(async (response) => {
        if (response.ok) {
          // Handle successful response
          setResponse(await response.json());
          
          if (response.status === 202) {
            setShowOtpForm(true);
          }
          
        } else {
          // Handle error response
          throw new Error('OTP was sent, Please click next');
          
        }
      })
      .then((result) => {
        console.log(result);
        toast.success("Enter The OTP Sent!"); // Display snackbar
      })
      .catch((error) => {
        // Handle error by setting the status state variable to the error message
        setErrorMessage(error.message);
        toast.error(errorMessage); // Display error toast
      });
  };


  const subscriptionHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tune_code: currentTrack && currentTrack.code,
        phonenumber: phoneNumber,
        otp: otp,
      }),
    };
    //send the request
    fetch(
      `https://skiza-app-dy3qp.ondigitalocean.app/public/skiza/subscription/confirm/${responseId}`,
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          setShowOtpForm(false)
          // Handle successful response
          return response.json();
        } else {
          // Handle error response
          throw new Error("Wrong OTP!!");
        }
      })
      .then((result) => {
        console.log(result);
        toast.success("Subscription successful!"); // Display snackbar
      })
      .catch((error) => {
        toast.error("Failed to subscribe!"); // Display error toast
      });
  };

  
  return (
    <div>
      { !showOtpForm ? (
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
      ) : ( 
        <form
        onSubmit={subscriptionHandler}
        className="w-full mt-4"
      >
        <div className="relative flex flex-col sm:flex-row">
          <input
            type="text"
            id="search-input"
            placeholder="Enter the OTP"
            className="block w-full p-4 text-lg text-gray-800 border border-gray-400 rounded-lg outline-none sm:w-3/4 focus:ring-2 focus:ring-green-500"
            required
            value = {otp}
           onChange={handleOtp}
          />
          <button
            type="submit"
            className="mt-3 sm:mt-0 ml-0 sm:ml-3 bg-[#89C545] hover:bg-[#bbdd92] focus:ring-4 focus:outline-none focus:ring-[#bbdd92] font-medium rounded-lg text-lg text-white px-6 py-2"
          >
            Subscribe
          </button>
        </div>
      </form>
      )}
      
    </div>
  )
}

export default FormInput