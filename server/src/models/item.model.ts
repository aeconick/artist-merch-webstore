import { Schema, model } from "mongoose";

export interface Item {
  id: string;
  name: string;
  price: number;
  tags: string[];
  imageUrl: string;
  description: string;
}

export const ItemSchema = new Schema<Item>(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    tags: { type: [String] },
    imageUrl: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

export const ItemModel = model<Item>("item", ItemSchema);
