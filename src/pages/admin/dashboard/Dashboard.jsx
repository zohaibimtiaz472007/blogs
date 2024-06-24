import React, { useContext } from 'react';
import Layout from '../../../components/layout/Layout';
import MyContext from '../../../context/data/MyContext';
import { Button } from '@material-tailwind/react';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
    const context = useContext(MyContext);
    const { mode, getAllBlog, deleteBlogs } = context;

    const navigate = useNavigate();

    //* Logout Function 
    const logout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <Layout>
            <div className="py-10">
                <div className="flex flex-wrap justify-start items-center lg:justify-center gap-6 lg:gap-16 px-4 lg:px-0 mb-10 transition-transform duration-500 hover:scale-105">
                    <div className="left">
                        <img
                            className="w-40 h-40 object-cover rounded-full border-4 border-pink-600 p-1 shadow-lg transition-transform duration-500 hover:scale-110"
                            src={'https://cdn-icons-png.flaticon.com/128/3135/3135715.png'}
                            alt="profile"
                        />
                    </div>
                    <div className="right">
                        <div className="flex gap-4 mt-2">
                            <Link to={'/createblog'}>
                                <div className="mb-2">
                                    <Button
                                        style={{
                                            background: mode === 'dark' ? 'rgb(34, 202, 236)' : 'rgb(34, 34, 34)',
                                            color: mode === 'dark' ? 'black' : 'white',
                                            transition: 'all 0.3s ease-in-out'
                                        }}
                                        className="px-8 py-2 rounded-full shadow-lg transition-transform duration-500 hover:scale-110"
                                    >
                                        Create Blog
                                    </Button>
                                </div>
                            </Link>
                            <div className="mb-2">
                                <Button
                                    onClick={logout}
                                    style={{
                                        background: mode === 'dark' ? 'rgb(255, 105, 97)' : 'rgb(255, 0, 0)',
                                        color: mode === 'dark' ? 'black' : 'white',
                                        transition: 'all 0.3s ease-in-out'
                                    }}
                                    className="px-8 py-2 rounded-full shadow-lg transition-transform duration-500 hover:scale-110"
                                >
                                    Logout
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Line */}
                <hr className={`border-2 ${mode === 'dark' ? 'border-gray-600' : 'border-gray-200'} mb-10`} />

                {/* Table */}
                <div className="container mx-auto px-4 max-w-7xl my-5">
                    <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
                        <table className="w-full border-2 border-gray-200 dark:border-gray-700 shadow-md text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead
                                style={{ background: mode === 'dark' ? 'rgb(55, 65, 81)' : 'rgb(243, 244, 246)' }}
                                className="text-xs uppercase tracking-wider"
                            >
                                <tr>
                                    <th style={{ color: mode === 'dark' ? 'white' : 'gray-800' }} className="px-6 py-3">S.No</th>
                                    <th style={{ color: mode === 'dark' ? 'white' : 'gray-800' }} className="px-6 py-3">Thumbnail</th>
                                    <th style={{ color: mode === 'dark' ? 'white' : 'gray-800' }} className="px-6 py-3">Title</th>
                                    <th style={{ color: mode === 'dark' ? 'white' : 'gray-800' }} className="px-6 py-3">Category</th>
                                    <th style={{ color: mode === 'dark' ? 'white' : 'gray-800' }} className="px-6 py-3">Date</th>
                                    <th style={{ color: mode === 'dark' ? 'white' : 'gray-800' }} className="px-6 py-3">Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                {getAllBlog.length > 0 ? (
                                    getAllBlog.map((item, index) => {
                                        const { thumbnail, date, id } = item;
                                        return (
                                            <tr
                                                key={id}
                                                className="border-b transition-all duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800"
                                                style={{ background: mode === 'dark' ? 'rgb(17, 24, 39)' : 'white' }}
                                            >
                                                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                    {index + 1}.
                                                </td>
                                                <th style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4 font-medium">
                                                    <img className="w-16 rounded-lg shadow-md" src={thumbnail} alt="thumbnail" />
                                                </th>
                                                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                    {item.blogs.title}
                                                </td>
                                                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                    {item.blogs.category}
                                                </td>
                                                <td style={{ color: mode === 'dark' ? 'white' : 'black' }} className="px-6 py-4">
                                                    {date}
                                                </td>
                                                <td className="px-6 py-4">
                                                    <button
                                                        onClick={() => deleteBlogs(id)}
                                                        className="px-4 py-1 rounded-lg text-white font-bold bg-red-500 shadow-md transition-transform duration-500 hover:scale-110"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="6" className="text-center py-4" style={{ color: mode === 'dark' ? 'white' : 'black' }}>
                                            Not Found
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;
