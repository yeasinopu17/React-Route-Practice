import { useParams, Route } from 'react-router-dom';
import Comments from '../components/comments/Comments';

const QuoteDetail = (props) => {
    const params = useParams();

    return (
        <>
            <h1>Quote Details page</h1>
            <p>The param: {params.quoteId}</p>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments />
            </Route>
        </>
    );
};
export default QuoteDetail;
