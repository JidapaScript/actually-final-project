import FourthColumn from "@/components/profile/FourthColumn";
import FifthColumn from "@/components/profile/FifthColumn";
import SixthColumn from "@/components/profile/SixthColumn";

export default function ProfileTopics() {
    return (
      <div className="feed-topics flex justify-between w-3/4 space-x-6">
            <FourthColumn />
            <FifthColumn />
            <SixthColumn />
      </div>
    );
}