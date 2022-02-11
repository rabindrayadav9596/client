import React,{ useState, useEffect} from 'react'
import "../styles/Scanner.css";
import axios from "axios";
import { saveAs } from "file-saver";

const Scanner = () => {
   
    const[casenumber, setCasenumber] = useState(9)
    const[make, setMake] = useState('')
    const[model, setModel] = useState('')
    const[item, setItem] = useState('')
    // const[socialmedia, setSocialmedia] = useState('')
    const[status, setStatus] = useState('None')
    const[start, setStart] = useState(false)
    const[completionPercentage, setCompletionPercentage] = useState(0)
    const[complete, setComplete] = useState(false)

    useEffect(() => {
        console.log(start)
        if(start === true){
           const interval =  setInterval(() => {
                if(complete===true){
                    clearInterval(interval)
                }
                checkStatus()
               }, 30000);
        }
      
      },[start]);

    const getDownloadFile = async () => {
        return axios.get(`https://server-b2mfl.ondigitalocean.app/cases/${casenumber}`, {
            responseType: 'blob',
        })
       
        .then(blob => saveAs(blob.data, 'result.pdf'))
      }


    const checkStatus = async()=>{
        console.log("status is being checked")
        axios.get(
            `https://server-b2mfl.ondigitalocean.app/cases/status/${casenumber}`,
         ).then(res => {
            console.log(res.data.status)
            setCompletionPercentage(prev => prev+1);
            if(res.data.status <= 100){
                setCompletionPercentage(res.data.status)
            }
            if(res.data.status === 100){
                setStart(false)
                setComplete(true)
            }
           
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("form value")
        // printFormValue()
        axios.post(
            `https://server-b2mfl.ondigitalocean.app/scanner/process`,
            {"casenumber":String(casenumber), "make":make,"model":model,"item":item},
             {
                 headers: {
                     "Content-type": "application/json",
                 },                    
             }
         ).then(res => {
             setStatus(res.data.response)
             setStart(true)
            console.log(res.data.response)
           
        }).catch(err => { 
            console.log(err);
        })
    }

    //setting form data to state

    const handleCaseNumChange = event=>{
        setCasenumber(event.target.value);
    }

    const handleMakeChange = event=>{
        setMake(event.target.value);
    }

    const hadleModelChange = event=>{
        setModel(event.target.value);
    }

    const handleItemChange = event=>{
        setItem(event.target.value);
    }

    const handleSocialMediaChange = event =>{
        // setSocialmedia(event.target.value)
    }
    
    return (
        <>
        {/* <Timer /> */}
        <div className="scanner">
             <form className="form" onSubmit={handleSubmit}>
              <input id="object" name = "casenumber" type="text" onChange={handleCaseNumChange} placeholder="case number" />
              <input id="object" name = "make" type="text" onChange={handleMakeChange} placeholder="make" />
              <input id="object" name = "model" type="text" onChange={hadleModelChange} placeholder="model" />
              <input id="object" name = "item" type="text" onChange={handleItemChange} placeholder="item" />
              <input id="object" name = "socialMedia" type="text" onChange={handleSocialMediaChange} placeholder="social media " />
              {/* <input id="upload"  type="file" name="src_files[]" multiple={false} onChange={handleImagePreview2}/> */}
              <input id="submit" type = "submit"  value="Scan"/>
            </form>
            <div className = "progress">
            <h3> Progress status </h3>
            <br/><br/>
            {/* <p className=''>File status: {uploadStatus}</p>
            <br/> */}

            {(() => {
              if (start === true){
                  return (
                    <>
                    <p className=''> Process status: {status}</p>
                    <br />
                    <p className = ''>Completion percentage:  { parseFloat(completionPercentage).toFixed(2)} %</p>
                    <br/>
                    </>
                  )
              }
              return null;
            })()}  

            {(() => {
              if (start === true && complete === false){
                  return (
                    <div className="loading">
                    <div className="loader"></div>
                   </div>
                  )
              }else{
                <p className = ''>Completion percentage:  { parseFloat(completionPercentage).toFixed(2)} %</p>
              }
              return null;
            })()}
       
            {complete && <p>Process  Completed</p>}
           {complete && <button onClick={getDownloadFile}>Download</button>}
            </div>
        </div>
       
        </>
    )
}

export default Scanner