export default function Profile(){
    return (
        <div className="flex flex-col justify-start space-y-9 items-center w-1/4 p-6 bg-transparent border-white border">
            <div className="profile-heading flex flex-row justify-between w-[265px]">
                <h5 className="text-base text-white font-semibold">Profile</h5>
                <img className="profile-settings" src="/icons/settings.svg"/>
            </div>
            <div className="profile-name-img flex flex-col justify-between space-y-6">
                <img className="profile-img-lg" src="/profiles/profile_lg.png"/>
                <h3 className="text-2xl text-white font-semibold">Tom Jerry</h3>
            </div>
            <div className="profile-content flex flex-col justify-start space-y-3.5">
                <div className="followers flex flex-row justify-start space-x-4">
                    <h5 className="text-base text-white font-regular">36</h5>
                    <h5 className="text-base text-white font-regular">Followers</h5>
                </div>
                <div className="following flex flex-row justify-start space-x-4">
                    <h5 className="text-base text-white font-regular">117</h5>
                    <h5 className="text-base text-white font-regular">Following</h5>
                </div>
                <div className="topics flex flex-row justify-start space-x-5">
                    <h5 className="text-base text-white font-regular">11</h5>
                    <h5 className="text-base text-white font-regular">Topics</h5>
                </div>
                <div className="takes flex flex-row justify-start space-x-5">
                    <h5 className="text-base text-white font-regular">27</h5>
                    <h5 className="text-base text-white font-regular">Takes</h5>
                </div>
                <div className="saves flex flex-row justify-start space-x-5">
                    <h5 className="text-base text-white font-regular">92</h5>
                    <h5 className="text-base text-white font-regular">Saves</h5>
                </div>
            </div>
        </div>
    );
}