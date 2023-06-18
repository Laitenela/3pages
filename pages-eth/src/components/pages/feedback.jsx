import { useState } from "react";
import LabelText from "../micro/label-text";
import Table from "../micro/table";

function Feedback() {
  const [req, setReq] = useState(false);
  const [table, setTable] = useState("");
  const namePattern = "[А-Яа-я]* [А-Яа-я]* [А-Яа-я]*";

  let submitForm = (event) => {
    event.preventDefault();
    let data = {};
    for (let target of event.target) {
      if (!target.name) continue;
      data[target.name] = target.value;
    }
    fetch("api/offering", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      setTable(data);
    });
  };

  return (
    <main className="feedback">
      <form className="feedback__form form" onSubmit={submitForm}>
        <LabelText req={req} name="name" type="text" pattern={namePattern}>
          Напиши своё ФИО:
        </LabelText>
        <LabelText req={req} name="address" type="text">
          Напиши свой адрес:
        </LabelText>
        <LabelText req={req} name="phone" type="tel">
          Напиши свой номер:
        </LabelText>
        <LabelText req={req} name="e-mail" type="email">
          Напиши свою почту:
        </LabelText>
        <div className="label-textarea">
          <label htmlFor="comment">
            Пожалуйста, оставь любой комментарий о том, как нам улучшить
            процессы:
          </label>
          <textarea id="comment" name="comment" required></textarea>
        </div>

        <input type="submit" value="Отправить" onClick={() => setReq(true)} />
      </form>

      {table && <Table data={table}/>}
    </main>
  );
}

export default Feedback;
