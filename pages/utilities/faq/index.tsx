import { ReactElement, useEffect, useRef, useState } from "react";
import { Paper, Box, Grid } from "@mui/material";
import PageContainer from "../../../src/components/container/PageContainer";
import DashboardCard from "../../../src/components/shared/DashboardCard";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import FullLayout from "../../../src/layouts/full/FullLayout";
import styles from "../styles/Home.module.css";
import { FiPlus } from "react-icons/fi";


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body1,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 120,
  lineHeight: "60px",
}));

const Faq = () => {
    const [active, setActive] = useState(false);
    const [activetwo, setActivetwo] = useState(false);
    const [activethree, setActivethree] = useState(false);
    const [activefour, setActivefour] = useState(false);
    const [activefive, setActivefive] = useState(false);
    
  
    const contentRef = useRef(null);
  
    // useEffect(() => {
    //   contentRef.current.style.maxHeight = active
    //     ? `${contentRef.current.scrollHeight}px`
    //     : "0px";
    // }, [contentRef, active]);
  
    useEffect(() => {
      // @ts-ignore
      contentRef.current.style.maxHeight =active, activetwo, activethree ,activefour,activefive
      // @ts-ignore
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }, [contentRef, active, activetwo,activethree,activefour,activefive]);
  
    // useEffect(() => {
    //   contentRef.current.style.maxHeight = activethree
    //     ? `${contentRef.current.scrollHeight}px`
    //     : "0px";
    // }, [contentRef, activethree]);
  
    const toggleAccordion = () => {
      setActive(!active);
    };
  
    const toggleAccordiontwo = () => {
      setActivetwo(!activetwo);
    };
  
    const toggleAccordionthree = () => {
      setActivethree(!activethree);
    };
    const toggleAccordionfour = () => {
      setActivefour(!activefour);
    };
    const toggleAccordionfive = () => {
      setActivefive(!activefive);
    }

  return (
    <PageContainer title="Shadow" description="this is Shadow">
      <DashboardCard title="FAQ">
        <Grid container spacing={2}>
        <div className="flex flex-col items-center space-y-12">
        
        <button
             className={`bg-transparent border border-solid border-gray  rounded shadow-md cursor-pointer w-[100%]  min-h-[60px] ${active}`}
          onClick={toggleAccordion}
          >
            <div>
            <div className="items-center flex text-left text-base">
                <h4 className="ml-[8px] text-gray" >
                  How do i subscribe to a Skiza tone ?
                </h4>
                <FiPlus
                  className={active ? `transform rotate-45  text-gray  text-[22px] mr-[8px]` : `bg-none border-none pointer text-[22px]  text-gray ml-auto mr-[8px]`}
                />
              </div>
              <div
                ref={contentRef}
                className={active ? `border-t border-gray` : `ml-[8px] mr-[8px] max-h-0 overflow-hidden transition-opacity`}
              >
                <p className="text-gray ml-[8px]">You just do it in a few steps, Enter your number,get an OTP and subscribe to your favourite skiza tune.</p>
              </div>
            </div>
          </button>
         

          <button
             className={`bg-transparent border border-solid border-gray  rounded shadow-md cursor-pointer w-[92vh]  min-h-[60px] ${activetwo}`}
          onClick={toggleAccordiontwo}
          >
            <div>
            <div className="items-center flex text-left text-base">
                <h4 className="ml-[8px] text-gray" >
                  How will I win ?
                </h4>
                <FiPlus
                  className={activetwo ? `transform rotate-45  text-gray  text-[22px] mr-[8px]` : `bg-none border-none pointer text-[22px]  text-gray ml-auto mr-[8px]`}
                />
              </div>
              <div
                ref={contentRef}
                className={activetwo ? `border-t border-gray` : `ml-[8px] mr-[8px] max-h-0 overflow-hidden transition-opacity`}
              >
                <p className="text-gray ml-[8px]">You win prizes by sharing this application to your friends.</p>
              </div>
            </div>
          </button>

          <button
             className={`bg-transparent border border-solid border-gray  rounded shadow-md cursor-pointer w-[92vh]  min-h-[60px] ${activethree}`}
          onClick={toggleAccordionthree}
          >
            <div>
            <div className="items-center flex text-left text-base">
                <h4 className="ml-[8px] text-gray" >
                  How will I get my winnings?
                </h4>
                <FiPlus
                  className={activethree ? `transform rotate-45  text-gray  text-[22px] mr-[8px]` : `bg-none border-none pointer text-[22px]  text-gray ml-auto mr-[8px]`}
                />
              </div>
              <div
                ref={contentRef}
                className={activethree ? `border-t border-gray` : `ml-[8px] mr-[8px] max-h-0 overflow-hidden transition-opacity`}
              >
                <p className="text-gray ml-[8px]">You will be contacted via the following number.......</p>
              </div>
            </div>
          </button>
          <button
             className={`bg-transparent border border-solid border-gray  rounded shadow-md cursor-pointer w-[92vh]  min-h-[60px] ${activefour}`}
          onClick={toggleAccordionfour}
          >
            <div>
            <div className="items-center flex text-left text-base">
                <h4 className="ml-[8px] text-gray" >
                  Will i receive promotional messages from Lamahuraan?
                </h4>
                <FiPlus
                  className={activefour? `transform rotate-45  text-gray  text-[22px] mr-[8px]` : `bg-none border-none pointer text-[22px]  text-gray ml-auto mr-[8px]`}
                />
              </div>
              <div
                ref={contentRef}
                className={activefour ? `border-t border-gray` : `ml-[8px] mr-[8px] max-h-0 overflow-hidden transition-opacity`}
              >
                <p className="text-gray ml-[8px]">Yes you will periodically receive messages but not on a regular basis.</p>
              </div>
            </div>
          </button>
          <button
             className={`bg-transparent border border-solid border-gray  rounded shadow-md cursor-pointer w-[92vh]  min-h-[60px] ${activefive}`}
          onClick={toggleAccordionfive}
          >
            <div>
            <div className="items-center flex text-left text-base">
                <h4 className="ml-[8px] text-gray" >
                  How do I unsubscribe from a skiza tone?
                </h4>
                <FiPlus
                  className={activefive ? `transform rotate-45  text-gray  text-[22px] mr-[8px]` : `bg-none border-none pointer text-[22px]  text-gray ml-auto mr-[8px]`}
                />
              </div>
              <div
                ref={contentRef}
                className={activefive ? `border-t border-gray` : `ml-[8px] mr-[8px] max-h-0 overflow-hidden transition-opacity`}
              >
                <p className="text-gray ml-[8px]">Dial *811# to optout of skiza.</p>
              </div>
            </div>
          </button>
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
