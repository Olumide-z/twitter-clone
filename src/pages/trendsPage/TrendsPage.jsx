import { Navbar, Sidebar, TrendsBar, WhoToFollow } from '../../components';
import './trendsPage.css';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import { trends } from '../../components/trends/trend/data';
import Trend from '../../components/trends/trend/Trend';

const TrendsPage = () => {
    const [allTrends, setAllTrends] = useState(trends);

  return (
    <div className="trendsPage">
        <Sidebar />
        <div className="trendsPage__trends">
            <Navbar title='Trends' Icon={SettingsIcon}/>
            {allTrends.map((trend) => (
                <Trend trend={trend}/>
            ))}
        </div>
        <WhoToFollow />
    </div>
  )
}

export default TrendsPage