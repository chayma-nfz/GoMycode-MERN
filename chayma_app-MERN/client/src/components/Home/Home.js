import React, { useState, useEffect } from 'react';
import { getProducts } from '../../helpers/userFetch';
import Card from './Card';

const Home = () => {
  const [productsBySold, setProductBySold] = useState([]);
  const [productsByArrival, setProductByArrival] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const loadProductsBySold = () => {
    getProducts('sold').then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setLoading(false);
        setProductBySold(data);
      }
    });
  };

  const loadProductsByArrival = () => {
    getProducts('createdAt').then(data => {
      if (data.error) {
        setError(data.error);
      } else {
        setLoading(false);
        setProductByArrival(data);
      }
    });
  };

  useEffect(() => {
    loadProductsByArrival();
    loadProductsBySold();
    // eslint-disable-next-line
  }, []);

  const showError = () => error && <h2>Fail to load!</h2>;

  const showLoading = () =>
    loading && (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );

  return (
    <div> 
      <h1 className="title pt-3 pb-3">The Books</h1>
      <div class="container-fluid row m-0 p-0 card-container">
        <div class="col-4 mb-3"><div class="card h-100 text-center">
          <div class="card-header">React JS Notes for professionals</div>
          <div class="card-image"><div class="product-img">
             <img src="https://bookstore-khoado.herokuapp.com/api/product/photo/5e2b1ac34b074d3d5c9407db" alt="React JS Notes for professionals" class="m-3"/>
      </div>
      </div>
             <div class="column card-body">
               <p>New released</p><h5>30D</h5>
               <p>Category: React.js</p>
             <p>Added a year ago</p><div><span class="badge badge-primary badge-pill mb-2">Out of Stock</span>
             </div><div><a class="mr-2" href="/product/5e2b1ac34b074d3d5c9407db">
               <button class="btn btn-outline-primary mt-2 mb-2">View</button></a>
               <button class="btn btn-outline-success mt-2 mb-2">Add to cart</button>
               </div>
               </div></div></div>
               <div class="col-4 mb-3">
                 <div class="card h-100 text-center">
                   <div class="card-header">The Road to Learn React</div>
                   <div class="card-image">
                     <div class="product-img">
     <img src="https://bookstore-khoado.herokuapp.com/api/product/photo/5e2b1a924b074d3d5c9407da" alt="The Road to Learn React" class="m-3"/>
    </div></div>
    <div class="column card-body"><p>New book</p><h5>100D</h5>
    <p>Category: React.js</p>
    <p>Added a year ago</p><div><span class="badge badge-primary badge-pill mb-2">Out of Stock</span>
    </div><div><a class="mr-2" href="/product/5e2b1a924b074d3d5c9407da">
      <button class="btn btn-outline-primary mt-2 mb-2">View</button></a>
      <button class="btn btn-outline-success mt-2 mb-2">Add to cart</button>
      </div></div></div></div><div class="col-4 mb-3"><div class="card h-100 text-center">
        <div class="card-header">Pro CSS techniques</div><div class="card-image">
          <div class="product-img">
      <img src="https://bookstore-khoado.herokuapp.com/api/product/photo/5e2a2b8c97f69d31d41653c2" alt="Pro CSS techniques" class="m-3"/>
          </div></div><div class="column card-body"><p>Must have book for web design</p>
          <h5>140D</h5><p>Category: CSS3</p>
          <p>Added a year ago</p><div><span class="badge badge-primary badge-pill mb-2">In Stock</span>
          </div><div><a class="mr-2" href="/product/5e2a2b8c97f69d31d41653c2">
        <button class="btn btn-outline-primary mt-2 mb-2">View</button></a>
        <button class="btn btn-outline-success mt-2 mb-2">Add to cart</button>
        </div></div></div></div><div class="col-4 mb-3"><div class="card h-100 text-center">
          <div class="card-header">HTML &amp; CSS</div><div class="card-image"><div class="product-img">
            <img src="https://bookstore-khoado.herokuapp.com/api/product/photo/5e2a2b5997f69d31d41653c1" alt="HTML &amp; CSS" class="m-3"/>
            </div></div>
            <div class="column card-body"><p>Best selling book</p><h5>25D</h5><p>Category: HTML5</p>
            <p>Added a year ago</p><div>
              <span class="badge badge-primary badge-pill mb-2">In Stock</span></div><div>
                <a class="mr-2" href="/product/5e2a2b5997f69d31d41653c1">
                  <button class="btn btn-outline-primary mt-2 mb-2">View</button></a>
                  <button class="btn btn-outline-success mt-2 mb-2">Add to cart</button>
                  </div></div></div></div><div class="col-4 mb-3"><div class="card h-100 text-center">
                    <div class="card-header">Eloquent JavaScript</div>
            <div class="card-image"><div class="product-img">
              <img src="https://bookstore-khoado.herokuapp.com/api/product/photo/5e29105de716ac3ac4ca1a70" alt="Eloquent JavaScript" class="m-3"/>
              </div></div><div class="column card-body"><p>Best Selling Book</p>
              <h5>70D</h5>
              <p>Category: JavaScript</p>
              <p>Added a 3 year ago</p><div><span class="badge badge-primary badge-pill mb-2">In Stock</span>
              </div>
              <div><a class="mr-2" href="/product/5e29105de716ac3ac4ca1a70">
                <button class="btn btn-outline-primary mt-2 mb-2">View</button></a>
                <button class="btn btn-outline-success mt-2 mb-2">Add to cart</button></div>
                </div></div></div><div class="col-4 mb-3"><div class="card h-100 text-center">
                  <div class="card-header">JavaScript &amp; jQuery</div><div class="card-image">
                    <div class="product-img">
                    <img src="https://bookstore-khoado.herokuapp.com/api/product/photo/5e290f5de716ac3ac4ca1a6e" alt="JavaScript &amp; jQuery" class="m-3"/>
                    </div></div><div class="column card-body"><p>The best book for JS beginner</p>
                    <h5>60D</h5><p>Category: JavaScript</p>
                    <p>Added a  2 year ago</p>
                    <div><span class="badge badge-primary badge-pill mb-2">In Stock</span>
                    </div><div><a class="mr-2" href="/product/5e290f5de716ac3ac4ca1a6e">
                      <button class="btn btn-outline-primary mt-2 mb-2">View</button></a>
                      <button class="btn btn-outline-success mt-2 mb-2">Add to cart</button>
            </div>
            </div>
            </div>
            </div>
            </div>


       <div>
      <h1 className="title pt-3 pb-3">Best books </h1>
      {showLoading()}
      <div className="container-fluid row m-0 p-0 card-container">
        {productsBySold.map((product, i) => (
          <div className="col-4 mb-3" key={i}>
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>

  </div>
  );
};
export default Home;
