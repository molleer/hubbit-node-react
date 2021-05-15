import { DigitLayout, DigitTable } from "@cthit/react-digit-components";

const smurfs = [];

const Home = () => {
    return (
        <DigitLayout.Row flex="1" justifyContent="space-around">
            <DigitLayout.Column>
                <DigitTable
                    margin={{ top: "2rem" }}
                    titleText={`There are ${smurfs.length} smurfs in the Hubb`}
                    idProp="name"
                    columnsOrder={["name", "status"]}
                    startOrderBy="name"
                    headerTexts={{
                        name: "Name",
                        status: "Current Status"
                    }}
                    data={[]}
                />
            </DigitLayout.Column>
        </DigitLayout.Row>
    );
};

export default Home;
