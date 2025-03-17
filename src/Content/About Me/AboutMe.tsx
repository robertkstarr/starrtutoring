import Amsterdam from "../../assets/images/amsterdam.jpg";
import RobertAndMax from "../../assets/images/carrying-max.jpg";
import DefaultComponent, {
  DefaultComponentProps,
} from "../DefaultComponents/DefaultComponent";
import Paragraph from "../DefaultComponents/Paragraph";

const AboutMe = (props: DefaultComponentProps) => {
  return (
    <>
      <DefaultComponent
        heading="About Me"
        imageOrientation="right"
        image={RobertAndMax}
        imageRatio={0.5}
        imageDescription="a picture of me holding a bulldog."
        {...props}
      >
        <>
          <Paragraph>
            My name is Robert Starr and I've been a teacher for the majority of
            my adult life. Immediately after graduating from the University of
            Southern California in 2005, I worked as a math teacher at a Yeshiva
            in Los Angeles. There, I taught all levels of high school math
            ranging from Algebra to AP Calculus, along with additional classes
            related to computers, creative writing, general science, and SAT
            preparation.
          </Paragraph>
          <Paragraph>
            Shortly thereafter, I pursued a Master's Degree in Physics from Cal
            State Northridge (CSUN), which I earned in 2011 after defending my
            thesis titled "Diffusion of a Singly Charged Nitroxide in Solution."
          </Paragraph>
          <Paragraph>
            While at CSUN, in addition to performing my research and attending
            classes, I also taught an introductory physics course designed for
            Pre-Med students. This was the highlight of my learning experience
            at it allowed me to not only teach, but teach students who were not
            necessarily "Physics-brained." While these students were extremely
            smart and motivated, they struggled with many physics and
            mathematical concepts. Through working with them and coming up with
            new ways to explain concepts I thought I was familiar with, I gained
            a more intimate knowledge of the material and a greater
            understanding.
          </Paragraph>
        </>
      </DefaultComponent>
      <DefaultComponent
        imageOrientation="left"
        image={Amsterdam}
        imageRatio={0.5}
        imageDescription="a selfie of me."
      >
        <>
          <Paragraph>
            After receiving my Master's Degree, I moved out of California to
            Texas where I pursued a PhD at UT Austin. There, I performed
            research related to molecular motors in a biophysics lab before
            moving to a theory group running molecular dynamics simulations. I
            also taught a similar lab to the one I had at CSUN and wrote a
            popular weekly science column for the student paper: The Daily
            Texan.
          </Paragraph>
          <Paragraph>
            While I enjoyed the research, my focus was on education and science
            communication. As a result, though I completed my coursework, I
            never ended up defending my dissertation.
          </Paragraph>
          <Paragraph>
            I left the university in 2021 to focus on my full-time job as a
            software engineer for Indeed until, after over five years at the
            company, I lost my job along with about 1000 of my co-workers in a
            company-wide mass-layoff affecting roughly 10% of employees.
          </Paragraph>
          <Paragraph>
            Discouraged from returning to the world of tech, I'd rather be
            working one-on-one with students, pursuing my passion of teaching,
            spreading knowledge and understanding instead of as a code monkey.
            Meanwhile, I'm also working on a novel and several screenplays and
            enjoying a growing collection of creative hobbies.
          </Paragraph>
        </>
      </DefaultComponent>
    </>
  );
};

export default AboutMe;
