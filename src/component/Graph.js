


const Graph = () => {

    return (
        <>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="flex flex-col bg-green-100 rounded-2xl shadow-xl">
                    <div class="flex flex-col justify-start p-4 text-left flex top-0 text-3xl bg-lime-500 rounded-t-lg">Thắng thua hôm nay</div>
                    <div class="flex flex-col justify-center p-10 text-center text-7xl bg-green-200 rounded-b-lg">0</div>
                </div>
                <div class="flex flex-col bg-green-100 rounded-2xl shadow-xl">
                    <div class="flex flex-col justify-start p-4 text-left flex top-0 text-3xl bg-blue-400 rounded-t-lg">Thắng thua hôm qua</div>
                    <div class="flex flex-col justify-center p-10 text-center text-7xl bg-blue-300 rounded-b-lg">0</div>
                </div>
                <div class="flex flex-col bg-green-100 rounded-2xl shadow-xl">
                    <div class="flex flex-col justify-start p-4 text-left flex top-0 text-3xl bg-yellow-300 rounded-t-lg">Tổng tiền chưa xử lý</div>
                    <div class="flex flex-col justify-center p-10 text-center text-7xl bg-yellow-200 rounded-b-lg">0</div>
                </div>
                <div class="flex flex-col bg-green-100 rounded-2xl shadow-xl">
                    <div class="flex flex-col justify-start p-4 text-left flex top-0 text-3xl bg-red-300 rounded-t-lg">Khách hàng trực tuyến</div>
                    <div class="flex flex-col justify-center p-10 text-center text-7xl bg-red-100 rounded-b-lg">24</div>
                </div>
            </div>
        </>
    );
};
export default Graph;