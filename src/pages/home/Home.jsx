import './home.css';

import { Sidebar, HomeFeeds, TrendsBar } from '../../components/index';

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <HomeFeeds />
      <TrendsBar />
    </div>
  )
}

export default Home