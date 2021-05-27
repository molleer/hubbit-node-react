import { DigitCRUD, DigitLayout } from "@cthit/react-digit-components";
import axios from "axios";

const Me = () => {
    return (
        <DigitLayout.Row
            style={{ paddingTop: "2rem" }}
            flex="1"
            justifyContent="space-around"
        >
            <DigitLayout.Column>
                <DigitCRUD
                    path="/me"
                    readAllRequest={() => axios.get("/api/devices")}
                    keysOrder={["device_name", "address"]}
                    keysText={{
                        device_name: "Device Name",
                        address: "Address"
                    }}
                    idProp="address"
                    tableProps={{
                        titleText: "Devices",
                        emptyTableText: "You have not added any devices",
                        startOrderBy: "device_name"
                    }}
                />
            </DigitLayout.Column>
        </DigitLayout.Row>
    );
};

export default Me;
