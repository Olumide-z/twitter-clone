import './trends.css';

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Trends = ({ bgColor, bRadius, big}) => {
  return (
    <div className="trends" 
    style={{ background: bgColor && '#f7f9f9', width: big ? '100%' : '85%', borderRadius: bRadius && '1rem'}}
    >
        <h3>Trends for you</h3>

        <div className="trend">
          <div>
            <span>Sports  · Trending</span>
            <p>London Cowboys</p>
            <span>2,165 Tweets</span>
          </div>
          <button><MoreHorizIcon /></button>
        </div> 
        
    </div>
  )
}

export default Trends