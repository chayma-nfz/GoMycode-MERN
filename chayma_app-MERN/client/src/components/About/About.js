import React from 'react';

const Home = () => {
  return (
    <div className="col-md-6 offset-md-3">
      <h4 className="pt-4 pb-3 text-center">Welcome </h4>

     

      <footer className="bg-dark p-2 fixed-bottom">
        <div className="container-fluid text-white">
          <div className="row">
            <div className="col-6">
              <p className="mb-0 ">
                Copyright &copy; 2021 All Rights Reserved by NFZ Chayma
              </p>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <div className="mr-3">
                <i className="fab fa-facebook "></i>
              </div>
              <div className="mr-3">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="mr-3">
                <i className="fab fa-dribbble"></i>
              </div>
              <div className="mr-3">
                <i className="fab fa-instagram"></i>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
