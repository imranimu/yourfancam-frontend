import React, {useContext} from 'react';
import { ProfileContext } from '../../context/ProfileContext';

import Avatar from '../partial/Avatar';

const ProfileInfo = () => {

    const { 
        name, 
        avatar, 
        // country,
        // date_of_birth,
        playing_status,
        profession,
        has_charity
    } = useContext(ProfileContext);

    return(
        <>            
            <div className="ProfileImage">
                {avatar ?  <Avatar src={avatar} size={150}/> : <Avatar size={150}/> }                
            </div>

            <div className="ProfileInfo">
                
                <h3>{name}</h3>

                {playing_status ? 
                    <p className="CurrentStatus"><span>{playing_status}</span></p> : 
                    <p className="CurrentStatus"><span>Current Playing</span></p>
                }                

                <div className="AboutProfile">
                    {profession ?<span>{profession}</span> : <span>RUGBY</span>}
                    {/* {country ?<span>{country}</span> : ''}
                    {date_of_birth ?<span>{date_of_birth}</span> : ''} */}
                </div>
            </div>
            {has_charity ? 
                <div className="InfoRight">                                    
                    <img src="/images/i-007.png" alt="Mentor donates profile." />
                    <p>This Athlete or Coach, donates a part or all funds raised on this platform to charity.</p>

                    <span><img src="" alt=""/></span>
                </div>  : ''     
            }
        </>

    )
}

export default ProfileInfo;