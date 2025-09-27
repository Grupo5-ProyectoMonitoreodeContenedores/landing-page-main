"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

interface ContactFormProps {
  darkMode?: boolean
}

export function ContactForm({ darkMode = false }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar los datos del formulario
    console.log("Formulario enviado:", formData)
    setSubmitted(true)

    // Resetear el formulario después de 5 segundos
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: "",
        email: "",
        message: "",
      })
    }, 5000)
  }

  const labelClass = darkMode ? "text-[#005c2f] font-medium" : "text-gray-700"

  return (
    <>
      {submitted ? (
        <div className="flex flex-col items-center justify-center space-y-4 py-6">
          <CheckCircle className="h-16 w-16 text-[#2ca05a]" />
          <h3 className={`text-xl font-bold text-center ${darkMode ? "text-[#005c2f]" : ""}`}>
            ¡Mensaje enviado con éxito!
          </h3>
          <p className={`text-center ${darkMode ? "text-gray-700" : "text-gray-500"}`}>
            Gracias por contactarnos. Nos pondremos en contacto contigo pronto.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name" className={labelClass}>
              Nombre
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className={labelClass}>
              Correo electrónico
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className={labelClass}>
              Mensaje
            </Label>
            <Textarea
              id="message"
              name="message"
              placeholder="¿En qué podemos ayudarte?"
              value={formData.message}
              onChange={handleChange}
              className="min-h-[120px] bg-white"
              required
            />
          </div>
          <Button
            type="submit"
            className={
              darkMode ? "w-full bg-[#2ca05a] hover:bg-[#005c2f] text-white" : "w-full bg-[#2ca05a] hover:bg-[#005c2f]"
            }
          >
            Enviar mensaje
          </Button>
        </form>
      )}
    </>
  )
}
