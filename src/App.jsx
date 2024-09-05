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
              <div className="flex flex-row space-x-10 items-center">
                <Information title="First Name" value={userInfo} />
                <Information title="Last Name" value={userInfo} />
              </div>
              <div>
                <Information title="Email Address" value={userInfo} />
              </div>
              <div>
                <Information title="General Message" value={userInfo} />
              </div>
              <div>
                <input type="checkbox" id="consent" name="consent" />
                <label htmlFor="consent" className="text-grey-dark">
                  I hereby consent to being contacted by the team
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
