"use client";

import { useState } from "react";
import IssueBox from "@/Components/IssueBox";
import Header from "@/Components/Header";
// Sepehr's Addition - Login Auth
import useProtectedRoute from '../../../useProtectedRoute';

interface Issue {
  title: string;
  user: string;
  description: string;
  date: string;
}

interface IssueData {
  issues: Issue[];
}

// Predefined headings, text for buttons and the date are passed into the component IssueBox and returned on the page as HTML
// The header component creates the heading for the page and the title of the page is passed into the component

const Issues = () => {
  const [issues, setIssues] = useState<IssueData>();

  // AUTH
  useProtectedRoute('ADMIN');

  const buttons = ["Mark as Resolved"];
  const date = "5 April";
  const user = "John Doe";
  const title = "Submit Claim";
  const description = "I have been unable to submit any claims in the past few days, I think there is a problem with my account.";

  return (
    <div className="bg-gray-100 h-dvh grid gap-0 grid-cols-8 md:grid-cols-6 ">
        <div className="col-start-2 col-end-8 md:col-end-6">
            <Header title="Issues To Resolve" style="pt-[1rem] md:pt-0"/>
            <IssueBox buttonText={buttons} date={date} user={user} title={title} description={description}/>
        </div>
    </div>

  );
};

export default Issues;
