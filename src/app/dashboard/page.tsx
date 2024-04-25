import { getServerAuthSession } from "@/server/auth";
import { Icons } from "@/app/_components/icons"
import { redirect } from "next/navigation"
import TaskPage from "@/app/datatable/page";

const data = {
	val: 23,
}

export default function Dashboard() {
	// const session = await getServerAuthSession()
	// if (!session) {
	// 	redirect("/unauthorized")
	// }
	return (
		<div className="flex flex-col px-8">
			<div>
                <h2 className="text-3xl font-bold tracking-tight">Company Database</h2>
                <p className="text-muted-foreground">
                    View and filter the company database
                </p>
            </div>
			<TaskPage />
		</div>
	);
}
