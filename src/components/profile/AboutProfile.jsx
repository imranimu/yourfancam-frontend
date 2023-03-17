import React from 'react';
import PropTypes from '../../services/propTypes';

const AboutProfile = ({
    tag: Tag,
    title,
    content,
    type, 
    LastItem
}) =>{      
    
    const statusClass = (type) =>{
        if(type === "Playing"){
            return 'Playing'
        }else if(type === 'Proudest'){
            return 'Proudest'
        }
    }
    
    return(
        <>
            <Tag className={["columnBox aboutMentor", LastItem ? 'mr-0' : ''].join(' ')}>    

                <h1 className={["miniTitle", statusClass(type)].join(' ') }><span></span> {title}</h1>                

                <Tag className="aboutMentorContent">
                    {content}
                </Tag>                
            </Tag>
        </>
    )
}

AboutProfile.propTypes = {
    tag: PropTypes.component,
    title: PropTypes.string,
    content: PropTypes.string,
    type: PropTypes.string,
    LastItem: PropTypes.bool,
};
  
AboutProfile.defaultProps = {
    tag: 'div',
    title: '',
    content: '',
    type: '',
    LastItem: false,    
};

export default AboutProfile; 