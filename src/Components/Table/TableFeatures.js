import "./tablefeatures.css";

export default function TableFeatures() {
  return (
    <div className="features-container">
      <form>
        <input
          type="text"
          placeholder="Search transaction"
          className="transaction-input"
        />
      </form>
      <select value={"March"} name="Select Month" className="month-selector">
        <option value={"January"}>January</option>
        <option value={"February"}>February</option>
        <option value={"March"}>March</option>
        <option value={"April"}>April</option>
        <option value={"May"}>May</option>
        <option value={"June"}>June</option>'
        <option value={"July"}>July</option>
        <option value={"August"}>August</option>
        <option value={"September"}>September</option>
        <option value={"October"}>October</option>
        <option value={"November"}>November</option>
        <option value={"December"}>December</option>
      </select>
    </div>
  );
}
