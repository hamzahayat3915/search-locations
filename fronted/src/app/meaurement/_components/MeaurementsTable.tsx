'use client'
import { useState } from "react";
import Pagination from "./Pagination"
import { MeaurementsTableProps } from "@/types";
const MeaurementsTable: React.FC<MeaurementsTableProps> = ({ meaurements, totalPages }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    let startIdx = (currentPage - 1) * itemsPerPage;
    let endIdx = startIdx + itemsPerPage;
    let currentItems = meaurements.slice(startIdx, endIdx);

    return (
        <>
            <div className="relative overflow-x-auto" style={{ height: '500px', minHeight: '500px', overflowY: 'auto' }}>
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200">
                        <tr>
                       
                            <th scope="col" className="px-6 py-3">Address</th>
                            <th scope="col" className="px-6 py-3">Latitude</th>
                            <th scope="col" className="px-6 py-3">Longitude</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white" style={{ height: 'calc(100% - 44px)' }}>
                        {currentItems.map((item: any) => (
                            <tr key={item._id} className="bg-gray-50 border-b hover:bg-gray-200">
                                
                                <td className="px-6 py-3">{item.address}</td>
                                <td className="px-6 py-3">{item.mapCenter.lat}</td>
                                <td className="px-6 py-3">{item.mapCenter.lng}</td>
                            </tr>
                        ))}
                        {currentItems.length < itemsPerPage && (
                            Array.from({ length: itemsPerPage - currentItems.length }).map((_, idx) => (
                                <tr key={idx} className="bg-white" style={{ height: '44px' }}>
                                    <td className="px-6 py-3">&nbsp;</td>
                                    <td className="px-6 py-3">&nbsp;</td>
                                    <td className="px-6 py-3">&nbsp;</td>
                                    <td className="px-6 py-3">&nbsp;</td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </>
    )
}

export default MeaurementsTable;
