import TopicCard from "@/components/feed/TopicCard";

export default function FifthColumn() {
    return (
        <div className="fifth-column flex flex-col justify-start space-y-8">
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
                featureimage="/images/bill.png"
                title="Illuminati: 
                real or fake?"
                takecount="634"
            />
            <hr className="divider-line-short w-[311px] h-px bg-white"/>
        </div>
    );
}