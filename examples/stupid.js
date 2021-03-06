// use jsx to render html, do not modify simple.html
'use strict';

require('rc-pagination/assets/index.less');
var Pagination = require('rc-pagination');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
  <Pagination simple defaultCurrent={1} total={50} />, 
  document.getElementById('__react-content')
);
