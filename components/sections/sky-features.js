import Image from "../elements/image";

const SkyFeatures = ({ data }) => {
  return (
    <div className="skystra-features-list">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div className="main-item">
          <Image media={data.icon} />
          <span>{data.mainTitle}</span>
        </div>
        {data.skyFeaturesItem.map((item, index) => (
          <div key={index} className="item">
            <h3>{item.itemTitle}</h3>
            <p>{item.itemDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkyFeatures;
