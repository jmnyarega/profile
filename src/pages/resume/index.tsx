import {PdfJs, ProgressBar, RenderPageProps, Viewer, Worker} from '@react-pdf-viewer/core';
import {Heading1, Spacer} from '../home';

const Resume = () => {
    const renderPage = (props: RenderPageProps) => (<>
        {props.canvasLayer.children}
        <div
            style={{
                display: 'flex',
                height: '100%',
                justifyContent: 'center',
                left: 0,
                top: 0,
                position: 'absolute',
                width: '100%',
            }}
        >
            <div
                style={{
                    color: 'rgb(var(--dark))',
                    fontSize: `${1.5 * props.scale}rem`,
                    fontWeight: 'regular',
                    textTransform: 'capitalize',
                    transform: 'rotate(0deg)',
                    userSelect: 'none',
                }}
            >
            </div>
        </div>
        <div style={{display: "none"}}>
            {props.annotationLayer.children}
            {props.textLayer.children}
        </div>
    </>);

    return (<>
        <Spacer $size="6rem"/>
        <Heading1><span style={{color: "rgb(var(--primary))"}}>/</span>Resume</Heading1>
        <div style={{display: "flex", justifyContent: "flex-end"}}>
            <a target='_blank' href="documents/cv.pdf" className='button button--primary'>Download CV</a>
        </div>
        <Spacer $size="3rem"/>

        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer
                renderLoader={(percentages: number) => (<div style={{width: '240px'}}>
                    <ProgressBar progress={Math.round(percentages)}/>
                </div>)}
                transformGetDocumentParams={(options: PdfJs.GetDocumentParams) => Object.assign({}, options, {
                    disableRange: true, disableStream: true,
                })}
                renderPage={renderPage}
                fileUrl="documents/cv.pdf"
            />
        </Worker>
    </>)
}

export default Resume;