"use server";
import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { leaveForm, User } from "./models";

// Function to connect to MongoDB
async function connect() {
  try {
    if (mongoose.connection.readyState === 0) {
      console.log(mongoose.connection.readyState);
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Connected to MongoDB");
    } else {
      console.log(mongoose.connection.readyState);
      console.log("Already connected to MongoDB");
    }
    return true;
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return false;
  }
}

// Function to create a new user
export async function createUser(name: string, usn: string, email: string, hashedPassword: string, image: string, phNo: number,role:string,departmentName: string) {
  if (!email || !hashedPassword) {
    return { success: false, message: "Email and password are required" };
  }
  
  if ((await getUser(email)).data) {
    return { success: false, message: "User already exists" };
  }
  
  try {
    hashedPassword = await bcrypt.hashSync(hashedPassword, 10);
    // Connect to the database
    if (!(await connect()))
      return { success: false, message: "Internal Server Error" };
    // Create a new user object

    const newUser = new User({
        name,
        usn,
        email,
        hashedPassword,
        image,
        phNo,
        role,
        departmentName
    });

    // Save the new user to the database
    await newUser.save();
    return { success: true, message: "User created successfully" };
  } catch (error) {
    console.error("Error creating user:", error);
    return { success: false, message: "Internal Server Error" };
  }
}

export async function getUser(email: string) {
    try{
        if (!(await connect())) 
          return {success: false, message: "Internal Server Error"};
        return {success:true, data: await User.findOne({ email })};
    }catch(error){
        console.error("Error getting user:", error);
        return { success: false, message: "Internal Server Error" };
    }
}

export async function addLeaveForm({name,startDate,endDate,usn,email,reason,status = "requested",departmentName}: {name:string,startDate:Date,endDate:Date,usn:string,email:string,reason:string,status:string,departmentName:string}) {
  try{
    if(!(await connect()))
      return {success: false, message: "Internal Server Error"};
    return {success:true, data: await leaveForm.create({name,startDate,endDate,usn,email,reason,status,departmentName})};
  }catch(error){
    console.error("Error getting user:", error);
    return { success: false, message: "Internal Server Error" };
  }
}

export async function getLeaveApplications(departmentName:string){
    try{
        if (!(await connect())) 
          return {success: false, message: "Internal Server Error"};
        return {success:true, data: await  leaveForm.find({})};
    }catch(error){
        console.error("Error getting user:", error);
        return { success: false, message: "Internal Server Error" };
    }
}

export async function pendingLeaveApplications(departmentName:string){
    try{
        if (!(await connect())) 
          return {success: false, message: "Internal Server Error"};
        return {success:true, data: await  leaveForm.find({status:"requested", departmentName})};
    }catch(error){
        console.error("Error getting user:", error);
        return { success: false, message: "Internal Server Error" };
    }
}

export async function changeState(email:string,status:string){
  try{
    let state = ["requested", "approved", "rejected"]
    if (!(await connect())||state.includes(status)) 
      return {success: false, message: "Internal Server Error"};
    return {success:true, data: await  leaveForm.updateOne({email},{$set:{status}})};
}catch(error){
    console.error("Error getting user:", error);
    return { success: false, message: "Internal Server Error" };
}
}

