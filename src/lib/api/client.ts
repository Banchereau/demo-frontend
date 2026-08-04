import { config } from "@/lib/config";

export const api = {
  cluster: `${config.backendApi}/cluster`,
  events: `${config.backendApi}/events`,
  pods: `${config.backendApi}/pods`,
  services: `${config.backendApi}/services`,
  deployments: `${config.backendApi}/deployments`,
  namespaces: `${config.backendApi}/namespaces`,
  certificates: `${config.backendApi}/certificates`,
  ingresses: `${config.backendApi}/ingresses`,
};
