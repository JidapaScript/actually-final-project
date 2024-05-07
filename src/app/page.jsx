import TopBar from "@/components/headers/TopBar";
import FollowingCategories from "@/components/home/FollowingCategories";
import Feed from "@/components/feed/Feed"
import SideBar from "@/components/home/SideBar";

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