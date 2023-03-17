import React, { Component } from 'react';
import AthletesAccountContextProvider from '../../../../context/AthletesAccountContext';

import AccountTab from './AccountTab'

export default class AthletesAccount extends Component {
  render() {
    return (
      <>
        <div className="TabPanelWrap">
            <AthletesAccountContextProvider>
              <AccountTab/>
            </AthletesAccountContextProvider>
        </div>
      </>
    );
  }
}
