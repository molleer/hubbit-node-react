import { DigitProviders } from "@cthit/react-digit-components";
import { BrowserRouter } from "react-router-dom";

const ProjectProviders = ({ children }) => (
    <DigitProviders>
        <BrowserRouter>{children}</BrowserRouter>
    </DigitProviders>
);

export default ProjectProviders;
