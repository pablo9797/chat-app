import React from 'react';
import Contact from "./Contact";

const List = [
        {
            name : "Galout SODAM",
            online: true,
            image : "https://randomuser.me/api/portraits/men/26.jpg"
        },
        {
            name : "Arnold BOBY",
            online : true,
            image : "https://randomuser.me/api/portraits/men/13.jpg"
        },
        {
            name : "Katy KATAM",
            online : true,
            image : "https://randomuser.me/api/portraits/women/78.jpg"
        }
]

function ContactList (){

    return(List.map(user =>
        <div className= "ContactList">
            <Contact {...user} />
        </div>


    ));




}


        

export default ContactList;