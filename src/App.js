import { useEffect } from "react";
import ReactPDF from "@soubhikchatterjee/react-pdf";
import { useSelector } from "react-redux";
import * as AppAction from "@soubhikchatterjee/react-pdf/dist/store/actions/app.action";

export default function App() {
  const pageChanges = useSelector(
    (state) => state.appReducer[AppAction.PAGE_CHANGES]
  );

  useEffect(() => {
    // To get the list of all pages including the changes
    if (pageChanges) {
      console.log(pageChanges);
    }
  }, [pageChanges]);

  return (
    <div className="App">
      <ReactPDF
        uniqueId={Math.random()}
        filename="c4611_sample_explain.pdf"
        pdfUrl="https://api.allorigins.win/raw?url=https://www.adobe.com/support/products/enterprise/knowledgecenter/media/c4611_sample_explain.pdf"
      />
    </div>
  );
}
