import { Component } from "react/cjs/react.production.min";

class Cchooks extends Component
{
    constructor(props)
    {
        super(props);
        this.state={count:0}
    }

    render()
    {
        return(
            <div>
                <p>you clciked{this.state.count}times</p>
                <button onClick={()=>this.setState({count: this.state.count+1}) }>CLICK ME</button>
            </div>
        )
    }
}
export default Cchooks;