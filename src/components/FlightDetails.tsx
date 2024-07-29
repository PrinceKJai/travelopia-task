import React from "react";
import { useLocation } from "react-router-dom";
import { Typography, Paper, Box, Grid, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { FlightDetails } from "../types/FlightDetails";

const BackgroundContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(3),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  maxWidth: "600px",
  width: "100%",
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[5],
}));

const DetailBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(2),
  "&:last-child": {
    marginBottom: 0,
  },
}));

const FlightDetail: React.FC = () => {
  const location = useLocation();
  const flightDetails = location.state as FlightDetails;

  if (!flightDetails) {
    return (
      <BackgroundContainer>
        <Typography variant="h4" gutterBottom>
          Flight Details
        </Typography>
        <Typography variant="body1">No flight details available.</Typography>
      </BackgroundContainer>
    );
  }

  const { flightNumber, airline, origin, destination, departureTime, status } =
    flightDetails;

  const getStatusIcon = (status: string) => {
    switch (status.toLowerCase()) {
      case "on time":
        return (
          <CheckCircleOutlineIcon color="success" sx={{ marginRight: 1 }} />
        );
      case "delayed":
        return <CancelOutlinedIcon color="error" sx={{ marginRight: 1 }} />;
      default:
        return <AccessTimeIcon sx={{ marginRight: 1 }} />;
    }
  };

  return (
    <BackgroundContainer>
      <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom>
          Flight Details for {flightNumber}
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <DetailBox>
              <AirlineSeatReclineNormalIcon sx={{ marginRight: 1 }} />
              <Typography variant="h6" component="span">
                Airline:
              </Typography>
              <Typography variant="body1" sx={{ marginLeft: 1 }}>
                {airline}
              </Typography>
            </DetailBox>
          </Grid>
          <Divider />
          <Grid item xs={12}>
            <DetailBox>
              <FlightTakeoffIcon sx={{ marginRight: 1 }} />
              <Typography variant="h6" component="span">
                Origin:
              </Typography>
              <Typography variant="body1" sx={{ marginLeft: 1 }}>
                {origin}
              </Typography>
            </DetailBox>
          </Grid>
          <Divider />
          <Grid item xs={12}>
            <DetailBox>
              <FlightLandIcon sx={{ marginRight: 1 }} />
              <Typography variant="h6" component="span">
                Destination:
              </Typography>
              <Typography variant="body1" sx={{ marginLeft: 1 }}>
                {destination}
              </Typography>
            </DetailBox>
          </Grid>
          <Divider />
          <Grid item xs={12}>
            <DetailBox>
              <AccessTimeIcon sx={{ marginRight: 1 }} />
              <Typography variant="h6" component="span">
                Departure Time:
              </Typography>
              <Typography variant="body1" sx={{ marginLeft: 1 }}>
                {departureTime}
              </Typography>
            </DetailBox>
          </Grid>
          <Divider />
          <Grid item xs={12}>
            <DetailBox>
              {getStatusIcon(status)}
              <Typography variant="h6" component="span">
                Status:
              </Typography>
              <Typography variant="body1" sx={{ marginLeft: 1 }}>
                {status}
              </Typography>
            </DetailBox>
          </Grid>
        </Grid>
      </StyledPaper>
    </BackgroundContainer>
  );
};

export default FlightDetail;
