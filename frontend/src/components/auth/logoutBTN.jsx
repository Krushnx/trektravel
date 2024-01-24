import axios from 'axios';
import React, { useContext } from 'react';
import AuthContext from '../../context/authcontext';
import { useNavigate } from 'react-router-dom';
import link from '../../backendlink';

function LogoutBTN()
{   
    const {getLoggedin} = useContext(AuthContext);
const navigate = useNavigate();

    async function logout()
    {
        await axios.get(`${link}/auth/logout`);
        await getLoggedin();
        navigate('/login');
    }
    return(
        <div className='get-started' style={{marginRight:"0"}}>
            <button onClick={logout}>Logout</button>
        </div>
    );
}
export default LogoutBTN;