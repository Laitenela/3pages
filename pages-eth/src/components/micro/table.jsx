function Table({ data }) {
  return (
    <table className="feedback_responce">
      <thead>
        <th colSpan={2}>Ваш запрос отправлен</th>
      </thead>
      <tbody>
        {Object.entries(data).map((entry) => {
          return (
            <tr>
              <td>{entry[0]}: </td>
              <td>{entry[1]}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
