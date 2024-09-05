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
          <div>
            <form className="flex flex-col">
              {/* input boxes with reusable box */}
              <div className="flex flex-row space-x-10 items-center">
                <Information title="First Name" value={userInfo} />
                <Information title="Last Name" value={userInfo} />
              </div>
              <div>
                <Information title="Email Address" value={userInfo} />
              </div>
              {/* Query type */}
              <div className="flex flex-col">
                <div>
                  <h2>Query Type</h2>
                </div>
                <div className="flex flex-row justify-center items-center">
                  <div className="border border-grey-medium rounded-lg">
                    <label>General Enquiry</label>
                    <input type="checkbox" className="circle-checkbox" />
                  </div>
                  <div className="border border-grey-medium rounded-lg">
                    <label>Support Request</label>
                    <input type="checkbox" className="circle-checkbox" />
                  </div>
                </div>
              </div>
              <div>
                <Information title="General Message" value={userInfo} />
              </div>
              {/* consent checkbox */}
              <div>
                <input type="checkbox" id="consent" name="consent" />
                <label htmlFor="consent" className="text-grey-dark">
                  I hereby consent to being contacted by the team
                </label>
              </div>
              {/* submit button */}
              <button className="bg-green-medium rounded-lg py-2 px-8">
                <span className="text-white">Submit</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
