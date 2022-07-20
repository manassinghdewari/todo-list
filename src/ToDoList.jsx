import React, {useState} from 'react';
import ListCom from './ListCom';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const ToDoList =() => {
    const [item,setItem] = useState("");
    const [newItem,setNewItem]=useState([]);   //[] used for changing newItem into array
    const itemEvent=(event)=>{              //jo bhi inpout field mai type krunga vo value mai store ho jata hai
        setItem(event.target.value);
    }
    const listOfItem=()=>{
        setNewItem((preValue)=>{            //we can use all the values inside the useState function here by using preValue we are using previous array
            return [...preValue,item];
        })
        setItem("");            //for deleting content of item for next value
    }

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" 
                    value={item}
                    placeholder="Add an Item " onChange={itemEvent}/>
                    <Button className="newBtn" onClick={listOfItem}>
                        <AddIcon />
                    </Button>
                    <br />
                    <ol>
                        {
                            newItem.map((val,index)=>{
                                return <ListCom key={index} text={val}/>
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default ToDoList;