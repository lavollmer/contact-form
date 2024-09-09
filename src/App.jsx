import "./App.css";
import "./index.css";
import InputBox from "./components/inputBox";
import ErrorBoundary from "./components/ErrorBoundary";
import React, { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [support, setSupport] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = "First Name is required";
    }

    if (!lastName) {
      newErrors.lastName = "Last Name is required";
    }

    if (!email) {
      newErrors.email = "An email is required";
    }

    if (!enquiry) {
      newErrors.enquiry = "Please select an query type";
    }

    if (!support) {
      newErrors.support = "Please select an query type";
    }

    if (!message) {
      newErrors.message = "A general message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log("Form submitted");
  };

  return (
    <>
      <div className="screen">
        <div className="boxy">
          <div>
            <h1 className="text-grey-dark font-bold text-4xl">Contact Us</h1>
          </div>
          {/* first line of the form */}
          <div className="flex flex-col pt-6">
            <ErrorBoundary>
              <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                {/* input boxes with reusable box */}
                <div className="flex flex-row justify-evenly items-center space-x-4">
                  <InputBox
                    title="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    error={errors.firstName}
                  />
                  <InputBox
                    title="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    error={errors.lastName}
                  />
                </div>
                <div className="flex flex-col space-y-4">
                  <InputBox
                    title="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={errors.email}
                  />
                </div>
                {/* Query type */}
                <div className="flex flex-col space-y-4">
                  <div>
                    <h2 className="text-lg">Query Type *</h2>
                  </div>
                  <div className="flex flex-row justify-between items-center w-full h-full space-x-4 text-lg">
                    <div className="flex flex-row justify-start items-center space-x-4 border border-grey-medium rounded-lg py-2 px-24 cursor-pointer hover:border-green-medium hover:bg-green-lighter hover:bg-opacity-80 hover:shadow-lg">
                    <input
                        type="checkbox"
                        className="custom-checkbox"
                        id="enquiry-request"
                        value={enquiry}
                        onChange={(e) => setEnquiry(e.target.value)}
                      />
                      <label>Enquiry Request</label>
                      {errors.enquiry && (
                        <div className="text-red-500">{errors.enquiry}</div>
                      )}
                    </div>
                    <div className="flex flex-row justify-start items-center space-x-4 border border-grey-medium rounded-lg py-2 px-24 cursor-pointer hover:border-green-medium hover:bg-green-lighter hover:bg-opacity-80 hover:shadow-lg">
                    <input
                        type="checkbox"
                        className="custom-checkbox"
                        id="support-request"
                        value={support}
                        onChange={(e) => setSupport(e.target.value)}
                      />
                      <label>Support Request</label>
                      {errors.support && (
                        <div className="text-red-500">{errors.support}</div>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col space-y-2">
                    <label className="text-lg">General Message *</label>
                    <input
                      type="text"
                      id="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="border border-grey-medium rounded-lg py-6 px-4 text-lg cursor-pointer hover:border-green-medium hover:shadow-lg"
                    />
                    {errors.message && (
                      <div className="text-red-500">{errors.message}</div>
                    )}
                  </div>
                </div>
                {/* consent checkbox */}
                <div className="flex flex-row space-x-4 items-center justify-start pt-6 pb-6">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="custom-checkbox"
                  />
                  <label htmlFor="consent" className="text-grey-dark">
                    I consent to the processing of my personal data
                  </label>
                </div>
                {/* submit button */}
                <div className="flex flex-row items-center justify-center w-full h-full">
                  <button className="bg-green-medium rounded-lg w-full h-full p-4 cursor-pointer hover:border-green-lighter hover:shadow-lg">
                    <span className="text-white text-lg">Submit</span>
                  </button>
                </div>
              </form>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
