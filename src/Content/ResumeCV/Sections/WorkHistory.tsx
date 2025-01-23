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
        >
          <ul>
            <li>Taught multiple subjects including</li>
            <ul>
              <li>Math:</li>
              <ul>
                <li>Algebra I</li>
                <li>Geometry</li>
                <li>Algebra II</li>
                <li>Pre-Calculus</li>
                <li>AP Calculus</li>
              </ul>
              <li>General Science</li>
              <li>SAT Prep</li>
              <li>Creative Writing</li>
            </ul>
          </ul>
        </WorkHistoryComponent>
        <WorkHistoryComponent
          Employer={"Valley Torah High School"}
          JobTitle={"Teacher"}
          startYear={"2009"}
          endYear={"2010"}
        >
          <ul>
            <li>Taught multiple subjects including</li>
            <ul>
              <li>Algebra I</li>
              <li>Algebra II</li>
              <li>AP Calculus</li>
              <li>Physics</li>
            </ul>
          </ul>
        </WorkHistoryComponent>
        <WorkHistoryComponent
          Employer={"The Daily Texan"}
          JobTitle={"Staff Writer"}
          startYear={"2012"}
          endYear={"2015"}
        >
          <ul>
            <li>Wrote the popular weekly "Science Scene" column</li>
          </ul>
        </WorkHistoryComponent>
        <WorkHistoryComponent
          Employer={"Tutor.com"}
          JobTitle={"On-line Tutor"}
          startYear={"2016"}
          endYear={"2020"}
        >
          <ul>
            <li>Tutored in all levels of math as well as physics.</li>
            <li>Mentored other tutors as well</li>
          </ul>
        </WorkHistoryComponent>
        <WorkHistoryComponent
          JobTitle={"Software Engineer"}
          Employer={"Indeed.com"}
          startYear={"2018"}
          endYear={"2024"}
        >
          <ul>
            <li>Coded websites using:</li>
            <ul>
              <li>Javascript/React</li>
              <li>Java</li>
              <li>Python</li>
              <li>C++</li>
              <li>CSS</li>
            </ul>
            <li>Built the "Take Your Pet to Work" Chrome Extension</li>
            <ul>
              <li>Built during the 2019 Spring "Hackathon"</li>
              <li>The most popular internal Chrome extension at the company</li>
            </ul>
          </ul>
        </WorkHistoryComponent>
        <WorkHistoryComponent
          Employer={"Agoura Animal Care Center"}
          JobTitle={"Volunteer"}
          startYear={"2023"}
          endYear={"Present"}
        >
          <ul>
            <li>Duties include:</li>
            <ul>
              <li>Walking dogs</li>
              <li>Managing introductions between dogs and customers</li>
              <li>Cleaning up kennels</li>
            </ul>
            <li>Member of the Canine Coaching team</li>
            <li>Built the Pet Connect website</li>
            <ul>
              <li>
                Website used at pet stores around Los Angeles County to spread
                awareness of the animals currently available for adoption at our
                shelters
              </li>
            </ul>
            <li>Built the Pet Photo Upload Tool</li>
            <ul>
              <li>
                Website for other volunteers to upload pictures of the pets for
                the social media team
              </li>
            </ul>
          </ul>
        </WorkHistoryComponent>
      </>
    </ResumeSection>
  );
};

export default WorkHistory;
