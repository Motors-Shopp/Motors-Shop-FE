import { vehicle } from "../vehicle";
import { ContentPhotos } from "./style";

function Photos(): JSX.Element {
  return (
    <>
      <ContentPhotos>
        <div>
          <h4>Fotos</h4>
        </div>

        <section>
          <div>
            <div>
              <img src={vehicle.img} alt={vehicle.name}></img>
            </div>
            <div>
              <img src={vehicle.img} alt={vehicle.name}></img>
            </div>
            <div>
              <img src={vehicle.img} alt={vehicle.name}></img>
            </div>
          </div>
          <div>
            <div>
              <img src={vehicle.img} alt={vehicle.name}></img>
            </div>
            <div>
              <img src={vehicle.img} alt={vehicle.name}></img>
            </div>
            <div>
              <img src={vehicle.img} alt={vehicle.name}></img>
            </div>
          </div>
        </section>
      </ContentPhotos>
    </>
  );
}

export default Photos;
