import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import ChangePasswordProvider from '../../../../context/ChangePasswordContext';
import { FanAccountContext } from '../../../../context/FanAccountContext';

import ProfileEdit from './EditProfile'
import Password from './Password'

class AccountTabs extends Component {

    static contextType = FanAccountContext

    render() {      
        
        const {  credentials } = this.context
        

        return (
            <>                 
            <Tabs className="TabPanelWrap">    
                <div className="TabContentLeft">
                    <div className="sideMenuWrap">
                        <TabList>
                            <Tab>Edit Profile</Tab>
                            <Tab>Password</Tab>
                            {/* <Tab>Payment Info</Tab> */}
                            <Tab>Email Preference</Tab> 
                        </TabList> 
                    </div>                
                </div>   
                <div className="TabContentRight">
                    <div className="MyAccountFormWrap">
                        <TabPanel>
                            <ProfileEdit/>
                        </TabPanel>  
                        <TabPanel>
                            {credentials.email ? 
                                <ChangePasswordProvider>
                                    <Password userMail={credentials.email}/>
                                </ChangePasswordProvider> : 'Loading ... '
                            }
                        </TabPanel>                       
                        {/* <TabPanel>
                            <h1>Paymeny Information</h1>
                        </TabPanel> */}
                        <TabPanel>
                            <h1>Email Notifications</h1>
                        </TabPanel>               
                    </div>
                </div> 
                <div className="clearfix"></div>
            </Tabs>
            </>
        )
    }
}

export default AccountTabs;

