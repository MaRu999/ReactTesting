import * as React from 'react';
import ContentLoader from "../model/ContentLoader";
import {observer} from "mobx-react";

export const Pagination = observer((props: PaginationProps): JSX.Element => {

    return (
        <>
            <button className="prevBtn" id="prev" onClick={(): void => props.loader.previousPage()}>Prev</button>
            <p className="pageCount" id="pageNr">{props.loader.curPage + 1}/{props.loader.maxPage + 1}</p>
            <button className="nextBtn" id="next" onClick={(): void => props.loader.nextPage()}>Next</button>
        </>
    );
});

type PaginationProps = {
    loader: ContentLoader;
}