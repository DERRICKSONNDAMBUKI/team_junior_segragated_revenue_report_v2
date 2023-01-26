import { Box, Button, TextField } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import React from "react";
import styled from "styled-components";
import {
  ChartContainer,
  DashboardContainer,
  DateForm,
  FilterButton,
  ReportContainer1,
} from "../dashboard/Dashboard";

const LaboratoryContainer = styled(DashboardContainer)``;
const ReportContainer2 = styled(ReportContainer1)``;

export const Laboratory = () => {
  const newDate = new Date();
  const [to, setTo] = React.useState(dayjs(newDate.toString()));
  const [from, setFrom] = React.useState(dayjs(newDate.toString()));

  return (
    <LaboratoryContainer>
      <h1>Laboratory</h1>
      <ReportContainer1>
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
