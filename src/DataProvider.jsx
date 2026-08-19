import React, { createContext, useContext, useState } from 'react';
import Profile from './assets/TCAssets/Trainerprof.png'

const Context = createContext();

const DataProvider = ({ children }) => {

    const initialRegistration = {
        PlacementOfficer: [
            {   id:'PO-001',
                ProfileImg: Profile,
                userName: 'Joseph Durairaj',
                email: 'Josephjd@gmail.com',
                gender: 'Male',
                phone: '7010158866',
                dob: '2024-04-21',
                address: '67 4th cross rd, Ranipet, chennai',
                city: 'Coimbatore',
                state: 'TamilNadu',
                pincode: '641104',
                designation: 'Placement Officer',
                joinedOn: '2024-04-20',
                experience: '6+ years',
                instituteAddress: '67 4th cross rd, Rajapet',
                instituteLocation: 'chennai',
                instituteState: 'TamilNadu',
                institutePincode: '640001',
                Department: 'Placement Cell',
                EmpId: 'PO-2024-0178',
                institute:'SNS institute of Technology',
                Affiliated:"Anna University",
                Officialemail:'Josephdurairaj@eduhire.com',
                aboutme:'Adaptable and goal-driven professional with strong analytical, communication, and leadership capabilities. Passionate about solving complex challenges, collaborating across teams, and driving measurable results.',
                uploadedDocs:[]
            }
        ],
        Recruiter: [
            {   id:'HR-001',
                ProfileImg: Profile,
                userName: 'Priyanka P',
                email: 'priya05@eduhire.com',
                gender: 'Female',
                phone: '7010158866',
                dob: '2024-04-20',
                address1: '67 4th cross rd, Rajapet',
                address2: 'ravindracolony,yashpur',
                city: 'Coimbatore',
                state: 'TamilNadu',
                pincode: '641104',
                designation: 'Recruiter',
                company: 'EduHire',
                joinedOn: '2024-04-20',
                experience: '6+ years',
                companyEmail: 'Priyanka@company.com',
                companyAddress: '67 4th cross rd, Rajapet',
                companyLocation: 'chennai',
                companyState: 'TamilNadu',
                companyPincode: '640001',
                Department: 'Talent Acquisition',
                EmpId: 'REC-2024-0178',
                skills: ['Technical Sourcing', 'Screening', 'Talent Acquisition', 'Interviewing']
            }
        ],
        Student: [
            {
                id: 'STD-001',
                ProfileImg: Profile,
                userName: 'Mahe',
                email: 'mahe05@eduhire.com',
                gender: 'male',
                phone: '7010158866',
                Bio: 'Passionate about building user-friendly applications and continuously learning new technologies.',
                dob: '2024-04-20',
                address1: 'No54, ganapathi Estate, 6th Avenue, mettupalayam,Tamilnadu',
                designation: 'Student',
                RegistrationNum: '21PY5055',
                Degree: "Bachlor's of Engineering",
                GraduationYear: '2023',
                CGPA: '7.9',
                Department: 'Computer Science and Engineering.',
                skills: ['Technical Sourcing', 'Screening', 'Talent Acquisition', 'Interviewing'],
                state: "TamilNadu",
                city: 'Coimbatore',
                aboutme: 'I am a passionate and detail-oriented software engineer.i am a quick learner,good team player,and always eager to improve my technical and problem solving skills.'
            }
        ],
        TrainingCoordinator: [
            {   id: 'TC-001',
                ProfileImg: Profile,
                userName: 'Naveen Chand',
                email: 'Naveen@eduhire.com',
                gender: 'Male',
                phone: '7010158866',
                Bio: 'Passionate about building career-ready students through structured training programs and continuous learning initiations.',
                dob: '2024-04-20',
                address: 'No54, ganapathi Estate, 6th Avenue, mettupalayam,Tamilnadu',
                designation: 'Training Coordinator',
                RegistrationNum: '21PY5055',
                RegistrationDate: '19/07/2003',
                experience: "7",
                InstituteAddress: "No54, ganapathi Estate, 6th Avenue, mettupalayam,Tamilnadu",
                state: "TamilNadu",
                city: 'Coimbatore',
                aboutme: 'I am a passionate and detail-oriented software engineer.i am a quick learner,good team player,and always eager to improve my technical and problem solving skills.'
            }
        ]
    };

    const [user, setUser] = useState(initialRegistration)

    return (
        <Context.Provider value={{ user, setUser }}>
            {children}
        </Context.Provider>
    );
};

export default DataProvider

export const useData = () => useContext(Context);