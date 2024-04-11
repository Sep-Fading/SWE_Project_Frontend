"use client";

import { useState } from "react";
import IssueBox from "@/Components/IssueBox";

interface Issue {
  title: string;
  user: string;
  description: string;
  date: string;
}

interface IssueData {
  issues: Issue[];
}

const ResolveIssues = ({ issues }: IssueData) => {
  const [hide, setHide] = useState(false);

  const handleClick = () => {
    setHide(true);
  };

  return (
    <div className={`${hide && "hidden"} flex flex-col gap-2`}>
      {issues.map((issue, index) => (
        // It's important to provide a unique key for each child in a list, index could be used for simplicity
        <IssueBox
          key={index} // It's better to use a unique id if available
          date={issue.date}
          user={issue.user}
          title={issue.title}
          description={issue.description}
        />
      ))}
    </div>
  );
};

export default ResolveIssues;
