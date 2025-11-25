"use client"

import type { FormEvent, ChangeEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface AuthFormProps {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  fields: Array<{
    id: string
    name: string
    type: string
    label: string
    placeholder: string
    required?: boolean
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
  }>
  submitLabel: string
  loading: boolean
}

export function AuthForm({ onSubmit, fields, submitLabel, loading }: AuthFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {fields.map((field) => (
        <div key={field.id}>
          <label htmlFor={field.id} className="block text-sm font-medium text-foreground mb-2">
            {field.label}
          </label>
          <Input {...field} required={field.required ?? true} />
        </div>
      ))}
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Processing..." : submitLabel}
      </Button>
    </form>
  )
}
