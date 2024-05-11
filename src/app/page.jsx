import TopBar from "@/components/TopBar";
import FollowingCategories from "@/components/home/FollowingCategories";
import Feed from "@/components/feed/Feed"
import SideBar from "@/components/home/SideBar";

export default function Home() {
    return (
      <div className="home flex flex-col">
        <TopBar />
        <FollowingCategories />
        <hr className="divider-line w-full h-px mt-4 mb-10 bg-white"/>
        <div className="feed-content flex flex-row justify-between space-x-16 mx-9">
          <Feed />
          <SideBar />
        </div>
      </div>
    );
  }