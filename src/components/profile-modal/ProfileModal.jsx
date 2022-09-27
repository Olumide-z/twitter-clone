import "./profileModal.css";

import { Navbar, ProfilePicture } from "../../components";
import { useState } from "react";

const ProfileModal = () => {
  const [name, setName] = useState(false);

  return (
    <div className="profile__modal">
      <div className="modal__content">
        <Navbar title="Edit Profile" button="true" icon1="true" />
        <ProfilePicture small />

        <form>
          <div className="form-group">
            <input type="text" className="modalForm-name"/>
            <label>Name</label>
          </div>
          <div className="form-group">
            <input type="text" className="modalForm-bio"/>
            <label>Bio</label>
          </div>
          <div className="form-group">
            <input type="text" className="modalForm-location"/>
            <label>Location</label>
          </div>
          <div className="form-group">
            <input type="text" className="modalForm-web"/>
            <label>Website</label>
          </div>
        </form>

      </div>
    </div>
  );
};

export default ProfileModal;
