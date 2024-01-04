'use client'
import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser'
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import axios from "axios";
import { Loader } from "lucide-react";

type error = {
  name: string | null;
  email: string | null;
  text: string | null;
  number:string | null;
};

function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [company,setCompany]= useState('');
  const [number,setNumber] = useState('')
  const [error, setError] = useState<error>({
    name: null,
    email: null,
    text: null,
    number:null
  });
  const [isLoading, setIsLoading] = useState(false);

  function validateEmail(email: string) {
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    return emailRegex.test(email);
  }
  const validateNumber = async () => {
    try {
      const response = await axios.get(
        `https://phonevalidation.abstractapi.com/v1/?api_key=ab93cf75cf234d8c8d82fea347763da9&phone=${number}`
      );
      return response.data.valid;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  const formValidation = async() => {
    setIsLoading(true);
    const validNumber = await validateNumber()
    if (name.length === 0) {
      setError((prevError) => ({
        ...prevError,
        name: "Your name is required",
      }));
    }
    if( !validNumber){
        setError((error)=>{return{...error,number:'please enter a valid number'}});
        setIsLoading(false)
    }
    if (email.length === 0) {
      setError((prevError) => ({
        ...prevError,
        email: "Your email is required",
      }));
      setIsLoading(false)
    }
    if (text.length === 0) {
      setError((prevError) => ({
        ...prevError,
        text: "Please enter your message",
      }));
      setIsLoading(false)
    }
    if (email&&!validateEmail(email)) {
      setError((prevError) => ({
        ...prevError,
        email: "Please enter a valid email address",
      }));
      setIsLoading(false)
    } else if (name.length > 0 && email.length > 0 && text.length > 0) {
      console.log("success");
      emailjs
        .send(
          "service_mjqdz3s",
          "template_plse64a",
          {
            from_name: name,
            to_name: "Oakland",
            from_email: email,
            to_email: "matrix09941@gmail.com",
            message: text,
            from_company:company,
          },
          "-v5JgeEHdA0IeT5TG"
        )
        .then(
          () => {
            setIsLoading(false);
            setEmail("");
            setName("");
            setText("");
            setCompany('')
          },
          (Error:any) => {
            console.log(Error);
          }
        );
    }
  };

  const handleNumberChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9+]/g, '');
    setNumber(numericValue);
  };
  return (
    <form action="">
    <h3 className="text-neutral-800 text-[40px] font-normal mb-5 md:mb-10">
      Form
    </h3>
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
      <input
        type="text"
        className={`${error.name?"border-destructive":'border-muted'} w-full border focus:!border-primary !outline-none px-5 py-[10px] `}
        placeholder="Name "
        value={name}
        onChange={(e)=>{setError({...error,name:null});setName(e.target.value)}}
        />
        {error.name&&<p className="text-destructive text-xs mt-1" >{error.name}</p>}
        </div>
        <div className="relative">

      <input
        type="text"
        className={`${error.email?"border-destructive":'border-muted'} w-full border focus:!border-primary !outline-none px-5 py-[10px] `}
        placeholder="Email "
        value={email}
        onChange={(e)=>{setError({...error,email:null});setEmail(e.target.value)}}
        />
        {error.email&&<p className="text-destructive text-xs mt-1" >{error.email}</p>}
        </div>
        <div className="relative">

      <input
        type="text"
        className={`${error.number?"border-destructive":'border-muted'} w-full border focus:!border-primary !outline-none px-5 py-[10px]`}
        placeholder="Phone number "
        pattern="[0-9+]*"
        value={number}
        onChange={(e)=>{setError({...error,number:null});handleNumberChange(e)}}
        />
        {error.number&&<p className="text-destructive text-xs mt-1" >{error.number}</p>}
        </div>
        <div className="">

      <input
        type="text"
        className={`border-muted  border focus:!border-primary w-full !outline-none px-5 py-[10px]`}
        placeholder="Company (optional) "
        value={company}
        onChange={(e)=>{setCompany(e.target.value)}}
        />
        </div>
    </div>
    <div className="w-full">

    <textarea
      className={`${error.text?"border-destructive":'border-muted'} border-muted border focus:!border-primary !outline-none px-5 py-[10px] w-full mt-5`}
      placeholder="Message "
      value={text}
        onChange={(e)=>{setError({...error,text:null});setText(e.target.value)}}
      />
      {error.text&&<p className="text-destructive text-xs mt-1" >{error.text}</p>}
      </div>
    <div className="flex items-center my-5">
      <Checkbox
        id="confirmation"
        className="rounded-none border-muted h-6 w-6"
      />
      <label
        htmlFor="confirmation"
        className="ml-2 max-w-[727px] text-zinc-700 text-lg font-normal font-['Inter Tight'] leading-[25px]"
      >
        I consent to Oakland C.E. processing my data for contact
        purposes.
      </label>
    </div>
    <Button disabled = {isLoading} type="button" className="px-6 py-4 rounded-full" onClick={formValidation}>
      {isLoading?<Loader/>:'Send'}
    </Button>
  </form>
  );
}

export default Contact;
