const accessKeyId = 'AKIAJPDUEBQAJUSQN7OA'
const secretAccessKey = '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'
const rigion = 'us-east-2'

const configImage = {
    bucketName: 'yfc-images', 
    region: rigion,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey, 
}

const configVideo = {
    bucketName: 'yfc-videos', 
    region: rigion,
    accessKeyId: accessKeyId,
    secretAccessKey: secretAccessKey, 
}

class UploadServices {
    
    configVideo(){        
        return configVideo;                
    }

    configImage(){        
        return configImage;                
    }
}

export default new UploadServices();