"use client";
// Imports the components
import IssueBox from "@/Components/IssueBox";
import Header from "@/Components/Header";
// Sepehr's Addition - Login Auth
import useProtectedRoute from '../../../useProtectedRoute';

// Predefined headings, text for buttons and the date are passed into the component IssueBox and returned on the page as HTML
// The header component creates the heading for the page and the title of the page is passed into the component

const Issues = () => {
  // AUTH
  useProtectedRoute('ADMIN');

  const buttons = ["Mark as Resolved"];
  const date = "Tue 12 Mar 2023";
  const user = "John Doe"
  const title = "Submit Claim"
  const description = "I have been unable to submit any claims in the past few days, I think there is a problem with my account."

  return (
    <div className="mx-[10%] flex flex-col md:mx-[20%]">
      <Header title="Issues To Resolve" divStyle="mb-5 mt-5" hrStyle="w-[17rem]"/>
      <IssueBox 
        title={title} 
        user={user} 
        description={description} 
        buttonText={buttons} 
        date={date}
        />
    </div>
  );
};

export default Issues;
