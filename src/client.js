import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "u2r2hkl3",
  dataset: "production",
  useCdn: true,
});
