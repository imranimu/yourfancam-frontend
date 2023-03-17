import React, { Component } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

import AccountInfo from './AccountInfo'
import PersonalInfo from './PersonalInfo'
import PricingInfo from './PricingInfo'
import UploadVideo from './UploadVideo'
import Password from '../../Fans/account/Password'
import { AthletesAccountContext } from '../../../../context/AthletesAccountContext';
import ChangePasswordProvider from '../../../../context/ChangePasswordContext';
import CharityInfo from './Charity';

class AccountTabs extends Component {  

    static contextType = AthletesAccountContext

    render() {   

        const {  credentials } = this.context    

        return (
            <>                 
            <Tabs>    
                <div className="TabContentLeft">
                    <div className="sideMenuWrap">
                        <TabList>
                            <Tab>Account Information</Tab>
                            <Tab>Personal Information</Tab>
                            <Tab>Pricing Information</Tab>
                            <Tab>Charity Information</Tab>
                            <Tab>Upload Video</Tab>
                            <Tab>Change Password</Tab>
                            <Tab>Email Preference</Tab>
                        </TabList> 
                    </div>                
                </div>   
                <div className="TabContentRight">
                    <div className="MyAccountFormWrap AthletesAccountForm">
                        <TabPanel>                             
                            <AccountInfo/>                                                       
                        </TabPanel>
                        <TabPanel>                            
                            <PersonalInfo/>                                
                        </TabPanel>
                        <TabPanel>
                            <PricingInfo/>
                        </TabPanel>
                        <TabPanel>
                            <CharityInfo/>
                        </TabPanel>
                        <TabPanel>      
                            <UploadVideo/>
                        </TabPanel>
                        <TabPanel>          
                            <ChangePasswordProvider>
                                <Password userMail={credentials.email}/>                               
                            </ChangePasswordProvider>
                        </TabPanel>
                        <TabPanel>
                            <h1>Email Preference</h1>
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

