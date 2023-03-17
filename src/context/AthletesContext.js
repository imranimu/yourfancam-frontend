import React, { Component, createContext } from 'react';
import getAthletes from '../api/getAthletes';

export const AthletesContext = createContext();

class AthletesContextProvider extends Component {

    state = {
        Athletes: [],
        PopularAthletes: [],
        FeaturedAthletes: [],
        JoinedAthletesSearch: '',
        AthletesSearch: ''
    }

    componentDidMount() {  

        this.getAthletesOnLoad();

        this.getPopularAthletesOnLoad();

        this.getFeaturedAthletesOnLoad();
    }

    async getFeaturedAthletesOnLoad(){        

        let response =  await getAthletes.getFeaturedAthletes(10);          
        
        console.log(response); 

        this.setState({ FeaturedAthletes: response });

        console.log('Get All Featured Athletes...')

    }
    
    async getAthletesOnLoad(){        

        let response =  await getAthletes.getAthletes(5);          
        
        //console.log(response); 

        this.setState({ Athletes: response });

        console.log('Get All Athletes...')

    }

    async getPopularAthletesOnLoad(){        

        let response =  await getAthletes.getAthletes(5);          
        
        //console.log(response); 

        this.setState({ PopularAthletes: response });

        console.log('Get All Popular Athletes ...')

    }    

    handleFormSubmitJoinedAthletes = async (e) => { 

        e.preventDefault()
        
        //alert('Submited .... ');
        //var data = 'ronty';

        let response = await getAthletes.AthletesSearch(this.state.JoinedAthletesSearch);

        this.setState({ PopularAthletes: response });

    }

    JoinedAthletesHandler = (event) => {
        
        let JoinedAthletesSearch = event.target.value ;

        this.setState({ JoinedAthletesSearch: JoinedAthletesSearch });

    }

    handleFormSubmitAthletes = async (e) => { 

        e.preventDefault()
        
        //alert('Submited .... ');
        //var data = 'ronty';

        let response = await getAthletes.AthletesSearch(this.state.AthletesSearch);

        this.setState({ Athletes: response });

    }

    AthletesSearchHandler = (event) => {
        
        let AthletesSearch = event.target.value ;

        this.setState({ AthletesSearch: AthletesSearch });
        
    }



    render() { 
        return (
            <AthletesContext.Provider 

                value={{
                    ...this.state,
                    handleFormSubmitJoinedAthletes: this.handleFormSubmitJoinedAthletes,
                    JoinedAthletesHandler: this.JoinedAthletesHandler,
                    handleFormSubmitAthletes: this.handleFormSubmitAthletes,
                    AthletesSearchHandler: this.AthletesSearchHandler
                }}>

                {this.props.children}

            </AthletesContext.Provider>
        );
    }

}


export default AthletesContextProvider;