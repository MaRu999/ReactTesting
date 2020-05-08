import * as React from 'react';
import {configure, shallow} from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import ContentLoader from "../model/ContentLoader";
import {App} from "../components/App";
import {List} from "../components/List";
import {Pagination} from "../components/Pagination";
import 'mobx-react-lite/batchingForReactDom';

configure({adapter: new ReactSixteenAdapter})
const loader = new ContentLoader(92, 10);

test('Check for App components existence', () => {
    const component = shallow(<App loader={loader}/>);
    expect(component.find(List).length).toBe(1);
    expect(component.find(Pagination).length).toBe(1);
});