export default function TopicCard(props) {
    return (
      <div className="card flex flex-col justify-start space-y-5">
        <a href="#" className="card-img-top"> 
            <img className="thumbnail-img w-[311px] h-[175px]" src={props.featureimage} alt={props.title} /> 
        </a>
        <div className="card-body flex flex-col justify-start space-y-5">
          <a href="#" className="card-title">
            <h1 className="topic-title text-4xl text-pretty w-[311px] font-semibold text-white">{props.title}</h1>
          </a>
          <div className="card-engagement flex flex-row justify-start space-x-3.5">
            <div className="flex flex-row justify-start items-center space-x-2">
              <a href="#"> <img className="icon-take" src="/icons/chat_bubble.svg"/> </a>
              <h5 className="topic-takes text-sm font-normal">{props.takecount}</h5>
            </div>
            <a href="#"> <img className="icon-save" src="/icons/bookmark.svg"/> </a>
            <a href="#"> <img className="icon-share" src="/icons/ios_share.svg"/> </a>
          </div>
        </div>
      </div>
    );
}