function Card(props){
    const {image,title,description,children} = props.card; // for spread use only props instead for props.cards
  
    function clickHandler(){
        console.log("I just clicked haha" + title)
    }

  return(<div className="Card">
        <img onMouseOver={()=>{
            console.log("Mouse Over")
        }} src={image} />
        {children}
        <h1>{title}</h1>
        <p>{description}</p>
        <button onClick={clickHandler}>Click Me</button>
        
        <hr></hr>
    </div>)
    }
export default Card;
