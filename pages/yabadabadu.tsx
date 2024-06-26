import React from 'react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  hasImages?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              className="border-b transition-colors data-[state=selected]:bg-muted"
              key={headerGroup.id}
            >
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </TableHead>
              ))}
            </tr>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && "selected"}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export type TProduct = {
  collection: string;
  category: string;
  name: string;
};

export default () => {
  const TProducts: TProduct[] = [
    {
      collection: "728ed52f",
      category: "",
      name: "m@example.com",
    },
    {
      collection: "489e1d42",
      category: "125",
      name: "example@gmail.com",
    },
  ];

  const columns: ColumnDef<TProduct>[] = [
    {
      accessorKey: 'collection',
      header: 'Collection',
      cell: info => info.getValue()
    },
    {
      accessorKey: 'category',
      header: 'Category',
      cell: info => info.getValue()
    },
    {
      accessorKey: 'name',
      header: 'Name',
      cell: info => info.getValue()
    }
  ];

  return (
    <div className="bg-zinc-950 bg-opacity-20 w-full h-screen flex flex-col items-center pt-12">
      <div className="w-4/5 bg-zinc-950 rounded-md text-white">
        <DataTable columns={columns} data={TProducts} />
      </div>
    </div>
  );
};
