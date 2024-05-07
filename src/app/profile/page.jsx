import TopBar from "@/components/TopBar";
import Profile from "@/components/profile/Profile";
import YourTopics from "@/components/profile/YourTopics";

export default function Take() {
    return (
      <div className="flex flex-col justify-start min-w-full min-h-full">
        <TopBar />
        <hr className="divider-line w-full h-px mt-14 mb-10 bg-white"/>
        <section className="flex flex-row justify-start space-x-14 mx-9 mt-10">
            <Profile />
            <YourTopics />
        </section>
      </div>
    );
  }