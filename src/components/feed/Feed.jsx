import FirstColumn from "@/components/feed/FirstColumn";
import SecondColumn from "@/components/feed/SecondColumn";
import ThirdColumn from "@/components/feed/ThirdColumn";

export default function Feed() {
    return (
      <div className="feed-topics flex justify-between w-3/4 space-x-6">
            <FirstColumn />
            <SecondColumn />
            <ThirdColumn />
      </div>
    );
}