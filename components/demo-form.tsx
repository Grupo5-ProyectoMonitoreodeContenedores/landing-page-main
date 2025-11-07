"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

export function DemoForm() { // Formulario de solicitud de demostración
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar los datos del formulario
    console.log("Formulario enviado:", formData)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 py-4">
        <CheckCircle className="h-16 w-16 text-[#2ca05a]" />
        <h2 className="text-xl font-bold text-center">¡Solicitud enviada!</h2>
        <p className="text-center text-gray-500">
          Gracias por tu interés en WasteTrack. Nos pondremos en contacto contigo pronto para coordinar tu demostración
          personalizada.
        </p>
        <Button asChild className="mt-4 bg-[#2ca05a] hover:bg-[#005c2f]">
          <Link href="/">Volver al inicio</Link>
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="firstName">Nombre</Label>
          <Input id="firstName" placeholder="Juan" value={formData.firstName} onChange={handleChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Apellido</Label>
          <Input id="lastName" placeholder="Pérez" value={formData.lastName} onChange={handleChange} required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Correo electrónico</Label>
        <Input
          id="email"
          type="email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="organization">Organización</Label>
        <Input
          id="organization"
          placeholder="Nombre de tu municipalidad"
          value={formData.organization}
          onChange={handleChange}
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Teléfono</Label>
        <Input id="phone" type="tel" placeholder="+1 (234) 567-89" value={formData.phone} onChange={handleChange} />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">¿Qué te interesa conocer de WasteTrack?</Label>
        <Textarea
          id="message"
          placeholder="Cuéntanos sobre tus necesidades específicas..."
          className="min-h-[100px]"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <Button type="submit" className="w-full bg-[#2ca05a] hover:bg-[#005c2f]">
        Solicitar demostración
      </Button>
    </form>
  )
}
