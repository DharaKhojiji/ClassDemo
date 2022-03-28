import React, { Component } from 'react'

 class EventBind extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              msg:"hello dhara"
         }
     }
     
     buttonHnadler =()=>
     {
         this.setState({msg:"hello dhara by by!"})
         console.log(this)
     }

    render() {
        return (
            <div>
                <div>{this.state.msg}</div>
                <button onClick={this.buttonHnadler.bind(this)}>"CLICKED"</button>
            </div>
        )
    }
}

export default EventBind
