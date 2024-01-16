
import './App.css';
import {useState} from 'react';
function App() {
  const [tagValue, setTagValue] = useState("");
  const [tags,setTags] = useState([]);
  const addTags=(e)=>{
    if(e.keyCode === 13 &&  tagValue){
      // alert(tagValue);
      setTags([...tags,tagValue]);
    }
  }
  return (
   <div className="main">
    <div className='content'>
      <div className='taginput'>
        
        {
          tags.map((item,index)=>{
             return<button key={index}>
              {item}
            </button>
          })
        }
        
        <input type='text' onChange={(e)=>{setTagValue(e.target.value)}}
        onKeyDown={addTags}/>
      </div>

    </div>

   </div>
  );
}

export default App;
