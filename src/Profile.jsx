
import React from 'react';
import './Profile.css';

const Profile = ({ name, tagline, imageSrc, bio, email, phone, socialLinks }) => {
  return (
    <div className="profile-container">
      <img className="profile-image" src={imageSrc} alt={`${name}`} />
      <h1 className="profile-name">{name}</h1>
      <p className="profile-tagline">{tagline}</p>
      <p className="profile-bio">{bio}</p>

      <div className="profile-contact">
        <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
        <p><strong>Phone:</strong> <a href={`tel:${phone}`}>{phone}</a></p>
      </div>

      <div className="profile-social-links">
        {socialLinks.map((link, index) => (
          <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
            {link.platform}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Profile;
