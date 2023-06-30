function Card() {
    return (
      <div className="max-w-sm m-2 drop-shadow-md">
        <img
          className="w-full object-cover rounded-lg"
          src="/images/card.png"
          alt="Sunset in the mountains"
        />
        <div className="px-6 py-4 mx-2 bg-cardGreen rounded-b">
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
            quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
            nihil.
          </p>
        </div>
      </div>
    );
  }
  
  export default Card;
  