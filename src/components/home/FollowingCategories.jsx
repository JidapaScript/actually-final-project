import TopicCategories from "./TopicCategories";

export default function FollowingCategories() {
    return (
        <div className="category-follow flex flex-row justify-center space-x-10">
            <TopicCategories categoryname="For You"/>
            <TopicCategories categoryname="Following"/>
            <TopicCategories categoryname="Global"/>
            <TopicCategories categoryname="Politics"/>
            <TopicCategories categoryname="Ethics"/>
            <TopicCategories categoryname="Food"/>
        </div>
    );
}