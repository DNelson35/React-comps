import { useContext } from "react";
import NavContext from "../context/navigation";

function useNav(){
    return useContext(NavContext)
}

export default useNav