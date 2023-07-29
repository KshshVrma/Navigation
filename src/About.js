import { Link } from "react-router-dom";
import Home from "./Home";
const About = () => {
  return (
    <div>
      About
      <br />
      <Link to="/" element={<Home></Home>}>
        home
      </Link>
    </div>
  );
};
export default About;
