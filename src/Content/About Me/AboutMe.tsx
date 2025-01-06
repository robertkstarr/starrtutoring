import DefaultComponent from "../DefaultComponents/DefaultComponent";
import Paragraph from "../DefaultComponents/Paragraph";

const AboutMe = () => {
  return (
    <DefaultComponent heading="About Me">
      <>
        <Paragraph>
          My name is Robert Starr and I've been a teacher for the majority of my
          adult life. Immediately after graduating from the University of
          Southern California in 2005, I worked as a math teacher at a Yeshiva
          in Los Angeles. There, I taught all levels of high school math ranging
          from Algebra to AP Calculus, along with additional classes related to
          computers, creative writing, general science, and SAT preparation.
        </Paragraph>
        <Paragraph>
          Shortly thereafter, I pursued a Master's Degree in Physics from Cal
          State Northridge (CSUN), which I earned in 2011 after defending my
          thesis titled "Diffusion of a Singly Charged Nitroxide in Solution."
        </Paragraph>
        <Paragraph>
          While at CSUN, in addition to performing my research and attending
          classes, I also TAed an introductory physics course designed for
          Pre-Med students. This was the highlight of my learning experience at
          it allowed me to not only teach, but teach students who were not
          necessarily "Physics-brained." While these students were extremely
          smart and motivated, they struggled with many physics and mathematical
          concepts. Through working with them and coming up with new ways to
          explain concepts I thought I was familiar with, I gained a more
          intimate knowledge of the material and a greater understanding.
        </Paragraph>
        <Paragraph>
          After receiving my Master's Degree, I moved out of California for the
          first time in my life to Texas where I pursued a PhD at UT Austin. In
          addition to my research (where I spent my first two years studying
          molecular motors in a biophysics lab and the remainder of my time in a
          theory group running molecular dynamics simulations), I TAed a similar
          lab to the one I taught at CSUN and wrote a weekly science column for
          the student paper: The Daily Texan.
        </Paragraph>
        <Paragraph>
          While I enjoyed the research, my focus was on education and science
          communication. As a result, though I completed my coursework, I never
          ended up defending my dissertation.
        </Paragraph>
        <Paragraph>
          I left the university in 2021 to focus on my full-time job as a
          software engineer for Indeed before eventually losing my job along
          with about 1000 of my co-workers in a company-wide mass-layoff
          affecting roughly 10% of employees.
        </Paragraph>
      </>
    </DefaultComponent>
  );
};

export default AboutMe;
