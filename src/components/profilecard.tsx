import React from 'react'
function ProfileCard() {
    const name = "sanju";
    const age="24";
    const place="alappuzha";

    return(
        <div>
        <h1>profileCard</h1>
        <p>name:{name}</p>
        <p>age:{age}</P>
        <p>place:{place}</p>
        </div>
    );
}
export default ProfileCard;