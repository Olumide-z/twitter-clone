import './trends.css';

import { trends } from './trend/data';
import Trend from './trend/Trend';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Trends = ({ bgColor, bRadius, big}) => {
  const [allTrend, setAllTrend] = useState(trends.slice(0, 5))

  return (
    <div className={bgColor ? 'trends trendsColor' : 'trends'} 
    style={{ width: big ? '100%' : '85%', borderRadius: bRadius && '1rem'}}
    >
        <h3>Trends for you</h3>
  
          {allTrend.map((trend) => (
            <Trend trend={trend}/>
          ))}
        
        <div className="trends__link">
          <Link to='/i/trends' className='links'><p>Show More</p></Link>
        </div>
    </div>
  )
}

export default Trends