import TodaysTopic from "@/components/home/TodaysTopic";
import AddTopic from "@/components/home/AddTopic";

export default function SideBar() {
    return (
      <div className="side-bar flex flex-col fixed justify-start w-1/4 mr-8 mb-9">
          <TodaysTopic />
          <AddTopic />
      </div>
    );
}