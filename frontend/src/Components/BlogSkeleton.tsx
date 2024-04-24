import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
  return (
    <div role="status" className=" animate-pulse">
      <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <div className="h-2 bg-gray-200 rounded-full"></div>.
          <div className="h-6 w-6 bg-gray-200 rounded-full "></div>
          <div className="h-2 bg-gray-200 rounded-full"></div>.
          <div className="h-2 bg-gray-200 rounded-full"></div>
          <div className="flex justify-center flex-col pl-1">
            <Circle />
          </div>
          <div className="font-light  pl-1 text-[#929292] text-sm flex justify-center flex-col">
            <div className="h-2 bg-gray-200 rounded-full"></div>
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">
          <div className="h-2 bg-gray-200 rounded-full"></div>
        </div>
        <div className="font-normal text-sm text-[#5E5E5E] pt-1">
          <div className="h-2 bg-gray-200 rounded-full"></div>
        </div>
        <div className="text-[#acacac] text-xs font-normal mt-4">
          <div className="h-2 bg-gray-200 rounded-full"></div>
        </div>
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};
