import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, userProfile }) => {
  const [editMode, setEditMode] = useState(false);
  const [editedUsername, setEditedUsername] = useState(userProfile.username);
  const [editedLocation, setEditedLocation] = useState(userProfile.location);
  const [editedProfileImage, setEditedProfileImage] = useState(userProfile.profileImage);

  if (!isOpen) return null;

  // Handle the profile image change
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEditedProfileImage(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Handle saving the edited details (you will need to implement this)
  const saveProfileEdits = () => {
    // Implement how you would save the changes to the user's profile here.
    // For example, you might set the state elsewhere in your app, or make an API call.

    // For now, just log the edited values and close the modal
    console.log(editedUsername, editedLocation, editedProfileImage);
    setEditMode(false); // Exit edit mode
    onClose(); // Close the modal
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalStyle}>
        {/* User Image */}
        {!editMode ? (
          <img src={editedProfileImage} alt="Profile" style={profileImageStyle} />
        ) : (
          <input type="file" onChange={handleProfileImageChange} />
        )}

        {/* User Information */}
        {!editMode ? (
          <div>
            <div style={detailStyle}>Username: {editedUsername}</div>
            <div style={detailStyle}>Email-id: {userProfile.email}</div>
            <div style={detailStyle}>Location: {editedLocation}</div>
          </div>
        ) : (
            <div>
            <input
            type="text"
            value={editedUsername}
            onChange={(e) => setEditedUsername(e.target.value)}
            style={inputStyle} // Make sure you define this style
            />
            {/* Email is not editable, so we do not provide an input for it */}
            <div style={{ ...detailStyle, margin: '20px 0' }}>Email-id: {userProfile.email}</div>
            <input
            type="text"
            value={editedLocation}
            onChange={(e) => setEditedLocation(e.target.value)}
            style={inputStyle} // Make sure you define this style
            />
            <input
            type="file"
            onChange={handleProfileImageChange}
            style={inputStyle} // Make sure you define this style
            />
            </div>  
        )}

        {/* Buttons */}
        <div style={buttonContainerStyle}>
          {!editMode ? (
            <button style={buttonStyle} onClick={() => setEditMode(true)}>
              Edit Profile
            </button>
          ) : (
            <button style={buttonStyle} onClick={saveProfileEdits}>
              Save
            </button>
          )}
          <button style={buttonStyle} onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// Styles

const inputStyle = {
    width: '100%', // Full-width inputs
    padding: '10px', // Padding for input
    marginBottom: '10px', // Margin bottom for spacing
    borderRadius: '5px', // Border radius to match your design
    border: '1px solid #ccc', // Border to match your design
};
  

const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
  zIndex: 1000,
};

const modalStyle = {
  padding: '20px',
  background: 'white',
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',
  minWidth: '300px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  position: 'relative',
};

const profileImageStyle = {
  width: '100px',
  height: '100px',
  borderRadius: '50%',
  objectFit: 'cover',
  margin: '20px auto',
};

const detailStyle = {
  marginBottom: '20px',
  lineHeight: '1.6',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 'auto',
  paddingTop: '20px',
  borderTop: '1px solid #ccc',
};

const buttonStyle = {
  backgroundColor: '#f5f5f5',
  color: '#333',
  border: 'none',
  borderRadius: '5px',
  padding: '10px 20px',
  cursor: 'pointer',
  marginLeft: '10px',
  transition: 'background-color 0.3s',
};

export default Modal;