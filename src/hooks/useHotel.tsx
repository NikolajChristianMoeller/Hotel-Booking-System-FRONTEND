import {useEffect, useState} from "react";
import Api from "../utils/Api.tsx";
import type {THotel} from "../types/hotel.type.ts";

export default function useHotel() {

    const [hotel, setHotel] = useState<THotel[]>([]);

    useEffect(() => {
        void getHotels();
    },[])

    const getHotels = async () => {
        try {
            const res = await Api.get("hotels");
            setHotel(res)
        }
        catch (e) {
            console.error(e);
        }
    }

    const createHotel = async (hotel: THotel) => {
        try {
            const res = await Api.post("hotels", hotel);
            setHotel((prev) => [...prev, res]);
        }
        catch (e) {
            console.error(e);
        }
    }

    const updateHotel = async (
        updatedHotel: THotel,
        id: number
    ): Promise<void> => {
        try {
            const res = await Api.put("hotels", id, updatedHotel);
            setHotel((prev) => {
                if (prev) {
                    const index = prev.findIndex((hotel) => hotel.id === id);
                    const newHotel = [...prev];
                    newHotel[index] = res;
                    return newHotel;
                }
                return prev;
            });
        } catch (e) {
            console.error(e);
        }
    };

    const deleteHotel = async (id: number): Promise<void> => {
        try {
            await Api.delete("hotels", id);
            setHotel((prev) => (prev ? prev.filter((hotel) => hotel.id !== id) : []));
        } catch (e) {
            console.error(e);
        }
    };

    return {
        hotel,
        createHotel,
        updateHotel,
        deleteHotel
    }
}