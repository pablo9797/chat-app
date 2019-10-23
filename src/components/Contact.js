import React from 'react';
import './Contact.css' ;
import './ContactList';

class Contact extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favorite : false,
        }
    }
    render(){
    return(

                <div className='Contact'>
                    <img className='avatar'
                    src={this.props.image}
                    alt="nothing" />
                    <div className = "status"
                    onClick = { event=> {
                        let inverse = !this.state.favorite;
                        this.setState({favorite:inverse })
                    }}
                
                    >
                        <div className = {this.state.favorite ? 'status-online' :'status-offline'}></div>
                        <p>
                    {this.state.favorite ? 'online' : 'offline'}
                    </p>
                    </div>
                    <div>
                    <h3>{this.props.name}</h3>
                   
                   
                    </div>    
                </div>
    );
    }
}










export default Contact;