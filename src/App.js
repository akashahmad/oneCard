import {Switch, Route} from 'react-router-dom'
import Routes from './routes'
import 'antd/dist/antd.css'; 
import './assets/style/style.css'
import "tailwindcss/tailwind.css"

const App=()=>{
  return(
    <Switch>
      <Route path="/" component={Routes} />
    </Switch>
  )
}
export default App;