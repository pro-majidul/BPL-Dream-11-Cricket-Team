
const Newslatter = () => {
    return (
        <div className="w-11/12 mx-auto md:-bottom-48 -bottom-28 relative z-50 p-3 rounded-xl border border-white">
            <div className=" rounded-xl bg-cover bg-center border  bg-no-repeat py-10 md:py-20" style={{
                backgroundImage: " url('https://i.ibb.co.com/qFNvcPC/bg-shadow.png'),linear-gradient(to right, rgba(255,255,255,1),rgba(255,255,255,1))",
                zIndex: 999,
            }}>
                <div className="space-y-5">
                    <h3 className="text-black font-bold md:text-4xl  text-lg text-center">Subscribe to our Newsletter</h3>
                    <p className="text-center text-gray-500 font-interFont font-semibold text-xl">Get the latest updates and news right in your inbox!</p>
                    <div className="flex items-center justify-center">
                    <div className=" gap-5">
                            <input
                                type="text"
                                placeholder="Enter your mail"
                                className="input input-bordered join-item mt-2" />
                            <button className="bg-gradient-to-r ml-2 mt-2 from-amber-200 to-orange-600 px-2 md:px-5 py-3 rounded-xl border font-bold join-item">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newslatter;