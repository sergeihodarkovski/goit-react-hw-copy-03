import s from "./Contact.module.css";
import { BiSolidPhone } from "react-icons/bi";
import { BiSolidUser } from "react-icons/bi";

const Contact = ({ name, number }) => {
  return (
    <li>
      <div>
        <p>
          <BiSolidUser />
          {name}
        </p>
        <p>
          <BiSolidPhone />
          {number}
        </p>
      </div>
      <button>Delete</button>
    </li>
  );
};

export default Contact;
