import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Heading1, Spacer } from '../home';
import { useState } from 'react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
).toString();

const Resume = () => {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
    const [inputPageNumber, setInputPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
        setNumPages(numPages);
    }
    return (
        <>
            <Spacer $size="6rem" />
            <Heading1><span style={{ color: "rgb(var(--primary))" }}>/</span>Resume</Heading1>
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
                    renderAnnotationLayer={true}
                    renderTextLayer={false}
                    pageNumber={pageNumber}
                />
            </Document>

            <div style={{ display: "flex", alignItems: "center", gap: "2rem", justifyContent: "center", margin: "2rem 0" }}>
                <button className='button' onClick={() => {
                    setPageNumber(number => number - 1);
                    setInputPageNumber(number => number - 1);
                }
                } disabled={pageNumber <= 1}> Prev Page </button>
                <input
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setInputPageNumber(+event.currentTarget.value)}
                    onBlur={() => setPageNumber(inputPageNumber)}
                    value={inputPageNumber}
                    style={{ width: "2ch", font: "inherit" }}
                />
                {numPages &&
                    <button className='button' onClick={() => {
                        setPageNumber(number => number + 1);
                        setInputPageNumber(number => number + 1);
                    }
                    } disabled={pageNumber >= numPages}> Next Page </button>
                }
            </div>
        </>
    )
}

export default Resume;