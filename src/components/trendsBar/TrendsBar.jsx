import './trendsBar.css'
import { Search, Trends } from '../index';


const TrendsBar = () => {
  return (
    <div className="trendsbar">
      <Search bgColor='true'/>

      <div className="trendsbar__trends">
        <Trends bgColor='true' bRadius='true'/>
      </div>

    </div>
  )
}

export default TrendsBar