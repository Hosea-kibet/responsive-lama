import type { ReactElement } from "react";
import { Grid, Typography } from "@mui/material";
import PageContainer from "../../src/components/container/PageContainer";
import DashboardCard from "../../src/components/shared/DashboardCard";
import FullLayout from "../../src/layouts/full/FullLayout";
import ModalImage from "react-modal-image";

const SamplePage = () => {
  return (
    <PageContainer title="Sample Page" description="this is Sample page">
      <DashboardCard title="Winners">
        <Grid container spacing={2}>
          <div className="container mx-auto grid grid-cols-3 gap-2">
            <div className="w-full rounded">
              <ModalImage
                small="/2.jpeg"
                large="/2.jpeg"
                alt="image"
                style={{ maxHeight: "100px" }}
              />
              <span>Rose Waithera</span>
            </div>
            <div className="w-full rounded">
              <ModalImage
                small="/8.jpeg"
                large="/8.jpeg"
                alt="image"
                style={{ maxHeight: "100px" }}
              />
              <span>Abass Gulei</span>
            </div>
            <div className="w-full rounded">
              <ModalImage
                small="/6.jpeg"
                large="/6.jpeg"
                alt="image"
                style={{ maxHeight: "100px" }}
              />
              <span>Edna Kanaiza</span>
            </div>
           
            <div className="w-full rounded">
              <ModalImage
                small="/4.jpeg"
                large="/4.jpef"
                alt="image"
                style={{ maxHeight: "100px" }}
              />
              <span>Gathoni Wa Mushomba</span>
            </div>
            <div className="w-full rounded">
              <ModalImage
                small="/1.jpeg"
                large="/1.jpef"
                alt="image"
                style={{ maxHeight: "100px" }}
              />
              <span>Abdi Kinyua</span>
            </div>

            <div className="w-full rounded">
              <ModalImage
                small="/1.jpeg"
                large="/1.jpef"
                alt="image"
                style={{ maxHeight: "100px" }}
              />
               <span>Ibrahim Kenyatta</span>
            </div>
          </div>
        </Grid>
      </DashboardCard>
    </PageContainer>
  );
};

export default SamplePage;
SamplePage.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};
