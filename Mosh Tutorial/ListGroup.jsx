import {  useState } from "react";

function ListGroup({items,title,onSelect}) {
    const [seleledIndex, setSelectedIndex] = useState(-1)

    

    return <>
        <h1>{title}</h1>
        {items.length == 0 ? <p>No items Found</p> : null}
        <ul className="list-group">
            {items.map((item, index) => <li key={item}
                className={index === seleledIndex ? "list-group-item active" : "list-group-item"}
                onClick={() => {
                    setSelectedIndex(index)
                    onSelect(index)
                }}
            > {item}</li>
            )}
        </ul>
    </>
};

export default ListGroup;