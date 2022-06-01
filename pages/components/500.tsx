// import styles from '../styles/Home.module.css'
// import { Button } from 'react-bootstrap';

const Error500 = () => {
  return (
    <div id="layoutError">
      <div id="layoutError_content">
        <main>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="text-center mt-4">
                  <h1 className="display-1">500</h1>
                  <p className="lead">Internal Server Error</p>
                  <a href="index.html">
                    <i className="fas fa-arrow-left me-1"></i>
                    Return to Dashboard
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Error500;
