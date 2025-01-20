

const Dashboard = () => {
    return (
        <Layout>
            <div className="grid grid-cols-1 gap-6">
                <MainStats />
                <section className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-bold mb-4">금일 정산 예상</h2>
                    <div className="text-3xl font-bold">$15,000,000</div>
                </section>
                <SalesChart />
                <ProductList />
            </div>
        </Layout>
    );
};

export default Dashboard;