import { useSelector } from "react-redux";
import { selectGoods } from "./Store/selectors";

import HomePage from "./Pages/HomePage";

function App() {
  const ourGoods = useSelector(selectGoods)

  return (
    <>
      <HomePage ourGoods={ourGoods}/>
    </>
  );
}

export default App;
