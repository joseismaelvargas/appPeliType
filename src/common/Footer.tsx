import"./css/footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTwitch } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <h1 className="title-footer">Criticksight</h1>
    <div className="container">
      <div className="info-footer">
  <p>Terminos y condiciones</p>
  
<p>2025Dedechos reservados</p>   
 <p>ismaelVargas@gmail.com</p>
      </div>
      <div className="redes">
       <p className="icon"><FaFacebookF></FaFacebookF></p> 
       <p className="icon"><FaInstagram></FaInstagram></p>
        <p className="icon"><FaXTwitter></FaXTwitter> </p>
        <p className="icon"><FaTwitch></FaTwitch></p>
        <p className="icon"><FaYoutube></FaYoutube></p>
      </div>
      </div>
    </footer>
  )
}

export default Footer
