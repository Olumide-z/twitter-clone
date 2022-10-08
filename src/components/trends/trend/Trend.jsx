import './trend.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Trend = ({ trend }) => {
  return (
    <div className="trend" key={trend.id}>
    <div>
      <span>{trend.trend}  · Trending</span>
      <p>{trend.title}</p>
      <span>{trend.tweet} Tweets</span>
    </div>
    <button><MoreHorizIcon /></button>
    </div>
  )
}

export default Trend