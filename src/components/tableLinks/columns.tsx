import { ColumnDef } from "@tanstack/react-table";
import { IoQrCodeOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "../ui/label";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiPrinter } from "react-icons/fi";
import { BiUnlink } from "react-icons/bi";
import { BiLink } from "react-icons/bi";
import { FaCopy } from "react-icons/fa6";
import { toast } from "../ui/use-toast";
import { IoMdMenu } from "react-icons/io";
import { Input } from "../ui/input";
import QRCode from "react-qr-code";

export type URL = {
  id: string;
  observation: string;
  short_link: string;
  original_link: string;
  qrCode: string;
  clicks: number;
  status: boolean;
  date: string;
};

export const columns: ColumnDef<URL>[] = [
  {
    accessorKey: "short_link",
    id: "Link Encurtado",
    header: "Link Encurtado",
    cell: ({ row }: { row: any }) => {
      const value: URL = row.original;
      const copyToClipboard = async (text: string) => {
        console.log(text);
        toast({
          title: "Link copiado com sucesso 😁",
          variant: "success",
        });
      };

      return (
        <div className="space-x-1 flex items-center ">
          <p>{value.short_link}</p>

          <Button
            variant={"ghost"}
            onClick={() => copyToClipboard(value.short_link)}
          >
            <FaCopy size={24} />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "original_link",
    id: "Link Original",
    header: "Link Original",
    cell: ({ row }: { row: any }) => {
      const value: URL = row.original;
      const textoOriginal = value.original_link;
      const textoExibido =
        textoOriginal.length > 30
          ? textoOriginal.substring(0, 30)
          : textoOriginal;

      return (
        <div className="space-x-1 flex items-center ">
          <p>{textoExibido}...</p>
        </div>
      );
    },
  },
  {
    accessorKey: "observation",
    header: "Observação",
  },
  {
    accessorKey: "qrCode",
    id: "QRCode",
    header: "QR Code",
    cell: ({ row }: { row: any }) => {
      const value: URL = row.original;

      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost">
              <IoQrCodeOutline size={24} />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>QRCode</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when done.
              </DialogDescription>
            </DialogHeader>
            <div className="flex items-center justify-center" id="my-node">
              <QRCode value={value.short_link} />
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Button>
                <FiPrinter size={24} />
              </Button>
              <Button>
                <FaInstagram size={24} />
              </Button>
              <Button onClick={() => {}}>
                <FaWhatsapp size={24} />
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      );
    },
  },
  {
    accessorKey: "clicks",
    id: "Cliques",
    header: "Cliques",
  },
  {
    accessorKey: "status",
    id: "Status",
    header: "Status",
    cell: ({ row }: { row: any }) => {
      const value: URL = row.original;
      const isActive = value.status;
      const textColor = isActive ? "text-green-700" : "text-yellow-700";
      const bgColor = isActive ? "bg-green-700" : "bg-yellow-700";
      const text = isActive ? "Ativo" : "Inativo";
      const Icon = isActive ? BiLink : BiUnlink;

      return (
        <div>
          <Label className={`flex items-center justify-start space-x-2`}>
            <div className={`${textColor} w-12`}>{text}</div>
            <div className={`${bgColor} rounded-full text-white p-1`}>
              <Icon size={23} />
            </div>
          </Label>
        </div>
      );
    },
  },
  {
    accessorKey: "ação",
    id: "Ações",
    header: () => {
      return <div className="select-none">Ações</div>;
    },
    cell: ({ row }: { row: any }) => {
      const data: URL = row.original;
      return (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost">
              <IoMdMenu size={24} />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Dados Da URL</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when done.
              </DialogDescription>
            </DialogHeader>

            <div className="flex-row space-y-4">
              <div className="space-y-1">
                <div>
                  <Label>Link Original</Label>
                  <div className="relative">
                    <Input
                      className="select-none"
                      disabled
                      value={data.original_link}
                    />
                    <Button className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <FaCopy />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>Link Encurtado</Label>
                  <div className="relative">
                    <Input
                      className="select-none"
                      disabled
                      value={data.short_link}
                    />
                    <Button className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <FaCopy />
                    </Button>
                  </div>
                </div>

                <div>
                  <Label>Observação</Label>
                  <Input value={data.observation} disabled />
                </div>

                <div className="flex space-x-2">
                  <div>
                    <Label>Quantidade de Cliques</Label>
                    <Input value={data.clicks} disabled />
                  </div>
                  <div>
                    <Label>Status</Label>
                    <Input value={data.status ? "Ativo" : "Inativo"} disabled />
                  </div>
                </div>
              </div>

              <div className="flex justify-between">
                <Button variant={"secondary"}>Alterar o Status</Button>
                <Button>Excluir URL</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      );
    },
  },
];
