import React, { useState } from 'react'

const FriendForm = (props) => {

    const [name, setName] = useState("");
    const [image, setImage] = useState("https://i.pravatar.cc/48");

    const nameHandler = (e) => {
        setName(e.target.value);
    }

    const imageHandler = (e) => {
        setImage(e.target.value);
    }

    const id = crypto.randomUUID();

    const addHandler = () => {
        if (name === "" || image === "") {
            return;
        }
        props.setTodoList
            ({
                id,
                name,
                image: `${image}?={id}`,
                num: 0
            });

        props.setadd(false);
    }

    return (
        <div className='formadd'>
            <div>
                <label htmlFor="">Enter name : </label><br />
                <input type="text" onChange={nameHandler} value={name} /> <br />
            </div>
            <div>
                <label htmlFor="">Image : </label> <br />
                <input type="text" value={image} onChange={imageHandler} />
            </div>

            <button className='add' onClick={addHandler}>submit</button>


        </div>
    )
}

export default FriendForm
