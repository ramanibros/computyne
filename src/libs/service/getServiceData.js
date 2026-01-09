import services from "../../../public/data/service/data-collections.json";

const getServiceData = (slug) => {
  if (!slug) return null;
  return services[slug] || null;
};

export default getServiceData;
