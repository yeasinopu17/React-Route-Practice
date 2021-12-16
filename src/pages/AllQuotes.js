import QuoteList from '../components/quotes/QuoteList';
const DUMMY_QUOTES = [
    { id: 'q1', author: 'Max', text: 'Learning React is fun' },
    { id: 'q1', author: 'L', text: 'Stranger Things' },
];

const AllQuotes = (props) => {
    return <QuoteList quotes={DUMMY_QUOTES} />;
};
export default AllQuotes;
