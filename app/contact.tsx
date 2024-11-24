import "@/styles/contact.css"
export default function Contact() {
    return (
    <section className= "Contact" >
        <div className="content">
          <h2>Contact Us</h2>
          <div className="w-full mb-4"><div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div></div>
         { /*<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima illo eum asperiores officia! Autem, porro ea doloribus, qui explicabo soluta consequatur, eveniet provident ipsa amet atque iste ipsam corrupti vitae!</p>*/}
        </div>
        <div className="container1" >
          <div className="contactInfo">
            <div className="box">
              <div className="icon"><b></b><i className="fa fa-map-marker" aria-hidden="true"></i></div>
              <div className="text">
                <h3>Address</h3>
                <p>AJIET-HOSTEL,Kodikal,<br/>Mangaluru</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i className="fa fa-phone" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>1234567890</p>
              </div>
            </div>
            <div className="box">
              <div className="icon"><i className="fa fa-envelope" aria-hidden="true"></i>
              </div>
              <div className="text">
                <h3>E-mail</h3>
                <p>abc@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="ContactForm">
            <form action="">
              <h2>Send Message</h2>
              <div className="inputBox">
                <input type="text" name="" required/>
                <span>Full Name</span>
                </div>
                <div className="inputBox">
                <input type="text" name="" required/>
                <span>E-mail</span></div>
                <div className="inputBox">
               <textarea required></textarea>
                <span>Type your message</span><br />
              </div>
              <div className="inputBox">
                <input type="submit" name="" value="send"/>
                </div>
            </form>
          </div>
        </div>
      </section>)
}