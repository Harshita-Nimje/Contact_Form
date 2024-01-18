import React from 'react'
import styles from './ContactForm.module.css'
import Button from '../Button/Button'
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";

const ContactForm = () => {
  
  const [name, setName] = useState("XYZ");
  const [email, setEmail] = useState("support@dosomecoding.com");
  const [text, setText] = useState("Subscribe to this channel");

  const onSubmit = (event) => {
    event.preventDefault();
    //to avoid refreshing the page

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    

  }

  return <section className={styles.container}>
    <div className={styles.contact_form}>
      <div className={styles.top_btn}>
      <Button  text="VIA SUPPORT CHAT" icon={<BiSolidMessageDetail fontSize="20px"/>}/> 
      <Button text="VIA CALL" icon={<IoCall fontSize="20px"/>}/>
      </div>
      <Button 
      isOutline={true} 
      text="VIA EMAIL" 
      icon={<IoMdMail fontSize="20px"/>}/>

      <form 
      onSubmit={onSubmit}>
        <div className={styles.form_control}>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="name">Email</label>
          <input type="email" name="emal" />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="text">Text</label>
          <textarea type="text" name="text" rows="8" />
        </div>
        <div style={{display: "flex", justifyContent:"end",}}><Button text="SUBMIT BUTTON" /></div>
        <div>{name + " " + email + " " + text}</div>
      </form>
    </div>
    <div className={styles.contact_image}>
      <img src="./images/b.png" alt="" />
    </div>
  </section>
}

export default ContactForm
