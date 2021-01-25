import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const Fragment = React.Fragment;

ReactDOM.render(
  <React.StrictMode>
  	<Fragment>
	    <App />
	    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
	      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
	      crossOrigin="anonymous"
	    />
	    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" 
	      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" 
	      crossOrigin="anonymous"
	     />
	    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" 
	      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" 
	      crossOrigin="anonymous"
	    />
    </Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
