import React, {useState} from "react";
import contact from "../assets/contact.jpg";

function Contacts(){
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNum, setPhoneNumber] = useState("");
    const [message, setMessage] = useState("");

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
        <p>Full Name</p>
        <form onSubmit={handleSubmit}>
            <input
            id="Full Name"
            name="Full Name"
            type="text"
            value={fullName}
            onChange={event=>setFullName(event.target.value)}
            />
            <br></br>
            <p>Email</p>
            <input
            id="Email"
            name="Email"
            type="text"
            value={email}
            onChange={event=>setFullName(event.target.value)}
            />
            <br></br>
            <p>Phone Number</p>
            <input
            id="Phone Number"
            name="Phone Number"
            type="text"
            value={phoneNum}
            onChange={event=>setFullName(event.target.value)}
            />
            <br></br>
            <p>Message</p>
            <input
            id="Message"
            name="Message"
            type="text"
            value={message}
            onChange={event=>setFullName(event.target.value)}
            />
            <br></br>
            <button type="submit">Submit Information</button>
        </form>
    </div>
}

export default Contacts;