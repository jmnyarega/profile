import {Document, Page, pdfjs} from 'react-pdf';
import {Heading1, Spacer} from '../home';
import {useState} from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Resume = () => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const onDocumentLoadSuccess = ({numPages}: {numPages: number}): void => {
    setNumPages(numPages)
  }
  return (
    <>
      <Spacer $size="6rem" />
      <Heading1><span style={{color: "rgb(var(--primary))"}}>/</span>Resume</Heading1>
      <Spacer $size="0.5rem" />
      <p>My work history</p>
      <Spacer $size="6rem" />

      <Document
        onLoadSuccess={onDocumentLoadSuccess}
        className="pdf-page"
        file="documents/cv.pdf"
        loading="Loading..."
        scale={1.5}
      >
        <Page
          renderAnnotationLayer={false}
          renderTextLayer={false}
          pageNumber={pageNumber}
        />
      </Document>

      <div style={{display: "flex", alignItems: "center", gap: "2rem", justifyContent: "center", margin: "2rem 0"}}>
        <button className='button'
          onClick={() => {setPageNumber(number => number - 1)}}
          disabled={pageNumber <= 1}> Prev Page </button>
        <span> {pageNumber} </span>
        <button
          className='button'
          onClick={() => setPageNumber(number => number + 1)}
          disabled={pageNumber >= numPages}> Next Page </button>
      </div>
    </>
  )
}

export default Resume;
