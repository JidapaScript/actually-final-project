import TopBar from "@/components/TopBar";
import Tag from "@/components/profile/Tag";
import MainTake from "@/components/take/MainTake";
import OppTake from "@/components/take/OppTake";

export default function Take() {
  return (
    <div className="flex flex-col justify-start min-w-full min-h-full">
      <TopBar/>
      <hr className="divider-line w-full h-px mt-3 bg-white"/>
      <div className="flex flex-row justify-between mx-9 my-6">
        <title className="heading flex flex-col justify-start space-y-1">
            <h3 className="category text-2xl text-gunsmoke-400 font-semibold">FOOD</h3>
            <h1 className="take-headline text-4xl text-white font-semibold">Does Pineapple belong on pizza?</h1>
        </title>
        <tags className="flex flex-row justify-end space-x-2">
            <Tag tagname="Trending" />
            <Tag tagname="Food" />
            <Tag tagname="Culture" />
        </tags>
      </div>
      <hr className="divider-line w-full h-px mt-3 bg-white"/>
      <div className="flex flex-row justify-between space-x-9 mx-9 mt-4 mb-10">
        <MainTake />
        <OppTake />
      </div>
    </div>
  );
}