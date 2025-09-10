import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "k4xvtsjp",
  dataset: "production",
  apiVersion: "2023-03-01",
  useCdn: true,
});
