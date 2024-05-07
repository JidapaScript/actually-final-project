import Tag from "@/components/profile/Tag";
import ProfileTopics from "@/components/profile/ProfileTopics";

export default function YourTopics(){
    return (
        <div className="flex flex-col justify-start space-y-6">
            <div className="your-heading flex flex-row justify-between">
                <div className="your-topic flex flex-row justify-start space-x-1">
                    <h5 className="text-base text-white font-semibold">Your Topics</h5>
                    <a href="#"> <img className="icon-down" src="/icons/arrow_down.svg"/> </a>
                </div>
                <tags className="flex flex-row justify-end space-x-2">
                    <Tag tagname="Favourite" />
                    <Tag tagname="Food" />
                    <Tag tagname="Science" />
                    <Tag tagname="Tech" />
                    <Tag tagname="Philosophy" />
                    <Tag tagname="Ethics" />
                    <Tag tagname="Global" />
                </tags>
            </div>
            <ProfileTopics />
        </div>
    );
}