import "./tablerow.css";

export default function TableRow({ rowData }) {
  return (
    <tr>
      <td className="tablerow-data">{rowData.id}</td>
      <td className="tablerow-data">
        <p>{rowData.title} </p>
      </td>
      <td className="tablerow-data">
        <p>{rowData.description} </p>
      </td>
      <td className="tablerow-data">{Number(rowData.price).toFixed(2)}</td>
      <td className="tablerow-data">
        <p>{rowData.category} </p>
      </td>
      <td className="tablerow-data">
        <p>{rowData.sold ? "Sold" : "UnSold"} </p>
      </td>
      <td className="tablerow-data">
        <img src={rowData.image} alt="no-image" className="tablerow-image" />
      </td>
    </tr>
  );
}
