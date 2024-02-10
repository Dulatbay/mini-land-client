export interface CardMasterClassDto {
    id: number;
    title: string;
    description: string;
    image_url: string;
    price: number;
}

// @deprecated
export interface RequestCreateMasterClassDto {
    title: string;
    description: string;
    price: number;
    image?: File;
}

