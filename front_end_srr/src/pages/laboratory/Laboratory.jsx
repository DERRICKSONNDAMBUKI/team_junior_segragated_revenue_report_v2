import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

const LaboratoryContainer = styled.div`
  background-color: #fafafa;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  border-radius: 5px;
`;

const ReportContainer1 = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ReportContainer2 = styled(ReportContainer1)``;

const DateForm = styled.div`
  background-color: #aae0aa;
  height: 70px;
`;

export const Laboratory = () => {
  return (
    <LaboratoryContainer>
      <ReportContainer1>
        <Box
          sx={{
            backgroundColor: "lightblue",
            flex: 2,
            margin: "5px",
            height: "400px",
            borderRadius: "4px",
          }}
        >
          <DateForm>Date Form</DateForm>
          Box1
        </Box>
        <Box
          sx={{
            backgroundColor: "lightblue",
            flex: 1,
            margin: "5px",
            height: "400px",
            borderRadius: "4px",
          }}
        >
          Box2
        </Box>
      </ReportContainer1>
      <ReportContainer2>
      <Box
          sx={{
            backgroundColor: "lightblue",
            flex: 1,
            margin: "5px",
            height: "400px",
            borderRadius: "4px",
          }}
        >
          Box2
        </Box>
      </ReportContainer2>
    </LaboratoryContainer>
  );
};
