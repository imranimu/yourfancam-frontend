import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';

export default class SliderItem extends Component {
    render() {
        return (
            <>                
                <Col md={12}>
                    <div className="position-relative FeaturedSliderItem">
                        <img className="mb-3"  src={this.props.Image ? this.props.Image : '/images/athletes/athletes_0.jpg' } alt="Athelete"/>
                        <Link to={'/profile/'+this.props.uuid}><h3 className="text-white">{this.props.Name}</h3></Link>
                    </div>
                </Col>                      
            </>
        );
    }
}
