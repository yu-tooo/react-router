import { Link, createSearchParams, useNavigate} from 'react-router-dom';

const SampleHome = () => {
  const params = createSearchParams({
    query1: 'value3',
    query2: 'value4',
  }).toString();

  const navigate = useNavigate();

  return (
    <>
      <h1>Sample Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="page1">Page1へ</Link>
          </li>
          <li>
            <Link to="page2">Page2へ</Link>
          </li>
          <li>
            <Link to="page2?query1=value1&query2=value2">
              Page2へ with Query1
            </Link>
          </li>
          <li>
            <Link to={`page2?${params}`}>Page2へ with Query2</Link>
          </li>
          <li>
            <Link to="page3_hello">Page3へ hello</Link>
          </li>
          <li>
            <Link to="page3_konnitiha">Page3へ こんにちは</Link>
          </li>
          <li>
            <Link to="page4">Page4へ</Link>
          </li>
        </ul>
      </nav>
      <button onClick={() => {navigate("page1")}}>ページ1に遷移</button>
    </>
  );
};

export default SampleHome;
