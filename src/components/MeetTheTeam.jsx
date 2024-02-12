import React from 'react';
import amber from "../assets/amber.jpg";
import harshita from "../assets/harshita.jpg";
import jacob from "../assets/jacob.jpg";
import luna from "../assets/luna.jpg";
import maham from "../assets/maham.png";
import tasmin from "../assets/tasmin.jpeg";
import vishal from "../assets/vishal.jpeg";
import mariana from "../assets/mariana.jpg";

const MeetTheTeam = () => {
  // Data array containing team member information
  const teamMembers = [
    { department: 'Executive', position: 'President', title: 'President', name: 'Vishal', imageUrl: vishal },
    { department: 'Executive', position: 'Vice President', title: 'Vice President', name: 'Leo', imageUrl: "" },
    { department: 'Executive', position: 'VP of Finance', title: 'Treasurer', name: 'Mariana', imageUrl: mariana },
    { department: 'Executive', position: 'VP of Events', title: 'Head of Events Management', name: 'Harshita', imageUrl: harshita },
    { department: 'Executive', position: 'VP of Marketing', title: 'Head of Communications', name: 'Luna', imageUrl: luna },
    { department: 'Events', position: 'Director', title: 'Events Planner', name: 'Samiyah', imageUrl: "" },
    { department: 'Events', position: 'Director', title: 'Events Planner', name: 'Jason', imageUrl: "" },
    { department: 'Events', position: 'Director', title: 'Events Facilitator', name: 'Tasmin', imageUrl: tasmin },
    { department: 'Events', position: 'Director', title: 'Events Facilitator', name: 'Shaampavi', imageUrl: "" },
    { department: 'Marketing', position: 'Director', title: 'Social Media Manager', name: 'Maham', imageUrl: maham },
    { department: 'Marketing', position: 'Director', title: 'Community Moderator + LinkedIn', name: 'Carson', imageUrl: "" },
    { department: 'Marketing', position: 'Director', title: 'Content Creator', name: 'Giselle', imageUrl: "" },
    { department: 'Marketing', position: 'Director', title: 'Content Creator', name: 'Keana', imageUrl: "" },
    { department: 'Outreach', position: 'Director', title: 'Corporate Relations Manager', name: 'Sufiya', imageUrl: "" },
    { department: 'Outreach', position: 'Director', title: 'Corporate Relations Manager', name: 'Romin', imageUrl: "" },
    { department: 'Outreach', position: 'Director', title: 'Corporate Relations Manager', name: 'Jacob', imageUrl: jacob },
    { department: 'Web Developer', position: 'Director', title: 'Web Developer', name: 'Aryaman', imageUrl: "" },
    { department: 'Web Developer', position: 'Director', title: 'Web Developer', name: 'Gurkarman', imageUrl: "" },
    { department: 'Rotational', position: 'First-Year Rep', title: 'First-Year Rep', name: 'Filip', imageUrl: "" },
    { department: 'Rotational', position: 'First-Year Rep', title: 'First-Year Rep', name: 'Grace', imageUrl: "" },
    { department: 'Rotational', position: 'First-Year Rep', title: 'First-Year Rep', name: 'Amber', imageUrl: amber },
  ];

  // Group team members by their departments
  const groupedTeamMembers = teamMembers.reduce((acc, member) => {
    if (!acc[member.department]) {
      acc[member.department] = [];
    }
    acc[member.department].push(member);
    return acc;
  }, {});

  return (
    <div className="meet-the-team-container" style={{ backgroundColor: '#ffffff', padding: '20px' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Meet The Team</h2>

        {/* Render team members for each department */}
        {Object.keys(groupedTeamMembers).map(department => (
          <div key={department} className="mb-8">
            <h3 className="text-xl font-bold mb-2">{department}</h3>
            <div className="flex flex-wrap">
              {groupedTeamMembers[department].map(member => (
                <div key={member.name} className="flex flex-col items-center mr-4 mb-2">
                  <div className="member-image" style={{ width: member.name === 'Amber' ? '157px' : '150px', height: member.name === 'Amber' ? '157px' : '150px', overflow: 'hidden', margin: '0 auto', borderRadius: '50%' }}>
                    {member.imageUrl && <img src={member.imageUrl} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />}
                  </div>
                  <div className="mt-2">
                    <p className="font-semibold">{member.title}</p>
                    <p>{member.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MeetTheTeam;
