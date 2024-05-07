import TopBar from "@/components/TopBar";
import FollowingCategories from "@/components/FollowingCategories";
import Feed from "@/components/Feed"
import SideBar from "@/components/SideBar";

export default function Home() {
    return (
      <div className="flex-column">
        <TopBar />
        <FollowingCategories />
        <hr className="divider-line w-full h-px mt-16 mb-42 bg-white"/>
        <div className="feed-content flex-row justify-between mx-36">
          <Feed />
          <SideBar />
        </div>
      </div>
    );
  }