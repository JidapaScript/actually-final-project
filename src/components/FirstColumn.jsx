import TopicCard from "@/components/TopicCard";

export default function FirstColumn() {
    return (
        <div className="first-column flex-column justify-start space-y-30">
            <TopicCard
                featureimage="/images/pets.png"
                title="Are cats or dogs 
                the better pet?"
                takecount="1251"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
                featureimage="/images/hotdog.png"
                title="Are hot dogs, 
                sandwiches?"
                takecount="328"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
                featureimage="/images/fox.png"
                title="What does the 
                fox say?"
                takecount="1309"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
                featureimage="/images/coffeeortea.png"
                title="Coffee or tea, 
                which is the 
                better drink?"
                takecount="142"
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
            <TopicCard
                featureimage="/images/genz.png"
                title="Gen Z vs. Gen 
                alpha, who wins?"
                takecount="7884"
            />
        </div>
    );
}