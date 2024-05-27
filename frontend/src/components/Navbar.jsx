import { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav className="flex px-10 py-5">
                    <ul className='flex space-x-6'>
                        <li></li>

                        <li><a className="group text-white transition-all duration-300 ease-in-out" href="#">
                            <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1">
                                Latest episodes
                            </span>
                        </a></li>
                        <li><a className="group text-white transition-all duration-300 ease-in-out" href="#">
                            <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1">
                                Shows
                            </span>
                        </a></li>
                        <li><a className="group text-white transition-all duration-300 ease-in-out" href="#">
                            <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1">
                                Guests
                            </span>
                        </a></li>
                        <li><a className="group text-white transition-all duration-300 ease-in-out" href="#">
                            <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1">
                                About
                            </span>
                        </a></li>
                        <li><a className="group text-white transition-all duration-300 ease-in-out" href="#">
                            <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out py-1">
                                Contact
                            </span>
                        </a></li>
                        
                    </ul>



                </nav>




            </>
        )
    }
}
