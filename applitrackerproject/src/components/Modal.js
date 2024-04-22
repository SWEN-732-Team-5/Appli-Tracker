import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

const Modal = ({ isOpen, onClose, userProfile: initialUserProfile, onUpdate }) => {
  const [editMode, setEditMode] = useState(false);
  const [userProfile, setUserProfile] = useState(initialUserProfile);
  const [editedUsername, setEditedUsername] = useState(userProfile.username);
  const [editedLocation, setEditedLocation] = useState(userProfile.location);
  const [editedProfileImage, setEditedProfileImage] = useState(userProfile.profileImage);

  if (!isOpen) return null;

  // Define the renderDetail function here
  const renderDetail = (label, value, editable = false, onChange) => {
    return editable ? (
      <input
        type="text"
        value={value}
        onChange={onChange}
        style={inputStyle}
      />
    ) : (
      // Make sure to use backticks for template literals
      <div style={detailStyle}>{`${label}: ${value}`}</div>
    );
  };

  // Handle the profile image change
  const handleProfileImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditedProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle saving the edited details (you will need to implement this)
  const saveProfileEdits = () => {
    // Implement how you would save the changes to the user's profile here.
    // For example, you might set the state elsewhere in your app, or make an API call.
    // Update the userProfile state with the edited values
    const updatedProfile = {
      ...userProfile,
      username: editedUsername,
      location: editedLocation,
      profileImage: editedProfileImage,
    };

    onUpdate({
      ...userProfile,
      username: editedUsername,
      location: editedLocation,
      profileImage: editedProfileImage,
    });

    // Replace this with actual API call or state update logic as needed
    console.log('Updated Profile:', updatedProfile);

    // Update the local state to reflect the edited values
    setUserProfile(updatedProfile);
    // For now, just log the edited values and close the modal
    setEditMode(false); // Exit edit mode
  };

  return (
    <div style={modalOverlayStyle}>
      <div style={modalStyle}>
        {/* User Image */}
        {!editMode ? (
          <img src={editedProfileImage} alt="Profile" style={profileImageStyle} />
        ) : (
          <input type="file" onChange={handleProfileImageChange} style={inputStyle} />
        )}
        <div>
          {renderDetail('Username', editedUsername, editMode, (e) => setEditedUsername(e.target.value))}
          {renderDetail('Email-id', userProfile.email)}
          {renderDetail('Location', editedLocation, editMode, (e) => setEditedLocation(e.target.value))}
        </div>

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


// PropTypes validation
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  userProfile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    profileImage: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired, // Assuming 'email' is a string, adjust if different
    // Add additional PropTypes for other properties if needed
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
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