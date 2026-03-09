import { ITransport } from "../types/types";
import { Logistics } from "@src/AbstractLogistics/logistics";
import { Truck } from "../Transports/truck";

export class RoadLogistics extends Logistics {
    public createTransport(): ITransport {
        return new Truck();
    }
}