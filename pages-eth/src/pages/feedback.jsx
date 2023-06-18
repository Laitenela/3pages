import { useState } from "react";
import FeedbackForm from "../components/containers/feedbackForm";
import Table from "../components/micro-components/table";

function Feedback() {
  const [table, setTable] = useState("");
  return (
    <main className="feedback">
      <FeedbackForm submitForm={submitForm(setTable)} />
      {table && <Table data={table} />}
    </main>
  );
}

function submitForm(cb) {
  return async (event) => {
    let formData = {};
    event.preventDefault();

    for (let target of event.target) {
      if (!target.name) continue;
      formData[target.name] = target.value;
    }

    let query = {};
    query.method   = "POST";
    query.mode     = "cors";
    query.headers  = { "Content-Type": "application/json" };
    query.body     = JSON.stringify(formData);

    const response = await fetch("api/offering", query);
    const articles = await response.json();

    cb(articles);
  };
}

export default Feedback;
