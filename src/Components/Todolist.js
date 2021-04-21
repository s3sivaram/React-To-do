import './Todolist.css';

function Todolist(props){

    const items = props.items;
    const deleteitem = props.deleteItem;


    

    const   display =
        items.map((item)=>{
            return (
                
                    <p key={item.key} id={item.key} className="itemlist" >{item.text}
                        <span key={item.key}className="times" onClick={()=>deleteitem(item.key)}>X</span>
                    </p>
                
            )
        })

    
        
    return(
        
        <div className="itemcontainer">
            
            {display}
        </div>
        


    )
}

export default Todolist