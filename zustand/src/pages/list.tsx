import CarData from '../data/car.json';

const List = () => {
  return (
    <div>
      <h1>차량 목록</h1>
      <div className="flex flex-col gap-4 min-h-96 overflow-auto max-h-[900px]">
        {CarData.map((car) => (
          <div key={car.id}>
            <h2>{car.name}</h2>
            <p>{car.price}</p>
            <img width={200} height={100} src={car.image} alt={car.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
