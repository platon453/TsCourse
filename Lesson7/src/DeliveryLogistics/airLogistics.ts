import { ITransport } from "../types/types";
import { Logistics } from "@src/AbstractLogistics/logistics";
import { Plain } from "../Transports/plain";

export class AirLogistics extends Logistics {
    public createTransport(): ITransport {
        return new Plain();
    }
}