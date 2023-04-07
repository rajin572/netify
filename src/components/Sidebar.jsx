import React from "react";

function Sidebar({ bookMark, timer }) {
  return (
    <div className="self-start md:col-span-2 col-span-1">
      <div className="p-5 rounded border-2 border-[#6047EC] bg-[#6047EC1A] mb-5">
        <h1 className=" text-xl text-center font-bold text-[#6047EC]">
          Spent time on read : {timer} min
        </h1>
      </div>
      <div className=" bg-[#1111110D] p-6 rounded">
        <h1 className="font-bold text-xl mb-5">
          Bookmarked Blogs : {bookMark.length}
        </h1>
        <div>
          {bookMark.length === 0 ? (
            <p className="mb-2 text-[#6047EC]">You haven't added</p>
          ) : (
            <div>
              {bookMark.map((data) => (
                <div
                  key={data.id}
                  className="w-full p-4 mb-2 text-[#6047EC] bg-white border-white rounded border"
                >
                  {data.title}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
