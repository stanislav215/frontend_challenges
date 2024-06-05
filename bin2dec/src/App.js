import React, { useState } from 'react';

function App()   {
  const [appState,setAppstate] = useState({
    binary: "",
    decimal: ""
  })
  const binaryChangeHandler = (e) =>{
    let num = e.target.value
    var regExp = /[a-zA-Z2-9]/g;

    const a = "dsadsdsadsadsaadas"
    if(regExp.test(num)|| num ===""){
      setAppstate({
        binary: num,
        decimal: "Please insert a valid number"
      })
    }else{
      setAppstate({
        binary: num,
        decimal: bin_to_dec(num)
      })
    }
  }
  const decimalChangeHandler = (e) =>{
    setAppstate({
      binary: "",
      decimal: ""
    })
    let num = e.target.value
    var regExp = /[a-zA-Z]/g;
    if(regExp.test(num)|| num ===""){
      setAppstate({
        binary: "Please insert a valid number",
        decimal: num
      })
    }else{
      setAppstate({
        binary: dec2bin(num),
        decimal: num
      })
    }
    
  }
  function dec2bin(dec){
    return (dec >>> 0).toString(2);
  }
  function bin_to_dec(bstr) { 
    return parseInt((bstr + '')
    .replace(/[^01]/gi, ''), 2);
}
  function handleButton(){
    setAppstate({
      binary: "",
      decimal: ""
    })
  }
    return (
      <div>
        <h1>Decimal to binary Converter</h1>
        <div className="App">
        <form>
          <div>
            <input autoComplete="off" type="text" value={appState.decimal} placeholder="Decimal number" name="dec" onChange={decimalChangeHandler} />
          </div>
        
          <div>
            <input autoComplete="off" type="text" value={appState.binary}  placeholder="Binary number" name="dec" onChange={binaryChangeHandler} />
          </div>
          <button type="reset" onClick={handleButton}>Clear</button>
        </form>
      </div>

      </div>
      
    );
  }

export default App;
