import React, { Component } from 'react';

export default class NoticeBoard extends Component {
    render() {
        return (
            <section className="NoticeBoard">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <img src="images/i-005.png" alt=""/>
                            <p>If for some reason you do not recive a video reply within 7 days, we will remove the hold on your card within 5-7 business days and your money is on it's way back to your account.</p>
                        </div> 
                    </div>
                </div>
            </section>
        );
    }
}
