import React, { useState } from 'react';
import { TabsData } from './Data/DummyData';

export default function Tabs() {

let [currentActiveButton,setActiveButton] = useState(0);
let [currentActiveDescription , setActiveDescription] = useState(TabsData[0].description);
function setData(index){
    setActiveButton(index);
    setActiveDescription(TabsData[index].description);
}

const ButtonTabs = () => {
  return (
    <div className='text-start'>
      {TabsData.map((value, index) => (
        <button onClick={()=>setData(index)} key={index} className={currentActiveButton === index?'btn btn-success m-1':'btn btn-primary m-1'}>
          {value.title}
        </button>
      ))}
    </div>
  );
};

  return (
    <div className="text-center mb-2 container">
        <hr />
        <h2>Tab Task</h2>
        <div className="mt-2">
            <ButtonTabs/>
            <p className='mt-2'>{currentActiveDescription}</p>
        </div>
    </div>
  )
}
