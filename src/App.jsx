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
  const [enquiry, setEnquiry] = useState(false);
  const [support, setSupport] = useState(false);
  const [consent, setConsent] = useState(false);
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

    if (!consent) {
      newErrors.consent = "Consent is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    console.log("Form submitted");
    alert("Form submitted successfully!");
  };

  return (
    <>
      <div className="screenMobile md:screen">
        <div className="boxyMobile md:boxy">
          <div>
            <h1 className="text-grey-dark font-bold text-xl md:text-4xl">
              Contact Us
            </h1>
          </div>
          {/* first line of the form */}
          <div className="flex flex-col pt-6 w-full">
            <ErrorBoundary>
            <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
                {/* input boxes with reusable box */}
                <div className="flex flex-row space-x-4 w-full">
                  <div className="flex-1">
                    <InputBox
                      title="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      error={errors.firstName}
                      aria-label="First Name"
                    />
                  </div>
                  <div className="flex-1">
                    <InputBox
                      title="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      error={errors.lastName}
                      aria-label="Last Name"
                    />
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <label className="text-lg">Email *</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email"
                    className="border border-grey-medium rounded-lg py-6 px-4 text-lg cursor-pointer hover:border-green-medium hover:shadow-lg w-full"
                  />
                  {errors.email && (
                    <div className="text-red-500">{errors.email}</div>
                  )}
                </div>
                {/* Query type */}
                <div className="flex flex-col space-y-4">
                  <div>
                    <h2 className="text-sm md:text-lg">Query Type *</h2>
                  </div>
                  <div className="flex flex-row space-x-4 text-lg">
                    <div className="flex flex-row justify-center items-center space-x-8 border border-grey-medium rounded-lg py-2 px-4 cursor-pointer hover:border-green-medium hover:bg-green-lighter hover:bg-opacity-80 hover:shadow-lg w-full">
                      <div className="flex items-center space-x-4 text-sm md:text-lg">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        id="enquiry-request"
                        aria-label="Enquiry Request"
                        checked={enquiry}
                        onChange={(e) => setEnquiry(e.target.checked)}
                      />
                      <label htmlFor="enquiry-request" className="ml-2">Enquiry Request</label>
                      {errors.queryType && (
                        <div className="text-red-500">{errors.queryType}</div>
                      )}
                    </div>
                    </div>
                    <div className="flex flex-row justify-center items-center space-x-4 border border-grey-medium rounded-lg py-2 px-4 cursor-pointer hover:border-green-medium hover:bg-green-lighter hover:bg-opacity-80 hover:shadow-lg w-full">
                    <div className="flex items-center space-x-4 text-sm md:text-lg">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        id="support-request"
                        aria-label="Support Request"
                        checked={support}
                        onChange={(e) => setSupport(e.target.checked)}
                      />
                      <label htmlFor="support-request" className="ml-2">Support Request</label>
                      {errors.queryType && (
                        <div className="text-red-500">{errors.queryType}</div>
                      )}
                    </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col space-y-4">
                  <label className="text-lg">General Message *</label>
                  <input
                    type="text"
                    aria-label="General Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="border border-grey-medium rounded-lg py-6 px-4 text-lg cursor-pointer hover:border-green-medium hover:shadow-lg w-full"
                  />
                  {errors.message && (
                    <div className="text-red-500">{errors.message}</div>
                  )}
                </div>
                {/* consent checkbox */}
                <div className="flex flex-row space-x-4 items-center justify-start pt-2 pb-2 md:pt-6 md:pb-6">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    className="custom-checkbox"
                    aria-label="Consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                  />
                  <label
                    htmlFor="consent"
                    className="text-grey-dark text-xs md:text-lg"
                  >
                    I consent to the processing of my personal data
                  </label>
                  {errors.consent && (
                    <div className="text-red-500">{errors.consent}</div>
                  )}
                </div>
                {/* submit button */}
                {/* <div className="flex flex-row items-center justify-center w-full h-full"> */}
                <button className="bg-green-medium text-white text-sm md:text-lg rounded-lg w-full h-full p-2 md:p-4 cursor-pointer hover:border-green-lighter hover:shadow-lg">
                  Submit
                </button>
                {/* </div> */}
              </form>
            </ErrorBoundary>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
