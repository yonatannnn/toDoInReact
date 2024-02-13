import React from 'react';
import './Styles.css'; // Import your CSS file

const Activities = () => {
  return (
    <div className="activity-container">
      <div className="title-container">
        Title
      </div>
      <div className='id-container'>
        User ID
        <div>ID</div>
        <div>Complete</div>
      </div>
      <button>Delete</button>
    </div>
  );
};

export default Activities;
