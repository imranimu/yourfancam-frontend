// import React from "react";

// import { Fade  } from "react-slideshow-image";

// import 'react-slideshow-image/dist/styles.css'
// import SliderItem from "./SliderItem";

// import { Row } from "reactstrap";

// const FeaturedSlider = () => {

//     const properties = {
//         duration: 5000,
//         pauseOnHover: false,
//         autoplay: true,
//         indicators: false, 
//         prevArrow: <div className="SliderCustomArrow" style={{marginRight: "-40px"}}><i className="fa fa-angle-left"></i></div>,
//         nextArrow: <div className="SliderCustomArrow" style={{marginLeft: "-40px"}}><i className="fa fa-angle-right"></i></div>,
//         scale: 2
//     };    

//     return (    
//         <Fade {...properties} className="FeaturesSlider">
//             <Row>
//                 <SliderItem Image="/images/00_09.png" Name='Hello Flix' uuid='asdasdasdasdasd'/>
//                 <SliderItem Image="/images/00_12.png" Name='Hello Flix' uuid='asdasdasdasdasd'/>
//             </Row>
//             <Row>
//                 <SliderItem Image="/images/00_13.png" Name='Hello Flix' uuid='asdasdasdasdasd'/>
//                 <SliderItem Image="/images/00_14.png" Name='Hello Flix' uuid='asdasdasdasdasd'/>
//             </Row>
//         </Fade>
//     );

// };
// export default FeaturedSlider; 


// import React, { Component } from 'react';

// import { Fade  } from "react-slideshow-image";

// import 'react-slideshow-image/dist/styles.css'
// import SliderItem from "./SliderItem";

// import { Row } from "reactstrap";
// import { AthletesContext } from '../../context/AthletesContext';


// export default class FeaturedSlider extends Component {
    
//     static contextType = AthletesContext     

//     properties = {
//         duration: 5000,
//         pauseOnHover: false,
//         autoplay: true,
//         indicators: false, 
//         prevArrow: <div className="SliderCustomArrow" style={{marginRight: "-40px"}}><i className="fa fa-angle-left"></i></div>,
//         nextArrow: <div className="SliderCustomArrow" style={{marginLeft: "-40px"}}><i className="fa fa-angle-right"></i></div>,
//         scale: 2
//     };

    
//     render() {
        
//         const {FeaturedAthletes} = this.context        

//         return (
//             <Fade {...this.properties} className="FeaturesSlider">
                
//                 { FeaturedAthletes.map( (value , i ) => 
//                     <Row key={value.uuid}>                           

//                         <SliderItem Image="/images/00_08.png" Name={value.first_name +' '+ value.last_name} uuid={value.uuid}/>
                         
//                     </Row>
//                 )}
//                 <Row>
//                     <SliderItem Image="/images/00_08.png" Name='Hello Flix' uuid='asdasdasdasdasd'/>
//                     <SliderItem Image="/images/00_09.png" Name='Hello Flix' uuid='asdasdasdasdasd'/>
//                 </Row>
//                 <Row>
//                     <SliderItem Image="/images/00_12.jpg" Name='Hello Flix' uuid='asdasdasdasdasd'/>
//                     <SliderItem Image="/images/00_13.jpg" Name='Hello Flix' uuid='asdasdasdasdasd'/>
//                 </Row>
//             </Fade>
//         );
//     }
// }

import React, { Component } from 'react';

import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

import SliderItem from "./SliderItem";

import { AthletesContext } from '../../context/AthletesContext';

export default class FeaturedSlider extends Component {

    static contextType = AthletesContext  

    responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };
    render() {
        const {FeaturedAthletes} = this.context      
        return (
            <Carousel responsive={this.responsive}>

                { FeaturedAthletes.map( (value , i ) => 
                    <SliderItem key={value.uuid} Image={value.avatar} Name={value.first_name +' '+ value.last_name} uuid={value.uuid}/>
                )}            

            </Carousel>
        );
    }
}

