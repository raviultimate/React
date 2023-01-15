export const CardShimmer = () => {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    /* <div classNameName="shimmer-cards">
      <div classNameName="skeleton-card">
        <img src="https://htmlcolorcodes.com/assets/images/colors/light-gray-color-solid-background-1920x1080.png" />
        <h2></h2>
        <h3></h3>
        <h4></h4>
      </div>
    </div>*/
    <div className="shimmer-cards">
      {Array(10)
        .fill("")
        .map((element, index) => {
          return (
            <div className="card-shimmer" key={index}>
              <div className="shimmerBG media"></div>
              <div className="p-32">
                <div className="shimmerBG title-line"></div>
                <div className="shimmerBG content-line"></div>
                <div className="shimmerBG content-line end"></div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
