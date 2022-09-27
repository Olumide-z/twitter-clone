import './mention.css';
import '../notifications/notifications.css'
import { NotificationBar, Sidebar, TrendsBar } from '../../components'


const Mention = () => {
  return (
    <div className="mentions">
        <Sidebar />
        <div className="mentions__feed">
            <NotificationBar />
        </div>
        <TrendsBar />
    </div>
  )
}

export default Mention