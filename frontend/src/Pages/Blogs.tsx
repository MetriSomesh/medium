import { Appbar } from "../Components/Appbar";
import { BlogCard } from "../Components/BlogCard";

export const Blogs = () => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center ">
        <div className=" max-w-xl">
          <BlogCard
            authorName={"Somesh"}
            title={
              "How an Ugly Single-Page Website Makes $5000 a Month with Affiliate Marketing"
            }
            content={
              "No need to create a fancy and modern website with hundereds of pages to make money online. Making money online is the dream for man..."
            }
            publishedDate={"2nd Feb 2024"}
          />
          <BlogCard
            authorName={"Somesh"}
            title={
              "How an Ugly Single-Page Website Makes $5000 a Month with Affiliate Marketing"
            }
            content={
              "No need to create a fancy and modern website with hundereds of pages to make money online. Making money online is the dream for man..."
            }
            publishedDate={"2nd Feb 2024"}
          />
          <BlogCard
            authorName={"Somesh"}
            title={
              "How an Ugly Single-Page Website Makes $5000 a Month with Affiliate Marketing"
            }
            content={
              "No need to create a fancy and modern website with hundereds of pages to make money online. Making money online is the dream for man..."
            }
            publishedDate={"2nd Feb 2024"}
          />
        </div>
      </div>
    </div>
  );
};
