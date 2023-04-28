import { ReactElement, useEffect, useRef, useState } from "react";
import { Paper, Box, Grid } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import DashboardCard from "../../../src/components/shared/DashboardCard";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import FullLayout from "../../../src/layouts/full/FullLayout";
import styles from "../styles/Home.module.css";
import { FiPlus } from "react-icons/fi";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




const Faq = () => {
    
  
    const contentRef = useRef(null);
  
   
  
  
  
  

  return (
    <PageContainer title="Shadow" description="this is Shadow">
      <DashboardCard title="FAQ">
        <Grid container spacing={2}>
       <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>How do I subscribe to skiza?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You just do it in a few steps, Enter your number,get an OTP and  subscribe to your favourite skiza tune..
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography> How will I win ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You win prizes by sharing this application to your friends.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How will I get my winnings?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          You will be contacted via the following number.......
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Will i receive promotional messages from Lamahuraan?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes you will periodically receive messages but not regular.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How do I unsubscribe from a skiza?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Dial *811*5# to optout of skiza.
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/* <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
      </Accordion> */}
    </div>
        </Grid>
      </DashboardCard>
    </PageContainer>
  );
};

export default Faq;
Faq.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
