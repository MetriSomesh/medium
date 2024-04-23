interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}

export const BlogCard = ({
  authorName,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <div className="p-4 border-b border-slate-200 pb-4">
      <div className="flex">
        <div className="flex justify-center flex-col pr-2">
          <Avatar size={6} name={authorName} />
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
  );
};

function Circle() {
  return <div className=" h-1 w-1 rounded-full bg-slate-400"></div>;
}

export function Avatar({ name, size = 4 }: { name: string; size?: number }) {
  return (
    <div
      className={`relative inline-flex items-center justify-center w-${size} h-${size} overflow-hidden bg-gray-600 rounded-full`}
    >
      <span className=" text-xs font-medium text-gray-600 dark:text-gray-300">
        {name[0]}
      </span>
    </div>
  );
}
