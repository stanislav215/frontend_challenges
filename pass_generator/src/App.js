import React from "react"
import CheckBox from "./CheckBox" 
import passWordGen from "./passWordGen"
import copy from "./img.png"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      GeneratedPass: "",
      passLen: "10",
      appCase: true,
      lowCase: true,
      numbers: true,
      symbols: true,
      CopiedAnim:"0"
    };
    this.onInputChange = this.onInputChange.bind(this)
    this.onGeneratePassword  = this.onGeneratePassword.bind(this)
  }
  componentDidMount(){
    this.onGeneratePassword()
  }
  onInputChange(e){
    const value = (e.target.validity.valid) ? //checking if input is valid for PassLen
      (e.target.type === "checkbox" ? e.target.checked : e.target.value): //checking if checkbox
      (e.target.value.slice(0, -1))
    this.setState({
      [e.target.name]:value
    })
  }
  onGeneratePassword(){
    var regStr=this.prepareRegEx()
    if(regStr!=="[]"){
      this.setState({
        GeneratedPass:passWordGen.generate(parseInt(this.state.passLen),new RegExp(regStr))
      })
    }
    else{
      alert("Please, choose at least one option")
    }
    
  }
  onCopyClick(){
    this.input.select();
    document.execCommand('copy');
    this.setState({CopiedAnim:"1"})
  }
  prepareRegEx(){
    var regex = ""
    console.log(this.state.lowCase)
    regex+= this.state.appCase? "A-Z":""
    regex+= this.state.lowCase? "a-z":""
    regex+= this.state.numbers? "0-9":""
    regex+= this.state.symbols? "$-/:-?{-~!":""
    regex = "["+ regex+"]"
    return regex
  
  }  

  render() {
    return (
      <div className="App">
        <h1>Password Generator</h1>
        <div className="container">
          <div className="resultCon">
            <input 
              id="Password" 
              type="text"
              ref={(input) => this.input = input} 
              value={this.state.GeneratedPass} 
              name="GeneratedPass" 
              onChange={this.onInputChange}/>
    
            <input type="image" id="copyBut" src={copy} onClick={this.onCopyClick.bind(this)} alt="copy" />
          </div>
            <div id="checkboxes">
              <ul>
                  <li>Password length<input 
                    maxLength="3"
                    pattern="[0-9]*"
                    type="text" 
                    name="passLen"
                    value={this.state.passLen} 
                    onChange={this.onInputChange}
                  /></li>
                  <CheckBox
                    text="Include appercase letters"
                    name="appCase"
                    checked={this.state.appCase}
                    onChange={this.onInputChange}
                  />
                  <CheckBox
                    text="Include lowercase letters"
                    name="lowCase"
                    checked={this.state.lowCase}
                    onChange={this.onInputChange}
                  />
                  <CheckBox
                    text="Include numbers"
                    name="numbers"
                    checked={this.state.numbers}
                    onChange={this.onInputChange}
                  />
                  <CheckBox
                    text="Include symbols"
                    name="symbols"
                    checked={this.state.symbols}
                    onChange={this.onInputChange}
                  />       
              </ul>
            </div>
            <button className="generateButt" onClick={this.onGeneratePassword}>Generate password</button>
        </div>
        <div className="copied" 
         onAnimationEnd={()=> this.setState({CopiedAnim:"0"})}
          animation={this.state.CopiedAnim}>
          <span>✓</span>
          <span id="smaller">Copied</span>

        </div>
      </div>
    );
  }
}
export default App;




