import React from "react";
import { HiOutlineBookmark } from "react-icons/hi";

function Article({ data ,updateBookMark, timer, setTimer}) {
  const { author, title, cover_image, author_image, read_time, publish_Date } =
    data;
  return (
    <>
      <div className="card rounded">
        <div className="overflow-hidden">
          <img src={cover_image} alt="" className="rounded max-w-full" />
        </div>
        <div className="p-5">
          <div className="author flex justify-between">
            <div className="flex gap-2 items-center">
              <div className="border rounded-full w-12 h-12">
                <img
                  src={author_image}
                  alt=""
                  className="max-w-full rounded-full"
                />
              </div>
              <div>
                <h2 className="font-bold">{author}</h2>
                <p className="text-zinc-400">{publish_Date}</p>
              </div>
            </div>
            <div className="readtime">
              <span className="mr-1">{read_time}</span>
              <span className="mr-1">Min Read</span>
              <span onClick={() => updateBookMark(data)} className=" cursor-pointer">
                <HiOutlineBookmark
                  className="inline"
                  
                />
              </span>
            </div>
          </div>

          {/* title */}
          <h1 className="text-4xl font-bold my-2 sm:text-xl">{title}</h1>
          <button className="underline underline-offset-2 text-sky-600" onClick={() => setTimer(timer + read_time)}>
            Mark as read
          </button>
        </div>
      </div>
    </>
  );
}

export default Article;
