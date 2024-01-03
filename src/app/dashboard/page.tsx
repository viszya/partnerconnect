import { getServerAuthSession } from "@/server/auth";
import { Icons } from "@/app/_components/icons"
import { redirect } from "next/navigation"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/app/_components/ui/table"
import { AvatarImage, AvatarFallback, Avatar } from "@/app/_components/ui/avatar"
import { Badge } from "@/app/_components/ui/badge"
import { Button } from "@/app/_components/ui/button"
import TaskPage from "@/app/tasks/page";

const data = {
	val: 23,
}

export default async function Dashboard() {
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
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Name</TableHead>
						<TableHead>Avatar</TableHead>
						<TableHead>Progress</TableHead>
						<TableHead>Industry</TableHead>
						<TableHead>Partner</TableHead>
						<TableHead>Tags</TableHead>
						<TableHead>Contact</TableHead>
						<TableHead>Social Media</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					<TableRow>
						<TableCell className="font-medium">Acme Inc</TableCell>
						<TableCell>
							<Avatar className="">
								<AvatarImage alt="Acme Inc" src="/placeholder-avatar.jpg" />
								<AvatarFallback>AI</AvatarFallback>
							</Avatar>
						</TableCell>
						<TableCell>
						 {/* https://nikitahl.github.io/svg-circle-progress-generator/ */}
							<div className="relative">
								<svg  width="40" height="40" viewBox="0 0 160 160" style={{ "transform": "rotate(-90deg)"}}>
									<circle r="70" cx="80" cy="80" fill="transparent" stroke="#e0e0e0" stroke-width="12px"></circle>
									<circle r="70" cx="80" cy="80" fill="transparent" stroke="#60e6a8" stroke-linecap="round" stroke-width="12px" stroke-dasharray="439.6px" stroke-dashoffset="109.9px"></circle>
								</svg>

							
								
								<span className="absolute top-[27%] left-[20%]">{data.val}</span>
							</div>

							{/* /<div class="gauge_circle__N47Fa gauge_animate__yiaIw" data-geist-progress-circle="" data-version="v1" style="--circle-size: 100px; --circumference: 282.7433388230814; --percent-to-px: 2.827433388230814px; --gap-percent: 6; --offset-factor: 0;"><svg fill="none" height="32" stroke-width="2" viewBox="0 0 100 100" width="32"><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="gauge_arcSecondary__s11_g" stroke="var(--ds-gray-alpha-400)" style="opacity: 1; --stroke-percent: 8;"></circle><circle cx="50" cy="50" r="45" stroke-width="10" stroke-dashoffset="0" stroke-linecap="round" stroke-linejoin="round" class="gauge_arc__UGu7u" data-geist-progress-circle-fg="" stroke="var(--ds-green-700)" style="opacity: 1; --stroke-percent: 80;"></circle></svg><div class="gauge_content__6tLsK"><p class="text_wrapper__i87JK" data-version="v1" style="--text-color: inherit; --text-size: 0.6875rem; --text-weight: 500;">80</p></div></div> */}
						</TableCell>
						<TableCell>Technology</TableCell>
						<TableCell>
							<CheckIcon className="h-5 w-5 text-green-500" />
						</TableCell>
						<TableCell>
							<Badge className="mr-2">Tech</Badge>
							<Badge className="mr-2">Innovation</Badge>
							<Badge>Partner</Badge>
						</TableCell>
						<TableCell>
							<Button>View</Button>
						</TableCell>
						<TableCell>
							<Button>View</Button>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Beta Corp</TableCell>
						<TableCell>
							<Avatar>
								<AvatarImage alt="Beta Corp" src="/placeholder-avatar.jpg" />
								<AvatarFallback>BC</AvatarFallback>
							</Avatar>
						</TableCell>
						<TableCell>
							<div />
						</TableCell>
						<TableCell>Finance</TableCell>
						<TableCell>
							<CheckIcon className="h-5 w-5 text-green-500" />
						</TableCell>
						<TableCell>
							<Badge className="mr-2">Finance</Badge>
							<Badge className="mr-2">Investment</Badge>
							<Badge>Partner</Badge>
						</TableCell>
						<TableCell>
							<Button>View</Button>
						</TableCell>
						<TableCell>
							<Button>View</Button>
						</TableCell>
					</TableRow>
					<TableRow>
						<TableCell className="font-medium">Gamma Industries</TableCell>
						<TableCell>
							<Avatar>
								<AvatarImage alt="Gamma Industries" src="/placeholder-avatar.jpg" />
								<AvatarFallback>GI</AvatarFallback>
							</Avatar>
						</TableCell>
						<TableCell>
							<div />
						</TableCell>
						<TableCell>Manufacturing</TableCell>
						<TableCell>
							<CheckIcon className="h-5 w-5 text-green-500" />
						</TableCell>
						<TableCell>
							<Badge className="mr-2">Manufacturing</Badge>
							<Badge className="mr-2">Production</Badge>
							<Badge>Partner</Badge>
						</TableCell>
						<TableCell>
							<Button>View</Button>
						</TableCell>
						<TableCell>
							<Button>View</Button>
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</div>
	);
}


function CheckIcon(props) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<polyline points="20 6 9 17 4 12" />
		</svg>
	)
}
