import { useState } from "react";
import { IMG_CDN_URL } from "../../constants";

const Categories = ({ data }) => {
  const [showItems, setShowItems] = useState(false);

  const handleshowItems = () => {
    console.log("clicked");
    showItems ? setShowItems(false) : setShowItems(true);
  };

  return (
    <div className="bg-gray-300 w-6/12 mx-auto my-3 p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={() => {
          handleshowItems();
        }}
      >
        <span>
          {data.card.card.title}({data.card.card.itemCards.length})
        </span>
        <span>^</span>
      </div>
      {showItems && (
        <div>
          {data.card.card.itemCards.map((item) => {
            return (
              <div className="flex justify-between border-b-2">
                <div className="p-4 flex flex-col text-left">
                  <span className="font-semibold">{item.card.info.name}</span>
                  <span>
                    ₹{" "}
                    {item.card.info.price
                      ? item.card.info.price / 100
                      : item.card.info.defaultPrice / 100}
                  </span>
                  <p className="text-sm">{item.card.info.description}</p>
                </div>
                <div className="relative">
                  <img
                    className="w-40 my-3 p-2"
                    src={IMG_CDN_URL + item?.card?.info?.imageId}
                  ></img>
                  <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-green-600 px-4 py-1 rounded-md">
                    Add⁺
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Categories;
