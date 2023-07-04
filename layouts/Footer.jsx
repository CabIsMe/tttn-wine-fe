export default function Footer(){
    return(
        <footer className="bg-slate-200 text-black mt-14">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
                        {/* <!-- Footer columns --> */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold">About Us</h4>
                            <ul>
                                <li><span className="cursor-pointer">Company</span></li>
                                <li><span className="cursor-pointer">Our Team</span></li>
                                <li><span className="cursor-pointer">Careers</span></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold">Products</h4>
                            <ul>
                                <li><span className="cursor-pointer">Wines</span></li>
                                <li><span className="cursor-pointer">Spirits</span></li>
                                <li><span className="cursor-pointer">Gifts</span></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold">Support</h4>
                            <ul>
                                <li><span className="cursor-pointer">Contact Us</span></li>
                                <li><span className="cursor-pointer">FAQs</span></li>
                                <li><span className="cursor-pointer">Shipping</span></li>
                            </ul>
                        </div>
                        <div className="space-y-4">
                            <h4 className="text-xl font-bold">Follow Us</h4>
                            <ul>
                                <li><span className="cursor-pointer">Facebook</span></li>
                                <li><span className="cursor-pointer">Twitter</span></li>
                                <li><span className="cursor-pointer">Instagram</span></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Additional footer elements --> */}
                </div>
                <div className="bg-slate-300 py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-sm">© 2023 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </footer>
    )
}