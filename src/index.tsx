import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from "./components/App";
import ContentLoader from "./model/ContentLoader";
import 'mobx-react-lite/batchingForReactDom';

const loader = new ContentLoader(91, 10);

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App loader={loader} />, wrapper) : false;
