import React, { lazy, Suspense } from 'react';
import { useInView } from 'react-intersection-observer'
import Message from '../../import-on-interaction/src/components/Message';

import './App.css'
import { useEffect } from 'react';

const Emoji = lazy(() => import("./components/Emoji"));

function App() {
  const { ref, inView } = useInView()

  useEffect(() => {
    console.log("inView:", inView);
  }, [inView])
  return (
    <>
      <Message />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div ref={ref}>
        { inView && <Emoji /> }
      </div>
    </>
  )
}

export default App
