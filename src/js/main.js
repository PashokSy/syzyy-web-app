// TEST
// const articlesElement = document.querySelector('.articles');

// const getArticles = async function () {
//   const data = await fetch('http://localhost:5000/api/v1/article');
//   const articles = await data.json();
//   console.log(articles);

//   let markup = '<ul>';
//   articles.forEach((article) => {
//     markup += `<li>
//             <article>
//               <h3>${article.authorId}</h3>
//               <p>${article.text}</p>
//               <ul>
//                 <li>${article.comments[0]}</li>
//               </ul>
//             </article>
//           </li>`;
//   });
//   markup += '</ul>';

//   articlesElement.insertAdjacentHTML('afterbegin', markup);
// };
// getArticles();
