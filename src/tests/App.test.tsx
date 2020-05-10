import * as React from 'react';
import {configure, mount, render, shallow} from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import ContentLoader from "../model/ContentLoader";
import {App} from "../components/App";
import {List} from "../components/List";
import {Pagination} from "../components/Pagination";
import 'mobx-react-lite/batchingForReactDom';

configure({adapter: new ReactSixteenAdapter})
const loader = new ContentLoader(92, 10);

test('Check for List and Pagination components existence', () => {
    const component = shallow(<App loader={loader}/>);
    expect(component.find(List).length).toBe(1);
    expect(component.find(Pagination).length).toBe(1);
});

test('Integration test button clicking', () => {
    const component = mount(<App loader={loader}/>);
    const spyNext = spyOn(loader, 'nextPage');
    const spyPrev = spyOn(loader, 'previousPage')
    expect(component.find('button.prevBtn').length).toBe(1);
    component.find('button.prevBtn').simulate('click');
    expect(spyPrev).toHaveBeenCalled();
    expect(component.find('button.nextBtn').length).toBe(1);
    component.find('button.nextBtn').simulate('click');
    expect(spyNext).toHaveBeenCalled();
    component.find('button.nextBtn').simulate('click');
    component.find('button.nextBtn').simulate('click');
    component.find('button.prevBtn').simulate('click');
    expect(spyNext).toBeCalledTimes(3);
    expect(spyPrev).toBeCalledTimes(2);
    expect(component.find('li.listPoint').length).toBe(10);
});

test('snapshot comp', () => {
   const snap = render(<App loader={loader}/>);
   expect(snap).toMatchSnapshot();
});