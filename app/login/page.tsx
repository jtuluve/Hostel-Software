'use client'

import { useEffect, useState } from "react";
import { LogIn } from "@/lib/auth-action";

export default function SignIn(){
          return (
            <div>
              <h1>Sign Up</h1>
              <form onSubmit={
                   async (e) =>{
                    e.preventDefault()
                    let data = Object.fromEntries(new FormData(e.currentTarget).entries())
                    let {email,password} = data
                     await LogIn({email,password});
                    }
                
              }>
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
                    name="password"
                    placeholder="Your Password"
                    // onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit">Signup</button>
              </form>
            </div>
          );
        };
        