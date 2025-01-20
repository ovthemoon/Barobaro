const OrderStats = () => {
    return (
        <div>
            <div className="mb-4">
                <h3 className="font-bold mb-2">주문/배송</h3>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span>결제완료</span>
                        <span>0건</span>
                    </div>
                    <div className="flex justify-between">
                        <span>상품준비</span>
                        <span>2건</span>
                    </div>
                    <div className="flex justify-between">
                        <span>배송준비</span>
                        <span>2건</span>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="font-bold mb-2">배송 중</h3>
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span>배송중</span>
                        <span>3건</span>
                    </div>
                    <div className="flex justify-between">
                        <span>배송완료</span>
                        <span>5건</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderStats;