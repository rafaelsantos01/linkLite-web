"use client";
import Container from "@/components/container/Container";
import Menu from "@/components/menu/Menu";
import NewShortenURL from "@/components/newShorten/NewShortenURL";
import TableLinks from "@/components/tableLinks/TableLinks";
import { AuthContext } from "@/context/auth/AuthContext";
import { useContext } from "react";

export default function Home() {
  const { auth } = useContext(AuthContext);
  return (
    <div>
      <Menu />
      <Container>
        <NewShortenURL />
        {auth && <TableLinks />}
      </Container>
    </div>
  );
}
