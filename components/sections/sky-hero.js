import ButtonLink from "../elements/button-link";
import { getButtonAppearance } from "utils/button";
import Image from "../elements/image";
const SkyHero = ({ data }) => {
  return (
    <div style={{ backgroundColor: data.skyStyle }} className="skystra-hero">
      <main className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1 sm:pr-8">
          <h1>{data.Title}</h1>
          <div className="flex flex-row flex-wrap gap-4">
            <div>
              {data.Button.map((button) => (
                <ButtonLink
                  button={button}
                  appearance={getButtonAppearance(button.type, "light")}
                  key={button.id}
                />
              ))}
              <span>{data.offer}</span>
            </div>
            <ul className="mt-4 flex flex-col gap-3">
              {data.features.map((feature) => (
                <li
                  className="flex flex-row justify-between items-center"
                  key={feature.id}
                >
                  <span>{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Image
          media={data.featureImage}
          className="flex-shrink-0 object-contain w-full md:w-6/12 mt-6 md:mt-0"
        />
      </main>
    </div>
  );
};

export default SkyHero;
