import React from 'react';
import image1 from './blog-image-1.jpg';
import image2 from './blog-image-2.jpg';

const Article = () => {
  return (
    <article>
      <time dateTime="11/12/20">11/12/20</time>
      <p className="title">On the Street in Brooklyn</p>
      <div className="img">
        <img src={image1} alt="Image of a Brooklyn Street" />
      </div>
      <p className="first-word-uppercase-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut fugit, consectetur deleniti provident culpa eius sequihic non dignissimos fugiat at facilis alias suscipit illo,
        esse repudiandae eveniet molestiae! Molestiae!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut fugit, consectetur deleniti provident culpa eius sequihic non dignissimos fugiat at facilis alias suscipit illo,
        esse repudiandae eveniet molestiae! Molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut fugit, consectetur deleniti provident culpa eius sequihic non dignissimos fugiat at facilis alias suscipit illo,
        esse repudiandae eveniet molestiae! Molestiae!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut fugit, consectetur deleniti provident culpa eius sequihic non dignissimos fugiat at facilis alias suscipit illo,
        esse repudiandae eveniet molestiae! Molestiae!</p>
      <a className="continue" href="#">Continues....</a>
      <hr />
      <time dateTime="11/11/20">11/11/20</time>
      <p className="title">Vintage in Vogue</p>
      <img src={image2} alt="Vintage in Vogue" />
      <p className="first-word-uppercase-p">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut fugit, consectetur deleniti provident culpa eius sequihic non dignissimos fugiat at facilis alias suscipit illo,
        esse repudiandae eveniet molestiae! Molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut fugit, consectetur deleniti provident culpa eius sequihic non dignissimos fugiat at facilis alias suscipit illo,
        esse repudiandae eveniet molestiae! Molestiae!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut fugit, consectetur deleniti provident culpa eius sequihic non dignissimos fugiat at facilis alias suscipit illo,
        esse repudiandae eveniet molestiae! Molestiae!Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Ut fugit, consectetur deleniti provident culpa eius sequihic non dignissimos fugiat at facilis alias suscipit illo,
        esse repudiandae eveniet molestiae! Molestiae!</p>
      <a className="continue" href="#">Continues....</a>
    </article>
  );
}

export default Article;
