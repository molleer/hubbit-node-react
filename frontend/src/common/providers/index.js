import { DigitProviders } from "@cthit/react-digit-components";
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./user.provider";

const ProjectProviders = ({ children }) => (
    <DigitProviders>
        <BrowserRouter>
            <UserProvider>{children}</UserProvider>
        </BrowserRouter>
    </DigitProviders>
);

export default ProjectProviders;
