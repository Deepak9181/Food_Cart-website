import React from "react";

class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
        }
        
    }

    componentDidMount(){
     
    }
    render(){
        console.log(this.props.name+ "child render");
        const{name,location,gmail }=this.props;
        const{count}=this.state;
        return (
            <div className="user-card">
                <h1>Developer Details</h1>
                <h2>{name}</h2>
                <h3>{location}</h3>
                <h4>{gmail}</h4>
            </div>
        )
    }
}

export default User ;