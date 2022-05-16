import React from 'react'
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About"
import Alert from './components/Alert';


function App() {

  const [mode, setMode] = React.useState("light")

  const [alert, setAlert] = React.useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743"
      showAlert("Dark mode has been enabled", "success")
      document.title = "Text Utils - Dark Mode"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enabled", "success")
      document.title = "Text Utils - Light Mode"
    }
  }

  return (
    <>
      <Navbar  mode={mode} title="TextUtils" aboutText="About TextUtils" changeMode={changeMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <About/> */}
        <TextForm mode={mode} changeMode={changeMode} showAlert={showAlert} heading="Enter the text to analyze below" />
      </div>
    </>
  );
}

export default App;
