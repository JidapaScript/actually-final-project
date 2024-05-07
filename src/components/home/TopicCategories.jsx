export default function TopicCategories(props){
    return (
        <a href="#" className="category">
            <button className="text-gunsmoke-400 text-sm font-normal">
                {props.categoryname}
            </button>
        </a>
    );
}