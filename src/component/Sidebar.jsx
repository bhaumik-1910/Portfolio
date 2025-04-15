import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

function Sidebar({ children, pages }) {
    const [isMenuOpen, setIsMenuOpen] = useState(window.screen.width > 640 ? true : false);

    return (
        <>
            <div className="flex">
                <button type='button' onClick={() => setIsMenuOpen(!isMenuOpen)} className='sm:hidden max-sm:fixed z-[10000]'>
                    {
                        <FontAwesomeIcon icon={isMenuOpen ? faClose : faBars} className="m-4 text-xl cursor-pointer" />
                    }
                </button>
                {
                    isMenuOpen && (
                        <div>
                            <div className="bg-zinc-100 fixed h-full w-60 max-sm:w-[100%] max-lg:w-40 max-sm:text-nowrap flex flex-col items-center animate__animated animate__fadeInLeft max-sm:p-20 z-10 pt-20 max-sm:fixed max-sm:justify-center">
                                <img
                                    src="/images/img.png"
                                    alt="User Profile"
                                    className="rounded-full h-[140px] max-sm:h-[140px] max-lg:h-[70px] mt-5"
                                />
                                <h1 className="PlayfairDisplay-Bold text-2xl font-bold max-sm:text-[14px] max-sm:leading-4">Bhaumik Kothiya</h1>
                                <h3 className="text-sm max-sm:text-xs d-flex justify-center items-center md:leading-loose">React Developer</h3>
                                <div className="flex flex-col justify-center items-center sm:mt-4">
                                    {pages.length === 0 ? (
                                        <p className="text-gray-500">No pages available.</p>
                                    ) : (
                                        pages.map((data) => (
                                            <div key={data.id} className="flex flex-col justify-center items-center">
                                                <NavLink to={data.path} onClick={() => setIsMenuOpen(window.screen.width > 640 ? true : false)} >
                                                    <h2 className="mt-5 text-xs hover:underline underline-offset-4 text-gray-600 font-semibold active:text-sky-600">
                                                        {data.page}
                                                    </h2>
                                                </NavLink>
                                            </div>
                                        ))
                                    )}
                                </div>
                            </div>
                        </div>
                    )
                }

                <div className="flex-1 justify-center items-center h-screen max-sm:justify-center max-sm:relative w-[100%] sm:ps-56">{children}</div>

            </div>

        </>
    );
}

// PropTypes validation
Sidebar.propTypes = {
    children: PropTypes.node.isRequired,
    pages: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            path: PropTypes.string.isRequired,
            page: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Sidebar;

