
const Footer = () => {
    return (
        <div className="bg-footerColor max-w-7xl mx-auto">
            <div className="flex items-center justify-center md:pt-72 pb-5 pt-40">
                <img src={'https://i.ibb.co.com/xC7K2mT/logo-footer.png'} alt="" />
            </div>
            <div className="w-11/12 mx-auto grid md:grid-cols-3 py-10 px-2 gap-10">
                <nav>
                    <h3 className="font-bold text-gray-50 text-lg">About Us</h3>
                    <p className="mt-3 text-gray-400">We are a passionate team dedicated to providing the best services to our customers.</p>
                </nav>
                <nav>
                    <h3 className="font-bold text-gray-50 text-lg">Quick Links</h3>
                    <ul className="list-disc mt-3 text-gray-400 ml-3">
                        <li><a href="#" className="cursor-pointer hover:underline">Service</a> </li>
                        <li><a href="#" className="cursor-pointer hover:underline">About</a></li>
                        <li><a href="#" className="cursor-pointer hover:underline">Home</a></li>
                        <li><a href="#" className="cursor-pointer hover:underline">Contact</a></li>
                    </ul>
                </nav>
                <nav>
                    <h3 className="font-bold text-gray-50 text-lg">SubsCribe </h3>
                    <p className="mt-3 text-gray-400">Subscribe to our newsletter for the latest updates.</p>
                    <div className=" mt-3">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className=" px-4 py-3 rounded-s-xl md:w-56 w-40 " />
                        <button className="px-3 py-3 rounded-e-xl bg-gradient-to-r from-amber-200 to-orange-600">Subscribe</button>
                    </div>
                </nav>
            </div>
            <hr />
            <h3 className="text-center py-5 text-gray-500 ">@2024 Your Company All Rights Reserved.</h3>
        </div>
    );
};

export default Footer;