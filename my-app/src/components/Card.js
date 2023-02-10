

import { useState } from "react";
const Card = ({ url, title, active }) => {
    const style = { width: active ? "130px" : "100px" };
    return (
      <div className="main-card" style={{margin:"25px"}}>
        <img src={url} className="img" style={style} />
        <div className="title-cont">{title}</div>
      </div>
    );
  };
  
 

const App = () => {
const initialData = [
{
url:
"https://img.freepik.com/free-vector/cute-swag-polar-bear-with-hat-gold-chain-necklace-cartoon-illustration-flat-cartoon-style_138676-2719.jpg",
title: "Math",
active: false
},
{
url:
"https://img.freepik.com/free-vector/cute-swag-polar-bear-with-hat-gold-chain-necklace-cartoon-illustration-flat-cartoon-style_138676-2719.jpg",
title: "English",
active: true
},
{
url:
"https://img.freepik.com/free-vector/cute-swag-polar-bear-with-hat-gold-chain-necklace-cartoon-illustration-flat-cartoon-style_138676-2719.jpg",
title: "Color",
active: false
}
];
const [data, setData] = useState(initialData);

const cardArr = data.map((card, index) => (
<Card url={card.url} title={card.title} active={card.active} key={index} />
));
const handleLeft = () => {
    let activeIndex = data.findIndex(item => item.active === true);
    let newData = [...data];
    let maxIndex = newData.length - 1;
    if (activeIndex === 0) {
      return;
    }
    
    let prevData = newData[activeIndex - 1];
    newData.splice(activeIndex - 1, 2, newData[activeIndex], prevData);
    setData(newData);
    };
    
    const handleRight = () => {
    let activeIndex = data.findIndex(item => item.active === true);
    let newData = [...data];
    let maxIndex = newData.length - 1;
    if (activeIndex === maxIndex) {
      return;
    }
    
    let nextData = newData[activeIndex + 1];
    newData.splice(activeIndex, 2, nextData, newData[activeIndex]);
    setData(newData);
    };
    
    return (
    <div className="container" style={{display:"flex"}}>
    <button onClick={handleLeft}> Go </button>
    {cardArr}
    <button onClick={handleRight}> Next </button>
    </div>
    );
    };
    
    export default App;