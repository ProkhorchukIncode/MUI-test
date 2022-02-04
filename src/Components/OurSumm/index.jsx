import styled from "styled-components"

import ListItemText from "@mui/material/ListItemText"

const SummText = styled(ListItemText)`
    && {
        padding-right: 10px;
        text-align: end;
        color: red;
    }
`

const OurSumm = ({summ}) => {
    return(
        <SummText>
            Our order: {summ}$
        </SummText>
    )
}
export default OurSumm