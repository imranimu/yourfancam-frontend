import React, { Component } from 'react';

import { Link } from 'react-router-dom' 

import Avatar from '../partial/Avatar';

import {     
    Modal,  ModalBody,  
    ButtonDropdown, DropdownToggle, DropdownMenu, Spinner
} from 'reactstrap';

import AuthTabs from '../partial/AuthTabs'

import AthleteSingup from './AthleteSingup';
import { ProfileInfoContext } from '../../context/ProfileInfoContext';
import FanSingup from './FanSingup';

class ProfileInfo extends Component {   

    static contextType = ProfileInfoContext
     
    render() {   
        
        const {
            login,
            modal,
            isOpen,
            isOpenSettings, 
            name,           
            avatar, 
            toggleMenu, 
            toggle, 
            toggleSettings, 
            LogOut,
            Loader
        } = this.context

        const closeBtn = <button className="close" onClick={toggle}>&times;</button>;                

        if(avatar){
            var ProfilePic = avatar
        } 

        return (
            <>
                <div className="header_right text-right">
                    {login ? 
                        <ul>
                            <li className="notification">
                                <ButtonDropdown isOpen={isOpen} toggle={toggleMenu}>
                                    <DropdownToggle 
                                        tag="a"
                                        data-toggle="dropdown">                                         
                                            <img src="/images/icons/notifications.png" alt=""/>
                                            <span></span>                                         
                                    </DropdownToggle>
                                    <DropdownMenu right className="DarkBG">
                                        <Link to={"#"} className="mb-2">Notification 1</Link>
                                        <Link to={"#"} className="mb-2">Notification 2</Link>
                                        <Link to={"#"} className="mb-2">Notification 3</Link>
                                        <Link to={"#"} className="mb-2">Notification 4</Link>
                                        <Link to={"#"} className="mb-2">Notification 5</Link>
                                    </DropdownMenu>
                                </ButtonDropdown>                                
                            </li>
                            <li className="profileMenu">
                                <Link to={"/my-profile"}>
                                    <span>{name}</span>                                    
                                    <span>
                                        <Avatar src={ProfilePic} />
                                    </span>
                                </Link>
                            </li>                  
                            <li>                                
                                <ButtonDropdown isOpen={isOpenSettings} toggle={toggleSettings}>
                                    <DropdownToggle 
                                        tag="a"
                                        data-toggle="dropdown">                                         
                                            <img src="/images/icons/setting.png" alt=""/>                                     
                                    </DropdownToggle>
                                    <DropdownMenu right className="DarkBG">
                                        <Link to={"#"} className="text-center w-100 position-relative" onClick={LogOut}>
                                            Signout 
                                            {Loader ? <span className="LoaderIcon"><Spinner color={"info"}></Spinner></span> : ''}                                            
                                        </Link>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </li>                 
                            <li className="mobileNavIcon"><Link to={"#"}><i className="fa fa-bars"></i></Link></li>
                        </ul>
                    : 
                    <>
                        <div className="LoginButtonWrap">
                            <form action="#">
                                <div className="SearchFormWrap">
                                    <i className="fa fa-search"></i>
                                    <input type="text" placeholder="Search..."/>
                                </div>
                            </form>
                            <Link to={"#"} onClick={toggle} className="LoginButton">Login <img src="/images/i-009.png" alt=""/></Link>
                        </div>

                        <ul className="mainMenu">                                                       
                            {/* <li><Link to={"#"} onClick={toggle} >Sign up as a Fan</Link></li> */}
                            <li><FanSingup/> </li>

                            <li><AthleteSingup/></li>  
                                                        
                        </ul>

                        <Modal isOpen={modal} toggle={toggle} className="CustomModalBox CustomModalTab">
                            <ModalBody>

                                {closeBtn}

                                <AuthTabs/>
                                
                            </ModalBody>                            
                        </Modal>
                    </>
                    }                                      			 
                </div>                
            </>
        );
    }    
}

export default ProfileInfo;
