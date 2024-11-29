import { useEffect, useState } from "react";
import PCard from "../Components/PCard";

const AllCategories = () => {
  const [jwels, setJwels] = useState([]);
  useEffect(() => {
    fetch("/public/jwel.json")
      .then((res) => res.json())
      .then((data) => setJwels(data));
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div className="md:max-w-7xl grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-16 mt-10">
        {jwels?.map((jwel) => (
          <PCard key={jwel.id} jwel={jwel} />
        ))}
      </div>
    </div>
  );
};

export default AllCategories;
