import './notifications.css';


import { Sidebar, TrendsBar, NotificationBar } from '../../components'


const Notifications = () => {
  return (
    <div className="notifications">
      <Sidebar />

      <div className="notifications__feed">
        <NotificationBar />
      </div>

      <TrendsBar />
    </div>
  )
}

export default Notifications