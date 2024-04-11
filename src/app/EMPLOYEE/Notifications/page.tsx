import Header from "@/Components/Header";
import ViewNotifications from "@/Components/ViewNotifications";



// Predefined headings, text for buttons and the date are passed into the component IssueBox and returned on the page as HTML
// The header component creates the heading for the page and the title of the page is passed into the component

export default async function Notifications() {

  const notifications = [
    {
      title: "Claim Approved",
      description: "Your claim has been approved, you can now view it.",
      date: "5 April, 2024",
    },
    {
      title: "Claim Approved",
      description: "Your claim has been approved, you can now view it.",
      date: "5 March, 2024",
    },
    {
      title: "Claim Rejected",
      description: "Your claim has been Rejected, you can now view why.",
      date: "12 January, 2024",
    },
    {
      title: "Claim Processed",
      description: "Your claim has been Processed, you can now view it.",
      date: "26 December, 2023",
    },
  ];
  
  return (
    <div className="md:px-4">
      <Header title="Notifications" style="my-2" />
      <ViewNotifications notifications={notifications} />
    </div>
  );
};
