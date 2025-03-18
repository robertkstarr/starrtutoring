import ResumeSection from "../ResumeSection";
import WorkHistoryComponent from "./WorkHistoryComponent";

const WorkHistory = () => {
  return (
    <ResumeSection heading={"Selected Work History"}>
      <>
        <WorkHistoryComponent
          Employer={"Yeshiva Ohr Elchanon Chabad High School"}
          JobTitle={"Teacher and Assistant Principal"}
          startYear={"2005"}
          endYear={"2009"}
        />
        <WorkHistoryComponent
          Employer={"Valley Torah High School"}
          JobTitle={"Teacher"}
          startYear={"2009"}
          endYear={"2010"}
        />
        <WorkHistoryComponent
          Employer={"The Daily Texan"}
          JobTitle={"Staff Writer"}
          startYear={"2012"}
          endYear={"2015"}
        />
        <WorkHistoryComponent
          Employer={"Tutor.com"}
          JobTitle={"On-line Tutor"}
          startYear={"2016"}
          endYear={"2020"}
        />
        <WorkHistoryComponent
          JobTitle={"Software Engineer"}
          Employer={"Indeed.com"}
          startYear={"2018"}
          endYear={"2024"}
        />
      </>
    </ResumeSection>
  );
};

export default WorkHistory;
