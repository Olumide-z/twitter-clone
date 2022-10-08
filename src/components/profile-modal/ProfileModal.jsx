import "./profileModal.css";

import { Navbar, ProfilePicture } from "../../components";
import { useState } from "react";

const ProfileModal = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [location, setLocation] = useState('');
  const [website, setWebsite] = useState('');

  return (
    <div className="profile__modal">
      <div className="modal__content">
        <Navbar title="Edit Profile" button="true" icon1="true" />
        <ProfilePicture small />

        <form>
          <div className="form-group">
            <input type="text" className="modalForm-name" value={name} onChange={e => setName(e.target.value)}/>
            <label className={name.length > 0 && 'form_label'}>Name</label>
          </div>
          <div className="form-group">
            <input type="text" className="modalForm-bio" value={bio} onChange={e => setBio(e.target.value)}/>
            <label className={bio.length > 0 && 'form_label'}>Bio</label>
          </div>
          <div className="form-group">
            <input type="text" className="modalForm-location" value={location} onChange={e => setLocation(e.target.value)}/>
            <label className={location.length > 0 && 'form_label'}>Location</label>
          </div>
          <div className="form-group">
            <input type="text" className="modalForm-web" value={website} onChange={e => setWebsite(e.target.value)}/>
            <label className={website.length > 0 && 'form_label'}>Website</label>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ProfileModal;
