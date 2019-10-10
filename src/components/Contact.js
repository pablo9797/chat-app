import React from 'react';
import './Contact.css' ;

function Contact(props){
    return(

            <div className='Contact'>
                <img className='avatar'
                src={props.image}
                alt="nothing" />
                <div className = "status">
                    <div className = {props.online ? 'status-online' :'status-offline'}></div>
                </div>
                <div>
                <h3>{props.name}</h3>
                <p>
                   {props.online ? 'online' : 'offline'}
                </p>
                </div>    
            </div>
    );
    }











export default Contact;