import mongoose from "mongoose";
const inventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      required: [true, "inventory type require"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: [true, "Blood group is required"],
      enum: ["O+", "O-", "AB+", "AB-", "B+", "B-", "A+", "A-"],
    },
    quantity: {
      type: Number,
      required: [true, "blood quantity is required"],
    },
    email: {
      type: String,
      required: [true, "Donar email is required"],
    },
    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "Organisation is require"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "out";
      },
    },
    donar: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "in";
      },
    },
  },
  { timestamps: true }
);
const inventoryModel = mongoose.model("Inventory", inventorySchema);
export default inventoryModel;
