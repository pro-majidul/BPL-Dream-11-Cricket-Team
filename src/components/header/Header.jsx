import PropTypes from 'prop-types';
const Header = ({ amount }) => {
    return (
        <div className="w-11/12 mx-auto py-5 relative  my-3 ">

            <div className="navbar  flex">
                <div className="flex-1">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Fixture</a></li>
                            <li><a>Teams</a></li>
                            <li><a>Schedules</a></li>

                        </ul>
                    </div>
                    <img src={'https://i.ibb.co.com/pX6CQz8/logo.png'} alt="" />
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-5">
                        <li className="mr-5 font-normal text-gray-600 text-lg"><a>Home</a></li>
                        <li className="mr-5 font-normal text-gray-600 text-lg"><a>Fixture</a></li>
                        <li className="mr-5 font-normal text-gray-600 text-lg"><a>Teams</a></li>
                        <li className="mr-5 font-normal text-gray-600 text-lg"><a>Schedules</a></li>

                    </ul>
                </div>
                <div className="">
                    <a className=" flex  rounded-xl items-center border md:gap-2 md:px-2 px-1 md:py-1 bg-transparent border-gray-300">
                        <span className="font-bold text-black">{amount} Coin</span>
                        <img className="h-8 md:h-12" src={'https://img.icons8.com/?size=48&id=sPBQkuep9vDA&format=png'} alt="" />
                    </a>
                </div>
            </div>

        </div>
    );
};

Header.propTypes = {
    amount: PropTypes.number.isRequired
}
export default Header;