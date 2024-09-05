import "./App.css";
import "./index.css";
import Information from "./components/inputBox";

function App() {
  const title = "";
  const userInfo = "";
  return (
    <>
      <div className="screen">
        <div className="boxy">
          <div>
            <h1 className="text-grey-dark font-bold text-4xl">Contact Us</h1>
          </div>
          {/* first line of the form */}
          <div className="flex flex-col pt-6">
            <form className="flex flex-col space-y-4">
              {/* input boxes with reusable box */}
              <div className="flex flex-row space-x-10 items-center">
                <Information title="First Name" value={userInfo} />
                <Information title="Last Name" value={userInfo} />
              </div>
              <div className="flex flex-col space-y-4">
                <Information title="Email Address" value={userInfo} />
              </div>
              {/* Query type */}
              <div className="flex flex-col space-y-4">
                <div>
                  <h2 className="text-lg">Query Type</h2>
                </div>
                <div className="flex flex-row justify-center items-center w-full h-full space-x-4 text-lg">
                  <div className="flex flex-row justify-start space-x-4 border border-grey-medium rounded-lg py-2 px-28">
                    <input type="checkbox" className="circle-checkbox" />
                    <label>General Enquiry</label>
                  </div>
                  <div className="flex flex-row justify-start space-x-4 border border-grey-medium rounded-lg py-2 px-28">
                    <input type="checkbox" className="circle-checkbox" />
                    <label>Support Request</label>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col space-y-2">
                  <label className="text-lg">General Message</label>
                  <input
                    type="text"
                    id="text"
                    value={userInfo}
                    className="border border-grey-medium rounded-lg py-6 px-4 text-lg"
                  />
                </div>
              </div>
              {/* consent checkbox */}
              <div className="flex flex-row space-x-4 items-center justify-start pt-6 pb-6">
                <input type="checkbox" id="consent" name="consent" />
                <label htmlFor="consent" className="text-grey-dark">
                  I hereby consent to being contacted by the team
                </label>
              </div>
              {/* submit button */}
              <div className="flex flex-row items-center justify-center w-full h-full">
                <button className="bg-green-medium rounded-lg py-4 px-80">
                  <span className="text-white">Submit</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
