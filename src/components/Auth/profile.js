import React, { useState, useEffect } from "react";
import "../../styles/Profile.css";

const Profile = () => {
    const [profile, setProfile] = useState(null);  // Profile data state
    const [isEditing, setIsEditing] = useState(false);  // Flag for editing mode
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        gender: '',
        countryCode: ''
    });  // Form data state

    // On component mount, load profile from localStorage
    useEffect(() => {
        const userProfile = localStorage.getItem("userProfile");  // Get profile from localStorage
        if (userProfile) {
            const parsedProfile = JSON.parse(userProfile);  // Parse the profile data
            setProfile(parsedProfile);  // Set profile data in state
            setFormData(parsedProfile);  // Pre-populate form fields with profile data
        } else {
            console.log("No profile found in localStorage");
        }
    }, []);

    // Handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));  // Update form data
    };

    // Handle form submission (saving profile)
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Save the updated profile to localStorage
        localStorage.setItem("userProfile", JSON.stringify(formData));  // Save profile as a string

        setProfile(formData);  // Update profile state
        setIsEditing(false);  // Exit editing mode
    };

    if (!profile) {
        return <div className="loading-message">Loading profile...</div>;  // Show loading message if profile is not available
    }
    return (
        <div className="profile-container">
            <div className="profile-header">
                <h2>{profile.fullName}'s Profile</h2>
                <p className="profile-email">Email: {profile.email}</p>
                <button
                    className="edit-button"
                    onClick={() => setIsEditing(!isEditing)}
                >
                    {isEditing ? "Cancel" : "Edit"}
                </button>
            </div>

            {isEditing ? (
                <form onSubmit={handleFormSubmit} className="profile-form">
                    <div className="profile-section">
                        <h3>Personal Information</h3>
                        <label>
                            Full Name:
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Phone:
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Age:
                            <input
                                type="number"
                                name="age"
                                value={formData.age || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Location:
                            <input
                                type="text"
                                name="location"
                                value={formData.location || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>

                    <div className="profile-section">
                        <h3>Professional Information</h3>
                        <label>
                            Occupation:
                            <input
                                type="text"
                                name="occupation"
                                value={formData.occupation || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Education:
                            <input
                                type="text"
                                name="education"
                                value={formData.education || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Work Experience:
                            <input
                                type="text"
                                name="workExp"
                                value={formData.workExp || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>

                    <div className="profile-section">
                        <h3>Learning Information</h3>
                        <label>
                            Goals:
                            <input
                                type="text"
                                name="goals"
                                value={formData.goals || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Prior Knowledge:
                            <input
                                type="text"
                                name="priorKnowledge"
                                value={formData.priorKnowledge || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Reason for Joining:
                            <input
                                type="text"
                                name="reasonForJoining"
                                value={formData.reasonForJoining || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Language Preference:
                            <input
                                type="text"
                                name="languagePreference"
                                value={formData.languagePreference || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>

                    <div className="profile-section">
                        <h3>Additional Information</h3>
                        <label>
                            Referral Source:
                            <input
                                type="text"
                                name="referralSource"
                                value={formData.referralSource || ""}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Has Laptop/Smartphone:
                            <input
                                type="checkbox"
                                name="hasLaptopOrSmartphone"
                                checked={formData.hasLaptopOrSmartphone || false}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Has Internet Access:
                            <input
                                type="checkbox"
                                name="hasInternetAccess"
                                checked={formData.hasInternetAccess || false}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Preferred Instructor Gender:
                            <select
                                name="preferredInstructorGender"
                                value={formData.preferredInstructorGender || "noPreference"}
                                onChange={handleInputChange}
                            >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="noPreference">No Preference</option>
                            </select>
                        </label>
                    </div>

                    <div className="form-footer">
                        <button type="submit">Save Changes</button>
                    </div>
                </form>
            ) : (
                <div className="profile-details">
                    <div className="profile-section">
                        <h3>Personal Information</h3>
                        <p><strong>Phone:</strong> {profile.phone}</p>
                        <p><strong>Location:</strong> {profile.location}</p>
                        <p><strong>Age:</strong> {profile.age}</p>
                        <p><strong>Gender:</strong> {profile.gender}</p>
                    </div>

                    <div className="profile-section">
                        <h3>Professional Information</h3>
                        <p><strong>Occupation:</strong> {profile.occupation}</p>
                        <p><strong>Education:</strong> {profile.education}</p>
                        <p><strong>Work Experience:</strong> {profile.workExp || "N/A"}</p>
                    </div>

                    <div className="profile-section">
                        <h3>Learning Information</h3>
                        <p><strong>Goals:</strong> {profile.goals}</p>
                        <p><strong>Prior Knowledge:</strong> {profile.priorKnowledge || "N/A"}</p>
                        <p><strong>Reason for Joining:</strong> {profile.reasonForJoining}</p>
                        <p><strong>Language Preference:</strong> {profile.languagePreference}</p>
                    </div>

                    <div className="profile-section">
                        <h3>Additional Information</h3>
                        <p><strong>Referral Source:</strong> {profile.referralSource || "N/A"}</p>
                        <p><strong>Has Laptop/Smartphone:</strong> {profile.hasLaptopOrSmartphone ? "Yes" : "No"}</p>
                        <p><strong>Has Internet Access:</strong> {profile.hasInternetAccess ? "Yes" : "No"}</p>
                        <p><strong>Preferred Instructor Gender:</strong> {profile.preferredInstructorGender}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile;
