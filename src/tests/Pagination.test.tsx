import * as React from 'react';
import {configure, shallow} from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import ContentLoader from "../model/ContentLoader";
import {Pagination} from "../components/Pagination";
import 'mobx-react-lite/batchingForReactDom';

configure({adapter: new ReactSixteenAdapter})
const loader = new ContentLoader(92, 10);
const component = shallow(<Pagination loader={loader}/>);

test('Check for p', () => {
    expect(component.find('p.pageCount').length).toBe(1);
    expect(component.find('p.pageCount').text()).toBe("1/10");
});

test('Check for prev button', () => {
    const spy = spyOn(loader, 'previousPage');
    expect(component.find('button.prevBtn').length).toBe(1);
    component.find('button.prevBtn').simulate('click');
    expect(spy).toHaveBeenCalled();
    component.find('button.prevBtn').simulate('click');
    component.find('button.prevBtn').simulate('click');
    expect(spy).toBeCalledTimes(3);
});

test('Check for next button', () => {
    const spy = spyOn(loader, 'nextPage')
    expect(component.find('button.nextBtn').length).toBe(1);
    component.find('button.nextBtn').simulate('click');
    expect(spy).toHaveBeenCalled();
    component.find('button.nextBtn').simulate('click');
    component.find('button.nextBtn').simulate('click');
    component.find('button.nextBtn').simulate('click');
    component.find('button.nextBtn').simulate('click');
    expect(spy).toBeCalledTimes(5);
});



