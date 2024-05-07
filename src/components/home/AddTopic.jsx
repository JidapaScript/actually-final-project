export default function AddTopic() {
    return (
      <div className="todays-topic flex flex-col justify-start space-y-9 p-5 fixed bg-transparent border-white border-2">
        <h5 className="text-white text-base font-semibold">What's on your mind?</h5>
        <img className="profile-friends px-3" src="/profiles/friends.png" alt="Your Friends"/>
        <button className="add-your flex flex-row justify-center px-3 py-1 mt-6 bg-white">
            <img className="icon-add" src="/icons/add.svg" alt="Add Your Topic"/>
            <h5 className="text-black text-base font-medium">ADD YOUR TOPIC</h5>
        </button>  
      </div>
    );
}