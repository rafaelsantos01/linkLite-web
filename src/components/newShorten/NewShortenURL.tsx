"use client";
import { AuthContext } from "@/context/auth/AuthContext";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { GoLink } from "react-icons/go";
import { useContext } from "react";

export default function NewShortenURL() {
  const { auth } = useContext(AuthContext);

  async function handleSubmit(formData: any) {
    const url = formData.get("url");
    console.log(url);
  }

  return (
    <div className="flex flex-col items-center justify-center md:mx-24 space-y-6 md:mt-20">
      {!auth && (
        <div className="flex flex-col space-y-2 items-center justify-center mt-20">
          <h1 className="font-semibold text-2xl md:text-4xl lg:text-5xl bg-gradient-to-r from-primary via-orange-400 to-red-800 text-transparent bg-clip-text">
            Encurte seus looongos links
          </h1>

          <h3 className="text-sm font-normal max-w-lg overflow-auto text-center">
            LinkLite é um serviço de encurtamento de URL eficiente e fácil de
            usar que agiliza sua experiência online.
          </h3>
        </div>
      )}

      <form action={handleSubmit} className="mt-28">
        <div className="relative">
          <GoLink className="absolute left-3 top-1/2 transform -translate-y-1/2" />
          <Input
            name="url"
            type="text"
            className="md:w-[700px] md:h-14 w-80 pl-10 pr-24 border border-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            placeholder="Coloque seu link aqui"
          />
          <Button
            className="md:h-12 absolute md:right-1  right-0 top-1/2 transform -translate-y-1/2"
            type="submit"
          >
            Encurtar !
          </Button>
        </div>
      </form>
    </div>
  );
}
