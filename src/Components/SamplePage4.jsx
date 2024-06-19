import { Link, useNavigate, Outlet } from 'react-router-dom';

export const SamplePage4 = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>サンプルページ4</h1>
      <ul>
        <li>
          <Link to="child1">show Child1</Link>
        </li>
        <li>
          <Link to="child2">show Child2</Link>
        </li>
        <li>
          <Link to="123">show Child3</Link>
        </li>
      </ul>
      <button
        onClick={() => {
          navigate('');
        }}
      >
        クリア
      </button>
      <Outlet />
    </>
  );
};

export const SamplePage4Child1 = () => {
  return <h2>child1 of page4</h2>;
};

export const SamplePage4Child2 = () => {
  return <h2>child2 of page4</h2>;
};
