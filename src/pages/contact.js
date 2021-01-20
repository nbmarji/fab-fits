import React from "react";
import Navbar from "../components/navbar.js"
import {Form, Button} from "react-bootstrap";
import * as emailjs from 'emailjs-com';
import Footer from "../components/footer.js";

//contact form component
class ContactForm extends React.Component {
  constructor(){
      super();
      this.state = {
        name: '',
        email: '',
        subject: '',
        message: '',
      }

  }
    
//submit handler
handleSubmit(event) {
    event.preventDefault()
    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'nbmarji',
      subject: subject,
      message: message,
     }

     emailjs.send(
      'service_mw4f9bb',
      'template_kkbrkjr',
       templateParams,
       process.env.REACT_APP_API_KEY
      
     )

     alert("email sent")
     this.reset()
 }
reset() {
    this.setState({
      name: '',
      email: '',
      subject: '',
      message: '',
    })
  }
handleChange = (param, event) => {
    this.setState({ [param]: event.target.value })
  }

render() {
    return (
      <>
        <Navbar/>
            <div className = "chat mt-5">
                <h2> let's chat! :) </h2>
                <ul>
                    <li> inquiries</li>
                    <li> questions </li>
                    <li> comments</li>
                </ul>
            </div>
          <Form onSubmit={this.handleSubmit.bind(this)} className = "px-5">
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange.bind(this, 'email')}
                placeholder="Enter email"
              />
            </Form.Group>
            < Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange.bind(this, 'name')}
                placeholder="Name"
              />
            </Form.Group>
            <Form.Group controlId="subject">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                name="subject"
                value={this.state.subject}
                onChange={this.handleChange.bind(this, 'subject')}
                placeholder="Subject"
              />
            </Form.Group>
            <Form.Group controlId="message">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="textarea"
                value={this.state.message}
                onChange={this.handleChange.bind(this, 'message')}
              />
            </Form.Group>
            <Button variant="basic" type="submit">Submit</Button>
          </Form>
          <Footer />
      </>
    )
  }
}
export default ContactForm