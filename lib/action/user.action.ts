"use server"

import Group from "@/database/round"
import { connectToDatabase } from "../mongodb/connectdb"

interface RoundParams {
  name: string
  group: string
  round: string
}

export const createRound = async (params: RoundParams) => {
  try {
    await connectToDatabase()

    const { name, group, round } = params

    console.log(name, group, round)

    if (!name || !group || !round) {
      return console.log("MISSING PARAMS")
    }

    const created = await Group.create({
      name,
      group,
      round,
    })

    return created
  } catch (e) {
    console.log(e)
  }
}
