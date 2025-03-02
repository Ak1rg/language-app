'use client';
import CustomSelect from "../CustomSelect/CustomSelect";

const OrderFilter = () => {

    const OrderFiltersValues = ['A-Z','Z-A','Newly','Oldest']

    return (
        <CustomSelect filterValue={'orderFilter'} array={OrderFiltersValues}/>
    )
}

export default OrderFilter