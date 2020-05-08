import * as React from 'react';
import ContentLoader from "../model/ContentLoader";
import {observer} from "mobx-react";

export const List = observer((props: ListProps): JSX.Element => {

    return (
        <>
            <ul className="theList" id="list">
                {props.loader.getCurrentPage().map((text: string, index) => <li id="point" key={index} className="listPoint">{text}</li>)}
            </ul>
        </>
    );
});

type ListProps = {
    loader: ContentLoader;
}