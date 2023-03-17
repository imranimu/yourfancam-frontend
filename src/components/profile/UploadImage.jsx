import React, { Component } from 'react';
import { Label } from 'reactstrap';
import { MessageContext } from '../../context/MessageContext';

export default class UploadImage extends Component {
    
    static contextType = MessageContext

    render() {
        const {         
            singleFileChangedHandler,
            selectedFile
        } = this.context      
        return (            
            <div className="UploadInput mb-4">
                <input type="file" onChange={singleFileChangedHandler} id="ImageUpload" accept="image/x-png,image/gif,image/jpeg"/>                    

                <Label for="ImageUpload">
                    {selectedFile ? 
                        <img src={selectedFile} alt=""/> : 
                        <p className="FormSubmitButton"> <i class="fa fa-cloud-upload" aria-hidden="true"></i> Upload Selfe</p>
                    }
                </Label>
            </div>
        );
    }
}
