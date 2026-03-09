import { Logistics } from "@src/AbstractLogistics/logistics";
import { RoadLogistics } from "@src/DeliveryLogistics/roadLogistics";
import { SeaLogistics } from "@src/DeliveryLogistics/seaLogistics";
import { AirLogistics } from "@src/DeliveryLogistics/airLogistics";


const startApp = (logistics: Logistics) => {
    console.log('Начинаем планирование');

    
    logistics.planDelivery();
}
startApp(new RoadLogistics());
startApp(new SeaLogistics());
startApp(new AirLogistics());


