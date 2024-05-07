import TopicCard from "@/components/feed/TopicCard";

export default function SixthColumn() {
    return (
        <div className="sixth-column flex flex-col justify-start space-y-8">
              <TopicCard
                featureimage="/images/protest.png"
                title="Should we 
                abolish the death 
                penalty?"
                takecount="876"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/heaven.png"
                title="Does god exist?"
                takecount="3769"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
        </div>
    )
}