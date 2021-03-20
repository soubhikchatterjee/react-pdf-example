import ReactPDF from "@soubhikchatterjee/react-pdf";

export default function App() {
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
