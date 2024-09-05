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
            <div>
              <form className="flex flex-row space-x-10 items-center">
                <Information title="First Name" value={userInfo} />
                <Information title="Last Name" value={userInfo} />
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
