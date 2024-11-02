import { Breadcrumbs, Link as Links } from "@mui/material";
import styled from "styled-components";

export const Breadcrumb = styled(Breadcrumbs)<any>`
    color: ${({ theme }) => theme.color.text.light};
    @media (max-width: 800px) {
        flex: ${({ flex }: any) => (flex ? flex : null)};
    }
    && {
        margin-top: 20px;
    }
`;
export const Link = styled(Links)<any>`
    font-size: ${({ theme }) => theme.font.size.medium};

    cursor: pointer;

    @media (max-width: 800px) {
        flex: ${({ flex }: any) => (flex ? flex : null)};
    }
`;
