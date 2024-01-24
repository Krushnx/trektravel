import React, { useEffect, useState } from 'react';
import LogoutBTN from '../auth/logoutBTN';
import './profile.css'
import axios from 'axios';
import link from '../../backendlink';
import Review from '../NavLinks/Hotels/Review';

function Profile()
{
    
    const [profile, setProfile] = useState({});

    useEffect(() => {
        axios.get(`${link}/auth/userdata`).then((response) => {
          setProfile(response.data);
        });
    
       
}, []); 

    


    return(
        <div style={{paddingTop:"85px"}}>
            <div className="profile">
                <img src="https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX460_.png" alt="" />
                <p>{profile.name}</p>
                <table class="styled-table">
    <thead>
        <tr>
            <th>Name</th>
            <th>{profile.name}</th>
        </tr>
    </thead>
    <tbody>
        <tr class="active-row">
            <td>Email</td>
            <td>{profile.email}</td>
        </tr>
        <tr class="active-row">
            <td>Mobile</td>
            <td>{profile.mobile}</td>
        </tr>
        <tr class="active-row">
            <td>Address</td>
            <td>{profile.address}</td>
        </tr>
        <tr class="active-row">
            <td>Zip</td>
            <td>{profile.zip}</td>
        </tr>
    </tbody>
</table>

            <LogoutBTN />

            </div>
        </div>
    );
}
export default Profile;