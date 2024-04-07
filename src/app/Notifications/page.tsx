import Header from "@/Components/Header";
import Notification from "@/Components/Notification";


const Notifications = () => {

    const buttons = ["Delete"];
    const date = "7 April";
    const title = "Claim Approved";
    const description = "The expense claim for travel that was submitted on 7th April has been approved by your line manager.";


    return(
        <div className="bg-gray-100 h-dvh grid gap-0 grid-cols-8 md:grid-cols-6 ">
            <div className="col-start-2 col-end-8 md:col-end-6">
                <Header title="Notifications" style="pt-[1rem] md:pt-0"/>
                <Notification buttonText={buttons} title={title} date={date} description={description}/> 
            </div>
        </div>
    );

};
export default Notifications;