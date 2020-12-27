import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
class NewBoxForm extends Component {
    constructor(props){
        super(props);
        this.state = { height: "", width: "", color: ""}; 
        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    handleChange(evt){
        this.setState({
            [evt.target.name]: evt.target.value
            
    });
}
// the new variable newBox maps state and adds the new id: in we pass it here. 
    handleSubmit(evt){
       evt.preventDefault(); 
       const newBox = {...this.state , id: uuidv4()} 
       this.props.createBox(newBox)
       this.setState =( { 
           height: "", 
           width: "", 
           color: ""
        });
        }; 
    
    
    render(){
        return(
          <form onSubmit = {this.handleSubmit}>
               
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
               <button>Add New Box</button>

           </form>

           
        ); 
    }
}


export default NewBoxForm; 


//this component needs to have internal state that manages the inputs 

// this is why I am putting a constructor and setting state. 

// you set the initial state with the three things that you need
// to be stateful or will change when you input diff sizes or colors: 
