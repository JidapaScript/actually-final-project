import TopBar from "@/components/headers/TopBar";
import Profile from "@/components/profile/Profile";

export default function Take() {
    return (
      <div className="flex-column justify-start min-w-full min-h-full">
        <TopBar />
        <hr className="divider-line w-full h-px mt-14 mb-10 bg-white"/>
        <section>
            <Profile />
            <div className="your-topics"></div>
        </section>
      </div>
    );
  }