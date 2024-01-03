import { Icons } from "@/app/_components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/_components/ui/tabs";
import { SettingsForm } from "@/app/_components/form";
import { InputData } from "@/app/_components/inputdata";

export default function Settings() {
    return (
        <div className="flex flex-col justify-center items-center p-4">
            <div className="mt-3 text-3xl tracking-tighter text-primary">
                Settings
            </div>
            <div className="flex flex-col justify-center  w-full max-w-5xl">
                <SettingsForm />
            </div>
        </div>
    );
}
