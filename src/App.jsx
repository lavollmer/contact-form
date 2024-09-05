import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <div className="screen">
        <div className="boxy">
          <div>
            <h1 className="text-grey-dark font-bold text-4xl">Contact Us</h1>
          </div>
          {/* first line of the form */}
          <div>
            <div>
              <form className="flex flex-row justify-between items-center">
                <div className="flex flex-col justify-start space-y-2">
                  <label className="text-md">First Name</label>
                  <input type="text" id="text" className="border border-grey-medium rounded-lg" />
                </div>
                <div>
                  <label>Last Name</label>
                  <input type="text" id="text" />
                </div>
              </form>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
