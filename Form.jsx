import React, {useState} from "react";
import Heading from "./Heading";
import Input from "./Input";
import "./index.css"
import Button from "./Button";




const Form = function(){
    let [tasktype , setTaskType] = useState('')
    let [tasktitle , setTaskTitle] = useState('')
    let [taskdesc , setTaskDesc] = useState('')
    let [tasksub , setTaskSub] = useState('')
    let [taskdate , setTaskDate] = useState('')
    let [taskbudget , setTaskBudget] = useState(0)
    let p1ischecked = false;
    let p2ischecked = false;

    const changep1 = (event)=>{
        
        p1ischecked = !p1ischecked;
        if (p1ischecked){
            const value = event.target.value
            setTaskType(value)
            
        }else{
            setTaskType("")
        }
    }

    const changep2 = (event)=>{
        p2ischecked = !p2ischecked;
       if (p2ischecked) {
        const value = event.target.value
        setTaskType(value)
       }else {
        setTaskType("")
       }
  
    }
    
    const handletitle = (event)=>{
      
            const value = event.target.value
            setTaskTitle(value)
    }
    const handledesc = (event)=>{
      
        const value = event.target.value
        setTaskDesc(value)
    }
    const handledate = (event)=>{
      
        const value = event.target.value
        setTaskDate(value)
    }
    const handleSub = (event)=>{
      
        const value = event.target.value
        setTaskSub(value)
    }
    const handlebudget = (event)=>{
      
        const value = event.target.value
        setTaskBudget(value)
    }
    const submitinfo = ()=>{
       let newTask = {
        type: tasktype,
        title: tasktitle,
        desc: taskdesc,
        suburb: tasksub,
        date: taskdate,
        budget: taskbudget
       }
       
       console.log(JSON.stringify(newTask))

        fetch('http://localhost:8080/create', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify(newTask)
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => {
            console.log("Error:" + err)
        })

        
    }

    return (
        <div>
            <Heading title="New Task" />

            <div >
            <form className="radios">
            <Input type="checkbox" name="Person" onChange={changep1} value="In Person"/>
            <label htmlFor="Person">In Person</label>
            <Input type="checkbox" name="Online" onChange={changep2} value="Online"/>
            <label htmlFor="Online">Online</label>
            </form>
            </div>

            <Heading title="Describe your task" />
            <div className="radios">
            <label htmlFor="title">Task Title</label>
            <Input type="text" name="title"  placeholder="Task Title" onChange={handletitle}/>
            </div>
            <br />
            <div className="radios">
            <label htmlFor="desc">Task Description</label>
            <Input type="text" name="desc" class="desc" onChange={handledesc}/>
            </div>

            <Heading title="Set up your task" />
            {p2ischecked ? 
            <div className="radios">
            <label htmlFor="date">Date</label>
            <Input type="text" name="title"  placeholder="Date" onChange={handledate}/>
            </div> 
            :
            <div>
            <div className="radios">
            <label htmlFor="date">Date</label>
            <Input type="text" name="date"  placeholder="Date" onChange={handledate}/>
            </div>
            <div className="radios">
            <label htmlFor="suburb">Suburb</label>
            <Input type="text" name="suburb"  placeholder="Suburb" onChange={handleSub}/>
            </div>
            </div>
        }
            <Heading title="What is your Budget?" />
            <Input type="text" name="budget"  placeholder="$" onChange={handlebudget}/>
            <br />
            <br />
            <Button type="submit" onClick={submitinfo} text="Post Task" />
           
        </div>

    )

}

export default Form