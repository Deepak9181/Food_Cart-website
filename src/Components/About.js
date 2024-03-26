import User from "./User";
import React from "react";


class About extends React.Component{
    constructor(){
        super()

    }


    componentDidMount(){
     
    }
    
    render(){
        
        return(
            <div>
             <h1>About us Page</h1>
             <h2>This is about us Page </h2>
             <User name={"First"} location={"Clement Town "} gmail={"Ronaldo@gmail.com"}/>
         </div>
        )
    }
}






// const About=()=>{   
//     return(
//         <div>
//             <h1>About us Page</h1>
//             <h2>This is about us Page </h2>
//             <User name={"Ronaldo"} location={"Clement Town "} gmail={"Ronaldo@gmail.com"}/>
//         </div>
//     );
// }

export default About;