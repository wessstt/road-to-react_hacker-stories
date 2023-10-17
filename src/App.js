import * as React from "react";

const list = [
  {
    title: "React",
    url: "https://reactjs.org/",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org/",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

// original function declaration
// function List() {
//    return (
//      <ul>
//        {list.map(function (item) {
//          return (
//            <li key={item.objectID}>
//              <span>
//                <a href={item.url}>{item.title}</a>
//              </span>
//              <span>{item.author}</span>
//              <span>{item.num_comments}</span>
//              <span>{item.points}</span>
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
  

// Concise JSX component with arrow functions
const List = () => (
  <ul>
    {list.map((item) => (
      <li key={item.objectID}>
        <span>
          <a href={item.url}>{item.title}</a>
        </span>
        <span>{item.author}</span>
        <span>{item.num_comments}</span>
        <span>{item.points}</span>
      </li>
    ))}
  </ul>
);

// original function declaration
// function Search() {
//   return (
//    <div> 
//     <label htmlFor="search">Search: </label>
//     <input id="search" type="text" />
//    </div>
//    )
//  };


// Concise JSX component with arrow functions
const Search = () => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" />
  </div>
);

// original function declaration
// function App() {
//  return (
//    <div>
//      <h1>My Hacker Stories</h1>

//      <Search />

//      <hr />

//      <List />
//    </div>
//    );
//  }


// Concise JSX component with arrow functions
const App = () => (
  <div>
    <h1>My Hacker Stories</h1>
    <Search />
    <hr />
    <List />
  </div>
);

export default App;
