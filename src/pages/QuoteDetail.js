import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import { useEffect } from 'react';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import useHttp from '../hooks/use-http';
import { getSingleQuote } from '../lib/api';
import LoadingSpinner from '../components/UI/LoadingSpinner';
// import NoQuotesFound from '../components/quotes/NoQuotesFound';

const QuoteDetail = (props) => {
    const params = useParams();
    const match = useRouteMatch();
    const { quoteId } = params;
    console.log(params);

    const { sendRequest, status, data: loadedQuote, error } = useHttp(getSingleQuote, true);

    useEffect(() => {
        sendRequest(quoteId);
    }, [sendRequest, quoteId]);

    if (status === 'pending') {
        return (
            <div className="centered">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return <p className="centered focused">{error}</p>;
    }

    if (!loadedQuote.text) {
        return <p>No Quote Found. </p>;
    }

    return (
        <>
            <HighlightedQuote author={loadedQuote.author} text={loadedQuote.text} />

            <Route path={match.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${match.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>

            <h1>Quote Details page</h1>
            <Route path={`${match.path}/comments`}>
                <Comments />
            </Route>
        </>
    );
};
export default QuoteDetail;
