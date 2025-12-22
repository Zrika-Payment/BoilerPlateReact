import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

 function UserDetails() {
    //Add User Details that can be edited and updated

    const userDetails = useFetch('https://dummyjson.com/users', {});
    
    return (
        <div className="overflow-auto rounded-lg border-gray-200 shadow-sm">
        <table className="min-w-full border-collapse bg-white text-sm text-gray-700">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xl">
                <tr>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>username</th>
                    <th>email</th>
                    <th>bloodGroup</th>
                    <th>birthDate</th>
                    <th>role</th>
                </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
                {
                    userDetails?.data?.users?.map((data, index) =>
                        <>
                            <tr key={index} className="hover:bg-gray-50 transition duration-150">
                                <td className="px-4 py-3 font-medium">{data.firstName}</td>
                                <td className="px-4 py-3">{data.lastName}</td>
                                <td className="px-4 py-3">{data.username}</td>
                                <td className="px-4 py-3">{data.email}</td>
                                <td className="px-4 py-3">{data.bloodGroup}</td>
                                <td className="px-4 py-3">{data.birthDate}</td>
                                <td className="px-4 py-3">{data.role}</td>
                            </tr>
                        </>


                    )
                }

            </tbody>

        </table>
        </div>
    )


}

export default UserDetails;