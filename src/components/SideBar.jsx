import TodaysTopic from "@/components/TodaysTopic";
import AddTopic from "@/components/AddTopic";

export default function SideBar() {
    return (
      <div className="side-bar flex-column justify-between space-y-24 w-1/4">
          <TodaysTopic />
          <AddTopic />
      </div>
    );
}