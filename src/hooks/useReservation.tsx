import {useEffect, useState} from "react";
import Api from "../utils/Api.tsx";
import type {TReservation} from "../types/reservation.type.ts";

export default function useReservation() {

    const [reservation, setReservation] = useState<TReservation[]>([]);

    useEffect(() => {
        void getReservations();
    },[])

    const getReservations = async () => {
        try {
            const res = await Api.get("reservations");
            setReservation(res)
        }
        catch (e) {
            console.error(e);
        }
    }

    const createReservation = async (reservation: TReservation) => {
        try {
            const res = await Api.post("reservations", reservation);
            setReservation((prev) => [...prev, res]);
        }
        catch (e) {
            console.error(e);
        }
    }

    return {
        reservation,
        createReservation
    }
}