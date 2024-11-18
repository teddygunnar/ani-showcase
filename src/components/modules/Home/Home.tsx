import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../../routes/RoutePath";

const Home: FC = () => {
  const nav = useNavigate();
  return (
    <div>
      {RoutePath.map((val) => (
        <p onClick={() => nav(val.path)}>{val.title}</p>
      ))}
    </div>
  );
};

export default Home;
