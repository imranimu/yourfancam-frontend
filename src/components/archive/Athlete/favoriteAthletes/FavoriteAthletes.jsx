import React, { Component } from 'react';

import {Link} from 'react-router-dom'
import { Table, Row, Col } from "reactstrap";

import Filter from './elements/Filter'

export default class FavoriteMentors extends Component {
  render() {
    return (
        <>
            <div className='TabPanelWrap'>
                <Filter/>

                <Row>

                    <Col md={12} className="mentorsTable FavoriteMentorsTable">
                        <Table>
                            <thead>
                                <tr className="THead">
                                    <th width="100">Athletes</th>
                                    <th width="200"></th>
                                    <th width="350">Sporting Code</th>
                                    <th width="300">Current Status</th>
                                    <th width="150"></th>
                                </tr>
                            </thead>
                            
                             <tbody>
                                <tr>
                                    <td><img src="images/00_02.png" alt=""/></td>
                                    <td className="MenterName"><Link to={"/profile"}>Chris Rhodes</Link></td>
                                    <td>American Football League</td>
                                    <td className="CurrentStatus"><span>Current Playing</span></td>
                                    <td className="FavoriteIcon"><i className="fa fa-heart"></i></td>
                                </tr>
                                <tr>
                                    <td><img src="images/00_03.png" alt=""/></td>
                                    <td className="MenterName"><Link to={"/profile"}>Chris Rhodes</Link></td>
                                    <td>American Football League</td>
                                    <td className="CurrentStatus"><span>Current Playing</span></td>
                                    <td className="FavoriteIcon"><i className="fa fa-heart"></i></td>
                                </tr>
                                <tr>
                                    <td><img src="images/00_04.png" alt=""/></td>
                                    <td className="MenterName"><Link to={"/profile"}>Chris Rhodes</Link></td>
                                    <td>American Football League</td>
                                    <td className="CurrentStatus"><span>Current Playing</span></td>
                                    <td className="FavoriteIcon"><i className="fa fa-heart"></i></td>
                                </tr>
                                <tr>
                                    <td><img src="images/00_05.png" alt=""/></td>
                                    <td className="MenterName"><Link to={"/profile"}>Chris Rhodes</Link></td>
                                    <td>American Football League</td>
                                    <td className="CurrentStatus"><span>Current Playing</span></td>
                                    <td className="FavoriteIcon"><i className="fa fa-heart"></i></td>
                                </tr>
                                <tr>
                                    <td><img src="images/00_06.png" alt=""/></td>
                                    <td className="MenterName"><Link to={"/profile"}>Chris Rhodes</Link></td>
                                    <td>American Football League</td>
                                    <td className="CurrentStatus"><span>Current Playing</span></td>
                                    <td className="FavoriteIcon"><i className="fa fa-heart"></i></td>
                                </tr>
                                <tr>
                                    <td><img src="images/00_07.png" alt=""/></td>
                                    <td className="MenterName"><Link to={"/profile"}>Chris Rhodes</Link></td>
                                    <td>American Football League</td>
                                    <td className="CurrentStatus"><span>Current Playing</span></td>
                                    <td className="FavoriteIcon"><i className="fa fa-heart"></i></td>
                                </tr>      
                            </tbody>
                        </Table>                   

                    </Col>

                </Row>
            </div>

        </>
    );
  }
}
