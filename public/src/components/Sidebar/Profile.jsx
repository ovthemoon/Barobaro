const Profile = () => {
    return (
        <div className="p-4 flex flex-col items-center border-b border-gray-600">
            <div className="w-24 h-24 bg-gray-400 rounded-full mb-4"></div>
            <h2 className="text-xl font-bold mb-2">화정 팜</h2>
            <button className="w-full bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-500 transition-colors">
                프로필 수정
            </button>
        </div>
    );
};

export default Profile;