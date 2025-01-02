'use client'

import { useEffect, useState } from "react";
import { LogIn, signup } from "@/lib/auth-action";

export default function SignUp(){
          return (
            <div>
              <h1>Sign Up</h1>
              <form onSubmit={
                   async (e) =>{
                    e.preventDefault()
                    let data = Object.fromEntries(new FormData(e.currentTarget).entries())
                    data.role="student";
                     await signup(data);
                    }
                
              }>
                <div>
                    <label htmlFor ="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                </div>
                <div>
                    <label htmlFor="usn" >USN:</label>
                    <input type="text" id="usn" name="usn" placeholder="Your USN" required />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    // onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="hashedPassword"
                    placeholder="Your Password"
                    // onChange={handleChange}
                    required
                  />
                </div>
                <div>
                    <label htmlFor="image" >Image:</label>
                    <input type="text" id="image" name="image" required />
                </div>
                <div>
                    <label htmlFor="phoneno" >Phone Number:</label>
                    <input type="text" id="phoneno" name="phNo" required />
                </div>
                <div>
                    <label htmlFor="department" >Department:</label>
                    <input type="text" id="department" name="departmentName" required />
                </div>
                <button type="submit">Signup</button>
              </form>
            </div>
          );
        };
        