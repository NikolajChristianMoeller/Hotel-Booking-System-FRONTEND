export type THotel = {
    id: number;
    name: string
    address: string;
    city: string;
    zip: string;
    country: string;
    created: string;
    updated: string;
    numberOfRooms: number;
};

export type THotelCreateAndUpdate = {
    id?: number | null;
    name: string;
    address: string;
    city: string;
    zip: string;
    country: string;
};