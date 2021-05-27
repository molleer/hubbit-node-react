import { useEffect, useState } from "react";
import {
    DigitHeader,
    DigitTabs,
    DigitText,
    DigitLayout
} from "@cthit/react-digit-components";
import { useHistory } from "react-router-dom";

const tabs = [
    {
        text: "ME",
        value: "/me"
    },
    {
        text: "SMURFS IN THE HUBB",
        value: "/"
    },
    {
        text: "STATS",
        value: "/stats"
    }
];

const Header = ({ children }) => {
    const user = { cid: "me" };
    const [selected, setSelected] = useState("/");
    const history = useHistory();

    const onLinkClick = value => {
        history.push(value);
        setSelected(value);
    };

    useEffect(() => {
        setSelected(history.location.pathname);
    }, [setSelected, history.location.pathname]);

    return (
        <DigitHeader
            mainPadding="0"
            renderCustomHeader={() => (
                <DigitLayout.Row flex="1" justifyContent="center">
                    <DigitText.Heading4
                        style={{ cursor: "pointer" }}
                        onClick={() => onLinkClick("/")}
                        text="Who is in the Hubb?"
                    />
                </DigitLayout.Row>
            )}
            renderToolbar={() => (
                <DigitTabs
                    centered
                    onChange={onLinkClick}
                    selected={selected}
                    tabs={[
                        ...tabs,

                        {
                            text: "MY STATS",
                            value: "/stats/" + user.cid
                        }
                    ]}
                />
            )}
            renderMain={() => children}
        />
    );
};

export default Header;
