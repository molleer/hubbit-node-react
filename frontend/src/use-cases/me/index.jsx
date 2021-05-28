import {
    DigitCRUD,
    DigitLayout,
    DigitTextField
} from "@cthit/react-digit-components";
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
                    readOneRequest={address =>
                        axios.get("/api/devices?address=" + address)
                    }
                    createRequest={device => axios.post("/api/devices", device)}
                    deleteRequest={address =>
                        axios.delete("/api/devices/" + address)
                    }
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
                    formComponentData={{
                        device_name: {
                            component: DigitTextField,
                            componentProps: {
                                outlined: true,
                                upperLabel: "Device name"
                            }
                        },
                        address: {
                            component: DigitTextField,
                            componentProps: {
                                outlined: true,
                                upperLabel: "Address",
                                lowerLabel: "Form: 00:00:00:00:00:00"
                            }
                        }
                    }}
                    createButtonText="New device"
                    createTitle="New device"
                    detailsButtonText="Details"
                />
            </DigitLayout.Column>
        </DigitLayout.Row>
    );
};

export default Me;
