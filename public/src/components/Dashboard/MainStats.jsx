const MainStats = () => {
    return (
        <section className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">메인</h2>
            <div className="grid grid-cols-2 gap-4">
                <OrderStats />
                <SettlementStats />
            </div>
        </section>
    );
};

export default MainStats;