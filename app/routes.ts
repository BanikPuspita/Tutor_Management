// app/routes.ts
import { type RouteConfig, layout } from "@react-router/dev/routes";
import { authRoutes } from "./routes/auth.routes";
import { publicRoutes } from "./routes/public.routes";
import { privateRoutes } from "./routes/private.routes";

export default [
  layout("pages/auth/layout.tsx", authRoutes),
  layout("pages/private/layout.tsx", privateRoutes),
  layout("pages/public/layout.tsx", publicRoutes),  // ← This loads your dashboard
] satisfies RouteConfig;