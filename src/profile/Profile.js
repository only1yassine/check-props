import React from 'react';
import PropTypes from 'prop-types';
import './Profile.css';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
return (
    <div style={styles.container}>
    <div style={styles.imageContainer}>{children}</div>
    <div>
        <h1>{fullName}</h1>
        <h2>{profession}</h2>
        <p>{bio}</p>
        <button onClick={() => handleName(fullName)}>button</button>
    </div>
    </div>
);
};

Profile.defaultProps = {
fullName: 'YASSINE',
bio: 'THIS IS SOO EZ.',
profession: 'Developer',
};

Profile.propTypes = {
fullName: PropTypes.string.isRequired,
bio: PropTypes.string.isRequired,
profession: PropTypes.string.isRequired,
children: PropTypes.element.isRequired,
handleName: PropTypes.func.isRequired,
};

const styles = {
container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '50px',
},
imageContainer: {
    marginRight: '50px',
},
};

export default Profile;


