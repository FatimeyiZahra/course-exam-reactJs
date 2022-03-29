// let list = Quiz_Set1;
// let anserArray = [...userAnswers];
// console.log(anserArray);
// list.forEach((item, key) => {
//   item.options.forEach((anslist, key) => {
//     if (anslist.selected === true) {
//       console.log(item.que_id, anslist.que_options);
//       anserArray.push(item.que_id, anslist.que_options);
//       setUserAnswers([...anserArray]);
//       -------------------
//       setUserAnswers((prevState) => [
//         ...prevState,
//         { que_id: item.que_id, a: anslist.que_options },
//       ]);
//       var addedAnswer = anserArray.find((c) => c.que_id === item.que_id);
//       if (addedAnswer) {
//         let newAnswer = userAnswers.filter(
//           (c) =>
//             c.que_id !== addedAnswer.que_id &&
//             c.que_options !== addedAnswer.a
//         );
//         setUserAnswers(newAnswer);
//       } else {
//         anserArray.push({ que_id: item.que_id, a: anslist.que_options });
//         setUserAnswers(anserArray);
//       }
//     }
//   });
// });









    // list.forEach((item, key) => {
    //   item.options.forEach((anslist, key) => {
    //     if (anslist.selected === true) {

    //       var addedAnswer = userAnswers.find((c) => c.que_id === item.que_id);
    //       if (addedAnswer) {
    //         let newAnswer = userAnswers.filter(
    //           (c) =>
    //             c.que_id !== addedAnswer.que_id &&
    //             c.que_options !== addedAnswer.a
    //         );
    //         setUserAnswers(newAnswer);
    //       }
    //     }
    //   });
    // });