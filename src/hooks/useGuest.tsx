import {useEffect, useState} from "react";
import Api from "../utils/Api.tsx";
import type {TGuest} from "../types/guest.type.ts";

export default function useGuest() {

    const [guest, setGuest] = useState<TGuest[]>([]);

    useEffect(() => {
        void getGuests();
    },[])

    const getGuests = async () => {
        try {
            const res = await Api.get("guests");
            setGuest(res)
        }
        catch (e) {
            console.error(e);
        }
    }

    const createGuest = async (guest: TGuest) => {
        try {
            const res = await Api.post("guests", guest);
            setGuest((prev) => [...prev, res]);
        }
        catch (e) {
            console.error(e);
        }
    }

    return {
        guest,
        createGuest
    }
}