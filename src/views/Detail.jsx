import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();

  return <h1>Detail ID: {id}</h1>;
}

export default Detail;