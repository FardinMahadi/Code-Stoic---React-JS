// const name = "Fardin";

// function displayMessage() {
//   return "Wow!";
// }

function Hello(props) {
  return (
    <div>
      <h1>
        {props.message} {props.name}
      </h1>
      {/* <h1>Wow!</h1> */}
    </div>
  );
}

export default Hello;
