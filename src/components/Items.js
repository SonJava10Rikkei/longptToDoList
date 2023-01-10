import React from "react";

function Item(props) {
    let item = props.taskProps;
    let elementButton = "";
    const handleDelete = (id) => {
        props.handleListTaksProps(id)
    }
    // console.log(item.status);
    if (!item.status) {
        elementButton = (
            <>
                <button
                    onClick={() =>
                        props.onChangeStatus({ ...item, status: !item.status })
                    }>
                    finish
                </button>
                <button
                // onClick={()=>
                //     props.onChangeTitle({...item, title:newItem.title})}
                >Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
            </>
        );
    }
    return (
        <li>
            {item.title} - {item.status ? ("finish", <button> Dlete</button>) : "pending"}
            {elementButton}
        </li>
    );
}

export default Item;