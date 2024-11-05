/* eslint-disable react/prop-types */
import React from 'react';

const Products = (props) => {
  const {title, price, description, category, image, rating} = props
  return (
    <article className="product">
      <img src={image} alt="" />
      <div className="product__details">
        <h4 className="product__title">{title}</h4>
        <p className='categpry'>Category: {category}</p>
        <p className='price'>Price: $ {price}</p>
        <p className='rating'>Rating: {rating.rate + "/" + 5}</p>
        <p className="product__desc">{description}</p>
        <button className="product__btn btn">Add to cart</button>
      </div>
    </article>
  );
};
export default Products;
