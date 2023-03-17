import React, { Component } from 'react';

import {Link} from 'react-router-dom'

import classes from '../../styles/VideoGallery.module.css'

import Filter from '../../elements/Filter'

import VideoGallery from '../../elements/VideoGallery'


export default class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="TabPanelWrap">
            <div className="TabContentLeft">
                <div className="sideMenuWrap">
                  <Link to={"#"}>
                    <p className="SmallButton GeenBG">12</p>
                    <p><span className="Active"></span>Video Received</p>
                  </Link>
                </div>

                <div className="sideMenuWrap">
                  <Link to={"#"}>
                    <p className="SmallButton BlueBG">15</p>
                    <p><span></span> My Videos</p>
                  </Link>
                </div>
            </div>

            <div className="TabContentRight">
                
                <Filter/> 

                <div className={['row', classes.TabVideoGallery].join(' ')}>
                    <VideoGallery 
                        Title = 'Matthew Logan'
                        Des = 'Qis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                        Link = '#signlepage'
                        Image="images/mentors/001.png" 
                        Time="7.40"
                        Status="Active"
                        Price = "$580"                        
                    />
                    <VideoGallery 
                        Title = 'Chris Rhodes'
                        Des = 'Qis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                        Link = '#signlepage'
                        Image="images/mentors/002.png" 
                        Time="7.40"
                        Status="Active"
                        Price = "$580"                        
                    />
                    <VideoGallery 
                        Title = 'Julian McLaughlin'
                        Des = 'Qis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                        Link = '#signlepage'
                        Image="images/mentors/003.png" 
                        Time="7.40"
                        Status="Active"
                        Price = "$580"                        
                    />
                    <VideoGallery 
                        Title = 'Alexander Boone'
                        Des = 'Qis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                        Link = '#signlepage'
                        Image="images/mentors/004.png" 
                        Time="7.40"
                        Status="Active"
                        Price = "$580"                        
                    />
                    <VideoGallery 
                        Title = 'Keith Johnson'
                        Des = 'Qis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                        Link = '#signlepage'
                        Image="images/mentors/005.png" 
                        Time="7.40"
                        Status="Active"
                        Price = "$580" 
                    />                     
                    <VideoGallery 
                        Title = 'Matthew Logan'
                        Des = 'Qis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                        Link = '#signlepage'
                        Image="images/mentors/001.png" 
                        Time="7.40"
                        Status="Active"
                        Price = "$580"                        
                    />
                    <VideoGallery 
                        Title = 'Chris Rhodes'
                        Des = 'Qis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                        Link = '#signlepage'
                        Image="images/mentors/002.png" 
                        Time="7.40"
                        Status="Active"
                        Price = "$580"                        
                    />
                    <VideoGallery 
                        Title = 'Julian McLaughlin'
                        Des = 'Qis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                        Link = '#signlepage'
                        Image="images/mentors/003.png" 
                        Time="7.40"
                        Status="Active"
                        Price = "$580"                        
                    />
                    <VideoGallery 
                        Title = 'Alexander Boone'
                        Des = 'Qis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                        Link = '#signlepage'
                        Image="images/mentors/004.png" 
                        Time="7.40"
                        Status="Active"
                        Price = "$580"                        
                    />
                    <VideoGallery 
                        Title = 'Keith Johnson'
                        Des = 'Qis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                        Link = '#signlepage'
                        Image="images/mentors/005.png" 
                        Time="7.40"
                        Status="Active"
                        Price = "$580" 
                    />                     
                </div>
            </div>
        </div>
      </>
    );
  }
}
