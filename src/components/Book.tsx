import { useParams, useOutletContext } from "react-router-dom";

const Book = () => {
  const { id } = useParams();
  return <div className="text-2xl text-center my-1">Book : {id}</div>;
};

export default Book;
