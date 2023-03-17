import React, { Component } from 'react';

import {Container, Row, Col} from 'reactstrap';

import FeaturedSlider from '../partial/FeaturedSlider';

export default class Features extends Component {    

    render() {       

        return (
            <div className="FeaturesWrap"> 
            
                <Container className="bigContainers">
                    <Row>
                        <Col md={12}>
                            <h1 className="mainTitle">Featured Athletes &amp; Coaches</h1>
                        </Col>

                        <Col md={12} className="p-0">                        
                            <FeaturedSlider/>                            
                        </Col>                         
                    </Row>
                </Container>
            
            </div>
        );
    }
}
