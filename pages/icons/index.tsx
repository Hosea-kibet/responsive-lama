import type { ReactElement } from 'react';
import PageContainer from '../../src/components/container/PageContainer';
import DashboardCard from '../../src/components/shared/DashboardCard';
import FullLayout from '../../src/layouts/full/FullLayout';
import ModalImage from "react-modal-image";

const Icons = () => {
  return (
    <PageContainer title="Icons" description="this is Icons">

      <DashboardCard title="Prizes">
      <div className="container grid grid-cols-3 gap-2 mx-auto">
      <div className="w-full rounded">
            <ModalImage
              small="https://images.unsplash.com/photo-1682709848256-ea9a528e2f79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              large="https://images.unsplash.com/photo-1682709848256-ea9a528e2f79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt="image"
            />
          </div>
          <div className="w-full rounded">
            <ModalImage
              small="https://images.unsplash.com/photo-1682681857663-7a5cf876ad1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              large="https://images.unsplash.com/photo-1682681857663-7a5cf876ad1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt="image"
            />
          </div>
          <div className="w-full rounded">
            <ModalImage
              small="https://plus.unsplash.com/premium_photo-1682500051076-9b4119f644b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              large="https://plus.unsplash.com/premium_photo-1682500051076-9b4119f644b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
              alt="image"
            />
          </div>
          <div className="w-full rounded">
            <ModalImage
              small="https://images.unsplash.com/photo-1682748518466-363fbb22abee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              large="https://images.unsplash.com/photo-1682748518466-363fbb22abee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="image"
            />
          </div>
          <div className="w-full rounded">
            <ModalImage
              small="https://images.unsplash.com/photo-1682616323196-8a4df1e30151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              large="https://images.unsplash.com/photo-1682616323196-8a4df1e30151?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
              alt="image"
            />
          </div>
          <div className="w-full rounded">
            <ModalImage
              small=" https://plus.unsplash.com/premium_photo-1677087122572-dfd9f7ab2e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              large=" https://plus.unsplash.com/premium_photo-1677087122572-dfd9f7ab2e44?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
              alt="image"
            />
          </div>
         


         

        
          


    
</div>
      </DashboardCard>
    </PageContainer>
  );
};

export default Icons;
Icons.getLayout = function getLayout(page: ReactElement) {
  return <FullLayout>{page}</FullLayout>;
};