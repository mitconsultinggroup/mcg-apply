import React,  { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Profile = ({ candidate, onClose }) => {
    const { userId } = useParams();
    const [userData, setUserData] = useState(null);

    useEffect (() => {
        const fetchUserData = async () => {
            try {
              const response = await fetch(`/api/users/${userId}`);
              if (response.ok) {
                const userData = await response.json();
                setUserData(userData);
              } else {
                // Handle error
              }
            } catch (error) {
              // Handle error
            }
          };
      
          fetchUserData();


    }, [userId]);

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{candidate}'s Profile</h2>
      </div>
    </div>
  );
};

export default Profile;

