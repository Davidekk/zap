"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { reTry } from "@/lib/validation/validation"
import { useState } from "react"
import { createRound } from "@/lib/action/user.action"

const Round = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof reTry>>({
    resolver: zodResolver(reTry),
    defaultValues: {
      name: "",
      group: "",
      round: "",
    },
  })

  async function onSubmit(values: z.infer<typeof reTry>) {
    setIsSubmitting(true)

    console.log(values.name, values.group, values.round)
    try {
      await createRound({
        name: values.name,
        group: values.group,
        round: values.round,
      })
    } catch (err) {
      console.log(err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full min-w-[350px] flex-col gap-2.5 "
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Meno a priezvisko:</FormLabel>
              <FormControl>
                <Input placeholder="Meno" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="group"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skupina:</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Vyber skupinu" />
                  </SelectTrigger>
                  <SelectContent className="background-light900_dark200">
                    <SelectGroup>
                      <SelectItem value="a8-stvrtok-7.30">
                        A8 št 7.30
                      </SelectItem>
                      <SelectItem value="b1-stvrtok-13.30">
                        B1 št 13.30
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="round"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Round:</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Vyber skupinu" />
                  </SelectTrigger>
                  <SelectContent className="background-light900_dark200">
                    <SelectGroup>
                      <SelectItem value="round-1">Round 1</SelectItem>
                      <SelectItem value="round-2">Round 2</SelectItem>
                      <SelectItem value="round-3">Round 3</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="primary-gradient  !text-light-900 mx-auto mt-5 w-fit"
          disabled={isSubmitting}
        >
          {isSubmitting ? <>odosielam...</> : <>Prihlásiť sa</>}
        </Button>
      </form>
    </Form>
  )
}

export default Round
