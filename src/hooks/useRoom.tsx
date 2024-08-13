import {useEffect, useState} from "react";
import Api from "../utils/Api.tsx";
import type {TRoom} from "../types/room.type.ts";

export default function useRoom() {

    const [room, setRoom] = useState<TRoom[]>([]);

    useEffect(() => {
        void getRooms();
    },[])

    const getRooms = async () => {
        try {
            const res = await Api.get("rooms");
            setRoom(res)
        }
        catch (e) {
            console.error(e);
        }
    }

    const createRoom = async (room: TRoom) => {
        try {
            const res = await Api.post("rooms", room);
            console.log(res); // Log the response to see its content
            setRoom((prev) => [...prev, res]);
        }
        catch (e) {
            console.error(e);
        }
    }

    return {
        room,
        createRoom
    }
}