import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import  './contact.css';

export const Contact = () => {
  const [Contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...Contact,
      [name]: value,
    });
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(Contact);
  };

  return (
    <div className='wrappersk'>
    <form onSubmit={handleSubmit}>
   <h1>Contact</h1>
   <div className="input-boxs">
       <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={Contact.username}
                  onChange={handleInput}
                  placeholder="Username"
                  required
                />
                <FaUser className="icon" />
              </div>
   <div className="input-boxs">
   <input
             type="text"
             name="email"
             value={Contact.email}
             onChange={handleInput}
             placeholder="Email"
           />
       < MdEmail className="icon" />
   </div>
   <div class ="input-boxs">
                    <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={Contact.message}
                  onChange={handleInput}
                  placeholder="Message"
                  required
                ></textarea>
                <MdMessage  className="icon"/>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
               
           </form>
            </div>
    );
};

export default Contact;
     
  