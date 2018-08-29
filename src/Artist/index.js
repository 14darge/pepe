import React from "react";

class Artist extends React.PureComponent{
    render(){
        return(
            <div className="col-2">
                <img src="https://picsum.photos/g/200/250" alt=""></img> 
            </div>
        );
    }
}

export default Artist;