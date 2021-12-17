import { useParams, Route, Link } from 'react-router-dom';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun' },
    { id: 'q2', author: 'L', text: 'Stranger Things' },
];

const QuoteDetail = (props) => {
    const params = useParams();

    const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

    if (!quote) {
        return <p>No Quote Found. </p>;
    }

    return (
        <>
            <HighlightedQuote author={quote.author} text={quote.text} />

            <Route path={`/quotes/${params.quoteId}/`} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>

            <h1>Quote Details page</h1>
            <p>The param: {params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </>
    );
};
export default QuoteDetail;
