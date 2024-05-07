export default function Tag(props){
    return (
        <a href="#" className="tag">
            <button className="px-3.5 py-6 rounded-full bg-transparent border-white border-2 text-white text-sm font-semibold">
                {props.tagname}
            </button>
        </a>
    );
}