import React, { useState } from "react";
import "../../styles/AllCareersPage.css";

const careerPaths = [
    {
        id: 1,
        title: "Sign Language Interpreter",
        snippet: "Master sign language to bridge communication gaps in various settings.",
        details: "Sign Language Interpreters work in schools, hospitals, and businesses to help Deaf and hard-of-hearing individuals communicate. Strong ASL skills and cultural awareness are key.",
        credentials: ["ASL Certification", "BS in Deaf Studies"],
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop",
        jobInfo: { averageSalary: "₹30,000/mo", openings: "12,000+ openings" },
    },
    {
        id: 2,
        title: "Deaf Educator",
        snippet: "Help Deaf students excel academically through sign language teaching.",
        details: "Deaf Educators specialize in teaching Deaf students using ASL or other visual communication methods, often working in specialized schools or mainstream classrooms with interpreters.",
        credentials: ["MA in Deaf Education", "TESOL for ASL"],
        imageUrl: "https://plus.unsplash.com/premium_photo-1689708721750-8a0e6dc14cee?q=80&w=1170&auto=format&fit=crop",
        jobInfo: { averageSalary: "₹35,000/mo", openings: "8,000+ openings" },
    },
    {
        id: 3,
        title: "Speech-Language Pathologist",
        snippet: "Combine speech therapy with sign language to improve communication.",
        details: "Speech-Language Pathologists (SLPs) use sign language and other methods to assist individuals with speech and communication disorders, working in clinics, schools, and hospitals.",
        credentials: ["Speech Pathology MS", "ASL Proficiency"],
        imageUrl: "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1169&auto=format&fit=crop",
        jobInfo: { averageSalary: "₹40,000/mo", openings: "10,000+ openings" },
    },
    {
        id: 4,
        title: "Community Advocate",
        snippet: "Advocate for Deaf accessibility, culture, and inclusivity.",
        details: "Community Advocates work with nonprofits, government agencies, and organizations to promote policies and programs that improve Deaf accessibility and rights.",
        credentials: ["Deaf Culture Studies", "Nonprofit Experience"],
        imageUrl: "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=1169&auto=format&fit=crop",
        jobInfo: { averageSalary: "₹28,000/mo", openings: "5,000+ openings" },
    },
    {
        "id": 5,
        "title": "ASL Instructor",
        "snippet": "Teach American Sign Language to students of all levels.",
        "details": "ASL Instructors work in schools, colleges, and private institutions to teach sign language to students, professionals, and families of Deaf individuals. A strong background in ASL linguistics is essential.",
        "credentials": ["ASL Teaching Certification", "Degree in ASL Linguistics"],
        "imageUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop",
        "jobInfo": { "averageSalary": "₹32,000/mo", "openings": "7,000+ openings" }
    },
    {
        "id": 6,
        "title": "Deaf Services Coordinator",
        "snippet": "Ensure accessibility services for the Deaf community.",
        "details": "Deaf Services Coordinators work with organizations to ensure proper communication accessibility through sign language interpreters, assistive technology, and advocacy programs.",
        "credentials": ["Deaf Studies Degree", "ADA Compliance Training"],
        "imageUrl": "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1169&auto=format&fit=crop",
        "jobInfo": { "averageSalary": "₹38,000/mo", "openings": "6,500+ openings" }
    },
    {
        "id": 7,
        "title": "Closed Captioning Specialist",
        "snippet": "Create accurate subtitles for Deaf and hard-of-hearing audiences.",
        "details": "Closed Captioning Specialists transcribe and sync captions for TV shows, films, and online videos, ensuring accessibility for the Deaf community.",
        "credentials": ["Captioning Certification", "Fast Typing Skills"],
        "imageUrl": "https://plus.unsplash.com/premium_photo-1689708721750-8a0e6dc14cee?q=80&w=1170&auto=format&fit=crop",
        "jobInfo": { "averageSalary": "₹25,000/mo", "openings": "4,000+ openings" }
    },
    {
        "id": 8,
        "title": "Deaf Mental Health Counselor",
        "snippet": "Provide therapy and support to Deaf individuals.",
        "details": "Deaf Mental Health Counselors offer therapy and mental health services to Deaf and hard-of-hearing individuals, using ASL and culturally sensitive approaches.",
        "credentials": ["Counseling Degree", "Fluency in ASL"],
        "imageUrl": "https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1169&auto=format&fit=crop",
        "jobInfo": { "averageSalary": "₹42,000/mo", "openings": "3,500+ openings" }
    },
    {
        "id": 9,
        "title": "Assistive Technology Specialist",
        "snippet": "Develop and implement technology solutions for Deaf accessibility.",
        "details": "Assistive Technology Specialists work on devices and software that enhance communication for the Deaf, such as captioning tools, video relay services, and hearing aids.",
        "credentials": ["Tech or Engineering Degree", "Knowledge of Accessibility Laws"],
        "imageUrl": "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=1169&auto=format&fit=crop",
        "jobInfo": { "averageSalary": "₹50,000/mo", "openings": "5,500+ openings" }
    },
    {
        "id": 10,
        "title": "Deaf Sports Coach",
        "snippet": "Train and mentor Deaf athletes in competitive sports.",
        "details": "Deaf Sports Coaches work with athletes in Deaf leagues and competitions, ensuring communication is clear and accessible during training and games.",
        "credentials": ["Sports Coaching Degree", "ASL Fluency"],
        "imageUrl": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crophttps://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop",
        "jobInfo": { "averageSalary": "₹30,000/mo", "openings": "2,000+ openings" }
    },
];

const careerResources = [
    { id: 1, title: "Why Learn Sign Language?", date: "April 1, 2024", readTime: "6 min read", snippet: "Discover the benefits of learning sign language and how it bridges communication gaps.", category: "General" },
    { id: 2, title: "How to Become a Sign Language Interpreter?", date: "May 15, 2024", readTime: "7 min read", snippet: "A step-by-step guide to becoming a certified sign language interpreter.", category: "Career Path Planning" },
    { id: 3, title: "Top Online Resources for Learning Sign Language", date: "June 10, 2024", readTime: "8 min read", snippet: "Explore the best online platforms and apps for learning sign language at home.", category: "Skills" },
    { id: 4, title: "What Is American Sign Language (ASL)?", date: "July 5, 2024", readTime: "5 min read", snippet: "Understand the basics of ASL and how it differs from other sign languages.", category: "General" },
    { id: 5, title: "Sign Language Careers: What Are Your Options?", date: "August 20, 2024", readTime: "9 min read", snippet: "Explore career opportunities in sign language interpretation, education, and accessibility services.", category: "Career Advice" },
    { id: 6, title: "How to Improve Your ASL Fluency?", date: "September 15, 2024", readTime: "7 min read", snippet: "Advanced tips and techniques to enhance your ASL skills.", category: "Skills" },
    { id: 7, title: "The Importance of Sign Language in Education", date: "October 10, 2024", readTime: "8 min read", snippet: "How sign language supports inclusive education for deaf and hard-of-hearing students.", category: "General" },
    { id: 8, title: "Becoming a Deaf Educator: A Career Guide", date: "November 12, 2024", readTime: "10 min read", snippet: "Learn how to become a teacher specializing in deaf education.", category: "Career Path Planning" },
    { id: 9, title: "Sign Language and Technology: What’s New?", date: "December 5, 2024", readTime: "6 min read", snippet: "Discover innovative tech solutions enhancing communication for the deaf community.", category: "General" },
    { id: 10, title: "How to Teach Sign Language to Kids?", date: "January 8, 2025", readTime: "5 min read", snippet: "Fun and interactive ways to introduce sign language to children.", category: "Skills" },
    { id: 11, title: "The Role of Sign Language in Healthcare", date: "February 18, 2025", readTime: "7 min read", snippet: "Why medical professionals should learn basic sign language for better patient care.", category: "Career Advice" },
    { id: 12, title: "How to Start a Sign Language Learning Business?", date: "March 10, 2025", readTime: "9 min read", snippet: "Steps to launch your own online or in-person sign language teaching platform.", category: "Career Path Planning" },
    { id: 13, title: "Common Mistakes When Learning Sign Language", date: "April 22, 2025", readTime: "6 min read", snippet: "Avoid these common pitfalls to speed up your sign language learning.", category: "Skills" },
    { id: 14, title: "Best Books for Learning Sign Language", date: "May 15, 2025", readTime: "7 min read", snippet: "A list of must-read books to help you master sign language.", category: "General" },
    { id: 15, title: "How to Advocate for Deaf Accessibility?", date: "June 30, 2025", readTime: "8 min read", snippet: "Ways to support and promote accessibility for the deaf and hard-of-hearing community.", category: "Career Advice" }
];


const AllCareersPage = () => {
    const [expanded, setExpanded] = useState({});

    const toggleReadMore = (id) => {
        setExpanded((prevState) => ({
            ...prevState,
            [id]: !prevState[id]
        }));
    };

    const [showMore, setShowMore] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const toggleShowMore = () => setShowMore(!showMore);
    const filteredResources = selectedCategory === "All" ? careerResources : careerResources.filter(r => r.category === selectedCategory);


    return (
        <div className="all-careers-page">
            <h2>Explore All Career Paths</h2>
            <div className="career-cards">
                {careerPaths.map((path) => (
                    <div className="career-card" key={path.id}>
                        <img className="career-card-image" src={path.imageUrl} alt={path.title} />
                        <h3 className="career-card-title">{path.title}</h3>
                        <p className="career-card-snippet">{path.snippet}</p>
                        <p className="career-card-credentials">
                            <strong>Credentials:</strong> {path.credentials.join(", ")}
                        </p>
                        <p className="career-card-jobinfo">
                            <strong>Avg. Salary:</strong> {path.jobInfo.averageSalary} <br />
                            <strong>Openings:</strong> {path.jobInfo.openings}
                        </p>

                        {expanded[path.id] && (
                            <p className="career-card-details">{path.details}</p>
                        )}

                        <button className="read-more-button" onClick={() => toggleReadMore(path.id)}>
                            {expanded[path.id] ? "Read Less" : "Read More"}
                        </button>
                    </div>
                ))}
            </div>
            <div className="all-career-resources">
                <div className="career-resources">
                    <h3>Career Resources</h3>
                    <div className="filter-buttons">
                        {['All', 'General', 'Skills', 'Career Advice', 'Career Path Planning'].map(category => (
                            <button key={category} className={selectedCategory === category ? "active" : ""} onClick={() => setSelectedCategory(category)}>
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="resource-cards">
                        {filteredResources.slice(0, showMore ? filteredResources.length : 4).map(resource => (
                            <div className="resource-card" key={resource.id}>
                                <h4>{resource.title}</h4>
                                <p>{resource.snippet}</p>
                                <span>{resource.date} • {resource.readTime}</span>
                            </div>
                        ))}
                    </div>

                    <button className="toggle-button" onClick={toggleShowMore}>
                        {showMore ? "Show Fewer" : "Show More"}
                    </button>
                </div>
            </div>


        </div>
    );
};

export default AllCareersPage;
