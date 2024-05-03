"use client";

import { useContext, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import { Button } from "../ui/button";
import { BiLogIn } from "react-icons/bi";
import Image from "next/image";
import { AuthContext } from "@/context/auth/AuthContext";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

export default function Menu() {
  let [open, setOpen] = useState(false);
  const { auth, user, login, logout } = useContext(AuthContext);

  let Links = [
    { name: "Inicio", link: "/" },
    { name: "Sobre", link: "/about" },
    { name: "Preço", link: "/price" },
    { name: "Contato", link: "/contact" },
  ];

  return (
    <div className="shadow-md  w-full fixed z-20 top-0 left-0">
      <div className="md:flex items-center justify-between bg-black py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <div className="">
            <Image
              alt="Logo"
              src="/favicon.svg"
              width={38}
              height={38}
              priority
            />
          </div>
          <span>LinkLite</span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <HiMenu /> : <HiMenuAlt3 />}
        </div>

        <ul
          className={`md:flex bg-black md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-12" : "top-[-490px] "
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.link}
              className="md:ml-8 md:my-0 my-7 font-semibold md:mr-4"
            >
              <a href={link.link} className=" hover:text-primary duration-500">
                {link.name}
              </a>
            </li>
          ))}
          {auth ? (
            <div className="md:flex items-center space-x-1">
              <Select>
                <SelectTrigger className="max-w-[180px]">
                  <div className="flex-row justify-center">
                    <p>Bem Vindo</p>
                    <p>{user.name}</p>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <div className="flex flex-col">
                    <Button variant={"link"} className="text-white">
                      Perfil
                    </Button>
                    <Button
                      variant={"link"}
                      className="text-white"
                      onClick={async () => {
                        {
                          logout();
                        }
                      }}
                    >
                      Sair
                    </Button>
                  </div>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="flex space-x-4">
              <Button
                variant={"secondary"}
                className="flex items-center justify-center"
                onClick={() => {
                  login({ email: "a", password: "a" });
                }}
              >
                Login <BiLogIn size={24} />
              </Button>
              <Button>Registro</Button>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
