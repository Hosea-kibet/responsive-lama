import type { ReactElement, SetStateAction } from "react";
import FullLayout from "../../../src/layouts/full/FullLayout";
import {
  Typography,
  Grid,
  CardContent,
  Box,
  tableCellClasses,
  TableContainer,
} from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import DashboardCard from "../../../src/components/shared/DashboardCard";
import { toast } from "react-toastify";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect } from "react";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#89C545",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    cursor: "pointer",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const SearchBox = ({ value, onChange }: any) => (
  <div className="w-full md:w-1/2 lg:w-1/3">
    <input
      type="search"
      className="border-primary focus:border-primary-600 focus:shadow-te-primary relative m-0 block w-full min-w-0 flex-auto rounded border bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:text-neutral-700 focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
      id="exampleSearch"
      value={value}
      onChange={onChange}
      placeholder="Search Tunes"
    />
  </div>
);

const TypographyPage = () => {
  const [data, setData] = useState([]);
  const [firstTen, setFirstTen] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setSearchQuery(event.target.value);
  };

  const filteredRows = firstTen.filter(
    (row: any) =>
      row.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [showOtpForm, setShowOtpForm] = useState(false);

  const [response, setResponse] = useState({
    id: 0,
  });

  const responseId = response.id;

  const [errorMessage, setErrorMessage] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setPhoneNumber(event.target.value);
  };

  const [selectedRowValue, setSelectedRowValue] = useState(null);

  const handleRowClick = (code: React.SetStateAction<null>) => {
    setSelectedRowValue(code);
    setPhoneNumber("");
    toast.success(`You have selected code: ${code} `, {
      theme: "colored",
    });
  };

  const [id, setId] = useState(0);
  const [otp, setOtp] = useState("");
  const handleOTP = (event: { target: { value: SetStateAction<string> } }) => {
    setOtp(event.target.value);
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          "https://skiza-app-dy3qp.ondigitalocean.app/public/skiza/list?limit=1000&page=1"
        );
        setData(response.data);
        setFirstTen(response.data);
        // setRest(response.data.slice(10));
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, []);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Create the request options
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tune_code: selectedRowValue,
        phonenumber: phoneNumber,
      }),
    };

    // Send the request
    fetch(
      "https://skiza-app-dy3qp.ondigitalocean.app/public/skiza/subscribe",
      requestOptions
    )
      .then(async (response) => {
        if (response.ok) {
          // Handle successful response
          setResponse(await response.json());

          if (response.status === 202) {
            setShowOtpForm(true);
          }
        } else {
          // Handle error response
          throw new Error("OTP was sent, click next");
        }
      })
      .then((result) => {
        console.log(result);
        toast.success("Enter The OTP Sent!"); // Display snackbar
      })
      .catch((error) => {
        // Handle error by setting the status state variable to the error message
        setErrorMessage(error.message);
        toast.error(errorMessage); // Display error toast
      });
  };

  const subscriptionHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tune_code: selectedRowValue,
        phonenumber: phoneNumber,
        otp: otp,
      }),
    };
    //send the request
    fetch(
      `https://skiza-app-dy3qp.ondigitalocean.app/public/skiza/subscription/confirm/${responseId}`,
      requestOptions
    )
      .then((response) => {
        if (response.ok) {
          setShowOtpForm(false);
          // Handle successful response
          return response.json();
        } else {
          // Handle error response
          throw new Error("OTP was sent, Please click next");
        }
      })
      .then((result) => {
        console.log(result);
        toast.success("Subscription successful!"); // Display snackbar
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <PageContainer title="Typography" description="this is Typography">
      <Grid container spacing={3}>
        <Grid item sm={12}>
        <div className="mb-8">
                <SearchBox value={searchQuery} onChange={handleSearchChange} />
              </div>
          <DashboardCard title="All Tunes">
            <Box
              sx={{
                width: "100%",
                height: "300px",
                overflowX: "auto",
                overflowY: "scroll",
              }}
              // onScroll={handleScroll}
            >
              

              <Table sx={{ minWidth: 100 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Code</StyledTableCell>
                    <StyledTableCell align="center">Name</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRows.map((row: any) => (
                    <StyledTableRow
                      key={row.id}
                      onClick={() => {
                        handleRowClick(row.code);
                      }}
                    >
                      <StyledTableCell component="th" scope="row">
                        {row.code}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {row.name}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </DashboardCard>
        </Grid>
      </Grid>

      <div>
        {!showOtpForm ? (
          <form onSubmit={handleSubmit} className="mt-4 w-full">
            <div className="relative flex flex-col sm:flex-row">
              <input
                type="text"
                id="search-input"
                placeholder="Enter your number"
                className="block w-full rounded-lg border border-gray-400 p-4 text-lg text-gray-800 outline-none focus:ring-2 focus:ring-green-500 sm:w-3/4"
                required
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
              <button
                type="submit"
                className="ml-0 mt-3 rounded-lg bg-[#89C545] px-6 py-2 text-lg font-medium text-white hover:bg-[#bbdd92] focus:outline-none focus:ring-4 focus:ring-[#bbdd92] sm:ml-3 sm:mt-0"
              >
                Get OTP
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={subscriptionHandler} className="mt-4 w-full">
            <div className="relative flex flex-col sm:flex-row">
              <input
                type="text"
                id="search-input"
                placeholder="Enter the OTP"
                className="block w-full rounded-lg border border-gray-400 p-4 text-lg text-gray-800 outline-none focus:ring-2 focus:ring-green-500 sm:w-3/4"
                required
                value={otp}
                onChange={handleOTP}
              />
              <button
                type="submit"
                className="ml-0 mt-3 rounded-lg bg-[#89C545] px-6 py-2 text-lg font-medium text-white hover:bg-[#bbdd92] focus:outline-none focus:ring-4 focus:ring-[#bbdd92] sm:ml-3 sm:mt-0"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      </div>
    </PageContainer>
  );
};

export default TypographyPage;
TypographyPage.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
