import React from 'react'
import FriendsList from '../FriendsList/FriendsList'

const Friend = (props) => {

    return (
        <div>
            {props.dummydata.map((friend, index) => {
                return <FriendsList friend={friend} splitFormHandler={props.splitFormHandler} setSelectedData={props.setSelectedData} balance={props.balance} setBalance={props.setBalance} selected={props.selected} />
            })}


        </div>
    )
}

export default Friend
