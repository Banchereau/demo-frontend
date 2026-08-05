export interface HealthComponent {
  name: string;
  status: "healthy" | "degraded" | "unhealthy" | "unknown";
  message: string;
}

export interface PlatformHealth {
  status: "healthy" | "degraded";
  components: HealthComponent[];
}
