import React from "react";

class Counter extends React.Component{
    constructor(porps){
        super(porps)
        this.state = {
            count: 0
        };
    }
   componentDidMount(){
        document.title = 'Houveram'+this.state.count+'cliques'
    }

    componentDidUpdate(){
        document.title = 'Houveram'+this.state.count+'cliques'
    }

}

export default Counter;