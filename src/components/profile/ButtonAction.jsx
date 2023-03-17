// import React, { useState } from 'react';
import React from 'react';

// import {Col, ButtonDropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import {Col } from 'reactstrap';

import {Link} from 'react-router-dom'

import SendVideo from './SendVideo'

import SendSelfiMessage from './SendSelfiMessage';

import SendMessage from './SendMessage'


const ButtonActions = (props) =>{  

    return(
        <>
            <Col md={12} className="mb-2">
                
                <SendVideo uuid={props.uuid}/>   

                <SendSelfiMessage uuid={props.uuid}/> 

                <SendMessage uuid={props.uuid}/>                
                
            </Col>

            <Col md={12} className="mb-5">                

                <div className="ShareIconWrap big mr-0">
                    
                    <h5>Share</h5>
                    
                    <div className="ShareIcon">                        
                        <Link to={{ pathname: "https://facebook.com" }} target="_blank" className="mb-2">
                            <i className="fa fa-facebook"></i>
                        </Link>
                        <Link to={{ pathname: "https://www.instagram.com" }} target="_blank" className="mb-2">
                            <i className="fa fa-instagram"></i>
                        </Link>
                        <Link to={{ pathname: "https://twitter.com" }} target="_blank" className="mb-2">
                            <i className="fa fa-twitter"></i>
                        </Link> 
                    </div>                
                </div>	
            </Col>              
        </>
    )
}

export default ButtonActions; 