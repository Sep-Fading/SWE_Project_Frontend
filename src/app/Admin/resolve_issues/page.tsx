"use client";

import { useState } from "react";
import IssueBox from "@/Components/IssueBox";
import Header from "@/Components/Header";
// Sepehr's Addition - Login Auth
import { useProtectedRoute } from "../../../useProtectedRoute";

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
  useProtectedRoute('LINEMANAGER');

  const buttons = ["Mark as Resolved"];
  const date = "5 April, 2024";
  const user = "John Doe";
  const title = "Submit Claim";
  const description =
    "I have been unable to submit any claims in the past few days, I think there is a problem with my account.";

  return (
    <div className="md:px-4">
      <Header title="Resolve Issues" style="my-2" />
      <IssueBox
        buttonText={buttons}
        date={date}
        user={user}
        title={title}
        description={description}
      />
    </div>
  );
};

export default Issues;
