import React, { Component } from 'react';

import Header from '../partial/Header' 

import AchiveTabs from './ArchiveTabs'

export default class componentName extends Component {

    constructor(props) {
        super(props); 
        this.state = {   
            tabOption: ''
        };        
    }

    componentDidMount() {         
        
        document.title = "Archive || Your fan cam"        
        
        const getOption = new URLSearchParams(this.props.location.search).get("active")      

        if(getOption){
            this.setState({
                tabOption: getOption
            })
        }else{
            this.setState({
                tabOption: 'active'
            })
        }
    }

    render() {      

        return (
            <>
                <Header BannerHide="true"/>               
                
                {this.state.tabOption ? 
                    <AchiveTabs ActiveTab={this.state.tabOption} /> : ""
                }

            </>
        )
    }
}

