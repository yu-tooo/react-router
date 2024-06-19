import { Link } from 'react-router-dom';

export const SamplePage3 = (props) => {
  const { message } = props;
  return (
    <>
      <h1>SamplePage3</h1>
      <p>message ⇒ {message}</p>
      <p>
        <Link to="/">ホームへ</Link>
      </p>
    </>
  );
};
