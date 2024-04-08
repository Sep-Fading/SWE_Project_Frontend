import Header from "@/Components/Header";
import Notification from "@/Components/Notification";

const Notifications = () => {
  const buttons = ["Delete"];
  const date = "7 April";
  const title = "Claim Approved";
  const description =
    "The expense claim for travel that was submitted on 7th April has been approved by your line manager.";

  return (
    <div className="md:px-4">
      <Header title="Resolve Issues" style="my-2" />
      <Notification
        buttonText={buttons}
        title={title}
        date={date}
        description={description}
      />
    </div>
  );
};
export default Notifications;
