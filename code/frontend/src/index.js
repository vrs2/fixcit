import React from 'react';
import ReactDom from 'react-dom';

import './index.css';

const author = 'J.K. Rowling';
const title = 'A Providência';
const img = "https://m.media-amazon.com/images/I/51GOvpK1IgL._AC_SY200_.jpg";

function BookList(){
  return(
    <section className="booklist">
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
      <Book/>
    </section>
  );
}


const Book = () => {
  return (
    <article className="book">
      <img src={img} alt="Livro"/>
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}

// const Image = () => (
//   <img src="https://m.media-amazon.com/images/I/51GOvpK1IgL._AC_SY200_.jpg" alt="Livro"/>
//   );

// const Title = () =>
//   <h1>A Providência</h1>

// const Author = () =>
//   <h4 style={{color:'#617d98', fontSize: '0.75rem', marginTop:'0.25rem'}} >Bruno Oliveira</h4>

ReactDom.render(<BookList/>, document.getElementById('root'));