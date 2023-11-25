"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ApiList } from "@/components/ui/api-list";

import { columns, TypeColumn } from "./columns";

interface TypesClientProps {
  data: TypeColumn[];
}

export const TypesClient: React.FC<TypesClientProps> = ({
  data
}) => {
  const params = useParams();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading title={`Tipos (${data.length})`} description="Gestiona los tipos de tus productos." />
        <Button onClick={() => router.push(`/${params.storeId}/types/new`)}>
          <Plus className="mr-2 h-4 w-4" /> Agregar nuevo
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title="API" description="Llamadas API para tipos" />
      <Separator />
      <ApiList entityName="types" entityIdName="typeId" />
    </>
  );
};
