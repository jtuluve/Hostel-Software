import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
import { ST } from "next/dist/shared/lib/utils";


const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    usn: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    hashedPassword: { type: String, required: true },
    image : { type: String, required: true },
    phNo : { type: Number, required: true },
    role: {type: String, required: true, enum: ["student", "hod", "admin"]},
    departmentName: {type: String, required: true},
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export { User };


const leaveFormSchema = new mongoose.Schema({
    name: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate : { type: Date, required: true },
    usn: { type: String, required: true,unique: true },
    email: { type: String, required: true,unique: true },
    reason: { type: String, required: true },
    status : { type: String, required: true, enum: ["requested", "approved", "rejected"] },
    departmentName: {type: String, required: true},
});

const leaveForm = mongoose.models.leaveForm || mongoose.model("leaveForm", leaveFormSchema);

export { leaveForm };

const departmentSchema = new mongoose.Schema({
    departmentName: { type: String, required: true, unique: true },
    hodEmail:  {type:String, required: true, unique: true},
});

const department = mongoose.models.department || mongoose.model("department", departmentSchema);

export { department };