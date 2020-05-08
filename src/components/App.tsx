import * as React from 'react';
import {List} from "./List";
import {Pagination} from "./Pagination";
import ContentLoader from "../model/ContentLoader";

export const App = (props: AppProps): JSX.Element => {

    return (
        <>
            <List loader={props.loader}/>
            <Pagination loader={props.loader}/>
        </>
    );
};

type AppProps = {
    loader: ContentLoader;
}