import React, { useState } from 'react'
import ProductLogo from '../assets/RegistrationAssets/Eduhire.png'
import DashboardIC from '../assets/AdminAssets/Icon-Dashboard.png'
import SettingsIC from '../assets/AdminAssets/SettingsAdmin.png'
import SessionsIC from '../assets/AdminAssets/Sessions.png'
import SessionsAct from '../assets/AdminAssets/SessionsAct.png'
import UsermanageIC from '../assets/AdminAssets/UserManageAdmin.png'
import Profile from '../assets/AdminAssets/AdminProfile.png'
import BatchesIC from '../assets/AdminAssets/Batches.png'
import BatchesAct from '../assets/AdminAssets/BatchesAct.png'
import ReportsIC from '../assets/AdminAssets/Analytics.png'
import SupportIC from '../assets/AdminAssets/SupportAdmin.png'
import LogoutIC from '../assets/AdminAssets/LogoutAdmin.png'
import DashboardAct from '../assets/AdminAssets/DashboardAct.png'
import SettingsAct from '../assets/AdminAssets/SettingsAct.png'
import UsermanageAct from '../assets/AdminAssets/UsermanageAct.png'
import ProfileAct from '../assets/AdminAssets/ProfileAct.png'
import ReportsAct from '../assets/AdminAssets/ReportsAct.png'
import SupportAct from '../assets/AdminAssets/SupportAct.png'
import LogoutAct from '../assets/AdminAssets/LogoutAct.png'
import Certificates from '../assets/AdminAssets/Certificates.png'
import CertificatesAct from '../assets/AdminAssets/CertificatesAct.png'
import Minimize from '../assets/AdminAssets/Minimize.png'
import Maximize from '../assets/AdminAssets/Maximize.png'
import Footer from '../Components-LandingPage/Footer'
import RecruiterDashboard from './RecruiterDashboard'

const RecruiterDashboardHome = () => {
    const [activetab,setActivetab]=useState('Dashboard');
    const [view,setView]=useState("Maximize")

    const sidebar =[
        {title:"Dashboard" , icon:DashboardIC, Active :DashboardAct},
        {title:"Company Profile" , icon:UsermanageIC, Active :UsermanageAct},
        {title:"Applications" , icon:BatchesIC, Active :BatchesAct},
        {title:"Job Postings" , icon:SessionsIC, Active :SessionsAct},
        {title:"Offers" , icon:Profile, Active :ProfileAct},
        {title:"Interviews" , icon:SupportIC, Active :SupportAct},
        {title:"Reports & Analytics" , icon:ReportsIC, Active :ReportsAct},
        {title:"Profile" , icon:Profile, Active :ProfileAct},
        {title:"Settings" , icon:SettingsIC, Active :SettingsAct},
        {title:"Support" , icon:SupportIC, Active :SupportAct},
        {title:"Logout" , icon:LogoutIC, Active :LogoutAct},
    ]

    return (
        <>
        <div className='AdminDashboard-Container'>
            {view==="Maximize" &&(
            <div className='AdminDashboard-Sidebar'>
                <div className='Adminsidebar-Title' >
                    <div className='Adminside-Logo-Title'>
                    <img src={ProductLogo} width={30} alt="" />
                    <div className='UserRegistration-Title'>
                        <h4>EDUHIRE</h4>
                        {/* <p>EMPOWERING CAREERS, CONNECTING FUTURES</p> */}
                    </div>
                    </div>
                    <img onClick={()=>setView('Minimize')} src={Minimize} alt="Minimize" width={20} />
                </div>
                <div className='AdminDashboard-Sidebar-List' >
                    {sidebar.map((list,index)=>
                    <div key={index}
                    onClick={()=>setActivetab(list.title)}
                    className={activetab=== list.title ? 'AdminDashboard-Sidebar-Item-cont-Active' : 'AdminDashboard-Sidebar-Item-cont'}>
                    
                    <img src={activetab===list.title? list.Active : list.icon} alt="AdminDashboard" width={24} />
                    <p style={list.title === "Logout" ? { color: "red" } : {}} className='AdminDashboard-Sidebar-Item'>{list.title}</p>
                    </div>
                    )}
                </div>
            </div>
            )}
            {view==="Minimize" &&(
            <div className='AdminDashboard-Sidebar Minimize'>
                <div className='AdminDashboard-Maximize'>
                    <img  onClick={()=>setView('Maximize')} src={Maximize} alt="Maximize" width={20} />
                    </div>
                <div className='AdminDashboard-Sidebar-List' >
                    {sidebar.map((list,index)=>
                    <div key={index}
                    onClick={()=>setActivetab(list.title)}
                    className={activetab=== list.title ? 'AdminDashboard-Sidebar-Item-cont-Active' : 'AdminDashboard-Sidebar-Item-cont'}>
                    
                    <img src={activetab===list.title? list.Active : list.icon} alt="AdminDashboard" width={25} />
                    {/* <p style={list.title === "Logout" ? { color: "red" } : {}} className='AdminDashboard-Sidebar-Item'>{list.title}</p> */}
                    </div>
                    )}
                   
                </div>
            </div>
            )}
            <div className='AdminDashboard-Mainsec'>
                {activetab==='Dashboard'&&(
                    <RecruiterDashboard/>
                )}
            </div>
        </div>
        </>
    )
}

export default RecruiterDashboardHome