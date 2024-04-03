"use client";

import { ChangeEvent, useState } from "react";
import Header from "@/Components/Header";
import Button from "@/Components/Button";
import Expense from "@/Components/Expense";
import InputField from "@/Components/InputField";

const EmployeeClaims = () => {
  const [formData, setFormData] = useState("22/12/2023");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {};
  return (
    <div className="flex">
      <aside className="border-r-black border-2 w-[20%]">
        <h1 className="text-2xl text-blue">Filter by</h1>
        <form
          action=""
          className="flex flex-col items-center justify-around h-[500px]"
        >
          <fieldset className="grid grid-cols-2 grid-rows-4 gap-y-1">
            <legend>Status</legend>
            <input type="checkbox" id="pending" value="pending" />
            <label htmlFor="pending">Pending</label>
            <input type="checkbox" id="approved" value="approved" />
            <label htmlFor="approved">Approved</label>
            <input type="checkbox" id="rejected" value="rejected" />
            <label htmlFor="rejected">Rejected</label>
            <input type="checkbox" id="completed" value="completed" />
            <label htmlFor="completed">Completed</label>
          </fieldset>
          <select
            name="type"
            id="type"
            value=""
            className="border-2 border-black bg-[#D9D9D9]"
          >
            <option value="" disabled>
              Type
            </option>
            <option value="travel">Travel</option>
            <option value="meal">Meal</option>
            <option value="night_stay">Night Stay</option>
            <option value="gift">Gift</option>
          </select>
          <div className="flex flex-col">
            <label htmlFor="date">Date</label>
            <input
              name="date"
              type="date"
              className="border-2 border-black rounded-sm bg-[#D9D9D9]"
            />
          </div>
          <Button type="submit" text="Apply Filters" style="w-[180px]" />
        </form>
      </aside>

      <div className="w-[100%]">
        <div className="flex flex-row items-baseline justify-between mx-2">
          <Header title="Claims" />
          <form action="">
            <input
              type="search"
              placeholder="Search Claims"
              className="border-black border-2 rounded-sm w-[20rem] py-[0.5rem] px-[0.25rem] bg-[#D9D9D9]"
            />
          </form>
        </div>
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
        <Expense
          amount={500}
          currency="£"
          type="Travel"
          status="Rejected"
          date="Tue, 12 Mar. 2023"
        />
      </div>
    </div>
  );
};

export default EmployeeClaims;
