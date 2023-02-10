const Card = ({ url, title, active }) => {
    const style = { width: active ? "130px" : "100px" };
    return (
      <div className="main-card" style={{margin:"25px"}}>
        <img src={url} className="img" style={style} />
        <div className="title-cont">{title}</div>
      </div>
    );
  };
  
  export default Card;