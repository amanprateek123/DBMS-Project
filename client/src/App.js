import {useState} from 'react'
import {useMutation} from 'react-query'
import './App.css'

function App() {
  const [tab,setTab] = useState(1)
  const schema = {name:'',roll :'',fee:'',sub:'',grade:'',scholar:''}

  const [data,setData] = useState(schema)
  const [get,setGet] = useState({enter:''})

  const [json,setJson] = useState()
  const[status,setStatus] = useState({})

  const handler = (k) =>{
    setTab(k)
    setGet({enter:''})
    setData(schema)
    setJson()
  }

  const change1 =(e)=>{
    setData({
      ...data,[e.target.name]:e.target.value
    })
  }
  const change2 =(e)=>{
    setGet({
      enter:e.target.value
    })
  }   

  const postStudent = ()=>{
    return(
      fetch('/student',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(data)
      }).then(res=>res.json()).then(res=>{
         console.log(res)
         setStatus(res)
      })
    )
  }

  const getStudent = ()=>{
    return(
      fetch('/student/detail',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(get)
      }).then(res=>res.json()).then(res=>{
         console.log(res)
         setJson(res)
      })
    )
  }

  const [postData,meta] = useMutation(postStudent)

  const form1 = (
    <form className="form1" onSubmit={(e)=>{e.preventDefault();postData()}} >
       <div className="field" >
         <h6> Name<span style={{color:'purple',fontWeight:'bold'}} >*</span> : </h6>
         <input type="text" required name="name" onChange={change1} value={data.name} />
       </div>
       <div className="field" >
         <h6> Roll No.<span style={{color:'purple',fontWeight:'bold'}} >*</span> : </h6>
         <input type="text" required name="roll" onChange={change1} value={data.roll} />
       </div>
       <div className="field" >
         <h6> Fees<span style={{color:'purple',fontWeight:'bold'}} >*</span> : </h6>
         <input type="text" required name="fee" onChange={change1} value={data.fee} />
       </div>
       <div className="field" >
         <h6> Subjects<span style={{color:'purple',fontWeight:'bold'}} >*</span> : </h6>
         <input type="text" required name="sub" onChange={change1} value={data.sub} />
       </div>
       <div className="field" >
         <h6> Grades<span style={{color:'purple',fontWeight:'bold'}} >*</span> : </h6>
         <input type="text" required name="grade" onChange={change1} value={data.grade} />
       </div>
       <div className="field" >
         <h6> Scholarship<span style={{color:'purple',fontWeight:'bold'}} >*</span> : </h6>
         <input type="text" required name="scholar" onChange={change1} value={data.scholar} />
       </div>
       <button type="submit" > Submit </button>
       {status.status===201?<div style={{color:'green',fontWeight:'bold'}} >{status.message} !!</div>:null}
       
    </form>
  )

  const form2 = (
    <div>
    <form className="form1" onSubmit={(e)=>{e.preventDefault();getStudent()}} >
    <div className="field" >
       <h6> Enter Roll No<span style={{color:'purple',fontWeight:'bold'}} >*</span> : </h6>
       <input type="text" required onChange={change2} value={get.enter}  />
    </div>
    <button type="submit" > Submit </button>
  </form>
  <div className="show" >
     {json && json.data!=null ?
      <div className="data" >
          <div style={{margin:'1em 0'}} >Name:<span style={{float:'right'}} >{json.data.name}</span></div>
          <div style={{margin:'1em 0'}} >Roll No.:<span style={{float:'right'}} >{json.data.rollNo}</span></div>
          <div style={{margin:'1em 0'}} >Fees:<span style={{float:'right'}} >{json.data.fees}</span></div>
          <div style={{margin:'1em 0'}} >Subject:<span style={{float:'right'}} >{json.data.subjects}</span></div>
          <div style={{margin:'1em 0'}} >Grades:<span style={{float:'right'}} >{json.data.grades}</span></div>
          <div style={{margin:'1em 0'}} >Scholarship:<span style={{float:'right'}} >{json.data.scholarship}</span></div>
     </div>:null}
     {json && json.data===null?<div style={{color:'purple',fontWeight:'bold',marginTop:'7em'}} > No record found !! </div>:null}
  </div>
    </div>
  )

  return (
    <div className="App">
       <h4 className="heading" > DBMS Project </h4>
       <div className="main" >
          <div className="tab" >
             <div className={tab===1?"name select":"name"} onClick={()=>handler(1)} > Enter Student Detail </div>
             <div className={tab===2?"name select":"name"} onClick={()=>handler(2)} > Search Student </div>
          </div>
          <div className="forms">
            <h5 className="head" > {tab===1?"Enter Student Details":tab===2?"Search Student by his/her Roll No.":null} </h5>
            {tab===1?form1:tab===2?form2:null}
          </div>
       </div>
       <div style={{margin:'2em auto',width:'90%'}} >
       <h3> Project made by:  </h3>
       <div style={{display:'flex'}} >
          <div style={{width:'25%',color:'purple',textAlign:'center',fontWeight:'bold'}} > Aman Prateek <br/> 185521 </div> 
          <div style={{width:'25%',color:'purple',textAlign:'center',fontWeight:'bold'}} > Adarsh Rana <br/> 185522 </div> 
          <div style={{width:'25%',color:'purple',textAlign:'center',fontWeight:'bold'}} > Ayush Kaushal <br/> 185523 </div> 
          <div style={{width:'25%',color:'purple',textAlign:'center',fontWeight:'bold'}} > Shivek Soni <br/> 185524 </div>
       </div>
    </div>
    </div>
  );
}

export default App;
