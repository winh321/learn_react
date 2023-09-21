import React from "react";
import  ReactDOM  from "react-dom/client"; //"ract-dom"
import "./index.css"



const cardarray =[
    {
    image:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    title:"card Title First",
    description:"Card description 1"},
    {
    image:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
    title:"card Title Two",
    description:"Card description 2"}
    ]

    function Cardlist(){
        return <main className="CardList">
           {cardarray.map((card)=>{
            return (
                <Card card={card} />
            )
           })}
        </main>
        }

        function Card(props){
            const {image,title,description,children} = props.card;
            return(<div className="Card">
                <img src={image} />
                {children}
                <h1>{title}</h1>
                <p>{description}</p>
                
                <hr></hr>
            </div>)
            }


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Cardlist/>)