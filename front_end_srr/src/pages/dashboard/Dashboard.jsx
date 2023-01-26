import { Box, Button, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";

export const DashboardContainer = styled.div`
  background-color: #fafafa;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  border-radius: 5px;
`;

export const ReportContainer1 = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ReportContainer2 = styled(ReportContainer1)``;

export const DateForm = styled.div`
  /* background-color: lightcyan; */
  height: 70px;
  display: flex;
  margin-bottom: 10px;
  flex: 1;
`;
export const FilterButton = styled.div`
  width: 10px;
  flex: 1;
  margin: 10px;
  margin-top: 15px;
`;
export const ChartContainer = styled.div`
  background-color: lightcyan;
  height: 100%;
  flex: 1;
  padding: 5px;
`;
const departments = [
  "department1",
  "department2",
  "department3",
  "department4",
  "department5",
];

export const Dashboard = () => {
  const newDate = new Date();
  const [to, setTo] = React.useState(dayjs(newDate.toString()));
  const [from, setFrom] = React.useState(dayjs(newDate.toString()));

  return (
    <DashboardContainer>
      <h2>Dashboard</h2>
      <ReportContainer1>
        {departments.map((department, i) => (
          <Box
            key={i}
            sx={{
              backgroundColor: "white",
              flex: 1,
              margin: "2px",
              height: "100px",
              borderRadius: "4px",
              boxShadow: 5,
            }}
          >
            <h4 style={{ paddingLeft: 4, margin: 2 }}>{department}</h4>
            <p
              style={{
                paddingLeft: 4,
                margin: 2,
                color: "gray",
                fontSize: "15px",
              }}
            >
              <span>KES </span>2000
            </p>
          </Box>
        ))}
        <Box
          sx={{
            backgroundColor: "smoke-white",
            flex: 1,
            margin: "2px",
            ml: "10px",
            height: "100px",
            borderRadius: "4px",
            boxShadow: 5,
          }}
        >
          <h3 style={{ paddingLeft: 4, margin: 2 }}>TOTAL REVENUE</h3>
          <p style={{ paddingLeft: 4, margin: 2, color: "gray" }}>
            <span>KES </span>2000
          </p>
        </Box>
      </ReportContainer1>
      <ReportContainer2>
        <Box
          sx={{
            backgroundColor: "white",
            flex: 2,
            margin: "5px",
            height: "500px",
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <form // onSubmit={}
          >
            <DateForm>
              <div
                className="from"
                style={{ flex: 1, margin: "5px", padding: "10px" }}
              >
                <label htmlFor="from" style={{ paddingRight: "5px" }}>
                  From:
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    openTo="year"
                    views={["year", "month", "day"]}
                    label="Year, month and date"
                    value={from}
                    onChange={(newValue) => setFrom(newValue)}
                    renderInput={(params) => (
                      <TextField {...params} helperText={null} />
                    )}
                  />
                </LocalizationProvider>
              </div>
              <div
                className="to"
                style={{
                  margin: "5px",
                  flex: 1,
                  paddingLeft: "10px",
                  paddingTop: "10px",
                }}
              >
                <label htmlFor="to" style={{ paddingRight: "5px" }}>
                  To:
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    openTo="year"
                    views={["year", "month", "day"]}
                    label="Year, month and date"
                    value={to}
                    onChange={(newValue) => setTo(newValue)}
                    renderInput={(params) => (
                      <TextField {...params} helperText={null} />
                    )}
                  />
                </LocalizationProvider>
              </div>
              <FilterButton>
                <Button
                  type="submit"
                  sx={{
                    width: "100%",
                    color: "black",
                    backgroundColor: "#fafafa",
                    fontWeight: "bold",
                  }}
                >
                  Filter
                </Button>
              </FilterButton>
            </DateForm>
          </form>
          {/* chart */}
          <ChartContainer>
            <h1>Chart</h1>
          </ChartContainer>
        </Box>
        <Box
          sx={{
            backgroundColor: "lightblue",
            flex: 1,
            margin: "5px",
            borderRadius: "4px",
          }}
        >
          Box2
        </Box>
      </ReportContainer2>
    </DashboardContainer>
  );
};
