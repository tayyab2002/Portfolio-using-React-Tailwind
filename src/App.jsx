import { Suspense, lazy } from "react";
import Lazyloader from "./components/loader/Lazyloader";

const Root = lazy(() => import("./components/Root/Root"));
const App = () => {
  return (
    <>
      <Suspense fallback={<Lazyloader />}>
        <Root />
      </Suspense>
    </>
  );
};

export default App;
