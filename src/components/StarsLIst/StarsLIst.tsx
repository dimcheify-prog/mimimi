import { FaStar } from "react-icons/fa";

interface StarsListProps {
  rating: number;
}

const StarsLIst = ({rating}: StarsListProps) => {
  return (
    <div>
      {
        Array.from(Array(Math.floor(rating)).keys()).map((_item, index) => (
          <FaStar key={index} fill="#FFD700"/>
        ))
      }   
    </div>
  );
};

export default StarsLIst;