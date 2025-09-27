import Link from "next/link"
import Image from "next/image"
import { DemoForm } from "@/components/demo-form"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export default function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-green-50 p-4">
      <div className="absolute left-4 top-4 sm:left-8 sm:top-8">
        <Button variant="ghost" size="icon" asChild className="rounded-full">
          <Link href="/">
            <ArrowLeft className="h-6 w-6 text-[#005c2f]" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
      </div>

      <Link href="/" className="absolute left-16 top-4 sm:left-20 sm:top-8 flex items-center gap-2">
        <Image src="/images/wastetrack-logo.png" width={30} height={30} alt="WasteTrack Logo" />
        <span className="text-lg font-bold text-[#005c2f]">WasteTrack</span>
      </Link>

      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="space-y-4 text-center mb-6">
          <h1 className="text-2xl font-bold text-[#005c2f]">Solicitar demostración</h1>
          <p className="text-gray-500">
            Completa el formulario para programar una demostración personalizada de WasteTrack
          </p>
        </div>

        <DemoForm />
      </div>
    </div>
  )
}
