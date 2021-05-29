import {Switch, Route , withRouter} from 'react-router-dom'
import Routes from './routes'
import 'antd/dist/antd.css'; 
import './assets/style/style.css'
import "tailwindcss/tailwind.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'react-multi-carousel/lib/styles.css';

const App=()=>{
  return(
    <Switch>
      <Route path="/" component={Routes} />
    </Switch>
  )
}
export default withRouter(App);