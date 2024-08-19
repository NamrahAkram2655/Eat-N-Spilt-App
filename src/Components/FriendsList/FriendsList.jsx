import React from 'react'

const FriendsList = (props) => {

    const selectPersonHandler = () => {
        props.setSelectedData(props.friend);
        props.setBalance(props.friend)
    }

    const isSelected = props.selected.id === props.friend.id;
    //didn't put curly brackets cz js compare by reference not by value

    return (
        <div className="list">
            <div className='img'>
                <img src={props.friend.image} alt="your frnd" />
            </div>

            <div>
                {props.friend.name}
                <div className={props.friend.num < 0 ? "red" : props.friend.num > 0 ? "green" : "black"}>

                    {props.friend.num > 0 && `${props.friend.name} owes you ${props.friend.num} `}
                    {props.friend.num < 0 && `You owe ${props.friend.name} ${props.friend.num} `}
                    {props.friend.num === 0 && "You Both are even"}

                    <button className="button" onClick={selectPersonHandler}>{isSelected ? 'Close' : 'select' }</button>
                </div>
            </div>

        </div>
    )
}

export default FriendsList
