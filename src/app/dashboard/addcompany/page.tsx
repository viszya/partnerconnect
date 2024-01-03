import { Icons } from "@/app/_components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { Form1 } from "@/app/_components/company/form-1";
import { Form2 } from "@/app/_components/company/form-2";
import { Form3 } from "@/app/_components/company/form-3";
import { Form4 } from "@/app/_components/company/form-4";
import { InputData } from "@/app/_components/inputdata";

export default function AddCompany() {
    return (
        <div className="flex flex-col justify-center items-center p-4">
            <div className="mt-3 text-3xl tracking-tighter text-primary">
                Add a Company
            </div>
            <div className="flex flex-col justify-center w-full max-w-5xl">
                <Tabs defaultValue="profile" className="flex flex-col justify-center mt-5">
                    <TabsList className="flex flex-row gap-x-6 px-4 overflow-x-auto">
                        <TabsTrigger value="profile">Company Profile</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="contact">Contact Info</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="socialmedia">Social Media</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="teammembers">Team Members</TabsTrigger>
                        <Icons.chevronRight className="text-gray-300 h-5 w-5" />
                        <TabsTrigger value="data">Data</TabsTrigger>
                    </TabsList>
                    <div className="w-full">
                        <TabsContent value="profile">
                            <Form1 />
                        </TabsContent>
                        <TabsContent value="contact">
                            <Form2 />
                        </TabsContent>
                        <TabsContent value="socialmedia">
                            <Form3 />
                        </TabsContent>
                        <TabsContent value="teammembers">
                            <Form4 />
                        </TabsContent>
                        <TabsContent value="data">
                            <InputData />
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    );
}
