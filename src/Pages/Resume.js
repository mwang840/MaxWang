import React, {useState} from "react";
import { Document } from "react-pdf";

function Resume(){
    const [pages, setPages] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    function onDocumentLoadPage({docPage}){
            setPages(pages);
            setPageNum(1);
    }
    return <div className="container">
        {/*My resume will be displayed here*/}


    </div>
}

export default Resume;