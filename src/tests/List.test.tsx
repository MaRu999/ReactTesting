import * as React from 'react'
import {configure, shallow} from "enzyme";
import {List} from "../components/List";
import ContentLoader from "../model/ContentLoader";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import 'mobx-react-lite/batchingForReactDom';

configure({adapter: new ReactSixteenAdapter})
const loader = new ContentLoader(92, 10);

test('Check List existence', () => {
    const component = shallow(<List loader={loader}/>);
    expect(component.find('ul.theList').length).toBe(1);
    expect(component.find('li.listPoint').length).toBe(10);
});