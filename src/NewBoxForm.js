import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state = { height: "", width: "", color: ""}; 
        this.handleChange = this.handleChange.bind(this); 
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
        })

    }
    
    render(){
        return(
          <form>
               
               <div> 
                   <label htmlFor ='height'>Height</label>
                   <input 
                   type = 'text' 
                   name = 'height'
                   value = {this.state.height}
                   onChange = {this.handleChange} 
                   id ="height"/> 
               </div>

               <div> 
                   <label htmlFor ='width'>Width</label>
                   <input 
                   type = 'text' 
                   name = 'width'
                   value = {this.state.width}
                   onChange = {this.handleChange} 
                   id ="width"/> 
               </div>
               <div> 
                   <label htmlFor ='color'>Color</label>
                   <input 
                   type = 'text' 
                   name = 'color'
                   value = {this.state.color}
                   onChange = {this.handleChange} 
                   id ="height"/> 
               </div>

           </form>

           
        )
    }
}

export default NewBoxForm; 


//this component needs to have internal state that manages the inputs 

// this is why I am putting a constructor and setting state. 

// you set the initial state with the three things that you need
// to be stateful or will change when you input diff sizes or colors: 
