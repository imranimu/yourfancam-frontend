import React, { Component } from 'react';

import {Container, Row, Col } from 'reactstrap'

import Header from './partial/Header'

import Footer from './partial/Footer'

export default class ErrorPage extends Component {
    render() {

        return (

            <>
                <Header BannerHide="true"/>

                <Container className="pt-5 pb-5">
                    <Row>
                        <Col md={12} className="pt-5">
                            <div className="ErrorPage mt-5 mb-5" >

                                <h1 className="mb-5">404 - Page Not Found.</h1>

                                <p className="mb-3">Sorry, we couldn't find the page you are looking for. Please check the URL or try other sections from menu.</p>

                            </div>
                        </Col>
                    </Row>
                </Container>

                <Footer/>

            </>
        );

    }
}
