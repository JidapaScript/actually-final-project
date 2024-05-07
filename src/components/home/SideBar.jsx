import TodaysTopic from "@/components/home/TodaysTopic";
import AddTopic from "@/components/home/AddTopic";

export default function SideBar() {
    return (
      <div className="side-bar flex flex-col justify-between w-1/4">
          <TodaysTopic />
          <AddTopic />
      </div>
    );
}