"use client";

import { Suspense } from "react";
import ComplaintStatusTracker from "./components/CheckComplaint";

const ComplaintStatusPage = () => {
  return (
    <Suspense>
      <ComplaintStatusTracker />
    </Suspense>
  );
};

export default ComplaintStatusPage;
