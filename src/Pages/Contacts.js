import React, {useState} from "react";
import contact from "../assets/contact.jpg";

function Contacts(){
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

    const handleName = event=>{
        setFullName(event.target.value);
    }

    const handleEmail = event=>{
        setEmail(event.target.value);
    }

    const handlePhoneNum = event=>{
        setPhoneNumber(event.target.value);
    }

    const handleMessage = event=>{
        setMessage(event.target.value);
    }

    const handleSubmit = event => {
        console.log('handleSubmit ran');
        event.preventDefault();
        
        console.log("Full name ", fullName);
        console.log("Email ", email);
        console.log("PhoneNum ", phoneNum);
        console.log("Message", message);

        setFullName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
    };


    return <div>
        <h1>Contact me!</h1>
        <img src={contact} alt="phone" style={{width: 250, height: 200, display:"absolute", top:0, left:10, right:0, bottom:0}}></img>
        <p>Feel free to put your contact information down below or <a href="malito:maxwang@udel.edu">shoot me an email right here</a></p>
        <br></br>
        <br></br>
        <form onSubmit={handleSubmit}>
            <p>Full Name</p>
            <input
            id="Full Name"
            name="Full Name"
            type="text"
            value={fullName}
            onChange={handleName}
            />
            <br></br>
            <br></br>
            <p>Email</p>
            <input
            id="Email"
            name="Email"
            type="text"
            value={email}
            onChange={handleEmail}
            />
            <br></br>
            <br></br>
            <p>Phone Number</p>
            <input
            id="Phone Number"
            name="Phone Number"
            type="text"
            value={phoneNum}
            onChange={handlePhoneNum}
            />
            <br></br>
            <br></br>
            <p>Message</p>
            <input
            id="Message"
            name="Message"
            type="text"
            value={message}
            onChange={handleMessage}
            />
            <br></br>
            <br></br>
            <button type="submit"><a href= "malito=maxwang@udel.edu">Submit Information</a></button>
        </form>
    </div>
}

export default Contacts;