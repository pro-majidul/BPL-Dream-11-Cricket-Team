import PropTypes from 'prop-types';
const Banner = ({ handelClimebtn }) => {
    return (
        <div className="w-11/12 mx-auto  rounded-xl bg-cover bg-center bg-no-repeat md:py-20 py-5 md:my-5 my-3" style={{
            backgroundImage: " url('https://i.ibb.co.com/qFNvcPC/bg-shadow.png'),linear-gradient(to right, rgba(0,0,0,0.9),rgba(0,0,0,0.9))"
        }}>
            <div className="space-y-5">
                <img className="w-40 mx-auto" src={'https://i.ibb.co.com/y58nqLv/banner-main.png'} alt="" />
                <h3 className="text-white font-bold md:text-4xl  text-lg text-center">Assemble Your Ultimate Dream 11 Cricket Team</h3>
                <p className="text-center text-gray-500 font-interFont font-semibold text-xl">Beyond Boundaries Beyond Limits</p>
                <div className="flex items-center justify-center">
                    <a
                        onClick={() => handelClimebtn(72000)}
                        className="border-[#E7FE29] py-4 px-1 border bg-transparent rounded-xl ">
                        <span className="bg-[#E7FE29] p-3 border border-white rounded-xl hover:bg-gradient-to-r from-amber-200 to-orange-600 font-semibold ">Claim Free Credit</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
Banner.propTypes = {
    handelClimebtn: PropTypes.func.isRequired
}
export default Banner;