import { MeasurementApi } from "@/libs/meaurementApi";
import MeaurementsTable from "./_components/MeaurementsTable";
import { MeaurementTablePayloadType } from "@/types";
const getAllMeaurements = async () => {
    let itemsPerPage = 10;
    let meaurements: MeaurementTablePayloadType[] = [];
    let totalPages = 0;

    try {
        meaurements = await MeasurementApi.getAllMeaurements();
        totalPages = Math.ceil(meaurements.length / itemsPerPage);
    } catch (error) {
        console.error('Failed to fetch measurements:', error);
    }

    return { meaurements, totalPages };
};

const Meaurement = async () => {
    const { meaurements , totalPages} = await getAllMeaurements()

    return (
        <section className="w-full p-6">
            <h1 className="text-3xl font-bold mb-4 text-gray-800">Measurements Table</h1>

            <MeaurementsTable meaurements={meaurements} totalPages={totalPages}/>

        </section>
    );
};

export default Meaurement;
