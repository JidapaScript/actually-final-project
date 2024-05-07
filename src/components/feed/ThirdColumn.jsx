import TopicCard from "@/components/feed/TopicCard";

export default function ThirdColumn() {
    return (
        <div className="third-column flex-column justify-start space-y-30">
              <TopicCard
                featureimage="/images/robot.png"
                title="Can humans fall 
                in love with AI?"
                takecount="1623"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/protest.png"
                title="Should we 
                abolish the death 
                penalty?"
                takecount="876"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/socialmedia.png"
                title="Social media: 
                good or bad?"
                takecount="231"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/human.png"
                title="Is humankind 
                good or evil?"
                takecount="378"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/heaven.png"
                title="Does god exist?"
                takecount="3769"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/paint.png"
                title="Should we 
                separate the art 
                from the artist?"
                takecount="266"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/ufo.png"
                title="Does extraterrestrial life exist?"
                takecount="5997"
              />
        </div>
    )
}