import { Link, useSearchParams } from 'react-router-dom';


export const SamplePage2 = () => {
  const [searchParams] = useSearchParams();

  const query1 = searchParams.get('query1');
  const query2 = searchParams.get('query2');

  return (
    <>
      <h3>sample page2</h3>
      <p>query1 = {query1}</p>
      <p>query2 = {query2}</p>
      <Link to="/">
        <p>ホームへ</p>
      </Link>
    </>
  );
};
