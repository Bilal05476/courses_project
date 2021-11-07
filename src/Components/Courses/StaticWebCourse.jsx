import Courses from "./Courses";
import gitOverview from "./video/final-git-overview.mp4";
import gitInstall from "./video/final-git-install.mp4";

const StaticWebCourse = () => {
  return (
    <Courses
      courseName="Static Website Development"
      secondAccordion="Skeleton of Website"
      thirdAccordion="Styling of Website"
      fourthAccordion="Dynamic Web with JS"
      videoIntro="https://www.youtube.com/embed/cocJx3ZZwOM"
      introName="Introduction"
      videoGit={gitOverview}
      gitName="Git Overview"
      videoGithub={gitInstall}
      githubName="Git Install & Github"
      videoVsCode="https://www.youtube.com/embed/s9-ypLPhqro"
      IDEName="VS Code (IDE)"
    />
  );
};
export default StaticWebCourse;
