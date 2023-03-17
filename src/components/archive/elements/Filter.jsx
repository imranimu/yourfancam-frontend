import React, { Component } from 'react';

import { Form, FormGroup, Label, Input, Col } from 'reactstrap';

import classes from '../styles/Filter.module.css'

//import {Link} from 'react-router-dom';

export default class FilterComponent extends Component {
  render() {
    return (
        <>
        <Form action="#" className={classes.FilterFormWrap}>
            <div className={classes.FilterLeft}>                    
                <div className={classes.SearchFormGroup}>
                    <i className="fa fa-search"></i>
                    <input type="text" placeholder="Search ..."/>
                </div>                            
            </div>

            <div className={classes.FilterRight}>
                <div className={classes.SortFilter}>
                    <FormGroup row className={classes.FormGroup}>
                        <Label for="SortBy" sm={4}>Sort by</Label>
                        <Col sm={8}>
                            <Input type="select" name="select" id="SortBy">                            
                                <option value="Most Recent">Most Recent</option>
                                <option value="Past Week">Past Week</option>
                                <option value="Past Month">Past Month</option>
                                <option value="Past Year">Past Year</option>
                                <option value="See All">See All</option>
                            </Input>
                            <i className="fa fa-angle-down"></i>
                        </Col>
                    </FormGroup>
                </div>
                {/* <div className={classes.FilterButton}>
                    <Link to={"#"}><img src="images/i-006.png" alt="FilterButton"/></Link>
                </div> */}
            </div>
            <div className="clearfix"></div>
        </Form>	        
        </>
    );
  }
}
