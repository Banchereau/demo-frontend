export const config = {
  backendApi:
    process.env.BACKEND_API ??
    "https://api.xcodewhisperer.fr",

  clusterApi:
    process.env.CLUSTER_API ??
    "https://api.xcodewhisperer.fr/cluster",
};
