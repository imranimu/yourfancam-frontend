import React, { Component } from 'react';

//import AthleteBlog from '../partial/AthleteBlog'

//import {Container, Row, Col} from 'reactstrap';

import {Container, Row, Col, Table} from 'reactstrap'

import {Link} from 'react-router-dom'

import Avatar from '../partial/Avatar'

import { AthletesContext } from '../../context/AthletesContext';

export default class PopularAthletes extends Component {

     static contextType = AthletesContext

    render() {

        const { 
            PopularAthletes,
            handleFormSubmitJoinedAthletes,
            JoinedAthletesHandler 
        } = this.context

        return (
            <section className="PopularMentorsWrap">
                {/* <Container>
                    <Row>
                        <Col md={12}>
                            <h1 className="mainTitle">{this.props.Title}</h1>
                        </Col> 
                    </Row> 
                </Container>  */}
                <Container className="bigContainers">   
                    <Row>                        
                        <Col md={12} className="mentorsTable">

                            <div className="text-right mentorsTableSearchWrap mb-4">
                                <Link className="MoreButton" to={"#"}>SEE ALL</Link>
                                <form action="#" onSubmit={handleFormSubmitJoinedAthletes}>
                                    <input type="text" onChange={JoinedAthletesHandler} placeholder="Search..."/>
                                    <button className="SearchBarButton">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </form>
                            </div>                            

                            <Table>
                                <thead>
                                    <tr className="THead">
                                        <th width="500" colSpan="2">Latest Joined Athletes</th> 
                                        <th width="200">Sporting Code</th>                                        
                                        <th width="180" className="text-right"><img src="/images/icons/send-video.png" alt=""/> VIDEOS</th>
                                        <th width="180" className="text-right"><img src="/images/icons/send-video.png" alt=""/> SELFIE+TEXT</th>
                                        <th width="180" className="text-right"><img src="/images/icons/send-message.png" alt=""/> TEXT MESSAGE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { PopularAthletes.map( (value , i ) => 
                                        <tr key={value.uuid}>
                                            <td>                                                 
                                                {value.avatar ? <Avatar rounded={true} src={value.avatar} size={60} /> : <Avatar size={60} rounded={true}/>}
                                            </td>
                                            <td className="MenterName"><Link to={'/profile/'+value.uuid}>{value.first_name} {value.last_name}</Link></td>
                                            <td>{value.category}</td>                                            
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
                        {/* <div className="PopularMentors"> 
                            { PopularAthletes.map( (value , i ) => 
                                <AthleteBlog key={i}
                                    Title = {value.first_name + ' '+ value.last_name}
                                    Des = {value.athlete ? value.athlete.about_me : ''}
                                    Link = '#signlepage'
                                    Image="images/mentors/002.png" 
                                    Time="7.40"
                                    Status="Active"
                                    Price = "$580" 
                                    uuid = {value.uuid}                       
                                />
                            )}                     
                        </div> */}
                    </Row>
                </Container>
            </section>
        );
    } 
}
