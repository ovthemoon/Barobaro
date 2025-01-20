const Navigation = () => {
    const menuItems = [
      '상품 관리',
      '판매 관리',
      '정산 관리',
      '문의/리뷰 관리'
    ];
  
    return (
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item} className="p-2 hover:bg-gray-600 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    );
  };

export default Navigation;