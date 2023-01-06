import Bio from "../../components/announcement/bio";
import Comments from "../../components/announcement/box_comments";
import BoxMessage from "../../components/announcement/box_message";
import Description from "../../components/announcement/description/description";
import Photos from "../../components/announcement/photos";
import VehicleInfo from "../../components/announcement/vehicle_info";
import VehiclePhoto from "../../components/announcement/vehicle_photo";
import Footer from "../../components/footers/footer";
import Header from "../../components/header";
import {
  ArticleBioAndPhotos,
  DivInfosAndComments,
  PageAnnouncement,
} from "./style";

function Announcement() {
  return (
    <>
      <Header />
      <PageAnnouncement>
        <DivInfosAndComments>
          <VehiclePhoto />
          <VehicleInfo />
          <Description />
          <Comments />
          <BoxMessage />
        </DivInfosAndComments>
        <ArticleBioAndPhotos>
          <Photos />
          <Bio />
        </ArticleBioAndPhotos>
      </PageAnnouncement>
      <Footer />
    </>
  );
}

export default Announcement;
