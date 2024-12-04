import { useState, startTransition, memo, Suspense, lazy } from "react";

const Transition = lazy(() => import("./components/Transition"));
const Deffered = lazy(() => import("./components/Deffered"));

function App() {
  const [showModal, toggleModal] = useState(false);

  const handleClick = memo(() => {
    startTransition(() => {
      toggleModal((prev) => !prev);
    });
  });

  return (
    <>
      <h5>
        <button onClick={handleClick}>Open Modal</button>
      </h5>
      {showModal && <>Hi I'm INP, How are you ?</>}
      <br />
      <Suspense fallback={<div>Loading Transition...</div>}>
        <Transition />
      </Suspense>
      <br />
      <Suspense fallback={<div>Loading Deferred...</div>}>
        <Deffered />
      </Suspense>
    </>
  );
}

export default App;
