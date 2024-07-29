import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { fetchFlights } from "../services/flightApi";
import { formatDateAndTime } from "../utils/formatDate";
import { useNavigate } from "react-router-dom";
import { Button, CircularProgress, Box, Typography } from "@mui/material";
import { getRandomImage } from "./FlightLogo";

export default function Flight() {
  const columns: GridColDef[] = [
    {
      field: "airlineLogo",
      headerName: "Airline",
      width: 170,
      renderCell: (params: GridRenderCellParams) => (
        <img
          src={getRandomImage()}
          alt="Airline Logo"
          style={{ width: "50%", height: "50px" }}
        />
      ),
    },
    { field: "flightNumber", headerName: "Flight Number", width: 170 },
    { field: "airline", headerName: "Airline", width: 170 },
    { field: "origin", headerName: "Origin", width: 170 },
    {
      field: "destination",
      headerName: "Destination",
      width: 170,
    },
    {
      field: "departureTime",
      headerName: "Departure Time",
      width: 170,
      valueGetter: (value) => formatDateAndTime(value),
    },
    { field: "status", headerName: "Status", width: 170, sortable: false },
    {
      field: "book",
      headerName: "",
      width: 170,
      renderCell: (params: GridRenderCellParams) => (
        <Button
          variant="contained"
          color="secondary"
          onClick={(event) => handleBookClick(params.row, event)}
        >
          Book Now
        </Button>
      ),
    },
  ];
  const [flights, setFlights] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleRowClick = (params: any) => {
    navigate(`/flights/${params.id}`, { state: params.row });
  };

  const handleBookClick = (row: { id: number; }, event: React.MouseEvent) => {
    event.stopPropagation();
    navigate(`/book/${row.id}`, { state: row });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchFlights();
        setFlights(data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching flight data");
        setLoading(false);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 10000);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Typography variant="h6" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  return (
    <div>
      <DataGrid
        rows={flights}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[5, 10]}
        onRowClick={handleRowClick}
      />
    </div>
  );
}
