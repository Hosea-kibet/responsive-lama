import { ReactElement, useState } from "react";
import { Paper, Box, Grid } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import DashboardCard from "../../../src/components/shared/DashboardCard";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import FullLayout from "../../../src/layouts/full/FullLayout";

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";




const theme = createTheme({
  // @ts-ignore
  overrides: {
    MuiButton: {
      root: {
        "&:hover": {
          backgroundColor: "transparent", // remove the hover background color
        },
      },
    },
  },
});

const steps = [
  {
    label: "Dial *811*5#.",
    description: `On your keypad dial *811*5#.`,
  },
  {
    label: "Manage my RingBack Tones.",
    description: "Select 'Manage my RingBack Tones' from the menu. .",
  },
  {
    label: "Skiza Tunes.",
    description: "Select 'Skiza Tunes' from the options.",
  },
  {
    label: "Unsubscribe from Skiza",
    description: `Select "Unsubscribe from Skiza" from the menu.`,
  },
  {
    label: "Tune to unsubscribe from",
    description: `Select the Skiza tune you want to unsubscribe from.`,
  },
  {
    label: "confirmation message ",
    description: `You will receive a confirmation message that you have successfully unsubscribed from Skiza.`,
  },
];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 120,
  lineHeight: "60px",
}));

const Unsubscribe = () => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  const [activeStep, setActiveStep] = useState(0);

  // next handler
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <PageContainer title="Shadow" description="this is Shadow">
      <DashboardCard title="Shadow">
        <Grid container spacing={2}>
          <div className="flex flex-col items-center ">
            <Box sx={{ maxWidth: 400, marginBottom: 10 }}>
              <style>
                {`
      .MuiStepIcon-root.MuiStepIcon-active {
        color: green;
      }
    `}
              </style>
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                  <Step
                    key={step.label}
                    sx={{
                      "& .MuiStepLabel-root .Mui-completed": {
                        color: "#89C545", // circle color (COMPLETED)
                      },
                      "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                        {
                          color: "green", // Just text label (COMPLETED)
                        },
                      "& .MuiStepLabel-root .Mui-active": {
                        color: "gray", // circle color (ACTIVE)
                      },
                      "& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel":
                        {
                          color: "common.white", // Just text label (ACTIVE)
                        },
                      "& .MuiStepLabel-root .Mui-active .MuiStepIcon-text": {
                        fill: "white", // circle's number (ACTIVE)
                      },
                    }}
                  >
                    <StepLabel
                      optional={
                        index === 3 ? (
                          <Typography variant="caption">Last step</Typography>
                        ) : null
                      }
                    >
                      {step.label}
                    </StepLabel>
                    <StepContent>
                      <Typography>{step.description}</Typography>
                      <Box sx={{ mb: 2 }}>
                        <div>
                          <ThemeProvider theme={theme}>
                            <Button
                              // variant="contained"
                              onClick={handleNext}
                              sx={{ mt: 1, mr: 1, color: "#89C545" }}
                            >
                              {index === steps.length - 1
                                ? "Finish"
                                : "Continue"}
                            </Button>
                          </ThemeProvider>
                          <ThemeProvider theme={theme}>
                            <Button
                              disabled={index === 0}
                              onClick={handleBack}
                              sx={{ mt: 1, mr: 1, color: "#89C545" }}
                            >
                              Back
                            </Button>
                          </ThemeProvider>
                        </div>
                      </Box>
                    </StepContent>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                  <Typography>
                    All steps completed - you&apos;re finished
                  </Typography>
                  <Button
                    onClick={handleReset}
                    sx={{ mt: 1, mr: 1, color: "#89C545" }}
                  >
                    Reset
                  </Button>
                </Paper>
              )}
            </Box>
            <h3 className="text-primary mb-2 font-bold uppercase">
              Subscribe to newsletter
            </h3>
            <div className="newsletter-input-fields flex">
              <div className="mc-field-group">
                <input
                  type="email"
                  placeholder="Your email"
                  className="border-graylc text-gray block w-full rounded-l rounded-r border border-b bg-white py-2 pl-4  pr-6 text-sm placeholder-gray-400 outline-none sm:rounded-l-none"
                />
              </div>
              <div className="button-wrap wp-block-button ml-4">
                <button className="bg-primary	cursor-pointer rounded border-0 px-5 py-2 text-white  outline-none">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </Grid>
      </DashboardCard>
    </PageContainer>
  );
};

export default Unsubscribe;
Unsubscribe.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
