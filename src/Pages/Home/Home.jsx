
import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import EducationExperience from "../EducationExperience/EducationExperience";
import Project from "../Project/Project";
import Services from "../Services/Services";
import Skill from "../Skill/Skill";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Skill></Skill>
            
            <Project></Project>
            <EducationExperience></EducationExperience>

            <Contact></Contact>
            
            
        </div>
    );
};

export default Home;