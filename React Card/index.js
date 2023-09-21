import React from "react";
import  ReactDOM  from "react-dom/client"; //"ract-dom"
import "./index.css"
import {cardarray} from "./data/card-data"
import Card from "./Card.js"


// const card = {
//     image:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
//     title:"card Title",
//     description:"Card description"

// };

// const cardTwo = {
//     image:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
//     title:"card Title Two",
//     description:"Card description 2"

// }



   

    function Cardlist(){
        return <main className="CardList">
           {cardarray.map((card)=>{
            return (
               // <Card key={card.id} {...card} /> // for spread operator
                <Card key={card.id} card={card} />
            )
           })}
        </main>
        }

        // function Card(props){
        //     const {image,title,description,children} = props.card; // for spread use only props instead for props.cards
          
        //     function clickHandler(){
        //         console.log("I just clicked haha" + title)
        //     }

        //   return(<div className="Card">
        //         <img onMouseOver={()=>{
        //             console.log("Mouse Over")
        //         }} src={image} />
        //         {children}
        //         <h1>{title}</h1>
        //         <p>{description}</p>
        //         <button onClick={clickHandler}>Click Me</button>
                
        //         <hr></hr>
        //     </div>)
        //     }

// const fruits=["orange","apple","banana"]

// const newFruits = fruits.map((fruit) => <h1>{fruit}</h1>)

// function Cardlist(){
//     return <main className="CardList">
//        {cardarray.map((card)=>{
//         const {img,title,description} = card
//         return (
//             <div>
//                 <h1>{title}</h1>
//                 <p>{description}</p>
//             </div>
//         )
//        })}
//     </main>
//     }


// function Cardlist(){
// return <main className="CardList">
//     <Card title={card.title} image={card.image} description={card.description}> <button>Hello</button> </Card>
//     <Card title={cardTwo.title} image={cardTwo.image} description={cardTwo.description} />
//     <Card title={card.title} image={card.image} description={card.description} />
//     <Card title={card.title} image={card.image} description={card.description} />
//     <Card title={card.title} image={card.image} description={card.description} />
// </main>
// }

// function Card(props){
//     return(<div className="Card">
//         <img src={props.image} />
//         <h1>{props.title}</h1>
//         <p>{props.description}</p>
//         <hr></hr>
//     </div>)
//     }

// function Card({image,title,description,children}){
// return(<div className="Card">
//     <img src={image} />
//     {children}
//     <h1>{title}</h1>
//     <p>{description}</p>
    
//     <hr></hr>
// </div>)
// }

// function Description(){
//     return <p style={{color:"blue"}}>Hello 123</p>
// }

// function Ext(){
//     return <i style={{color:"red"}}>finish pr</i>
// }

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Cardlist/>)