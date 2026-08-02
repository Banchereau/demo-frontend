export interface KubernetesNamespace {
  name: string;
  status: string;
}

export interface NamespaceResponse {
  status: string;
  namespaces: KubernetesNamespace[];
  error: string | null;
}
