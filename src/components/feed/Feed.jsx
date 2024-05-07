import FirstColumn from "@/components/FirstColumn";
import SecondColumn from "@/components/SecondColumn";
import ThirdColumn from "@/components/ThirdColumn";

export default function AddTopic() {
    return (
      <div className="feed-topics flex-row justify-between space-x-24">
            <FirstColumn />
            <SecondColumn />
            <ThirdColumn />
      </div>
    );
}