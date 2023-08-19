import { useEffect, useState } from "react";
import Shop from "./Shop";

const ShopByGender = () => {
    const [gender, setGender] = useState('');
    return(
        <Shop />
    )
}

export default ShopByGender;