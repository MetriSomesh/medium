import { Blog } from "../Hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./BlogCard";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-20 max-w-screen-2xl">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="pt-3 text-[#777c83]">
              Posted on 2nd December 2023
            </div>
            <div className="mt-6 text-[#374151]">{blog.content}</div>
          </div>

          <div className="col-span-4 text-[#1A1A1A] font-normal text-lg">
            Author
            <div className="flex mt-4">
              <div className="flex justify-center  flex-col pr-4">
                <Avatar size="big" name={blog.author.name} />
              </div>
              <div>
                <div className="text-2xl font-bold">{blog.author.name}</div>
                <div className="pt-2 text-[#777c83]">
                  Master of mirth, purveyour of puns, and the funniest person in
                  the kingdom
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
