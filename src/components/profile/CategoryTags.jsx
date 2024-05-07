import Tag from "@/components/profile/Tag";

export default function TopicCategories(){
    return (
        <div className="flex flex-row justify-end space-x-2">
            <Tag tagname="Favourite" />
            <Tag tagname="Food" />
            <Tag tagname="Science" />
            <Tag tagname="Tech" />
            <Tag tagname="Philosophy" />
            <Tag tagname="Ethics" />
            <Tag tagname="Global" />
        </div>
    )
}