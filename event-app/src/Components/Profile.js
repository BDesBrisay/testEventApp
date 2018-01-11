import React from 'react';
import './Profile.css';
import image from '../wisteria.jpg';

const Profile = () => {
  const sampleProfile = {
    email: 'batman@wayne.com',
    name: 'Bruce Wayne',
    profileImage: image,
    tags: ['Fighting Crime', 'Flying', 'Combat', 'Bats', 'Black', 'Enterprise Industries'],
    about: 'My name is Bruce Wayne and I have a lot of money. I know how to fight because I climbed to the top of a mountain that had a temple on the top of it.',
    createdAt: 'Jul 4, 2018'
  }

  return (
    <div className='profileContain'>
      <div className='profileHeader'>
        {'profileImage' in sampleProfile && <img src={sampleProfile.profileImage} alt='Profile' className='profileImage'/>}
        {'name' in sampleProfile && <h2 className='profileName'>{sampleProfile.name}</h2>}
        {'email' in sampleProfile && <p className='profileEmail'>{sampleProfile.email}</p>}
      </div>
      <div className='profileInfo'>
        {'tags' in sampleProfile &&
          <div className='profileTagsContain'>
            {sampleProfile.tags.map((tag, index) => (
              <div className='profileTag'>{tag}</div>
            ))}
          </div>}
        {'about' in sampleProfile &&
          <div className='profileBio'>
            <p>{sampleProfile.about}</p>
          </div>}
      </div>
    </div>
  );
};

export default Profile;
