import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
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
  background-color: #cee9ee;
  height: 70px;
`;

const departments = [
  "department1",
  "department2",
  "department3",
  "department4",
  "department5",
];

export const Dashboard = () => {
  return (
    <DashboardContainer>
      <h1>Dashboard</h1>

      <ReportContainer1>
        {departments.map((department, i) => (
          <Box
            key={i}
            sx={{
              backgroundColor: "lightblue",
              flex: 1,
              margin: "2px",
              height: "100px",
              borderRadius: "4px",
            }}
          >
            {department}
          </Box>
        ))}
        <Box
          sx={{
            backgroundColor: "lightblue",
            flex: 1,
            margin: "2px",
            ml: "10px",
            height: "100px",
            borderRadius: "4px",
          }}
        >
          Total revenue
        </Box>
      </ReportContainer1>
      <ReportContainer2>
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
      </ReportContainer2>
    </DashboardContainer>
  );
};
