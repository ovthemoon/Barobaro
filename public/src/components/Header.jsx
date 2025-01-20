const Header = () => {
    return (
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <span className="text-2xl font-bold">로고</span>
        </div>
        <div className="flex items-center">
          <span>seungmoonchoi71@gmail.com</span>
          <button className="ml-4">로그아웃</button>
        </div>
      </header>
    );
  };

  export default Header;