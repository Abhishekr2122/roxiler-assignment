import "./tablefooter.css";

export default function TableFooter() {
  return (
    <div className="tablefooter-container">
      <div>
        <p>Page no: 1</p>
      </div>
      <div className="btn-container">
        <button>Next</button>
        <button>Previous</button>
      </div>
      <div>
        <p>Per Page: 10</p>
      </div>
    </div>
  );
}
