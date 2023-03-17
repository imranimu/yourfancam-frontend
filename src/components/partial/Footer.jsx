import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap';



export default class Footer extends Component {
    render() {
        return (
            <footer className="footer_wrap">
                <Container>

                    <Row>
                        {/* <div className="col-md-12 text-center">
                            <div className="FooterInfo">
                                <p>A large transport company contacted us to help them rethink and revamp their core system used to manage their business processes and store all important data</p>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <div className="socialActivityWrap">
                                <ul className="socialActivity">
                                    <li><Link to={"#"}><i className="fa fa-paper-plane-o"></i></Link></li>
                                    <li><Link to={"#"}><i className="fa fa-medium"></i></Link></li>
                                    <li><Link to={"#"}><i className="fa fa-reddit"></i></Link></li>
                                    <li><Link to={"#"}><i className="fa fa-youtube"></i></Link></li>
                                    <li><Link to={"#"}><i className="fa fa-github"></i></Link></li>
                                </ul>
                            </div>
                        </div> */}

                        <Col md={12}>
                            <ul className="FooteMenu">
                                <li><Link to={"#"}>TERMS &amp; CONDITIONS</Link></li>
                                <li><Link to={"#"}>PRIVACY POLICY</Link></li>
                                <li><Link to={"#"}>FAQ</Link></li>
                                <li><Link to={"#"}>ALL ATHLETES</Link></li>
                                <li><Link to={"#"}>ALL COACHES</Link></li> 
                            </ul>
                        </Col>

                        <Col md={12} className="mt-5 text-center">
                            <p className="text-white">Copyright &copy; 2020 All Rights Reserved.  |   E-Volver Innovations Co., Ltd.</p>
                        </Col>
                        
                    </Row>
                
                </Container>
            </footer>
        );
    }
}
