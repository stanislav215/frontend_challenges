import Layout from "./components/Layout/Layout"
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder"
import Checkout from "./containers/Checkout/Checkout"
import Orders from "./components/Orders/Orders"
import {Route,Switch} from "react-router-dom"
function App() {
  return (
    <div className="App">
        <Layout>
          <Switch>
            <Route path="/Checkout" component={Checkout}/>
            <Route path="/Orders" component={Orders}/>
            <Route path="/" exact component={BurgerBuilder}/>
          </Switch>
         
        </Layout>

    </div>
  );
}

export default App;
