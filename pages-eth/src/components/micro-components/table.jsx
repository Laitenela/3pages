function Table({ data }) {
  return (
    <table className="feedback_responce">
      <thead>
        <th colSpan={5}>Ваш запрос отправлен</th>
      </thead>
      <tbody>
        <tr>
          <td>name</td>
          <td>address</td>
          <td>phone</td>
          <td>e-mail</td>
          <td>comment</td>
        </tr>
        {data.map((feedback) => {
          return (
            <tr>
              <td>{feedback['name']}</td>
              <td>{feedback['address']}</td>
              <td>{feedback['phone']}</td>
              <td>{feedback['email']}</td>
              <td>{feedback['comment']}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
