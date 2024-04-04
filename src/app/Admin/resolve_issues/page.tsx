// Imports the components
import IssueBox from "@/Components/IssueBox";
import Header from "@/Components/Header";

// Predefined headings, text for buttons and the date are passed into the component IssueBox and returned on the page as HTML
// The header component creates the heading for the page and the title of the page is passed into the component

const Issues = () => {
  const headings = ["User", "Title", "Description"];
  const buttons = ["Mark as Resolved"];
  const date = "Tue 12 Mar 2023";

  return (
    <div className="mx-[10%] flex flex-col md:mx-[20%]">
      <Header title="Issues To Resolve" />
      <IssueBox headingText={headings} buttonText={buttons} date={date}/>
    </div>
  );
};

export default Issues;
