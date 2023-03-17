import React, { Component, createContext } from 'react'; 
import GetConversations from '../api/GetConversations';
import GetMessages from '../api/GetMessages';

export const ConversationContext = createContext();

class ConversationContextProvider extends Component {

    state = {
        Loader: false, 
        WrongMassage: '',
        Users: [],                        
        Chats: [],
        sender_id: '',
        sender_name: '',
        showConversation: false,
        video: false,
        selfi: false,
        message: false,         
    }

    componentDidMount() {    
        this.getUsersListOnLoad();
    }

    async getUsersListOnLoad(){

        let response =  await GetConversations.getConversations();  
        
        console.log(response);

        this.setState({ Users: response});

    }

    GetVideosConversation = (uuid, type, sender_name) => {    

        this.Communications(uuid, type, sender_name);

    }
    
    async Communications(sender_id, type, sender_name) {             

        let response =  await GetMessages.getChats(sender_id, type);         

        console.log(response); 

        this.setState({
            Loader: true
        })

        if(type === 'video'){
            this.setState({
                video: true,
                selfi: false,
                message: false,
            })
        }else if(type === 'selfi'){
            this.setState({
                video: false,
                selfi: true,
                message: false,
            })
        }else if(type === 'chat'){
            this.setState({
                video: false,
                selfi: false,
                message: true,
            })
        }

        if(response.error === true){

            this.setState({ 
                Chats: [],
                error: true, 
                Loader : false, 
                WrongMassage: response.message 
            });

        }else{
            this.setState({
                Chats: response,
                sender_id: sender_id,
                sender_name: sender_name,
                showConversation: true,
                Loader : false, 
            })            
        }        
    }

    render() { 
        return (
            <ConversationContext.Provider 
                value={{
                    ...this.state,
                    GetConversation: this.GetConversation,
                    GetVideosConversation: this.GetVideosConversation
                }}>
                {this.props.children}
            </ConversationContext.Provider>
        );
    }
}


export default ConversationContextProvider;