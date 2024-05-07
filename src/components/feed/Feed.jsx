import FirstColumn from "@/components/feed/FirstColumn";
import SecondColumn from "@/components/feed/SecondColumn";
import ThirdColumn from "@/components/feed/ThirdColumn";

export default function AddTopic() {
    return (
      <div className="feed-topics flex flex-row justify-between space-x-6">
            <FirstColumn />
            <SecondColumn />
            <ThirdColumn />
      </div>
    );
}