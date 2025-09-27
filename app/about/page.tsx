import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CheckCircle, Leaf, Recycle, Users, ArrowLeft } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" asChild className="mr-2">
              <Link href="/">
                <ArrowLeft className="h-5 w-5 text-[#005c2f]" />
                <span className="sr-only">Volver</span>
              </Link>
            </Button>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/images/wastetrack-logo.png"
                width={40}
                height={40}
                alt="WasteTrack Logo"
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-[#005c2f]">WasteTrack</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#beneficios" className="text-sm font-medium hover:text-[#005c2f] transition-colors">
              Beneficios
            </Link>
            <Link href="/#caracteristicas" className="text-sm font-medium hover:text-[#005c2f] transition-colors">
              Características
            </Link>
            <Link href="/#testimonios" className="text-sm font-medium hover:text-[#005c2f] transition-colors">
              Testimonios
            </Link>
            <Link href="/#contacto" className="text-sm font-medium hover:text-[#005c2f] transition-colors">
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
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Sobre WasteTrack</h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed">
                  Transformando la gestión de residuos urbanos para crear ciudades más limpias y sostenibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div>
                <Image
                  src="/images/ciudades.png"
                  width={550}
                  height={550}
                  alt="Nuestra misión"
                  className="mx-auto rounded-xl object-contain shadow-xl"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Nuestra misión</h2>
                <p className="text-gray-500 md:text-lg/relaxed">
                  En WasteTrack, nuestra misión es revolucionar la forma en que las ciudades gestionan sus residuos.
                  Creemos que la tecnología puede ser un catalizador para crear entornos urbanos más limpios, eficientes
                  y sostenibles.
                </p>
                <p className="text-gray-500 md:text-lg/relaxed">
                  Trabajamos para empoderar tanto a municipalidades como a ciudadanos con herramientas que faciliten la
                  colaboración y mejoren la eficiencia en la gestión de residuos, contribuyendo a la creación de
                  ciudades más habitables y respetuosas con el medio ambiente.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter">Nuestros valores</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-green-100">
                  <Leaf className="h-6 w-6 text-[#005c2f]" />
                </div>
                <h3 className="text-xl font-bold">Sostenibilidad</h3>
                <p className="text-gray-500">
                  Promovemos prácticas sostenibles que reducen el impacto ambiental y mejoran la calidad de vida.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-green-100">
                  <Users className="h-6 w-6 text-[#005c2f]" />
                </div>
                <h3 className="text-xl font-bold">Colaboración</h3>
                <p className="text-gray-500">
                  Creemos en el poder de la colaboración entre ciudadanos, municipalidades y empresas.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-green-100">
                  <Recycle className="h-6 w-6 text-[#005c2f]" />
                </div>
                <h3 className="text-xl font-bold">Innovación</h3>
                <p className="text-gray-500">
                  Utilizamos tecnología de vanguardia para resolver problemas complejos de gestión de residuos.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-2 p-6 bg-white rounded-lg shadow-sm">
                <div className="p-3 rounded-full bg-green-100">
                  <CheckCircle className="h-6 w-6 text-[#005c2f]" />
                </div>
                <h3 className="text-xl font-bold">Transparencia</h3>
                <p className="text-gray-500">
                  Promovemos la transparencia en todos los procesos de gestión de residuos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#2ca05a] text-white">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <div className="grid gap-6 lg:grid-cols-1 lg:gap-12 items-center">
              <div className="space-y-4 text-center mx-auto max-w-3xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ¿Quieres formar parte del cambio?
                </h2>
                <p className="text-green-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Únete a las municipalidades y ciudadanos que ya están creando ciudades más limpias y sostenibles con
                  WasteTrack.
                </p>
                <div className="pt-4">
                  <Button className="bg-white text-[#005c2f] hover:bg-green-50" asChild>
                    <Link href="/#contacto">Contáctanos</Link>
                  </Button>
                </div>
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
                  <Link href="/#caracteristicas" className="hover:text-[#005c2f] transition-colors">
                    Características
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#005c2f] transition-colors">
                    Precios
                  </Link>
                </li>
                <li>
                  <Link href="/#testimonios" className="hover:text-[#005c2f] transition-colors">
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
                  <Link href="/#contacto" className="hover:text-[#005c2f] transition-colors">
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
