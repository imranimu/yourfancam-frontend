import React, { Component } from 'react';
import FanAccountContextProvider from '../../../../context/FanAccountContext';
import AccountTabs from './AccountTab';

export default class FanAccount extends Component {
    render() {
        return (
            <FanAccountContextProvider>
                <AccountTabs/>
            </FanAccountContextProvider>
        );
    }
}
