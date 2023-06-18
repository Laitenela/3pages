import { useState } from "react";
import LabelText from "../micro-components/label-text";

function FeedbackForm({ submitForm }) {
  const [req, setReq] = useState(false);
  const namePattern   = "([А-Яа-я]*[ ]){1,2}[А-Яа-я][А-Яа-я]*";
  const mailPattern   = "[a-z0-9._%+\\-]+@[a-z0-9.\\-]+\\.[a-z]{2,4}";
  const phonePattern  = "^((8|\\+7)[\\- ]?)?(\\(?\\d{3}\\)?[\\- ]?)?[\\d\\- ]{7,10}$";

  return (
    <form className="feedback__form form" onSubmit={submitForm}>
      <LabelText req={req} name="name" type="text" pattern={namePattern}>
        Напиши своё ФИО:
      </LabelText>

      <LabelText req={req} name="address" type="text">
        Напиши свой адрес:
      </LabelText>

      <LabelText req={req} name="phone" type="tel" pattern={phonePattern}>
        Напиши свой номер:
      </LabelText>

      <LabelText req={req} name="e-mail" type="email" pattern={mailPattern}>
        Напиши свою почту:
      </LabelText>

      <div className="label-textarea">
        <label htmlFor="comment">
          Пожалуйста, оставь любой комментарий о том, как нам улучшить процессы:
        </label>
        <textarea
          id="comment"
          name="comment"
          maxlength="200"
          required
        ></textarea>
      </div>

      <input type="submit" value="Отправить" onClick={() => setReq(true)} />
    </form>
  );
}

export default FeedbackForm;