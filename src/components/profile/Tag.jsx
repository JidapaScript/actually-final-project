export default function Tag(props){
    return (
        <a href="#" className="tag">
            <button className="px-6 py-3.5 rounded-full bg-transparent border-white border text-white text-sm font-semibold">
                {props.tagname}
            </button>
        </a>
    );
}