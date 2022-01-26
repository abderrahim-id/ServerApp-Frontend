// we have created this response in the backend 
// we also need to map that in the frontend

import { Server } from "./server";

export interface CustomResponse {
     timeStamp: Date;
     statusCode: number;
     status: string;
     reason: string;
     message: string;
     developerMessage: string;
     // we need to make this optional because we know we're never gonna get both of them at the same time > using question mark
     data: {servers?: Server[], server?: Server};
     
}