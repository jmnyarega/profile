import {ReactNode, useEffect, useState} from "react";
import {Heading2, Spacer} from "../home";

const QuoteItem: React.FC<{quote: string[]}> = (props) => {
    const [theQuote, from] = props.quote;
    return <section style={
        {
            borderBottom: "1px solid",
            paddingBlock: "1rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            lineHeight: "200%"
        }
    }>
        <div style={{fontStyle: "italic"}}>{theQuote}</div>
        <span style={{alignSelf: "flex-end"}}>-{from}</span>
    </section>
}

const Item: React.FC<{show: boolean, children?: ReactNode}> = (props) =>
    props.show ? <div> {props.children} </div> : null

const Tab: React.FC<{children?: ReactNode}> = (props) => <div>
    {props.children}
</div>

const Bookmarks = () => {
    const [quotes, setQuotes] = useState<string[][]>([]);
    const [bookmarks, setBookmarks] = useState<string[][]>([]);
    const [active, setActive] = useState("quotes");

    useEffect(() => {
        const getData = async () => {
            const {quotes, bookmarks} = (await import("../../data.json")).default.quotes;
            setQuotes(quotes);
            setBookmarks(bookmarks);
        }
        getData();
    });

    return <div>
        <Spacer $size="6rem" />
        <Heading2><span style={{color: "rgb(var(--primary))"}}>/</span>Bookmarks</Heading2>
        <Spacer $size="0.5rem" />
        <p>List of my favourite Bookmarks</p>
        <Spacer $size="6rem" />

        <Tab>
            <div style={{display: "flex", alignItems: "center", gap: "1rem"}}>
                <button
                    className={`button ${active === 'quotes' ? 'button--primary' : 'button--gray'}`}
                    onClick={() => setActive("quotes")}>
                    Quotes
                </button>

                <button
                    className={`button ${active === 'bookmarks' ? 'button--primary' : 'button--gray'}`}
                    onClick={() => setActive("bookmarks")}>
                    Bookmarks
                </button>
            </div>

            <Spacer $size="3rem" />

            <Item show={active === "quotes"}>
                <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
                    {quotes.map((quote) => <QuoteItem quote={quote} />)}
                </div>
            </Item>

            <Item show={active === "bookmarks"}>
                <div style={{display: "flex", flexDirection: "column", gap: "2rem"}}>
                    {bookmarks.map((bookmark) => <QuoteItem quote={bookmark} />)}
                </div>
            </Item>

        </Tab>
    </div>
}


export default Bookmarks;