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
        />

        <EducationComponent
          degree={"MS"}
          school={"California State University at Northridge"}
          startYear={"2008"}
          endYear={"2011"}
          major={"Physics"}
        />

        <EducationComponent
          degree={"PhD"}
          school={"University of Texas at Austin"}
          startYear={"2011"}
          endYear={"2020"}
          major={"Physics (All but Dissertation)"}
        />
      </>
    </ResumeSection>
  );
};

export default Education;
