import React, { Component } from 'react';

import {Container, Row, Col, Table} from 'reactstrap'

import {Link} from 'react-router-dom'

import Avatar from '../partial/Avatar'

import { AthletesContext } from '../../context/AthletesContext';

export default class Athletes extends Component {
    
    static contextType = AthletesContext;

    render() { 

        const { 
            Athletes,
            handleFormSubmitAthletes,
            AthletesSearchHandler 
        } = this.context

        return (
            <>
            <section className="BrowseMentorsWrap">
                <Container className="bigContainers">
                    <Row>
                        {/* <Col md={12}>
                            <h1 className="mainTitle">Browse Athletes</h1>
                        </Col> */}

                        <Col md={12} className="mentorsTable">
                            <div className="text-right mentorsTableSearchWrap mb-4">
                                <Link className="MoreButton" to={"#"}>SEE ALL</Link>
                                <form action="#" onSubmit={handleFormSubmitAthletes}>
                                    <input type="text" onChange={AthletesSearchHandler} placeholder="Search..."/>
                                    <button className="SearchBarButton">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </form>
                            </div>
                            <Table>
                                <thead>
                                    <tr className="THead">
                                        <th width="500" colSpan="2">Latest Joined Coaches</th>                                        
                                        <th width="200">Sporting Code</th>
                                        {/* <th width="300">Current Status</th> */}
                                        <th width="180" className="text-right"><img src="/images/icons/send-video.png" alt=""/> VIDEOS</th>
                                        <th width="180" className="text-right"><img src="/images/icons/send-video.png" alt=""/> SELFIE+TEXT</th>
                                        <th width="180" className="text-right"><img src="/images/icons/send-message.png" alt=""/> TEXT MESSAGE</th>
                                    </tr>
                                </thead>
                                <tbody>                                    
                                    { Athletes.map( (value , i ) => 
                                        <tr key={value.uuid}>
                                            <td>                                                 
                                                {/* <Avatar src={value.avatar} rounded={true} size={60} /> */}
                                                {value.avatar ? <Avatar rounded={true} src={value.avatar} size={60} /> : <Avatar size={60} rounded={true}/>}
                                            </td>
                                            <td className="MenterName"><Link to={'/profile/'+value.uuid}>{value.first_name} {value.last_name}</Link></td>
                                            <td>{value.category}</td>
                                            {/* <td className="CurrentStatus">{value.athlete? <span>{value.athlete.playing_status}</span> : ''}</td> */}
                                            <td className="text-right">
                                                {value.athlete ? 
                                                    <>${value.athlete.video_price ? value.athlete.video_price : '0' } </> : ""
                                                }
                                            </td>
                                            <td className="text-right">
                                                {value.athlete ? 
                                                    <>${value.athlete.text_selfi_price ? value.athlete.text_selfi_price : '0' } </> : "" 
                                                }                                                    
                                            </td>
                                            <td className="text-right">
                                                {value.athlete ? 
                                                    <>${value.athlete.chat_price ? value.athlete.chat_price : '0' } </> : "" 
                                                }
                                            </td>
                                        </tr>
                                    )}                                    
                                </tbody>                                 					 
                            </Table>
                            {/* <Button className="btn btn-primary CustomButton">Browse All Mentors</Button> */}
                        </Col>
                    </Row>
                </Container>
            </section>

            </>
        );
    }
}
