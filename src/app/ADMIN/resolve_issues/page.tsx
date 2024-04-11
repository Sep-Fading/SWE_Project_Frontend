import Header from "@/Components/Header";
import ResolveIssues from "@/Components/resolveIssues";



// Predefined headings, text for buttons and the date are passed into the component IssueBox and returned on the page as HTML
// The header component creates the heading for the page and the title of the page is passed into the component

export default async function Issues() {

  const issues = [
    {
      title: "Submit Claim",
      user: "Sepehr Shamloo",
      description: "I have been unable to submit any claims in the past few days, I think there is a problem with my account.",
      date: "5 April, 2024",
    },
    {
      title: "View Claims",
      user: "Evie Joyce",
      description: "I have been unable to see my claims, i dont know what to do.",
      date: "5 March, 2024",
    },
    {
      title: "View Employees",
      user: "Evie Joyce",
      description: "I have been unable to change see the employees, what should i do?.",
      date: "12 January, 2024",
    },
    {
      title: "Process Claims",
      user: "Mathis Weil",
      description: "I have been unable to process claims, the system is broken.",
      date: "26 December, 2023",
    },
  ];
  
  return (
    <div className="md:px-4">
      <Header title="Resolve Issues" style="my-2" />
      <ResolveIssues issues={issues} />
    </div>
  );
};