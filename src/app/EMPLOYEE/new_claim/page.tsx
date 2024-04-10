import Header from "@/Components/Header";
import SendClaim from "@/Components/SendClaim";
import { fetchUser } from "@/lib/fetchUser";

import axiosWithAuth from "@/lib/axiosWithAuth";

const ExpenseClaim = () => {

  const [userDetails, setUserDetails] = useState<UserDetails>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  
  const [formData, setFormData] = useState<FormData>({
    amount: 0.0,
    currency: "GBP",
    type: "",
    description: "",
    acknowledgement: false,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      // Use a ternary operator to handle the checkbox separately
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const onClick = () => {
    // Add your login logic here
  };

  const handleSubmit = (e: FormEvent) => {

    // Add your login logic here


    e.preventDefault(); 
  
        //integates frontend to backend which handles the 
        axiosWithAuth
        //This is backend url 
            .post("http://localhost:8000/api/employeeformmodel/", { 
              amount: formData.amount,
                currency: formData.currency,
                typeClaim: formData.type,
                description: formData.description,
                acknowledgement: formData.acknowledgement,
            }) 
           
             
            .catch((err) => {}); 
       
    };
             

export default async function ExpenseClaim({ params }: { params: { userID: string } }) {
  //need to implement getting userId from session
  const details = await fetchUser(params.userID);
  console.log("details: ", details);

  return (
    <div className="flex flex-col justify-evenly md:mx-[10%]">
      <Header title="Expense Claim" divStyle="text-center my-4 md:text-left" />
      <SendClaim details={details}/>
    </div>
  );
}
