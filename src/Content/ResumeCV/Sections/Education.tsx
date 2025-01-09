import ResumeDivider from "../ResumeDivider";
import ResumeSection from "../ResumeSection";
import EducationComponent from "./EducationComponent";

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
        <ResumeDivider width="50%" />
        <EducationComponent
          degree={"MS"}
          school={"California State University at Northridge"}
          startYear={"2008"}
          endYear={"2011"}
          major={"Physics"}
        >
          <ul>
            <li>Head TA for Introductory Physics Lab (PHYS-100AL)</li>
            <li>Conducted research related to electron spin resonance</li>
            <ul>
              <li>
                Published results in thesis:{" "}
                <i>Diffusion of a Singly Charged Nitroxide in Solution</i>
              </li>
            </ul>
            <li>
              Conducted theoretical research related to quantum properties of
              graphene
            </li>
          </ul>
        </EducationComponent>
        <ResumeDivider width="50%" />
        <EducationComponent
          degree={"PhD"}
          school={"University of Texas at Austin"}
          startYear={"2011"}
          endYear={"2020"}
          major={"Physics (All but Dissertation)"}
        >
          <ul>
            <li>Head TA for Introductory Physics Lab (PHY-117M)</li>
            <ul>
              <li>
                Led initiative in updating lab manual to better communicate
                concepts to students
              </li>
            </ul>
            <li>Performed lab research:</li>
            <ul>
              <li>Studied molecular motors in drosophila embryos</li>
              <li>
                Developed and built prototype for device which used Raman
                scattering to identify molecular composition of gasses
              </li>
            </ul>
            <li>
              Performed theoretical research using molecular dynamics models
            </li>
            <ul>
              <li>
                Tested veracity of mathematical damage model developed by
                Grigory Barenblatt
              </li>
              <li>
                Produced virtual model of physical experiment involving
                capillary action in microtubules to test nanoscale hypotheses
              </li>
            </ul>
          </ul>
        </EducationComponent>
      </>
    </ResumeSection>
  );
};

export default Education;
