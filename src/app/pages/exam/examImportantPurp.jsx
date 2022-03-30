// // let list = Quiz_Set1;
// // let anserArray = [...userAnswers];
// // console.log(anserArray);
// // list.forEach((item, key) => {
// //   item.options.forEach((anslist, key) => {
// //     if (anslist.selected === true) {
// //       console.log(item.que_id, anslist.que_options);
// //       anserArray.push(item.que_id, anslist.que_options);
// //       setUserAnswers([...anserArray]);
// //       -------------------
// //       setUserAnswers((prevState) => [
// //         ...prevState,
// //         { que_id: item.que_id, a: anslist.que_options },
// //       ]);
// //       var addedAnswer = anserArray.find((c) => c.que_id === item.que_id);
// //       if (addedAnswer) {
// //         let newAnswer = userAnswers.filter(
// //           (c) =>
// //             c.que_id !== addedAnswer.que_id &&
// //             c.que_options !== addedAnswer.a
// //         );
// //         setUserAnswers(newAnswer);
// //       } else {
// //         anserArray.push({ que_id: item.que_id, a: anslist.que_options });
// //         setUserAnswers(anserArray);
// //       }
// //     }
// //   });
// // });









//     // list.forEach((item, key) => {
//     //   item.options.forEach((anslist, key) => {
//     //     if (anslist.selected === true) {

//     //       var addedAnswer = userAnswers.find((c) => c.que_id === item.que_id);
//     //       if (addedAnswer) {
//     //         let newAnswer = userAnswers.filter(
//     //           (c) =>
//     //             c.que_id !== addedAnswer.que_id &&
//     //             c.que_options !== addedAnswer.a
//     //         );
//     //         setUserAnswers(newAnswer);
//     //       }
//     //     }
//     //   });
//     // });


//     const getAnswer = (e) => {
//         let anserArray = [...userAnswers];
//         if (e.target.name) {
//           setUserAnswers((prevState) => [
//             ...prevState,
//             { que_id: parseInt(e.target.name), a: e.target.value },
//           ]);
//         }
    
//         var addedAnswer = anserArray.find(
//           (c) => c.que_id === parseInt(e.target.name)
//         );
    
//         if (addedAnswer) {
//           let newAnswer = anserArray.filter(
//             (c) => c.que_id !== parseInt(e.target.name)
//             //  &&
//             // c.a !== e.target.value
//           );
//           setUserAnswers(newAnswer);
//           setUserAnswers((prevState) => [
//             ...prevState,
//             { que_id: parseInt(e.target.name), a: e.target.value },
//           ]);
    
//           // if (addedAnswer) {
//           //   let anss = anserArray.map((ans) => {
//           //     return {
//           //       ...ans,
//           //       que_id: parseInt(e.target.name),
//           //       a: e.target.value,
//           //     };
//           //   });
//           //   console.log(anss);
//           //   setUserAnswers(anss);
//           // }
//         }
//         // else if (e.target.name) {
//         //   setUserAnswers((prevState) => [
//         //     ...prevState,
//         //     { que_id: parseInt(e.target.name), a: e.target.value },
//         //   ]);
//         // }
//         //examImportantPurp
//       };




// else {
//     return (
//       <div
//         key={index_ans}
//         className="Quiz_multiple_options"
//       >
//         {/*----------------------------------------------------------- optionslarin indexini gosterir */}
//         <label
//           className="container text-danger"
//           // onClick={getAnswer}
//         >
//           <span className="option-index">
//             {index_ans})
//           </span>

//           {ans.que_options}
//           <input
//             key={index_ans}
//             type="radio"
//             name={item.que_id}
//             value={ans.que_options}
//             checked={!!ans.selected}
//             id={index_ans}
//           />

//           <span className="checkmark"></span>
//         </label>
//       </div>
//     );
//   }\


// return (
//     <div key={index_ans} className="Quiz_multiple_options">
//       {/*----------------------------------------------------------- optionslarin indexini gosterir */}
//       {ans.selected === true &&
//       ans.selected === ans.isTrueAnswer ? (
//         <label
//           className="container text-green"
//           // onClick={getAnswer}
//         >
//           <span className="option-index">{index_ans})</span>

//           {ans.que_options}
//           <input
//             key={index_ans}
//             type="radio"
//             name={item.que_id}
//             value={ans.que_options}
//             defaultChecked={!!ans.selected}
//             id={index_ans}
//           />

//           <span className="checkmark"></span>
//         </label>
//       ) : (
//         <label
//           className="container text-danger"
//           // onClick={getAnswer}
//         >
//           <span className="option-index">{index_ans})</span>

//           {ans.que_options}
//           <input
//             key={index_ans}
//             type="radio"
//             name={item.que_id}
//             value={ans.que_options}
//             defaultChecked={!!ans.selected}
//             id={index_ans}
//           />

//           <span className="checkmark"></span>
//         </label>
//       )}
//     </div>
//   );