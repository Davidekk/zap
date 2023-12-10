import { Schema, models, model, Document } from "mongoose"

export interface IGroup extends Document {
  name: string
  group: string
  round: string
}

const GroupSchema = new Schema<IGroup>({
  name: {
    type: String,
    required: true,
  },
  group: {
    type: String,
    required: true,
  },
  round: {
    type: String,
    required: true,
  },
})

const Group = models.Group || model("Group", GroupSchema)

export default Group
