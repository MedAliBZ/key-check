import React, { useEffect,useState } from 'react';
import './App.css';
import CardDark from './card/card'





function App() {
  const [keyCode, setkeyCode] = useState()
  const [Key, setKey] = useState()
  const [code, setCode] = useState()
  const [location, setLocation] = useState()


  useEffect(() => {
    document.addEventListener('keydown', function (e) {
      document.getElementById("keyPressed").innerHTML=e.code!=='Space'?e.key:'Space';
      document.getElementById("keyPressed").style.fontSize='100px'
      console.log(e.keyCode)
      console.log(e.key)
      console.log(e.code)
      console.log(e.location)
      setkeyCode(e.keyCode)
      setKey(e.key)
      setCode(e.code)
      setLocation(e.location)
    })
    return () => {
      document.removeEventListener('keydown', function (e) {
        console.log(e.keyCode)
        console.log(e.key)
        console.log(e.code)
        console.log(e.location)
        setkeyCode(e.keyCode)
        setKey(e.key)
        setCode(e.code)
        setLocation(e.location)
      });
    }
  })

  return (
    <div id="App">
      <h3 id='keyPressed'>Press any key to get the Javascript event code</h3>
      {keyCode?<div id='cards'>
      <CardDark header='e.keyCode' bodycard={keyCode}/>
      <CardDark header='e.key' bodycard={Key}/>
      <CardDark header='e.code' bodycard={code}/>
      <CardDark header='e.location' bodycard={location}/>
      </div>:null}
    </div>
  );
}

export default App;
