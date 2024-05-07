export default function TakeCard(props) {
    return (
      <div className="card flex flex-col justify-start space-y-6">
        <div className="take-thumbnail flex flex-col justify-start space-y-5">
            <a href="#" className="card-img"> 
                <img className="thumbnail-img w-[311px] h-[175px]" src={props.featureimage} alt={props.title} /> 
            </a>
            <h3 className="text-3xl text-pretty text-gunsmoke-400 font-semibold">{props.title}</h3>
        </div>
        <div className="take-title flex flex-col justify-end justify-items-end space-y-24">
            <h1 className="text-4xl text-pretty text-white font-semibold"></h1>
            <div className="engagement flex flex-row justify-end space-x-3.5">
                <div className="like flex flex-row justify-between space-x-2">
                    <a href="#"> <img className="icon-like" src="thumb_up.svg"/> </a>
                    <h6 className="like-count text-sm text-white font-regular">{props.like}</h6>
                </div>
                <div className="dislike flex flex-row justify-between space-x-2">
                    <a href="#"> <img className="icon-dislike" src="thumb_down.svg"/> </a>
                    <h6 className="dislike-count text-sm text-white font-regular">{props.dislike}</h6>
                </div>
            </div>
        </div>
      </div>
    );
}