import { Link } from "react-router-dom";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
  id:string
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
  id
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
    
    <div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
      <div className="flex">
        <div className="flex justify-center flex-col pr-2">
          <Avatar size={"small"} name={authorName} />
        </div>
        <div className="font-normal text-sm flex justify-center flex-col">
          {authorName}
        </div>
        .
        <div className="flex justify-center flex-col pl-1">
          <Circle />
        </div>
        <div className="font-light  pl-1 text-[#929292] text-sm flex justify-center flex-col">
          {publishedDate}
        </div>
      </div>
      <div className="text-xl font-semibold pt-2">{title}</div>
      <div className="font-normal text-sm text-[#5E5E5E] pt-1">
        {content.slice(0, 100) + "..."}
      </div>
      <div className="text-[#acacac] text-xs font-normal mt-4">{`${Math.ceil(
        content.length / 100
      )} min read`}</div>
    </div>
    </Link>
  );
};

export function Circle() {
  return <div className=" h-1 w-1 rounded-full bg-slate-400"></div>;
}

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: "small" | "big";
}) {
  return (
    <div
      className={`relative inline-flex items-center justify-center  overflow-hidden bg-gray-600 rounded-full ${
        size === "small" ? "w-6 h-6" : "w-10 h-10"
      }`}
    >
      <span
        className={`${
          size === "small" ? "text-xs" : "text-md"
        } font-medium text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}
