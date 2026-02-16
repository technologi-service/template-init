import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChefHat,
  ShoppingBag,
  Truck,
  Database,
  Key,
  Mail,
  ShieldCheck,
  Zap,
  FileCode2,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { auth } from "@/lib/auth/server";
import { headers } from "next/headers";
import { UserButton } from "@/components/domain/auth/user-button";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 dark:bg-zinc-950 font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-white/80 backdrop-blur-md px-6 dark:bg-zinc-900/80 sm:px-12">
        <div className="flex items-center gap-2 font-bold text-xl">
          <div className="rounded-lg bg-orange-600 p-1 text-white">
            <Zap size={24} fill="white" />
          </div>
          <span className="tracking-tight">
            Template<span className="text-orange-600">Init</span>
          </span>
        </div>
        <div className="flex items-center gap-4">
          {session ? (
            <UserButton />
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="ghost">Entrar</Button>
              </Link>
              <Link href="/sign-up">
                <Button className="bg-orange-600 hover:bg-orange-700">
                  Comenzar
                </Button>
              </Link>
            </>
          )}
        </div>
      </header>

      <main className="flex-1">
        {/* Fullstack Tech Stack Section */}
        <section className="px-6 py-20 text-center sm:px-12 lg:py-32 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100 dark:bg-orange-900/30 dark:text-orange-400 border-none px-4 py-1">
            V1.0 AI-Native Starter Kit
          </Badge>
          <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-7xl">
            Arquitectura de{" "}
            <span className="text-orange-600">Misión Crítica</span>
          </h1>
          <p className="mx-auto mb-16 max-w-3xl text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            Este template viene pre-configurado con un stack inmutable diseñado
            para escalar desde el primer día. Todo lo que necesitas para
            construir apps premium está aquí.
          </p>

          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 text-left sm:grid-cols-4 sm:gap-6">
            <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
              <Database className="mb-4 text-orange-600" size={32} />
              <h3 className="font-bold">Neon DB</h3>
              <p className="text-sm text-zinc-500">
                Postgres Serverless con Drizzle ORM y migraciones automáticas.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
              <ShieldCheck className="mb-4 text-orange-600" size={32} />
              <h3 className="font-bold">Better Auth</h3>
              <p className="text-sm text-zinc-500">
                Sesiones seguras y gestión de roles lista para usar.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
              <Mail className="mb-4 text-orange-600" size={32} />
              <h3 className="font-bold">Resend</h3>
              <p className="text-sm text-zinc-500">
                Emails transaccionales con React Email pre-diseñados.
              </p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-zinc-900 dark:border-zinc-800">
              <FileCode2 className="mb-4 text-orange-600" size={32} />
              <h3 className="font-bold">Zod & Bun</h3>
              <p className="text-sm text-zinc-500">
                Validación de entorno y runtime ultra rápido.
              </p>
            </div>
          </div>
        </section>

        {/* Configuration Guide / API Keys Section */}
        <section className="border-y bg-zinc-50 py-24 dark:bg-zinc-950 px-6 sm:px-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight">
              Guía de Configuración
            </h2>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4 rounded-xl border bg-white p-6 dark:bg-zinc-900 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20">
                    <Database size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Neon Database URL</h4>
                    <p className="text-sm text-zinc-500 italic">DATABASE_URL</p>
                  </div>
                </div>
                <a
                  href="https://console.neon.tech"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    Obtener en Neon <ExternalLink size={14} />
                  </Button>
                </a>
              </div>

              <div className="flex flex-col gap-4 rounded-xl border bg-white p-6 dark:bg-zinc-900 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-50 text-orange-600 dark:bg-orange-900/20">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Resend API Key</h4>
                    <p className="text-sm text-zinc-500 italic">
                      RESEND_API_KEY
                    </p>
                  </div>
                </div>
                <a
                  href="https://resend.com/overview"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    Obtener en Resend <ExternalLink size={14} />
                  </Button>
                </a>
              </div>

              <div className="flex flex-col gap-4 rounded-xl border bg-white p-6 dark:bg-zinc-900 dark:border-zinc-800 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
                    <Key size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Better Auth Secret</h4>
                    <p className="text-sm text-zinc-500 italic">
                      BETTER_AUTH_SECRET
                    </p>
                  </div>
                </div>
                <a
                  href="https://www.better-auth.com/docs"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    Ver Documentación <ExternalLink size={14} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section (Roles) */}
        <section className="px-6 py-24 text-center sm:px-12 sm:py-32">
          <div className="mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Demo: Redirección Inteligente
            </h2>
            <p className="text-zinc-500">
              Prueba el sistema de gestión de roles que ya está operando.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-3">
            <Card className="flex flex-col transition-all hover:scale-105 hover:shadow-xl dark:border-zinc-800">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30">
                  <ShoppingBag size={24} />
                </div>
                <CardTitle>Usuario</CardTitle>
                <CardDescription>
                  Redirige a /dashboard/user tras el login.
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Link href="/sign-up?role=user" className="w-full">
                  <Button variant="outline" className="w-full">
                    Probar como Usuario
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col transition-all hover:scale-105 hover:shadow-xl dark:border-zinc-800">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30">
                  <ChefHat size={24} />
                </div>
                <CardTitle>Cocina</CardTitle>
                <CardDescription>
                  Redirige a /dashboard/kitchen tras el login.
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Link href="/sign-up?role=kitchen" className="w-full">
                  <Button variant="outline" className="w-full">
                    Probar como Cocina
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="flex flex-col transition-all hover:scale-105 hover:shadow-xl dark:border-zinc-800">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30">
                  <Truck size={24} />
                </div>
                <CardTitle>Delivery</CardTitle>
                <CardDescription>
                  Redirige a /dashboard/delivery tras el login.
                </CardDescription>
              </CardHeader>
              <CardFooter className="mt-auto">
                <Link href="/sign-up?role=delivery" className="w-full">
                  <Button variant="outline" className="w-full">
                    Probar como Repartidor
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white px-6 py-12 text-center text-zinc-500 dark:bg-zinc-900 sm:px-12">
        <div className="flex justify-center gap-6 mb-8 underline underline-offset-4 font-medium text-zinc-900 dark:text-zinc-50">
          <Link href="/docs/user-stories">User Stories</Link>
          <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer">
            Next JS 16
          </a>
          <a href="https://vercel.com" target="_blank" rel="noreferrer">
            Deployment
          </a>
        </div>
        <p className="text-sm">
          © 2026 Template Init Engine. Built for High Velocity Execution.
        </p>
      </footer>
    </div>
  );
}
