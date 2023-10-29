import React, { useState } from 'react'

const CreateNote = ({noteList}) => {
    const [title, setTitle] =useState("");
    const [body, setBody] = useState("");

    const createNote = ()=>{

        const payload ={
            title,
            body
        }

           fetch("https://energetic-plum-bison.cyclic.app/notes/create",{
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                    authorization:`Bearer ${localStorage.getItem("token")}`
                },
                body:JSON.stringify(payload)
            }).then((res)=>res.json()).then((data)=>{
                console.log(data)
                noteList()

            }).catch((err)=>console.log(err));
            // const data = await res.json();
        
    }
   

  return (
    <div>
        <input type="text" value={title} placeholder='enter title of note' onChange={(e)=>setTitle(e.target.value)} />
        <br/>
        <textarea type="text" value={body} placeholder='enter body of note' onChange={(e)=>setBody(e.target.value)} />
        <br/>
        <button onClick={createNote}>Create Note</button>

    </div>
  )
}

export default CreateNote
