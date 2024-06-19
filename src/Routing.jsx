import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/SampleHome';
import { SamplePage1 } from './Components/SamplePage1';
import { SamplePage2 } from './Components/SamplePage2';
import { SamplePage3 } from './Components/SamplePage3';
import { SamplePage4, SamplePage4Child1, SamplePage4Child2 } from './Components/SamplePage4';
import { NotFound } from './Components/NotFound';

export const Routing = () => {
  const greeting = ['hello', 'こんにちは'];
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="page1" element={<SamplePage1 />} />
          <Route path="page2" element={<SamplePage2 />} />
          <Route
            path="page3_hello"
            element={<SamplePage3 message={greeting[0]} />}
          />
          <Route
            path="page3_konnitiha"
            element={<SamplePage3 message={greeting[1]} />}
          />
          <Route path="page4" element={<SamplePage4 />}>
            <Route index />
            <Route path="child1" element={<SamplePage4Child1 />} />
            <Route path="child2" element={<SamplePage4Child2 />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
