export default function TopBar(){
    return (
        <div className="flex flex-row justify-between w-full mx-5 my-3">
            <a href="/profile" className="profile-sm"> 
            <img className="profile-img-sm" src="/profiles/profile_sm.png" alt="profile" /> 
            </a>
            <a href="#" className="actually-mainpage"> 
            <img className="actually-logo" src="/logos/actually.svg" alt="actually" /> 
            </a>
            <a href="#" className="search-bar"> 
            <img className="search" src="/icons/search.svg" alt="search" /> 
            </a>
        </div>
    );
}