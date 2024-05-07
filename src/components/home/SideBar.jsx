import TodaysTopic from "@/components/home/TodaysTopic";
import AddTopic from "@/components/home/AddTopic";

export default function SideBar() {
    return (
      <div className="side-bar flex flex-column justify-between space-y-6 w-1/4">
          <TodaysTopic />
          <AddTopic />
      </div>
    );
}