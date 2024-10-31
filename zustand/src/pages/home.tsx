import CarData from '../data/car.json';
import { useRef } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';

const Home = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  const rowVirtualizer = useVirtualizer({
    count: CarData.length, // 가상화할 요소의 총 수
    getScrollElement: () => parentRef.current, // 스크롤할 수 있는 요소를 반환하는 함수
    estimateSize: () => 200, // 가상화할 요소의 크기(단위:px), 동적으로 계산가능
  });

  return (
    <div>
      <h1>차량 목록</h1>
      <div className="flex flex-col gap-4 min-h-96 overflow-auto max-h-[calc(100dvh-512px)]" ref={parentRef}>
        <div
          className="relative w-[400px]"
          style={{
            height: `${rowVirtualizer.getTotalSize()}px`,
          }}
        >
          {rowVirtualizer.getVirtualItems().map((virtualRow) => (
            <div
              key={virtualRow.key}
              className="absolute left-0 top-0 w-full"
              style={{
                height: `${virtualRow.size}px`,
                transform: `translateY(${virtualRow.start}px)`,
              }}
            >
              <h2>{CarData[virtualRow.index].name}</h2>
              <p>{CarData[virtualRow.index].price}</p>
              <img
                width={200}
                height={100}
                src={CarData[virtualRow.index].image}
                alt={CarData[virtualRow.index].name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
