import { Table } from "~/components/ui/table";
import Link from "next/link";
import { TableBody, TableCell, TableHead, TableHeader, TableRow } from "~/components/ui/table";
import { db } from "~/server/db";

export default async function HomePage() {
  const articles = await db.query.posts.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Table>
        <TableHeader>       
          <TableRow>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {articles.map((article) => {
          return (
            <TableRow key={article.id}>
              <TableCell>
              <Link href={`/article/${article.id}`}>
                  <h2>{article.headline}</h2>
              </Link>
              {/* <p>{article.author}</p> */}
              </TableCell>
            </TableRow>
          );
        })}
        </TableBody>
      </Table>
    </main>
  );
}
