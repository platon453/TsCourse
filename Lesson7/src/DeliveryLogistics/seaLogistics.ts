import { ITransport } from "../types/types";
import { Logistics } from "@src/AbstractLogistics/logistics";
import { Ship } from "../Transports/ship";

export class SeaLogistics extends Logistics {
    public createTransport(): ITransport {
        return new Ship();
    }
}