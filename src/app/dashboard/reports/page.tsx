import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/app/_components/ui/table"
import { Button } from "@/app/_components/ui/button"


export default function Reports() {
    return (
        <div className="flex flex-col px-8">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Reports</h2>
                <p className="text-muted-foreground">
                    View & Edit Your Recent Company Reports
                </p>
            </div>
            <div className="flex flex-col justify-center w-full max-w-4xl">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[100px]">Report</TableHead>
                            <TableHead>Company</TableHead>
                            <TableHead>Description</TableHead>
                            <TableHead>Preview</TableHead>
                            <TableHead className="text-right">Download</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell className="font-medium">RP001</TableCell>
                            <TableCell>Info Tech</TableCell>
                            <TableCell>Report for testing</TableCell>

                            <TableCell>
                                <Button>
                                    View
                                </Button>
                            </TableCell>
                            <TableCell className="text-right">
                                <Button>
                                    Download
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>

// import ExampleDoc from '......src/assets/files/exampleDoc.pdf'

// <a href={ExampleDoc} download="MyExampleDoc" target='_blank'>
//    <Button className={classes.navLink}>My Example Doc</Button>
// </a>
// <a href={require("../path/to/file.pdf")} download="myFile">Download file</a>
    );
}
