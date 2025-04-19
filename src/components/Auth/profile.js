import React, { useState, useEffect } from 'react';

const Profile = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const userProfile = localStorage.getItem('userProfile');
        if (userProfile) {
            setProfile(JSON.parse(userProfile)); // Populate profile data
        }
    }, []);

    if (!profile) {
        return <div>Loading profile...</div>;
    }

    return (
        <div className="profile-container">
            <h2>{profile.fullName}'s Profile</h2>
            <p>Email: {profile.email}</p>
            <p>Phone: {profile.phone}</p>
            <p>Location: {profile.location}</p>
            <p>Age: {profile.age}</p>
            <p>Gender: {profile.gender}</p>
            <p>Occupation: {profile.occupation}</p>
            <p>Education: {profile.education}</p>
            <p>Goals: {profile.goals}</p>
            <p>Prior Knowledge: {profile.priorKnowledge}</p>
            <p>Language Preference: {profile.languagePreference}</p>
            <p>Reason for Joining: {profile.reasonForJoining}</p>
            {/* Add more fields as necessary */}
        </div>
    );
};

export default Profile;
