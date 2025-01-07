import EducationComponent from "./EducationComponent";
import ResumeSection from "../ResumeSection";

const Education = () => {
  return (
    <ResumeSection heading={"Education"}>
      <>
        <EducationComponent
          school={"University of Southern California"}
          degree={"BA"}
          startYear={"2001"}
          endYear={"2004"}
          major={"Cinema-Television"}
        >
          <ul>
            <li>Resident Honors Program</li>
          </ul>
        </EducationComponent>
        <EducationComponent
          degree={"MS"}
          school={"California State University at Northridge"}
          startYear={"2008"}
          endYear={"2011"}
          major={"Physics"}
        >
          <ul>
            <li>Head TA for Introductory Physics Lab (PHYS-100AL)</li>
            <li>Conducted research related to electron spin resonance.</li>
            <ul>
              <li>
                Published results in thesis:{" "}
                <i>Diffusion of a Singly Charged Nitroxide in Solution</i>
              </li>
            </ul>
            <li>
              Conducted theoretical research related to quantum properties of
              graphene.
            </li>
          </ul>
        </EducationComponent>
        <EducationComponent
          degree={"PhD (All but Dissertation)"}
          school={"University of Texas at Austin"}
          startYear={"2011"}
          endYear={"2020"}
          major={"Physics"}
        >
          <ul>
            <li>Head TA for Introductory Physics Lab (PHY-117M)</li>
            <ul>
              <li>
                Led initiative in updating lab manual to better communicate
                concepts to students
              </li>
            </ul>
          </ul>
        </EducationComponent>
      </>
    </ResumeSection>
  );
};

export default Education;
