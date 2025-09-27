import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Recycle, Building2, Users, BarChart3, MapPin, ArrowRight, Leaf } from "lucide-react"
import { ContactForm } from "@/components/contact-form"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Image
              src="/images/wastetrack-logo.png"
              width={40}
              height={40}
              alt="WasteTrack Logo"
              className="h-10 w-10"
            />
            <span className="text-xl font-bold text-[#005c2f]">WasteTrack</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#beneficios" className="text-sm font-medium hover:text-[#005c2f] transition-colors">
              Beneficios
            </Link>
            <Link href="#caracteristicas" className="text-sm font-medium hover:text-[#005c2f] transition-colors">
              Características
            </Link>
            <Link href="#testimonios" className="text-sm font-medium hover:text-[#005c2f] transition-colors">
              Testimonios
            </Link>
            <Link href="#contacto" className="text-sm font-medium hover:text-[#005c2f] transition-colors">
              Contacto
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex" asChild>
              <Link href="/login">Iniciar sesión</Link>
            </Button>
            <Button className="bg-[#2ca05a] hover:bg-[#005c2f]" asChild>
              <Link href="/register">Registrarse</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-green-50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Gestión Inteligente de Residuos
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Transformando la gestión de residuos urbanos
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  WasteTrack es la plataforma que conecta municipalidades y ciudadanos para crear ciudades más limpias y
                  sostenibles a través de la gestión inteligente de residuos.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-[#2ca05a] hover:bg-[#005c2f]" asChild>
                    <Link href="/demo">Solicitar demostración</Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/about">
                      Conocer más <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="mx-auto w-full max-w-[500px] lg:max-w-none">
                <Image
                  src="/images/principal.png"
                  width={550}
                  height={550}
                  alt="WasteTrack Gestión de Residuos"
                  className="w-full rounded-xl object-contain shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="beneficios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Beneficios</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Soluciones para todos</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  WasteTrack ofrece beneficios específicos tanto para municipalidades como para ciudadanos.
                </p>
              </div>
            </div>
            <Tabs defaultValue="municipalidades" className="mt-12">
              <div className="flex justify-center">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="municipalidades" className="text-sm md:text-base">
                    <Building2 className="mr-2 h-4 w-4" />
                    Municipalidades
                  </TabsTrigger>
                  <TabsTrigger value="ciudadanos" className="text-sm md:text-base">
                    <Users className="mr-2 h-4 w-4" />
                    Ciudadanos
                  </TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="municipalidades" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <BarChart3 className="h-10 w-10 text-[#005c2f] mb-2" />
                      <CardTitle>Optimización de recursos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        Reduce costos operativos y mejora la eficiencia en la recolección de residuos mediante análisis
                        de datos en tiempo real.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <MapPin className="h-10 w-10 text-[#005c2f] mb-2" />
                      <CardTitle>Planificación inteligente</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        Optimiza rutas de recolección y distribuye recursos según las necesidades reales de cada zona.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Leaf className="h-10 w-10 text-[#005c2f] mb-2" />
                      <CardTitle>Impacto ambiental</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        Reduce la huella de carbono y mejora los indicadores ambientales de tu municipio con datos
                        precisos.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="ciudadanos" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader>
                      <CheckCircle className="h-10 w-10 text-[#005c2f] mb-2" />
                      <CardTitle>Participación activa</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        Contribuye directamente a la mejora de tu comunidad reportando problemas y siguiendo el estado
                        de tus reportes.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Recycle className="h-10 w-10 text-[#005c2f] mb-2" />
                      <CardTitle>Educación ambiental</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        Accede a información sobre reciclaje, separación de residuos y prácticas sostenibles adaptadas a
                        tu localidad.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <Users className="h-10 w-10 text-[#005c2f] mb-2" />
                      <CardTitle>Comunidad sostenible</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500">
                        Conecta con vecinos comprometidos y participa en iniciativas locales para mejorar la gestión de
                        residuos.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section id="caracteristicas" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">
                  Características
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Una plataforma completa</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  WasteTrack ofrece todas las herramientas necesarias para revolucionar la gestión de residuos en tu
                  ciudad.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/images/analisis.png"
                width={550}
                height={550}
                alt="Análisis de datos WasteTrack"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-contain sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-[#005c2f]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Mapeo en tiempo real</h3>
                      <p className="text-gray-500 mt-2">
                        Visualiza la ubicación de contenedores, puntos de reciclaje y reportes ciudadanos en un mapa
                        interactivo.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-[#005c2f]">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Análisis de datos</h3>
                      <p className="text-gray-500 mt-2">
                        Obtén estadísticas detalladas sobre generación de residuos, tasas de reciclaje y eficiencia de
                        recolección.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-100 text-[#005c2f]">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Participación ciudadana</h3>
                      <p className="text-gray-500 mt-2">
                        Facilita la comunicación entre ciudadanos y autoridades para resolver problemas de manera
                        colaborativa.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonios" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800">Testimonios</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Lo que dicen nuestros usuarios
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre cómo WasteTrack está transformando la gestión de residuos en diferentes comunidades.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <Card className="border-green-100">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/maria.jpg"
                      width={60}
                      height={60}
                      alt="María Rodríguez"
                      className="rounded-full object-cover h-[60px] w-[60px]"
                    />
                    <div>
                      <CardTitle>María Rodríguez</CardTitle>
                      <CardDescription>Directora de Servicios Municipales</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    "WasteTrack ha revolucionado nuestra gestión de residuos. Hemos reducido los costos operativos en un
                    30% y mejorado significativamente la satisfacción ciudadana con nuestros servicios."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-green-100">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Image
                      src="/images/carlos.jpg"
                      width={60}
                      height={60}
                      alt="Carlos Méndez"
                      className="rounded-full object-cover h-[60px] w-[60px]"
                    />
                    <div>
                      <CardTitle>Carlos Méndez</CardTitle>
                      <CardDescription>Ciudadano comprometido</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-500">
                    "Como ciudadano, me encanta poder reportar problemas directamente y ver cómo se resuelven. La
                    aplicación es intuitiva y realmente siento que estoy contribuyendo a mejorar mi comunidad."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contacto" className="w-full py-12 md:py-24 lg:py-32 bg-[#2ca05a] text-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Listo para transformar la gestión de residuos en tu ciudad?
                </h2>
                <p className="max-w-[600px] text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Únete a las municipalidades y ciudadanos que ya están creando ciudades más limpias y sostenibles con
                  WasteTrack.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-xl font-bold text-[#005c2f] mb-4">Contacto</h3>
                <ContactForm darkMode={true} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/wastetrack-logo.png"
                  width={30}
                  height={30}
                  alt="WasteTrack Logo"
                  className="h-8 w-8"
                />
                <span className="text-lg font-bold text-[#005c2f]">WasteTrack</span>
              </div>
              <p className="text-sm text-gray-500">
                Transformando la gestión de residuos urbanos para crear ciudades más limpias y sostenibles.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Plataforma</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="#caracteristicas" className="hover:text-[#005c2f] transition-colors">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#005c2f] transition-colors">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="#testimonios" className="hover:text-[#005c2f] transition-colors">
                    Casos de éxito
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#005c2f] transition-colors">
                    Recursos
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <Link href="/about" className="hover:text-[#005c2f] transition-colors">
                    Sobre nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#005c2f] transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#005c2f] transition-colors">
                    Carreras
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="hover:text-[#005c2f] transition-colors">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Contacto</h3>
              <ul className="space-y-2 text-sm text-gray-500">
                <li>
                  <a href="mailto:info@wastetrack.com" className="hover:text-[#005c2f] transition-colors">
                    info@wastetrack.com
                  </a>
                </li>
                <li>
                  <a href="tel:+123456789" className="hover:text-[#005c2f] transition-colors">
                    +1 (234) 567-89
                  </a>
                </li>
                <li>
                  <address className="not-italic">
                    Av. Sostenibilidad 123
                    <br />
                    Ciudad Verde, CP 12345
                  </address>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">
              © {new Date().getFullYear()} WasteTrack. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-xs text-gray-500 hover:text-[#005c2f] transition-colors">
                Términos de servicio
              </Link>
              <Link href="#" className="text-xs text-gray-500 hover:text-[#005c2f] transition-colors">
                Política de privacidad
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
