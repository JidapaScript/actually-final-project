import TopicCard from "@/components/feed/TopicCard";

export default function SecondColumn() {
    return (
        <div className="second-column flex-column justify-start space-y-30">
            <TopicCard
                featureimage="/images/ghost.png"
                title="Are ghosts real?"
                takecount="2453"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
                featureimage="/images/earth.png"
                title="Is the earth flat?"
                takecount="9897"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
                featureimage="/images/moon.png"
                title="Moon landing: 
                real or fake?"
                takecount="7645"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
                featureimage="/images/homework.png"
                title="Should schools 
                eliminate 
                homework?"
                takecount="4278"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
                featureimage="/images/bill.png"
                title="Illuminati: 
                real or fake?"
                takecount="634"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
                featureimage="/images/uniform.png"
                title="School uniforms 
                yay or nay?"
                takecount="487"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
            <TopicCard
                featureimage="/images/pottery.png"
                title="Jack of all trades 
                or master of one?"
                takecount="199"
            />
        </div>
    );
}