// const name = "Fardin";

// function displayMessage() {
//   return "Wow!";
// }

// function Hello({ name, message, emoji }) {
//   return (
//     <div>
//       <h1>
//         {message} {emoji} {name}
//       </h1>
//       {/* <h1>Wow!</h1> */}
//     </div>
//   );
// }

// function Hello(props) {
//   return (
//     <div>
//       <h1>
//         {props.message} {props.emoji} {props.name}
//       </h1>
//     </div>
//   );
// }

// function Hello({ name, message, emoji, seatNumbers }) {
//   return (
//     <div>
//       <h1>
//         {message} {emoji} {name} {seatNumbers}
//       </h1>
//     </div>
//   );
// }

function Hello({ person }) {
  return (
    <div>
      <h1>
        {person.message} {person.emoji} {person.name} {person.seatNumbers}
      </h1>
    </div>
  );
}

export default Hello;
