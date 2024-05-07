import TopicCard from "@/components/feed/TopicCard";

export default function FourthColumn() {
    return (
        <div className="fourth-column flex flex-col justify-start space-y-8">
            <TopicCard
                featureimage="/images/fox.png"
                title="What does the 
                fox say?"
                takecount="1309"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
                featureimage="/images/pizza.png"
                title="Does Pineapple 
                belong on pizza?"
                takecount="6899"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
                featureimage="/images/water.png"
                title="Is water 
                considered wet?"
                takecount="5219"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
        </div>
    );
}