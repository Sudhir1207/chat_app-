import { Users } from "lucide-react";

const SidebarSkeleton = () => {
  // Create 8 skeleton items
  const skeletonContacts = Array(15).fill(null);

  return (
    <div className="h-[80vh] w-20 lg:w-72 border-r-[1px] border-orange-600 flex flex-col">
      <span className="ml-2 text-sm lg:text-lg font-rkt mt-3">Loading...</span>
      <div className="flex p-4 gap-2 items-center">
        <Users className="size-5 text-orange-600 ml-2 lg:ml-0" />
        <span className="hidden lg:block ">Contacts</span>
      </div>
      <div className="border-t-[1px] border-orange-600"></div>

      <div className="overflow-y-auto w-full py-3 scrollbar-thin scrollbar-thumb-orange-600 scrollbar-track-gray-800">
        {skeletonContacts.map((_, idx) => (
          <div
            key={idx}
            className="p-3 flex gap-3 justify-center lg:justify-normal"
          >
            <div className="skeleton size-10 rounded-full"></div>
            <div className="hidden lg:block">
              <div className="skeleton h-4 w-32 mb-2"></div>
              <div className="skeleton h-3 w-16"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarSkeleton;
