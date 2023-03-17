import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class DownloadApp extends Component {
    render() {
        return (
            <section className="AppDownloadWrap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h1 className="mainTitle mb-3">Our New Application Is Available</h1>
                            <h4 className="">Get the App for iPhone and Android</h4>

                            <span className="mr-2"><Link to={"#"}><img src="images/apple.png" alt=""/></Link></span>
                            <span><Link to={"#"}><img src="images/playstore.png" alt=""/></Link></span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
