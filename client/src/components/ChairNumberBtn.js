export default function ChairNumberBtn(props) {
  let {number, handleNumberClick} = props
  return (
    <>
      <button
        onClick={() => handleNumberClick(number)}
        type="button"
        className="btn btn-outline-secondary fs-3 chairBtn col"
      >{number}</button>
    </>
  );
}
