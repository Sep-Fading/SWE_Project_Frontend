"use client";

import { useState } from "react";
import Notification from "@/Components/Notification";

interface Notification {
  title: string;
  description: string;
  date: string;
}

interface NotificationData {
  notifications: Notification[];
}

const ResolveIssues = ({ notifications }: NotificationData) => {

  return (
    <div className="flex flex-col gap-2">
      {notifications.map((notification, index) => (
        // It's important to provide a unique key for each child in a list, index could be used for simplicity
        <Notification
          key={index} // It's better to use a unique id if available
          title={notification.title}
          date={notification.date}
          description={notification.description}
        />
      ))}
    </div>
  );
};

export default ResolveIssues;
