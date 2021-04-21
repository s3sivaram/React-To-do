import React, { Component } from 'react'
import Todolist from './Todolist'
import './Todohead.css'

class Todohead extends Component {
    
    constructor(props){
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:"",
                key:""
            },
            
        }
        this.handleInput=this.handleInput.bind(this);
        this.addInput=this.addInput.bind(this);
        this.deleteItem=this.deleteItem.bind(this);
        this.focusHandler=this.focusHandler.bind(this);
    
    }
    focusHandler(param){
        console.log("focus handler",param);
        this.input.value=" ";
    }
    componentDidMount(){
        this.input.value="Add your Items...";
    }
    handleInput(e){
        
        this.setState({
            currentItem:{
                text:e.target.value,
                key:Date.now(),
               
            }
        }
        )
        
    }

    
    addInput(){

        const newItem=this.state.currentItem;
        // console.log("items text,length =",newItem.text,newItem.text.trim().length);
        if((newItem.text.trim().length !== 0)) {
            const items=[...this.state.items,newItem]
            // console.log("inside If items =",items)
            this.setState({
                items:items,
                currentItem:{
                    text:"",
                    key:""
                }
            })
            // console.log(this.state.items.length);
            // this.state.items.map((item)=>{
            //    return( console.log("item value=",item.value));

            // })
        }
        
    }

    deleteItem(deletekey){
        const filtereditems=this.state.items.filter((items)=>{
            return(items.key !== deletekey);
        })

        this.setState({
            items:filtereditems
        })
    }

    

    render() {
        return (
            <div>
                <div className="currentlist">
                    <input type = "text"  onChange={this.handleInput}
                     className="input" value={this.state.currentItem.text}
                    ref={(input)=>{this.input=input}}
                    onFocus={this.focusHandler.bind(this,"parameter")}
                    placeholder="Add your item"></input>
                    <button onClick={this.addInput}>Add</button>
                    <Todolist items={this.state.items} deleteItem={this.deleteItem} />

                </div>

            </div>

        )   
            
     
    }
}

export default Todohead
