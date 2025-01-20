const ProductList = () => {
    return (
        <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">상품 목록</h2>
            <div className="border p-4 rounded">
                <div className="flex items-center space-x-4">
                    <div className="w-24 h-24 bg-gray-200"></div>
                    <div>
                        <h3 className="font-bold">고추 1kg</h3>
                        <div className="flex space-x-2 mt-2">
                            <button className="px-3 py-1 bg-gray-200 rounded">정보 수정</button>
                            <button className="px-3 py-1 bg-gray-200 rounded">품절 처리</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductList;