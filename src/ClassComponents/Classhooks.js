import { Component } from "react/cjs/react.production.min";

class Classhooks extends Component
{
    constructor(props)
    {
         super(props)
         this.state={count:0};
    }

    componentDidMount()
    {
        document.title=`you clicked ${this.state.count}times`;
    }
    componentDidUpdate()
    {   
        document.title=`you clicked ${this.state.count}times`;
    }
render()
{
    return(
        <>
        <p>you clicked{this.state.count}times</p>
        <button onClick={()=>this.setState({count:this.state.count+1})}>CLICK ME</button>
        </>
    )
}
}
export default Classhooks;