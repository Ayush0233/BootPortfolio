// console.log("connected");

// let divs = document.querySelectorAll('div');

// window.onscroll = () => {
//     divs.forEach(divss =>{
//         let top = window.scrollY;
//         let offset = divss.offsetTop - 150;
//         let height = divss.offsetHeight;

//         if(top >= offset && top < offset + height){
//             divss.classList.add('show-animate');
//         }
//         else{
//             divss.classList.remove('show-animate');

//         }
//     })
// }



function downloadPDF(){
  window.print();
}

// function downloadPDF() {
//     const div = document.getElementById('myDiv');
//     const options = {
//       filename: 'myDiv.pdf',
//       image: { type: 'jpeg', quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
//     };

//     html2pdf()
//       .set(options)
//       .from(div)
//       .save();
//   }