import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

// export const UserLoader = () => {
//   return (
//     <div className="flex bg-newchatbackground">
//       <Skeleton circle={true} className="bg-newsidebarcolor" />
//       <div className="flex flex-col">
//         <Skeleton className="bg-newsidebarcolor" />
//         <Skeleton className="bg-newsidebarcolor" />
//       </div>
//     </div>
//   );
// };

export const UserLoader = () => {
  return (
    // <SkeletonTheme className="circle h-1">
    <Skeleton
      enableAnimation={true}
      direction="ltr"
      baseColor="#15191C"
      highlightColor="#1D2127"
      className="circle h-14 ml-3 mr-4 rounded-xl"
    />
    // </SkeletonTheme>
  );
};

export const GroupLoader = () => {
  return (
    <Skeleton
      enableAnimation={true}
      direction="ltr"
      baseColor="#15191C"
      highlightColor="#1D2127"
      className=" h-14 group rounded-xl ml-2 mr-2"
    />
  );
};
export const MessageLoader = () => {
  return (
    <>
      <Skeleton
        enableAnimation={true}
        direction="ltr"
        baseColor="#15191C"
        highlightColor="#1D2127"
        className="user h-5 ml-2 rounded-xl"
      />
      <Skeleton
        enableAnimation={true}
        direction="ltr"
        baseColor="#15191C"
        highlightColor="#1D2127"
        className="message h-36 ml-2  rounded-xl"
      />
    </>
  );
};
